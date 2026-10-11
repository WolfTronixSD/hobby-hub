# hobby-hub
Wolf Hobby Hub


A car-friendly hobby dashboard with big buttons: top 10 podcasts, top 10 YouTube channels and live news for **Ham Radio**, **ESP32**, **Arduino**, **Electronic Gardening**, **Computers**, **AI**, **DIY Drones**, **Food**, **Longevity Hacks**, **3D Printing**, **Bambu Lab** and **Traveling** (Road Trips USA, Europe, Asia, Camping) and **San Diego** (Today, This Week, MTB, Hiking, Breweries, Party, Fun, News). A hobby can have `subs` for sub-categories.

- Static site served by GitHub Pages (no backend).
- `data.js` holds the podcast and YouTube lists. Add a hobby by adding another entry.
- `scripts/fetch_news.py` pulls RSS feeds into `news.json`; the `Update news` workflow runs it every 3 hours.
- Tip: open the site on your phone and choose "Add to Home Screen" to use it like an app.
- Version: `version.js` holds the version number and history shown on the site; `CHANGELOG.md` mirrors it.
