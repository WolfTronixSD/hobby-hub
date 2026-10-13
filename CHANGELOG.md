# Changelog

The site shows this history on its "What's new" page (source: `version.js`).

## 2.12.0 (2026-10-13): Money Sites
- money hobby: new save-sites sub (labels Sites) with NerdWallet, WalletHub and similar; save-sites feeds in fetch_news.py; voice ALIASES for it

## 2.11.0 (2026-10-13): Sunrise, sunset and moon phase
- Open-Meteo daily sunrise/sunset (cache key now wx2:); moon phase computed locally from the mean synodic month; .wx-sky chips on forecast panels

## 2.10.1 (2026-10-13): Weather in °F and °C
- app.js degC/degFC helpers; home bar, forecast panel, feels-like and 5-day tiles show both units; phone CSS stacks °C under °F

## 2.10.0 (2026-10-12): Voice control
- Floating #micBtn uses the Web Speech API (SpeechRecognition / webkitSpeechRecognition, en-US) to match hobby and category names plus ALIASES and tab words; speaks the result with speechSynthesis; explains unsupported browsers and permission errors in #voicePanel
- podcastCard: the Apple button uses p.url when it is a podcasts.apple.com show page (2.9.2 had only changed the Website link)

## 2.9.2 (2026-10-12): Direct podcast show links for San Diego and Tempe
- Apple Podcasts search URLs in sandiego/tempe subs (news, MTB, hiking) replaced with /podcast/<slug>/id<N> show pages; search results listed old episodes first
- Renamed San Diego News Matters to San Diego News Now; KJZZ search -> KJZZ's Sun Up; Arizona Republic search -> The Gaggle; Loam Wolf (no podcast feed) -> GMBN Presents

## 2.9.1 (2026-10-12): More reliable news updates
- news.yml cron changed from every 3 hours to hourly; only 1 of about 4 expected scheduled runs had fired
- app.js re-fetches news.json every 15 minutes while visible and on returning to the page

## 2.9.0 (2026-10-12): Sports
- sports hobby (defaultTab: news) with subs sp-usa, sp-eu, sp-de

## 2.8.0 (2026-10-12): World News
- worldnews hobby (defaultTab: news) with subs wn-usa, wn-world, wn-eu, wn-de, wn-politics, wn-business, wn-tech, wn-science, wn-health, wn-sports
- A hobby can set `defaultTab`; picking it switches to that tab

## 2.7.1 (2026-10-12): Exact weather location
- 📍 button uses browser geolocation (city name via BigDataCloud reverse geocode), saved per device; IP lookup stays the default

## 2.7.0 (2026-10-12): Shortcuts to GoldRabbit and WRadio
- Top-of-page buttons linking to GoldRabbit (wolftronixsd.github.io/tickerdeck) and WRadio (wolftronixsd.github.io/Wradio)

## 2.6.0 (2026-10-12): Aviation events and Money Saver
- Flying: fly-events sub with dated events (San Diego focus) and event links
- Money Saver hobby with subs save-groceries, save-gas, save-travel, save-bills, save-shopping, save-budget

## 2.5.0 (2026-10-11): Hamfests and live comedy
- Ham Radio split into subs ham-main (former content, news key renamed from ham) and ham-events
- Subs can list `events` (date, end, place, url, or recur: "last-saturday"); past events are hidden automatically
- Comedy: com-live sub with club and tour links
- check_site validates events

## 2.4.0 (2026-10-11): Meditation, George Carlin and iPhone fixes
- Meditation hobby with subs med-guided, med-sadhguru, med-hicks, med-goldman, med-bowls, med-binaural
- George Carlin replaces Kill Tony in World Comedy YouTube picks
- Phones: open.spotify.com search links open the Spotify app via spotify:search:, falling back to the web
- apple-touch-icon.png at the site root with sizes and a cache-busting version

## 2.3.0 (2026-10-11): Comedy and Workout Music
- Comedy hobby with subs com-de (German content) and com-row (rest of world)
- Fitness: Workout Music sub (fit-music) with Spotify playlists and YouTube mixes; labels can set icon and heading
- Hobby grid picks its desktop column count to keep rows even

## 2.2.0 (2026-10-11): Live weather
- Home-screen weather bar using IP-based location (geojs.io, ipapi.co fallback) and Open-Meteo, cached for offline
- Weather subs for San Diego (sd-wx) and Tempe (tp-wx) with live conditions, 5-day forecast and guides
- Sub-category rows pick 4, 5 or 3 columns to avoid a lonely last row

## 2.1.0 (2026-10-11): Wolfie's Hobby Hub and Fitness
- Renamed to Wolfie's Hobby Hub with a wolf logo (logo.svg), new app icons and link preview image
- Fitness hobby with subs: 24 Hour Fitness, Running SD, Weight Lifting, Plans & Apps (with news feeds)
- Hobby menu: 8 per row on desktop, 4 on tablets, 3 on phones

## 2.0.0 (2026-10-11): Production ready
- Compact hobby menu (3 per row on phones, 5 on desktop), tagline moved to tooltip
- Offline support via service worker (sw.js), offline banner, stale-news warning
- App icons, Open Graph / Twitter link previews (og-image.png)
- Non-blocking web font, compact news.json (20 items per topic)
- scripts/check_site.mjs and the Check site workflow validate data, URLs, feeds and version numbers
- News workflow rebases and retries before pushing

## 1.9.0 (2026-10-11): Share with friends
- New Share button: text, WhatsApp, email, copy link

## 1.8.0 (2026-10-11): Tempe, Flying and Snorkeling
- New Tempe, AZ button with the same categories as San Diego
- New Flying button: KMYF, Weather, ATIS KMYF
- New San Diego Snorkeling button with the Scripps Pier underwater cam

## 1.7.0 (2026-10-11): San Diego
- New San Diego button with Today, This Week, Mountain Biking, Hiking, Breweries, Party, Fun and News

## 1.6.0 (2026-10-11): Traveling
- New Traveling hobby with sub-categories Road Trips USA, Europe, Asia and Camping

## 1.5.0 (2026-10-11): 3D Printing and Bambu Lab
- New 3D Printing hobby and Bambu Lab section with guides, YouTube and news

## 1.4.0 (2026-10-11): Food and Longevity Hacks
- New Food and Longevity Hacks hobbies with podcasts, YouTube and news
- Hobby buttons in a 3×3 grid on big screens

## 1.3.1 (2026-10-11): Always load the newest version
- Fixed browsers showing an old cached copy after an update

## 1.3.0 (2026-10-11): Computers, AI and DIY Drones
- New Computers, AI and DIY Drones hobbies with podcasts, YouTube and news
- Hobby buttons in a 4-column grid on big screens

## 1.2.0 (2026-10-11): Version history
- Version number shown in the header
- New "What's new" page with the full history

## 1.1.0 (2026-10-11): Arduino and Electronic Gardening
- New Arduino and Electronic Gardening hobbies with podcasts, YouTube and news
- Hobby buttons in a 2×2 grid on phones

## 1.0.0 (2026-10-11): First release
- Ham Radio and ESP32 hobbies, top 10 podcasts and YouTube channels
- Live news headlines refreshed every 3 hours
- Big car-friendly buttons, dark and light mode
