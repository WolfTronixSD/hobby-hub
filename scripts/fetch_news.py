"""Fetch RSS/Atom feeds for each hobby and write news.json for the site.

Runs on a schedule in GitHub Actions. Standard library only.
"""
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from pathlib import Path

FEEDS = {
    "ham": [
        ("ARRL", "https://www.arrl.org/arrl.rss"),
        ("Southgate ARC", "https://www.southgatearc.org/feed/"),
        ("Hackaday", "https://hackaday.com/category/radio-hacks/feed/"),
        ("RTL-SDR Blog", "https://www.rtl-sdr.com/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22amateur+radio%22+OR+%22ham+radio%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "esp32": [
        ("Hackaday", "https://hackaday.com/tag/esp32/feed/"),
        ("CNX Software", "https://www.cnx-software.com/tag/esp32/feed/"),
        ("Random Nerd Tutorials", "https://randomnerdtutorials.com/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=ESP32&hl=en-US&gl=US&ceid=US:en"),
    ],
    "arduino": [
        ("Arduino Blog", "https://blog.arduino.cc/feed/"),
        ("Hackaday", "https://hackaday.com/category/arduino-hacks/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=Arduino&hl=en-US&gl=US&ceid=US:en"),
    ],
    "garden": [
        ("Hackaday", "https://hackaday.com/tag/garden/feed/"),
        ("Hackaday", "https://hackaday.com/tag/hydroponics/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22smart+garden%22+OR+%22smart+irrigation%22+OR+hydroponics&hl=en-US&gl=US&ceid=US:en"),
    ],
    "computers": [
        ("Ars Technica", "https://feeds.arstechnica.com/arstechnica/gadgets"),
        ("Tom's Hardware", "https://www.tomshardware.com/feeds/all"),
        ("Google News", "https://news.google.com/rss/search?q=%22PC+hardware%22+OR+CPU+OR+GPU+OR+Linux&hl=en-US&gl=US&ceid=US:en"),
    ],
    "ai": [
        ("The Verge", "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml"),
        ("TechCrunch", "https://techcrunch.com/category/artificial-intelligence/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22artificial+intelligence%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "drones": [
        ("Oscar Liang", "https://oscarliang.com/feed/"),
        ("DroneDJ", "https://dronedj.com/feed/"),
        ("Hackaday", "https://hackaday.com/category/drone-hacks/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22FPV+drone%22+OR+%22DIY+drone%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "food": [
        ("Serious Eats", "https://www.seriouseats.com/feeds/all"),
        ("Eater", "https://www.eater.com/rss/index.xml"),
        ("Google News", "https://news.google.com/rss/search?q=recipes+OR+%22food+science%22+OR+cooking&hl=en-US&gl=US&ceid=US:en"),
    ],
    "longevity": [
        ("Fight Aging!", "https://www.fightaging.org/feed/"),
        ("Lifespan.io", "https://www.lifespan.io/feed/"),
        ("ScienceDaily", "https://www.sciencedaily.com/rss/health_medicine/healthy_aging.xml"),
        ("Google News", "https://news.google.com/rss/search?q=longevity+OR+healthspan+OR+%22aging+research%22&hl=en-US&gl=US&ceid=US:en"),
    ],
}
PER_FEED = 8
PER_TOPIC = 24
ATOM = "{http://www.w3.org/2005/Atom}"


def parse_date(text):
    if not text:
        return None
    text = text.strip()
    try:
        d = parsedate_to_datetime(text)
    except (TypeError, ValueError):
        try:
            d = datetime.fromisoformat(text.replace("Z", "+00:00"))
        except ValueError:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=timezone.utc)
    return d.astimezone(timezone.utc)


def clean(text):
    return re.sub(r"\s+", " ", unescape(re.sub(r"<[^>]+>", "", text or ""))).strip()


def fetch(source, url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (HobbyHub news bot)"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        root = ET.fromstring(resp.read())
    items = []
    for it in root.iter("item"):
        items.append((it.findtext("title"), it.findtext("link"), it.findtext("pubDate")))
    for it in root.iter(ATOM + "entry"):
        link = it.find(ATOM + "link")
        items.append((it.findtext(ATOM + "title"), link.get("href") if link is not None else None,
                      it.findtext(ATOM + "updated") or it.findtext(ATOM + "published")))
    out = []
    for title, link, date in items[:PER_FEED]:
        title, link = clean(title), (link or "").strip()
        if not title or not link.startswith("http"):
            continue
        d = parse_date(date)
        name = source
        # Google News titles end with " - Publisher"
        if source == "Google News" and " - " in title:
            title, name = title.rsplit(" - ", 1)
        out.append({"title": title, "link": link, "source": name, "date": d.isoformat() if d else None})
    return out


def main():
    out_path = Path(__file__).resolve().parent.parent / "news.json"
    previous = {}
    if out_path.exists():
        previous = json.loads(out_path.read_text()).get("topics", {})
    topics = {}
    for topic, feeds in FEEDS.items():
        items = []
        for source, url in feeds:
            try:
                items += fetch(source, url)
            except Exception as exc:  # one bad feed must not break the rest
                print(f"WARN {topic}/{source}: {exc}")
        seen, unique = set(), []
        for it in sorted(items, key=lambda x: x["date"] or "", reverse=True):
            key = it["title"].lower()[:80]
            if key not in seen:
                seen.add(key)
                unique.append(it)
        topics[topic] = unique[:PER_TOPIC] or previous.get(topic, [])
        print(f"{topic}: {len(topics[topic])} items")
    data = {"updated": datetime.now(timezone.utc).isoformat(), "topics": topics}
    out_path.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")


if __name__ == "__main__":
    main()
