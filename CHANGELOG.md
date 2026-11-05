# Changelog

The site shows this history on its "What's new" page (source: `version.js`).

## 2.42.9 (2026-11-04): Skat early finish, late Kontra

- skat/index.html v1.17.10: sureRest(w)/autoRest(w) end play when the trick winner's cards beat every outstanding card (skipped while the Spitze card is out); #lateK button for a human defender until trick 2 starts (S.inPlay wrapper on playPhase), AI declarer answers Re; head glasses removed from Andy and Melli avatars.

## 2.42.8 (2026-11-04): Skat highscores, trick swing

- skat/index.html v1.17.9: P.stats gains top (10 best won declarer games), lists (last 30 finished lists), listsWon/listsPlayed, tot/ltw all-time per player; recordList() in listEnd (guarded by P.date); hsHtml() in openStats; 5 new ACH; own pile (seat 0) hidden, collectTrick(0) gathers then swings the trick down off-screen.

## 2.42.7 (2026-11-04): Skat game choice by expected value

- skat/index.html v1.17.8: aiDeclare0 ranks candidates by aiEV(v,sc)=v*(3p-2) with p=logistic(1.6*(sc-1.5)) instead of sc alone (hand and pickup); aiDeclareFor12 (coach) likewise. Fixes Kreuz Spitze chosen over a sure Grand (3 Buben + 6 Kreuz A/10).

## 2.42.6 (2026-11-03): Skat queue strip, plate totals, Ramsch coach

- skat/index.html v1.17.7: #qStrip renders P.qDone (crossed, current highlighted) + P.queue; P.scores in .ps .tot; coachLive has a g.ramsch branch (dodge / dump advice); landscape #toast top 12.5%.

## 2.42.5 (2026-11-03): Skat hand spread

- skat/index.html v1.17.6: landscape handSpan cap W*.86 → W*.72.

## 2.42.4 (2026-11-03): Skat buttons to the edges

- skat/index.html v1.17.5: landscape .rbtn/#title/#gameInfo offsets 7% → 1.5%; handSpan cap W*.7 → W*.86; pilePos(0) follows the left buttons.

## 2.42.3 (2026-11-03): Skat pile position, landscape mixer

- skat/index.html v1.17.4: pilePos(0) moved; #mixer.wide two-column layout beside the button in landscape, max-height with scroll.

## 2.42.2 (2026-11-02): Skat per-player trick piles

- skat/index.html v1.17.3: renderPile draws #pile/#pile1/#pile2 from S.tricks (one back per trick, stacked upward, dashed slot when empty); collectTrick flies to pilePos(w).

## 2.42.1 (2026-11-02): Skat hides points during play

- skat/index.html v1.17.2: pile counter and last-trick Augen only when phase is done; coach tips without numbers; renderPile after settle.

## 2.42.0 (2026-11-02): Skat v1.17.1

- skat/index.html v1.17.1: audio buses (OUTB/MASTER=sfx/VBUS/AMBBUS/music) with a quick mixer on the speaker button; soundscapes (SCAPE); photo upload with MediaPipe face detection + selfie segmentation (assets base64-embedded in skat/mp/a/*.js, served through a fetch shim); custom voice clips in IndexedDB (recording only when the page is not framed); themed card backs (CARDBACK); deal animation, emoji effects, stats/achievements, live coach, seeded daily deal; dialect mix bayrisch/badisch.

## 2.41.1 (2026-11-02): Skat list-length fix

- skat/index.html v1.15.4: P.gameNo derived from P.history.length+1 (it drifted on reloads/replays); listEnd also checked before dealing; ON_CLOSE hook so closing the list view after Liste beendet always continues.

## 2.41.0 (2026-11-02): Stepper Lab and Plane Pointer pages

- stepper-lab/index.html: single-file canvas sims (13 stepper projects) with share panel; deep links via #id.
- plane-pointer/index.html: design page with embedded STL geometry (three.js from jsdelivr), BOM, wiring SVG, firmware notes; PlanePointer_v1.zip download.
- apps.js: stepperlab and planepointer buttons. sw.js skips both folders.

## 2.40.3 (2026-11-02): Skat Spielverlauf hands

- skat/index.html v1.15.3: dealHtml() shared by Aktuelles Spiel and showTricks; Spielverlauf starts with all hands + Skat.

## 2.40.2 (2026-11-02): Skat per-game hand review

- skat/index.html v1.15.2: › button per Spielliste row opens openSheet('cur', index) with all hands + Skat from P.history[i].dealt; replay any listed deal.

## 2.40.1 (2026-11-02): Skat prompt layout and info sheet

- skat/index.html v1.15.1: body.asking hides #gameInfo and moves #bidUI below the toast; portrait toast/bubble wrap; dismissable() tap-outside close for overlays, sticky ✕ on rules; #bInfo opens openSheet(); S.prevDeal shows the last game's hands in Aktuelles Spiel.

## 2.40.0 (2026-11-02): Skat trick pile and real cards

- skat/index.html v1.15.0: #pile (your side's won cards + Augen, tap = last trick), realCards() renderer for the result skat and Aktuelles Spiel hands, "sofort gepasst" when passing at 18.

## 2.39.0 (2026-11-02): Skat Ramsch, Bock, list length

- skat/index.html v1.14.0: P.queue of upcoming bock/ramsch games, gameMode() per deal; playRamsch (Schieben with no jacks, aiRamsch, Jungfrau/Durchmarsch/skat-to-last-trick scoring), Grand Hand in Ramsch rounds (declarer leads), Bock ×2 with configurable triggers, listLen 1–12 with listEnd ceremony; house-rules panel with switches.

## 2.38.0 (2026-11-02): Skat sanity rules, bug reports, voice sliders

- skat/index.html v1.13.0: sane() filter before every AI move (no defender lead of a non-top trump A/10, no losing 10/A when last to play on an opponent trick, avoids patterns in P.learn); Leicht random rate 35% → 22%. 🐞 report from ⏩ and the result screen stores moveKey patterns and copies a text report. Per-player pitch/rate multipliers (iOS Safari exposes only a limited voice list to web pages).

## 2.37.0 (2026-11-02): Skat voice picker

- skat/index.html v1.12.0: per-player voice select (look.voiceName) from speechSynthesis.getVoices() German voices, with test button; falls back to the automatic best voice.

## 2.36.0 (2026-11-02): Skat settings link

- skat/index.html v1.11.0: settings + names exported as base64 JSON in `#s=` on the hub URL; imported and saved on load, then the hash is cleared. Asks for persistent storage.

## 2.35.0 (2026-11-02): Skat dialects

- skat/index.html v1.10.0: cfg.dialect (hoch/badisch/schwaebisch/koelsch/bayrisch) for answers, quips, Kontra and Re; fuller card sound (swish, slap, body, knock); navigator.audioSession.type = "playback" so Web Audio ignores the silent switch.

## 2.34.1 (2026-11-02): Skat buttons visible

- skat/index.html v1.9.1: round buttons above the card layer (z-index 80); landscape hand span leaves room for the side button columns and the safe-area inset.

## 2.34.0 (2026-11-02): Skat players and fonts

- skat/index.html v1.9.0: "Spieler anpassen" (names, skin/hair/shirt swatches, beard/glasses/freckles toggles, male/female voice) via SVG recoloring; "Schrift & Größe" with Google Fonts loaded on demand and a --uis size multiplier.

## 2.33.1 (2026-11-02): Skat version number

- skat/index.html: SKAT_VERSION 1.8.1 shown in the Skat menu title and rules; new "Was ist neu" panel with the game's release history.

## 2.33.0 (2026-11-02): Skat actions and theme sounds

- skat/index.html: state-driven play loop with snapshots for Zug zurücknehmen; ⏩ opens an action panel (Schenken for defenders / Aufgeben for the declarer before the first trick is done, Rest zu mir when every card left is a sure winner, Automatisch spielen, tempo). Synthesized theme sound effects in the ambience and on big tricks.

## 2.32.1 (2026-11-02): Skat Kontra and Re

- skat/index.html: optional Kontra & Re house rule (cfg.kontra, default on). Defenders may say Kontra before the first trick, the declarer may answer Re; ×2 / ×4 on the score, shown in the result and Spielliste.

## 2.32.0 (2026-11-02): Skat am Strand button

- New `skat/index.html`: the single-file Skat game (also published as a Claude artifact), hosted here so it's public and keeps its own score list in localStorage. apps.js: added Skat am Strand (`skat/`, emoji icon) before Claude. sw.js: `/skat/` is left to the network like `/checkup/`, so the game never replaces the hub's saved copy.

## 2.31.0 (2026-11-01): Skyhawk School button

- apps.js: added Skyhawk School (Jean-Jacques' Skyhawk School, the C172 sim at https://claude.ai/artifact/AZn6qTWHiQgFb2wbS4fYqD) to APPS, after NAV → KMYF. Emoji icon only. It's a private Claude artifact, so it needs a signed-in claude.ai session.

## 2.30.0 (2026-10-29): Lab Rodeo button

- apps.js: added Lab Rodeo (https://wolftronixsd.github.io/lab-rodeo/, repo `lab-rodeo`) to APPS, after Super Checkup. Emoji icon only.

## 2.29.0 (2026-10-28): Happy Hour in San Diego and Tempe

- data.js: new subs `sd-hh` and `tp-hh` ("Happy Hour", 🍻, labels "Deals"), placed before Party. Links checked 2026-10-28: sdhh.app, sandiegoreader.com/specials (today's happy hours), happyhopper.app/metro/san-diego and /metro/phoenix, happyhourmaps.com (city picker, no city URLs), findmecheapfood.com/deals/us/{san-diego-ca,tempe-az,phoenix-az}, tempetourism.com happy hour blog, visitphoenix.com. app.js: voice aliases "happy hour", "deals", "lunch specials".

## 2.28.1 (2026-10-20): Claude button opens the Claude app

- apps.js: optional `appLink` per app; Claude uses `claude://`. app.js: on iPhone/Android a tap goes to `appLink` first; if the page is still visible after 1.5 s, a toast offers the website (via x-safari when the hub runs from the home screen). claude.ai/new itself isn't a universal link, so the plain https link never opened the app.

## 2.28.0 (2026-10-20): Karaoke Wolf and Claude buttons

- apps.js: added Karaoke Wolf (https://wolftronixsd.github.io/karaoke-wolf/) and Claude (https://claude.ai/new) to APPS. Emoji icons only, since neither has a hosted icon image.

## 2.27.0 (2026-10-19): Wolf Ironman always synced

- Settings: sync code box (localStorage "ironSync"); the Ironman button opens `…#sync=CODE&auto=1`, which Ironman v1.2.0 joins without asking. iPhone gives Safari, the home-screen app and in-app browser sheets separate storage, so the code travels with the link.

## 2.26.1 (2026-10-19): Same-site apps go to Safari

- app.js: the standalone x-safari hand-off tested `origin !== location.origin`, which skipped every app on wolftronixsd.github.io (WRadio, GoldRabbit, Morse, NAV), so they opened in the hub's in-app browser sheet and died with it. Now anything outside the hub folder (HUB_BASE) goes to Safari; also checks display-mode standalone. Dropped the 2.24 re-add hint toast.

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
