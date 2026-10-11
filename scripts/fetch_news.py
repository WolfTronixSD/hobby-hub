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
    "ham-main": [
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
    "printing": [
        ("3DPrint.com", "https://3dprint.com/feed/"),
        ("Fabbaloo", "https://www.fabbaloo.com/feed"),
        ("Hackaday", "https://hackaday.com/category/3d-printer-hacks/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%223D+printing%22+OR+%223D+printer%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "bambu": [
        ("Hackaday", "https://hackaday.com/tag/bambu-lab/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22Bambu+Lab%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "roadtrips": [
        ("National Parks Traveler", "https://www.nationalparkstraveler.org/rss.xml"),
        ("Google News", "https://news.google.com/rss/search?q=%22road+trip%22+OR+%22national+park%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "europe": [
        ("Euronews", "https://www.euronews.com/rss?level=vertical&name=travel"),
        ("Google News", "https://news.google.com/rss/search?q=Europe+travel&hl=en-US&gl=US&ceid=US:en"),
    ],
    "asia": [
        ("Tokyo Cheapo", "https://tokyocheapo.com/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=Asia+travel+OR+Japan+travel&hl=en-US&gl=US&ceid=US:en"),
    ],
    "camping": [
        ("Google News", "https://news.google.com/rss/search?q=camping+OR+campground+OR+backpacking&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-today": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+events+today&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-week": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+events+this+week+OR+weekend&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-mtb": [
        ("Pinkbike", "https://www.pinkbike.com/pinkbike_xml_feed.php"),
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+mountain+bike+OR+trail&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-hike": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+hiking+OR+trail+OR+hikers&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-beer": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+brewery+OR+%22craft+beer%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-party": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+nightlife+OR+concert+OR+club&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-fun": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+%22things+to+do%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-news": [
        ("Times of San Diego", "https://timesofsandiego.com/feed/"),
        ("KPBS", "https://www.kpbs.org/news.rss"),
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-snorkel": [
        ("Google News", "https://news.google.com/rss/search?q=La+Jolla+snorkel+OR+%22beach+closure%22+OR+%22water+quality%22+San+Diego&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-today": [
        ("Google News", "https://news.google.com/rss/search?q=Tempe+events+today&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-week": [
        ("Google News", "https://news.google.com/rss/search?q=Tempe+OR+Phoenix+events+this+weekend&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-mtb": [
        ("Pinkbike", "https://www.pinkbike.com/pinkbike_xml_feed.php"),
        ("Google News", "https://news.google.com/rss/search?q=Arizona+mountain+bike+Phoenix+trail&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-hike": [
        ("Google News", "https://news.google.com/rss/search?q=Phoenix+hiking+OR+hiker+OR+trail&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-beer": [
        ("Google News", "https://news.google.com/rss/search?q=Tempe+OR+Phoenix+brewery+OR+%22craft+beer%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-party": [
        ("Google News", "https://news.google.com/rss/search?q=Tempe+OR+Phoenix+nightlife+OR+concert&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-fun": [
        ("Google News", "https://news.google.com/rss/search?q=Tempe+%22things+to+do%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-news": [
        ("KJZZ", "https://kjzz.org/rss.xml"),
        ("Google News", "https://news.google.com/rss/search?q=Tempe+Arizona&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fly-kmyf": [
        ("AVweb", "https://www.avweb.com/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22Montgomery-Gibbs%22+OR+%22Montgomery+Field%22+San+Diego&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fly-wx": [
        ("Google News", "https://news.google.com/rss/search?q=San+Diego+weather+forecast&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fly-atis": [
        ("Google News", "https://news.google.com/rss/search?q=KMYF+OR+%22Montgomery+Field%22+airport&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fit-24h": [
        ("Google News", "https://news.google.com/rss/search?q=%2224+Hour+Fitness%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fit-run": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+running+OR+marathon+OR+%22half+marathon%22&hl=en-US&gl=US&ceid=US:en"),
        ("Runner's World", "https://www.runnersworld.com/rss/all.xml/"),
    ],
    "fit-lift": [
        ("BarBend", "https://barbend.com/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=weightlifting+OR+powerlifting+OR+%22strength+training%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fit-plans": [
        ("Google News", "https://news.google.com/rss/search?q=%22workout+plan%22+OR+%22fitness+app%22+OR+%22strength+training%22+study&hl=en-US&gl=US&ceid=US:en"),
    ],
    "sd-wx": [
        ("Google News", "https://news.google.com/rss/search?q=%22San+Diego%22+weather+OR+forecast+OR+rain+OR+heat&hl=en-US&gl=US&ceid=US:en"),
    ],
    "tp-wx": [
        ("Google News", "https://news.google.com/rss/search?q=Phoenix+OR+Tempe+weather+OR+monsoon+OR+heat&hl=en-US&gl=US&ceid=US:en"),
    ],
    "fit-music": [
        ("Google News", "https://news.google.com/rss/search?q=%22workout+playlist%22+OR+%22gym+music%22+OR+%22running+playlist%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "com-de": [
        ("Der Postillon", "https://www.der-postillon.com/feeds/posts/default"),
        ("Google News", "https://news.google.com/rss/search?q=Comedy+OR+Komiker+OR+Kabarett&hl=de&gl=DE&ceid=DE:de"),
    ],
    "com-row": [
        ("The Onion", "https://theonion.com/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=%22stand-up%22+comedian+OR+%22comedy+special%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "med-guided": [
        ("Mindful", "https://www.mindful.org/feed/"),
        ("Google News", "https://news.google.com/rss/search?q=meditation+OR+mindfulness+study&hl=en-US&gl=US&ceid=US:en"),
    ],
    "med-sadhguru": [
        ("Google News", "https://news.google.com/rss/search?q=Sadhguru&hl=en-US&gl=US&ceid=US:en"),
    ],
    "med-hicks": [
        ("Google News", "https://news.google.com/rss/search?q=%22Abraham+Hicks%22+OR+%22Esther+Hicks%22+OR+%22law+of+attraction%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "med-goldman": [
        ("Google News", "https://news.google.com/rss/search?q=%22sound+healing%22+OR+%22Jonathan+Goldman%22+sound&hl=en-US&gl=US&ceid=US:en"),
    ],
    "med-bowls": [
        ("Google News", "https://news.google.com/rss/search?q=%22sound+bath%22+OR+%22singing+bowls%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "med-binaural": [
        ("Google News", "https://news.google.com/rss/search?q=%22binaural+beats%22+OR+%22brainwave+entrainment%22&hl=en-US&gl=US&ceid=US:en"),
    ],
    "ham-events": [
        ("Google News", "https://news.google.com/rss/search?q=hamfest+OR+%22ham+radio+convention%22+OR+Hamvention+OR+%22swap+meet%22+amateur+radio&hl=en-US&gl=US&ceid=US:en"),
    ],
    "com-live": [
        ("Google News", "https://news.google.com/rss/search?q=comedy+show+%22San+Diego%22+OR+Tempe+OR+Phoenix&hl=en-US&gl=US&ceid=US:en"),
    ],
}
PER_FEED = 8
PER_TOPIC = 20
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
    out_path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n")


if __name__ == "__main__":
    main()
