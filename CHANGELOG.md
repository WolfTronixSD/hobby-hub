# Changelog

The site shows this history on its "What's new" page (source: `version.js`).

## 2.26.0 (2026-10-19): Water visibility

- No free source publishes underwater visibility as a number (pierviz has fixed piling distances only), so: 🤿 link to https://coollab.ucsd.edu/pierviz/ beside 📍 (hidden when no sea data, e.g. Tempe) and as a tile on coastal weather panels. Marine call now also gets `wave_height` (length_unit=imperial, cache key sst2) shown as a clarity clue.

## 2.25.0 (2026-10-19): Water temperature and visibility

- app.js: `visibility` added to the Open-Meteo current block (cache key wx3), shown in statute miles ("10+ mi" when wide open). Water temp from the Open-Meteo Marine API (`sea_surface_temperature`), one multi-point call stepping up to 0.45° west so inland spots use the nearest coast; cached 1 h (key sst1); hidden when no sea point (Tempe).

## 2.24.0 (2026-10-19): Settings, and apps in real Safari tabs

- index.html/app.js: ⚙️ settings sheet (reuses share-panel styles); 🎤 hidden unless localStorage "voice" = "1".
- manifest display "browser" and no apple-mobile-web-app-capable, so the home-screen icon opens the hub in Safari and app links (target="hub-<id>") become real tabs. Full-screen installs get a hint (max 3 times) and instructions in Settings.

## 2.23.0 (2026-10-18): Apps keep running when the hub closes

- app.js: when the hub runs standalone on iPhone (navigator.standalone), external app buttons open via the `x-safari-https://` scheme so they live in Safari, not in the hub's in-app browser sheet that iOS closes with the hub. Fallback toast after 1.5 s offers the normal link.

## 2.22.0 (2026-10-18): All my apps, side by side

- apps.js: new APPS list (id, name, sub, color, emoji, url, optional img) rendered into #appNav by app.js; added Dit Dah Dojo, NAV → KMYF and SeasonHouse.
- Every app link uses target="hub-<id>" so each app gets its own tab/window and they run in parallel; Super Checkup no longer replaces the hub.
- ✏️ Edit / long press: jiggle mode with ✕ to hide a button (localStorage "hiddenApps"), Undo toast, and restore chips for hidden apps.

## 2.21.0 (2026-10-18): Release times

- What's new now shows the time of each release (24-hour, your time zone) next to the date. The first few versions show the date only.

## 2.20.0 (2026-10-17): Quiet news reader
- app.js: headline taps open #readerBackdrop with article text from the Jina Reader (r.jina.ai) rendered by mdToHtml (images and link targets dropped); RSS teaser plus Open site fallback when it fails; 🛡️ toggle (localStorage "quiet", default on)
- fetch_news.py: items carry an optional summary (RSS description / Atom summary, max 300 chars, not for Google News)

## 2.19.0 (2026-10-17): Super Checkup 2
- checkup/: Sloan letter chart + tumbling E with SpeechRecognition answers and spoken cues; iPhone ppi table for auto calibration, upright-card manual calibration shared by eye chart and near card
- checkup/: denser grid-packed dot plates (HSL palettes, blue-yellow and two-digit plates), feColorMatrix colorblind simulation, D-15 cap test
- checkup/: whisper test accepts first letters, any case, Levenshtein typos; iOS silent-switch audio unlock
- checkup/: AirPods check (L/R, phase trick, log sweep, loudness-match curve), Eye Toy Box station, BP cuff gag, mic "Aaah" meter, badges

## 2.18.0 (2026-10-17): Super Checkup
- new checkup/ page (single self-contained index.html): vitals, tumbling-E acuity with card calibration, near card, pseudo-Ishihara plates, peripheral flashes + Amsler, beep/whisper/mosquito hearing, reaction time, eye gym, certificate
- index.html: fourth app button to checkup/; apps grid 4 columns (2x2 on phones)
- sw.js: skips /checkup/ so it never overwrites the hub's offline copy

## 2.17.0 (2026-10-15): Wolf Ironman shortcut
- index.html: third app button to Wolf Ironman (https://darling-kheer-93b7f4.netlify.app/); apps grid 3 columns, on phones the third button spans the row

## 2.16.0 (2026-10-13): Louise Hay
- meditation: new med-hay sub (Guides, YouTube, news); feed in fetch_news.py; voice ALIASES

## 2.15.0 (2026-10-13): RF HW Design and Retirement
- new hobby rf (flat) and retire (subs ret-early, ret-fire, ret-ss, ret-invest, ret-where); feeds in fetch_news.py; voice ALIASES

## 2.14.0 (2026-10-13): Tax Savings
- money hobby: new save-tax sub (podcasts, YouTube, tax sites as newsSources); save-tax feeds in fetch_news.py; voice ALIASES

## 2.13.0 (2026-10-13): Local time and UTC
- .clock-row with LOCAL and UTC tiles above the weather bar; tickClocks() in app.js updates every second

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
