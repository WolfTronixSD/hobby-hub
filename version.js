// Bump APP_VERSION and the ?v= numbers in index.html, and add an entry at the top of CHANGELOG for every release.
const APP_VERSION = "2.45.0";
const CHANGELOG = [
  {
    version: "2.45.0",
    date: "2026-11-07",
    at: "2026-11-08T00:40:00Z",
    title: "Skat: multiplayer that connects",
    changes: [
      "🃏 Skat am Strand v1.20.0: multiplayer now goes through a relay server instead of a direct phone-to-phone link, so it also works on the same Wi-Fi, behind routers and on mobile data. Please send a new invite link",
      "Fixed a freeze in the English version that could hang a friend's phone while it was looking for the table"
    ]
  },
  {
    version: "2.44.0",
    date: "2026-11-06",
    at: "2026-11-06T13:55:00Z",
    title: "Skat in English",
    changes: [
      "🃏 Skat am Strand v1.19.0: 🇬🇧 English language. Menu → \"Play in English\" (and back with \"Auf Deutsch spielen\")",
      "Menus, rules, coach, results and Andy's and Melli's chatter in English, with English voices",
      "New players whose phone is set to English, like invited friends, start in English automatically"
    ]
  },
  {
    version: "2.43.1",
    date: "2026-11-05",
    at: "2026-11-06T06:55:00Z",
    title: "Skat: multiplayer reconnects",
    changes: [
      "🃏 Skat am Strand v1.18.1: your table reopens with the same invite link after the app was in the background or reloaded",
      "Friends keep looking for the table for up to 2 minutes and reconnect on their own after a dropout",
      "Clearer messages when a friend can't find the table"
    ]
  },
  {
    version: "2.43.0",
    date: "2026-11-05",
    at: "2026-11-06T06:40:00Z",
    title: "Skat: play with friends",
    changes: [
      "🃏 Skat am Strand v1.18.0: 👥 multiplayer with an invite link. Menu → Mehrspieler → Freund einladen, then share the link",
      "Up to two friends take Andy's or Melli's seat and play on their own phone; empty seats are still played by the AI",
      "If a friend drops out, Andy or Melli take over again automatically"
    ]
  },
  {
    version: "2.42.11",
    date: "2026-11-05",
    at: "2026-11-05T16:20:00Z",
    title: "Skat: see the cards when someone claims the rest",
    changes: [
      "🃏 Skat am Strand v1.17.12: when Andy or Melli say \"Der Rest ist meins!\", their remaining cards are shown face up in the middle of the table for a moment"
    ]
  },
  {
    version: "2.42.10",
    date: "2026-11-04",
    at: "2026-11-05T07:45:00Z",
    title: "Skat: no more easy Durchmarsch",
    changes: [
      "🃏 Skat am Strand v1.17.11: in Ramsch, Andy and Melli now watch out: once someone has taken every trick so far, they grab a trick on purpose to stop the Durchmarsch"
    ]
  },
  {
    version: "2.42.9",
    date: "2026-11-04",
    at: "2026-11-05T07:20:00Z",
    title: "Skat: shorter games, later Kontra",
    changes: [
      "🃏 Skat am Strand v1.17.10: the game ends early as soon as one player is sure to take all remaining tricks",
      "💥 A red Kontra! button lets you say Kontra until the first trick is over",
      "🕶️ Andy and Melli no longer wear sunglasses on their hair"
    ]
  },
  {
    version: "2.42.8",
    date: "2026-11-04",
    at: "2026-11-05T06:45:00Z",
    title: "Skat: highscores, and your tricks swing to you",
    changes: [
      "🃏 Skat am Strand v1.17.9: 🏆 your 10 best games, best list, an all-time table (lists won and points for wolfi, Andy and Melli) and your last lists are kept, even after a new list",
      "5 new achievements: Riesenspiel, Tausender, Listensieger, Seriensieger and Listen-Profi",
      "Your own pile next to Andy is gone: when you win a trick, the cards swing down to you"
    ]
  },
  {
    version: "2.42.7",
    date: "2026-11-04",
    at: "2026-11-04T17:30:00Z",
    title: "Skat: Andy and Melli play Grand when it pays",
    changes: [
      "🃏 Skat am Strand v1.17.8: the players now pick the game that earns the most, not just the safest one, so a sure Grand is no longer played as a suit game",
      "The coach's Skat-drücken tip uses the same choice"
    ]
  },
  {
    version: "2.42.6",
    date: "2026-11-03",
    at: "2026-11-04T03:35:00Z",
    title: "Skat: Bock/Ramsch tracker and scores on the table",
    changes: [
      "🃏 Skat am Strand v1.17.7: a 🐐/🐷 strip on the right shows the Bock and Ramsch rounds, played ones crossed out",
      "Each player's total points now show under their name",
      "The coach's Ramsch tips are fixed: in Ramsch everyone plays alone"
    ]
  },
  {
    version: "2.42.5",
    date: "2026-11-03",
    at: "2026-11-03T20:15:00Z",
    title: "Skat: hand a bit tighter",
    changes: [
      "🃏 Skat am Strand v1.17.6: your cards are closer together again; the round buttons stay at the edges"
    ]
  },
  {
    version: "2.42.4",
    date: "2026-11-03",
    at: "2026-11-03T20:10:00Z",
    title: "Skat: more room for your cards",
    changes: [
      "🃏 Skat am Strand v1.17.5: the round buttons sit closer to the screen edges, so your hand spreads wider"
    ]
  },
  {
    version: "2.42.3",
    date: "2026-11-03",
    at: "2026-11-03T08:25:00Z",
    title: "Skat: your pile moved, mixer fits sideways",
    changes: [
      "🃏 Skat am Strand v1.17.4: your trick pile now sits further left and lower so it no longer looks like Andy's",
      "🔊 The sound mixer shows all sliders in landscape (two columns)"
    ]
  },
  {
    version: "2.42.2",
    date: "2026-11-02",
    at: "2026-11-03T07:22:00Z",
    title: "Skat: everyone's trick pile",
    changes: [
      "🃏 Skat am Strand v1.17.3: each player has their own trick pile that grows with every trick, so you can see at a glance who is still a Jungfrau"
    ]
  },
  {
    version: "2.42.1",
    date: "2026-11-02",
    at: "2026-11-03T07:15:00Z",
    title: "Skat: no points during the game",
    changes: [
      "🃏 Skat am Strand v1.17.2: the trick pile, last trick and coach tips no longer show Augen while you play; points appear at the end"
    ]
  },
  {
    version: "2.42.0",
    date: "2026-11-02",
    at: "2026-11-03T07:10:00Z",
    title: "Skat: photos, own voices, sound mixer and more",
    changes: [
      "🃏 Skat am Strand v1.17.1: 🔊 button opens a mixer for overall, music, background, card sounds and voices",
      "📷 Your own photos for Andy and Melli: the face is found and fitted, the background is removed (colorful, sticker or original style)",
      "🎙️ Record your own voices (works here in the Hobby Hub) or pick audio files, with fun effects",
      "🌊 9 background soundscapes, ukulele on the beach, harmonica in the West",
      "🦀 Funny card backs per theme, deal animation, emoji fireworks on big tricks, emoji reactions",
      "😎 Andy bids bold, 🧠 Melli plays smart; Bayrisch + Badisch dialect mix and warmer voices",
      "📊 Statistics and 17 achievements, 🧑‍🏫 live coach tips, 📅 daily challenge, bigger and nicer cards, real glasses"
    ]
  },
  {
    version: "2.41.1",
    date: "2026-11-02",
    at: "2026-11-03T03:50:00Z",
    title: "Skat: list ends on time",
    changes: [
      "🃏 Skat am Strand v1.15.4: the game number now matches the Spielliste, so a 12-game list really ends after game 12"
    ]
  },
  {
    version: "2.41.0",
    date: "2026-11-02",
    at: "2026-11-03T03:15:00Z",
    title: "Stepper Lab and Plane Pointer",
    changes: [
      "⚙️ New button: Stepper Lab, 13 interactive NEMA17 + ESP32 project simulations (plane pointer, sat rotator, sand table, split-flap and more)",
      "✈️ New button: Plane Pointer, the full design of a desk arrow that points at the nearest aircraft: 3D model, parts, wiring, firmware and a CAD download",
      "Both have a 🔗 Share button that copies a public link"
    ]
  },
  {
    version: "2.40.3",
    date: "2026-11-02",
    at: "2026-11-03T01:05:00Z",
    title: "Skat: Spielverlauf shows everyone's cards",
    changes: [
      "🃏 Skat am Strand v1.15.3: Spielverlauf on the result screen now shows all players' cards and the Skat, then the tricks"
    ]
  },
  {
    version: "2.40.2",
    date: "2026-11-02",
    at: "2026-11-03T01:00:00Z",
    title: "Skat: see everyone's cards for every game",
    changes: [
      "🃏 Skat am Strand v1.15.2: tap › next to any game in the Spielliste to see how all cards and the Skat were dealt",
      "Erneut spielen works for older games too"
    ]
  },
  {
    version: "2.40.1",
    date: "2026-11-02",
    at: "2026-11-03T00:50:00Z",
    title: "Skat: cleaner prompts, ⓘ opens the game sheet",
    changes: [
      "🃏 Skat am Strand v1.15.1: Kontra/Weiter no longer overlap the game info; long announcements wrap in portrait",
      "Rules and other panels close when you tap outside them (or the ✕)",
      "The ⓘ button opens Aktuelles Spiel / Spielliste / Coach and shows everyone's cards from the last game"
    ]
  },
  {
    version: "2.40.0",
    date: "2026-11-02",
    at: "2026-11-03T00:45:00Z",
    title: "Skat: trick pile and real card pictures",
    changes: [
      "🃏 Skat am Strand v1.15.0: your trick pile with an Augen counter (tap it to see the last trick)",
      "Real card pictures on the result screen and in Aktuelles Spiel, plus \"sofort gepasst\""
    ]
  },
  {
    version: "2.39.0",
    date: "2026-11-02",
    at: "2026-11-03T00:30:00Z",
    title: "Skat: Ramsch, Bock and list length",
    changes: [
      "🃏 Skat am Strand v1.14.0: new ⚙️ Hausregeln page with games per list (1–12, with a winner's ceremony)",
      "🐷 Ramsch after a passed hand, Schieberamsch, Jungfrau, Durchmarsch, Dauerramsch and Grand Hand in Ramsch rounds",
      "🐐 Bockrunden (games count double) with all the triggers, plus \"3 Bock, 3 Ramsch\""
    ]
  },
  {
    version: "2.38.0",
    date: "2026-11-02",
    at: "2026-11-03T00:00:00Z",
    title: "Skat: smarter players and bug reports",
    changes: [
      "🃏 Skat am Strand v1.13.0: Andy and Melli no longer throw away a trump ace or ten, or drop a ten on a trick the other side wins",
      "🐞 Fehler melden: tap a bad move and the players remember to avoid it; copy a report to send to Claude",
      "Pitch and speaking-speed sliders for each player's voice"
    ]
  },
  {
    version: "2.37.0",
    date: "2026-11-02",
    at: "2026-11-02T23:40:00Z",
    title: "Skat: pick each player's voice",
    changes: [
      "🃏 Skat am Strand v1.12.0: choose any German voice on your phone for Andy and Melli, including downloaded Enhanced and Premium voices, with a ▶ Test button"
    ]
  },
  {
    version: "2.36.0",
    date: "2026-11-02",
    at: "2026-11-02T22:00:00Z",
    title: "Skat settings travel with a link",
    changes: [
      "🃏 Skat am Strand v1.11.0: 🔗 Einstellungen mitnehmen makes a link that brings your theme, dialect, level, font, names and looks to any phone, browser or home-screen icon"
    ]
  },
  {
    version: "2.35.0",
    date: "2026-11-02",
    at: "2026-11-02T21:45:00Z",
    title: "Skat speaks dialect",
    changes: [
      "🃏 Skat am Strand v1.10.0: Andy and Melli can talk Badisch, Schwäbisch, Kölsch or Bayrisch",
      "Louder, fuller card sound, and the sounds now play even with the iPhone silent switch on"
    ]
  },
  {
    version: "2.34.1",
    date: "2026-11-02",
    at: "2026-11-02T21:20:00Z",
    title: "Skat buttons always visible",
    changes: [
      "🃏 Skat am Strand v1.9.1: the round buttons no longer hide under the cards on iPhones with a notch"
    ]
  },
  {
    version: "2.34.0",
    date: "2026-11-02",
    at: "2026-11-02T21:10:00Z",
    title: "Skat: your own players and fonts",
    changes: [
      "🃏 Skat am Strand v1.9.0: rename the players and change their skin, hair, shirt, beard, glasses and voice",
      "Pick a font (round, classic, funny, Western, space, Vegas or matching the theme) and text size S to XL"
    ]
  },
  {
    version: "2.33.1",
    date: "2026-11-02",
    at: "2026-11-02T20:45:00Z",
    title: "Skat version number",
    changes: [
      "🃏 Skat am Strand shows its version (v1.8.1) in its menu, with its own What's new list"
    ]
  },
  {
    version: "2.33.0",
    date: "2026-11-02",
    at: "2026-11-02T20:15:00Z",
    title: "Skat: Schenken, Zug zurück and funny sounds",
    changes: [
      "🃏 Skat am Strand: the ⏩ button now opens Schenken (or Aufgeben), Rest zu mir, Automatisch spielen and Zug zurücknehmen",
      "Funny theme sounds: horses, gunshots and squeaky wagon wheels in the Wild West, laser blasts and flybys in space, slot machines and coins in Vegas"
    ]
  },
  {
    version: "2.32.1",
    date: "2026-11-02",
    at: "2026-11-02T19:25:00Z",
    title: "Skat: Kontra and Re",
    changes: [
      "🃏 Skat am Strand now has Kontra and Re: Kontra doubles the result, Kontra plus Re quadruples it (switch it off in the Skat menu)"
    ]
  },
  {
    version: "2.32.0",
    date: "2026-11-02",
    at: "2026-11-02T18:50:00Z",
    title: "Skat am Strand button",
    changes: [
      "🃏 New Skat am Strand button: play Skat against Andy and Melli with official rules, Spielliste, Coach and three difficulty levels",
      "Themes: beach, Wild West, space and Las Vegas, with music, sound and German voices",
      "Sonderregeln Spitze and Sächsische Spitze can be switched on or off in its menu"
    ]
  },
  {
    version: "2.31.0",
    date: "2026-11-01",
    at: "2026-11-01T18:00:00Z",
    title: "Skyhawk School button",
    changes: [
      "🛩️ New Skyhawk School button: Jean-Jacques' C172 flight sim based at KMYF, with lessons, ATC radio practice, quizzes and a mock checkride",
      "Opens on claude.ai, so sign in to Claude to fly"
    ]
  },
  {
    version: "2.30.0",
    date: "2026-10-29",
    at: "2026-10-29T17:30:00Z",
    title: "Lab Rodeo button",
    changes: [
      "🤠 New Lab Rodeo button: cowboy flash cards and quiz for blood and urine lab markers, vitamins, hormones and supplements",
      "Includes hands-free auto-play, memory tricks and a US vs Europe comparison"
    ]
  },
  {
    version: "2.29.0",
    date: "2026-10-28",
    at: "2026-10-28T20:15:00Z",
    title: "Happy Hour in San Diego and Tempe",
    changes: [
      "🍻 New Happy Hour sub in San Diego and Tempe AZ: happy hour and lunch deal sites and apps",
      "San Diego: SDHH app, SD Reader today's happy hours, happyhopper, HappyHourMaps, FindMeCheapFood, Taco Tuesday guide",
      "Tempe: Tempe Tourism's 40+ happy hours, happyhopper Phoenix, FindMeCheapFood Tempe, AZ Happy Hour app, Visit Phoenix",
      "Say \"happy hour\" to the 🎤 to jump there"
    ]
  },
  {
    version: "2.28.1",
    date: "2026-10-20",
    at: "2026-10-20T07:05:00Z",
    title: "Claude button opens the Claude app",
    changes: [
      "✳️ On your phone the Claude button now opens the Claude app, where you stay logged in",
      "No Claude app installed? After a moment the hub offers the website instead"
    ]
  },
  {
    version: "2.28.0",
    date: "2026-10-20",
    at: "2026-10-20T06:45:00Z",
    title: "Karaoke Wolf and Claude buttons",
    changes: [
      "🎤 New Karaoke Wolf button: sing along to songs and get scored on your pitch",
      "✳️ New Claude button opens a fresh Claude.ai chat for a fast start"
    ]
  },
  {
    version: "2.27.0",
    date: "2026-10-19",
    at: "2026-10-20T00:30:00Z",
    title: "Wolf Ironman always synced",
    changes: [
      "⚙️ Settings has a Wolf Ironman sync box: paste your sync code once, and the 💪 button always opens your synced workouts",
      "Fixes workouts vanishing when Ironman was opened from the hub (iPhone can give it fresh, empty storage there)"
    ]
  },
  {
    version: "2.26.1",
    date: "2026-10-19",
    at: "2026-10-19T22:35:00Z",
    title: "WRadio keeps playing when the hub closes",
    changes: [
      "Fixed: with the hub on your home screen, WRadio, GoldRabbit, Dit Dah Dojo and NAV opened inside the hub (same website), so closing the hub stopped WRadio. They now open in real Safari like the other apps",
      "Removed the \"re-add the hub\" reminder; the full-screen hub icon works again"
    ]
  },
  {
    version: "2.26.0",
    date: "2026-10-19",
    at: "2026-10-19T22:40:00Z",
    title: "Water visibility",
    changes: [
      "New 🤿 Vis button next to the home weather opens the live Scripps Pier underwater cam, the best way to see how clear the water is (two pilings on the left ≈ 30 ft visibility)",
      "Wave height now shows next to the water temperature: small waves usually mean clearer water",
      "San Diego weather has a 🤿 Live cam tile with the waves and a calm / moderate / rough hint"
    ]
  },
  {
    version: "2.25.0",
    date: "2026-10-19",
    at: "2026-10-19T22:30:00Z",
    title: "Water temperature and visibility",
    changes: [
      "The home weather bar now shows the ocean water temperature 🌊 (°F and °C) and visibility 👁️ in miles",
      "San Diego weather shows them as big Water and Visibility tiles; Tempe shows visibility (no ocean there)",
      "Inland, like Escondido, the water temperature comes from the nearest coast"
    ]
  },
  {
    version: "2.24.0",
    date: "2026-10-19",
    at: "2026-10-19T14:20:00Z",
    title: "Settings, and apps in real Safari tabs",
    changes: [
      "New ⚙️ Settings. The 🎤 voice button is now off by default; turn it on there",
      "The home-screen icon now opens the hub in Safari, so every app opens in its own Safari tab and keeps running (WRadio no longer stops when you go back to the hub)",
      "Re-add the hub to your home screen with Open as Web App switched off; Settings explains how"
    ]
  },
  {
    version: "2.23.0",
    date: "2026-10-18",
    at: "2026-10-19T06:50:00Z",
    title: "Apps keep running when the hub closes",
    changes: [
      "With the hub on your home screen, app buttons now open in real Safari, so WRadio keeps playing after you close the hub",
      "If Safari doesn't open, a button lets you open the app inside the hub instead"
    ]
  },
  {
    version: "2.22.0",
    date: "2026-10-18",
    at: "2026-10-19T05:45:00Z",
    title: "All my apps, side by side",
    changes: [
      "My apps now has every project: GoldRabbit, WRadio, Wolf Ironman, Dit Dah Dojo (Morse), NAV → KMYF, Super Checkup and SeasonHouse",
      "Each app opens in its own tab, so WRadio keeps playing while Morse or another app is open. Tap a button again to jump back to it",
      "✏️ Edit (or a long press) makes the buttons jiggle: tap ✕ to remove one, Undo right after, or bring removed ones back any time",
      "New funny home screen icons for Wolf Ironman and WRadio"
    ]
  },
  {
    version: "2.21.0",
    date: "2026-10-18",
    at: "2026-10-18T21:23:39Z",
    title: "Release times",
    changes: [
      "What's new now shows the time of each release (24-hour, your time zone) next to the date. The first few versions show the date only"
    ]
  },
  {
    version: "2.20.0",
    date: "2026-10-17",
    at: "2026-10-17T21:26:28Z",
    title: "Quiet news reader",
    changes: [
      "Tap a headline and the story opens as plain text inside the hub: no ads, no popups, no autoplay videos or sound",
      "Big 🌐 Open site button when you want the full website, and a ✕ Close button to get back to the headlines",
      "Turn the quiet reader off or on with the big 🛡️ button at the top of any News tab"
    ]
  },
  {
    version: "2.19.0",
    date: "2026-10-17",
    at: "2026-10-17T07:28:04Z",
    title: "Super Checkup 2: iPhone and AirPods",
    changes: [
      "Eye chart: real letter chart plus tumbling E, voice answers, and the instructions read out loud",
      "iPhone calibration sizes itself automatically, or match a card held upright",
      "Color vision: richer dot plates, colorblind goggles, and a D-15 crayon sorting test",
      "Whisper test accepts just the first letter, any capitalization, and small typos",
      "AirPods check: left/right, a 20 Hz to 20 kHz sweep and your own frequency response curve",
      "New Eye Toy Box (astigmatism dial, contrast, blind spot, boss eye), a fake blood pressure cuff, Say Aaah, and 20 badges"
    ]
  },
  {
    version: "2.18.0",
    date: "2026-10-17",
    at: "2026-10-17T05:19:48Z",
    title: "Super Checkup",
    changes: [
      "New 🩺 Super Checkup button opens Dr. Kent's goofy doctor's office: eye chart, near vision, color plates, peripheral vision, hearing, reaction time and a printable certificate",
      "Eye Gym with Bates palming, figure eights, near-far focus and the 20-20-20 rule (for fun and comfort, keep your glasses!)"
    ]
  },
  {
    version: "2.17.0",
    date: "2026-10-15",
    at: "2026-10-15T18:41:49Z",
    title: "Wolf Ironman shortcut",
    changes: [
      "New big 💪 Wolf Ironman button next to GoldRabbit and WRadio opens your daily workout tracker"
    ]
  },
  {
    version: "2.16.0",
    date: "2026-10-13",
    at: "2026-10-13T14:25:56Z",
    title: "Louise Hay",
    changes: [
      "New 💖 Louise Hay button under Meditation: her site, Hay House podcast, books like You Can Heal Your Life, and the 2007 film",
      "Top 10 YouTube: morning, sleep, self-love and healing affirmations, guided meditations, mirror work, and German affirmations",
      "Voice control understands “Louise Hay” and “affirmations”"
    ]
  },
  {
    version: "2.15.0",
    date: "2026-10-13",
    at: "2026-10-13T14:09:57Z",
    title: "RF HW Design and Retirement",
    changes: [
      "New 📶 RF HW Design button: RF podcasts, top 10 YouTube (The Signal Path, W2AEW, Phil's Lab, Robert Feranec and more) and RF news",
      "New 🏖️ Retirement button with Early Retirement, FIRE, Social Security & Medicare, Retirement Investing and Where to Retire",
      "Calculators and sites like cFIREsim, FI Calc, Open Social Security, my Social Security and Medicare.gov",
      "Voice control understands “RF design”, “retirement”, “FIRE”, “early retirement” and “Social Security”"
    ]
  },
  {
    version: "2.14.0",
    date: "2026-10-13",
    at: "2026-10-13T13:59:21Z",
    title: "Tax Savings",
    changes: [
      "New 🧾 Tax Savings button under Money Saver: top 10 tax podcasts and top 10 YouTube picks",
      "Tax websites to bookmark (IRS, Free File, Where's My Refund, California FTB, Tax Foundation, Kiplinger and more) and tax news headlines",
      "Voice control understands “tax”, “taxes” and “IRS”"
    ]
  },
  {
    version: "2.13.0",
    date: "2026-10-13",
    at: "2026-10-13T04:22:24Z",
    title: "Local time and UTC",
    changes: [
      "Two big clocks at the top: your local time (with date and time zone) and UTC/Zulu time"
    ]
  },
  {
    version: "2.12.0",
    date: "2026-10-13",
    at: "2026-10-13T00:45:05Z",
    title: "Money Sites",
    changes: [
      "New 🧠 Money Sites button under Money Saver: NerdWallet, WalletHub, Bankrate, Credit Karma, Doctor of Credit, The Points Guy and more",
      "YouTube picks for savings rates, bank bonuses, credit scores and cash back cards, plus rate and deal headlines",
      "Voice control understands “NerdWallet”, “WalletHub” and “Money Sites”"
    ]
  },
  {
    version: "2.11.0",
    date: "2026-10-13",
    at: "2026-10-13T00:43:12Z",
    title: "Sunrise, sunset and moon phase",
    changes: [
      "The home weather bar shows today's sunrise, sunset and moon phase",
      "San Diego and Tempe weather pages show them as big tiles, with how much of the moon is lit"
    ]
  },
  {
    version: "2.10.1",
    date: "2026-10-13",
    at: "2026-10-13T00:37:13Z",
    title: "Weather in °F and °C",
    changes: [
      "Weather now shows Fahrenheit and Celsius together: on the home bar, the San Diego and Tempe forecast panels and the 5-day tiles"
    ]
  },
  {
    version: "2.10.0",
    date: "2026-10-12",
    at: "2026-10-12T18:33:40Z",
    title: "Voice control",
    changes: [
      "New big 🎤 button: tap it and say a section, like “Ham Radio”, “San Diego weather”, “Comedy YouTube” or “World News Germany”",
      "It reads back where it went, so you can keep your eyes on the road",
      "The 🎵 Apple button on San Diego and Tempe podcasts now opens the show itself, newest episodes first"
    ]
  },
  {
    version: "2.9.2",
    date: "2026-10-12",
    at: "2026-10-12T08:49:14Z",
    title: "San Diego and Tempe podcasts open the actual show",
    changes: [
      "San Diego and Tempe podcast buttons now open the show page in Apple Podcasts, newest episodes first, instead of a search full of old episodes",
      "KPBS San Diego News Now, KJZZ's Sun Up and The Gaggle replace outdated or vague news picks"
    ]
  },
  {
    version: "2.9.1",
    date: "2026-10-12",
    at: "2026-10-12T08:09:11Z",
    title: "More reliable news updates",
    changes: [
      "Headlines are now fetched every hour instead of every 3 hours, because GitHub was skipping most scheduled updates",
      "An open page checks for new headlines every 15 minutes and when you come back to it, no reload needed"
    ]
  },
  {
    version: "2.9.0",
    date: "2026-10-12",
    at: "2026-10-12T00:40:40Z",
    title: "Sports",
    changes: [
      "New Sports button that opens straight to the headlines",
      "USA: NFL, NBA, MLB, NHL, plus Padres, San Diego FC and Arizona teams",
      "Europe: Champions League, Premier League, Formula 1, cycling and tennis",
      "Deutschland: Bundesliga, DFB and Formel 1, in German (kicker, Sportschau)"
    ]
  },
  {
    version: "2.8.0",
    date: "2026-10-12",
    at: "2026-10-12T00:36:06Z",
    title: "World News",
    changes: [
      "New World News button that opens straight to the headlines",
      "Regions: USA, World, EU and Deutschland (German sources: tagesschau, SPIEGEL, ZEIT)",
      "Topics: Politics, Business, Tech, Science, Health and Sports",
      "Each section also lists top news podcasts and YouTube channels"
    ]
  },
  {
    version: "2.7.1",
    date: "2026-10-12",
    at: "2026-10-12T00:26:21Z",
    title: "Exact weather location",
    changes: [
      "New 📍 button next to the home weather: tap once to use your phone's GPS instead of the internet-connection guess (which can say Oceanside when you're in Escondido)",
      "The site remembers your choice and updates when you move; tap 📍 again to switch back",
      "The city shows ≈ when it's a guess and 📍 when it's GPS"
    ]
  },
  {
    version: "2.7.0",
    date: "2026-10-12",
    at: "2026-10-12T00:23:27Z",
    title: "Shortcuts to GoldRabbit and WRadio",
    changes: [
      "Two big buttons at the top open your other apps: GoldRabbit (live stocks) and WRadio (internet radio)"
    ]
  },
  {
    version: "2.6.0",
    date: "2026-10-12",
    at: "2026-10-12T00:03:26Z",
    title: "Aviation events and Money Saver",
    changes: [
      "Flying: new Events section with upcoming air shows and fly-ins, focused on San Diego (SD Air & Space Museum, El Centro Blue Angels, March ARB, plus Oshkosh and SUN 'n FUN)",
      "Flying Events links: Miramar Air Show, FAA safety seminars, EAA Chapter 14, CAF at Gillespie Field and more",
      "New Money Saver button: Groceries, Gas & Car, Travel Deals, Bills & Subscriptions, Shopping & Cash Back, Budget & Invest",
      "Each Money Saver section has 10 tips, 10 YouTube picks and its own news"
    ]
  },
  {
    version: "2.5.0",
    date: "2026-10-11",
    at: "2026-10-11T23:53:43Z",
    title: "Hamfests and live comedy",
    changes: [
      "Ham Radio now has two sections: Shows & News and Hamfests",
      "Hamfests: upcoming events with dates and countdowns (HamTastic San Diego, Pacificon, SuperFest Mesa, Quartzfest, Yuma, HamCation, Hamvention)",
      "Past events drop off automatically; the monthly W6TRW swap meet always shows its next date",
      "Comedy: new Live Shows section for clubs and tours in San Diego, Tempe/Phoenix and Germany"
    ]
  },
  {
    version: "2.4.0",
    date: "2026-10-11",
    at: "2026-10-11T23:41:00Z",
    title: "Meditation, George Carlin and iPhone fixes",
    changes: [
      "New Meditation button: Guided, Sadhguru, Esther Hicks, Jonathan Goldman, Crystal Bowls and Binaural Beats",
      "Sound sections list Spotify picks plus YouTube sessions",
      "George Carlin added to World Comedy",
      "iPhone: Spotify buttons now open the Spotify app on the right search instead of its home screen",
      "iPhone: wolf icon for Add to Home Screen (remove the old shortcut and add it again)"
    ]
  },
  {
    version: "2.3.0",
    date: "2026-10-11",
    at: "2026-10-11T23:27:59Z",
    title: "Comedy and Workout Music",
    changes: [
      "New Comedy button with German Comedy and World Comedy",
      "German Comedy: Gemischtes Hack, Fest & Flauschig, heute-show, Loriot, Der Postillon and more, all in German",
      "World Comedy: SmartLess, Conan, SNL, Netflix Is A Joke, Taskmaster and more",
      "New Workout Music under Fitness: top 10 Spotify playlists and top 10 YouTube workout mixes",
      "Menu adjusts its columns so rows stay even as buttons are added"
    ]
  },
  {
    version: "2.2.0",
    date: "2026-10-11",
    at: "2026-10-11T22:56:30Z",
    title: "Live weather",
    changes: [
      "Home screen shows current weather where you are (approximate location from your internet connection); tap it for the full forecast",
      "New Weather button under San Diego and Tempe with live conditions and a 5-day forecast",
      "Weather guides: NWS forecasts, radar, wind, surf, air quality, plus mountain and desert forecasts for day trips",
      "Tempe weather adds heat safety, monsoon tracking and road conditions",
      "Weather is saved so it still shows when you lose signal"
    ]
  },
  {
    version: "2.1.0",
    date: "2026-10-11",
    at: "2026-10-11T22:38:30Z",
    title: "Wolfie's Hobby Hub and Fitness",
    changes: [
      "New name: Wolfie's Hobby Hub, with a wolf logo and matching app icon",
      "New Fitness button with 24 Hour Fitness, Running SD, Weight Lifting and Plans & Apps",
      "24 Hour Fitness: club finder, SD and Tempe club maps, classes, app and membership help",
      "Running SD: routes like Mission Bay, Lake Miramar and Torrey Pines, run clubs and races",
      "Weight Lifting: top strength podcasts and YouTube coaches",
      "Plans & Apps: free programs, workout apps, calculators and stretching",
      "Hobby menu now fits 2 rows on desktop"
    ]
  },
  {
    version: "2.0.0",
    date: "2026-10-11",
    at: "2026-10-11T22:32:57Z",
    title: "Production ready: faster, works offline, cleaner menu",
    changes: [
      "Cleaner hobby menu: compact tiles with icon and name, 3 per row on phones, 5 on desktop",
      "Works offline: the site and your last headlines open even with no signal in the car",
      "Offline banner, and a warning when headlines are more than 12 hours old",
      "Proper app icon for Add to Home Screen",
      "Link previews with a picture when shared in text, WhatsApp or email",
      "Faster first load: font no longer blocks the page, news file is smaller",
      "Automatic checks catch broken links or data before they go live",
      "News updater retries safely so headline refreshes no longer fail on busy days"
    ]
  },
  {
    version: "1.9.0",
    date: "2026-10-11",
    at: "2026-10-11T22:27:30Z",
    title: "Share with friends",
    changes: [
      "New 📤 Share button: send the site by text, WhatsApp, email or copy the link",
      "Option to share the exact hobby page you're looking at",
      "Fixed the header subtitle looking like a button on phones"
    ]
  },
  {
    version: "1.8.0",
    date: "2026-10-11",
    at: "2026-10-11T22:02:19Z",
    title: "Tempe, Flying and Snorkeling",
    changes: [
      "New Tempe, AZ button with the same 8 categories as San Diego",
      "New Flying button: KMYF, aviation Weather and ATIS KMYF (126.9 MHz)",
      "New Snorkeling button under San Diego with the Scripps Pier underwater camera for visibility"
    ]
  },
  {
    version: "1.7.0",
    date: "2026-10-11",
    at: "2026-10-11T21:50:36Z",
    title: "San Diego",
    changes: [
      "New San Diego button with 8 sub-buttons: Today, This Week, Mountain Biking, Hiking, Breweries, Party, Fun and News",
      "Local event calendars, trails, breweries, venues and San Diego news feeds",
      "Lists can now be shorter or longer than 10"
    ]
  },
  {
    version: "1.6.0",
    date: "2026-10-11",
    at: "2026-10-11T21:43:33Z",
    title: "Traveling",
    changes: [
      "New Traveling hobby with four big sub-buttons: Road Trips USA, Europe, Asia and Camping",
      "Each sub-category has its own podcasts, YouTube and news"
    ]
  },
  {
    version: "1.5.0",
    date: "2026-10-11",
    at: "2026-10-11T21:37:59Z",
    title: "3D Printing and Bambu Lab",
    changes: [
      "New 3D Printing hobby: podcasts, YouTube and news",
      "New Bambu Lab section: official guides, MakerWorld, Bambu-focused videos and news"
    ]
  },
  {
    version: "1.4.0",
    date: "2026-10-11",
    at: "2026-10-11T21:36:39Z",
    title: "Food and Longevity Hacks",
    changes: [
      "New Food hobby: cooking, recipes and food science",
      "New Longevity Hacks hobby: healthspan, sleep, exercise and aging science",
      "Hobby buttons in a 3×3 grid on big screens"
    ]
  },
  {
    version: "1.3.1",
    date: "2026-10-11",
    at: "2026-10-11T21:30:07Z",
    title: "Always load the newest version",
    changes: [
      "Fixed phones and browsers showing an old cached copy after an update"
    ]
  },
  {
    version: "1.3.0",
    date: "2026-10-11",
    at: "2026-10-11T21:23:42Z",
    title: "Computers, AI and DIY Drones",
    changes: [
      "New Computers hobby: PC hardware, Linux and security",
      "New AI hobby: machine learning, chatbots and AI news",
      "New DIY Drones hobby: FPV quads, builds and autopilots",
      "Hobby buttons in a 4-column grid on big screens"
    ]
  },
  {
    version: "1.2.0",
    date: "2026-10-11",
    at: "2026-10-11T21:18:59Z",
    title: "Version history",
    changes: [
      "Version number shown in the header",
      "New \"What's new\" page with the full history"
    ]
  },
  {
    version: "1.1.0",
    date: "2026-10-11",
    title: "Arduino and Electronic Gardening",
    changes: [
      "New Arduino hobby: top 10 podcasts, top 10 YouTube channels, news",
      "New Electronic Gardening hobby: smart watering, sensors, grow lights, hydroponics",
      "Hobby buttons in a 2×2 grid on phones"
    ]
  },
  {
    version: "1.0.0",
    date: "2026-10-11",
    title: "First release",
    changes: [
      "Ham Radio and ESP32 hobbies",
      "Top 10 podcasts with Apple, Spotify and website buttons",
      "Top 10 YouTube channels",
      "Live news headlines, refreshed every 3 hours",
      "Big car-friendly buttons, dark and light mode"
    ]
  }
];
