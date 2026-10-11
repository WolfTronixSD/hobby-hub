# Changelog

The site shows this history on its "What's new" page (source: `version.js`).

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
