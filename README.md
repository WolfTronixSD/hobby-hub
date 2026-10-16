# hobby-hub
Wolfie's Hobby Hub


A car-friendly hobby dashboard with big buttons: top 10 podcasts, top 10 YouTube channels and live news for **Ham Radio** (Shows & News, Hamfests), **ESP32**, **Arduino**, **Electronic Gardening**, **Computers**, **AI**, **DIY Drones**, **Food**, **Longevity Hacks**, **3D Printing**, **Bambu Lab**, **Fitness** (24 Hour Fitness, Running SD, Weight Lifting, Workout Music, Plans & Apps), **Comedy** (German, World, Live Shows), **Money Saver** (Groceries, Gas & Car, Travel, Bills, Shopping, Budget & Invest), **Sports** (USA, Europe, Deutschland), **World News** (USA, World, EU, Deutschland, Politics, Business, Tech, Science, Health, Sports), **Meditation** (Guided, Sadhguru, Esther Hicks, Jonathan Goldman, Crystal Bowls, Binaural Beats) and **Traveling** (Road Trips USA, Europe, Asia, Camping) **San Diego** (Today, This Week, Weather, MTB, Hiking, Snorkeling, Breweries, Party, Fun, News), **Tempe, AZ** (same categories) and **Flying** (KMYF, Weather, ATIS, Events). A hobby can have `subs` for sub-categories.

- Static site served by GitHub Pages (no backend).
- `data.js` holds the podcast and YouTube lists. Add a hobby by adding another entry.
- `scripts/fetch_news.py` pulls RSS feeds into `news.json`; the `Update news` workflow runs it hourly (GitHub may skip some scheduled runs). Open pages re-check `news.json` every 15 minutes.
- Tip: open the site on your phone and choose "Add to Home Screen" to use it like an app.
- Live weather: Open-Meteo (no key) with approximate location from the IP address (geojs.io, then ipapi.co). A hobby sub with `weather: {name, lat, lon}` shows a live forecast panel.
- Events: a sub can have `events: [{name, date, end, place, desc, url}]` (or `recur: "last-saturday"`); past ones hide automatically.
- Voice control: the 🎤 button (Web Speech API) opens a section by name; add extra spoken words to `ALIASES` in `app.js`.
- Works offline (`sw.js`). Run `node scripts/check_site.mjs` before pushing; CI runs it too.
- Release: bump `APP_VERSION` + CHANGELOG in `version.js`, `CHANGELOG.md`, the `?v=` params in `index.html` and the `CACHE` name in `sw.js`.
- Version: `version.js` holds the version number and history shown on the site; `CHANGELOG.md` mirrors it.
- `morse/` is Dit Dah Dojo, a separate Morse code trainer app (groups of 5, QSOs, games, straight key) at `/hobby-hub/morse/`.
