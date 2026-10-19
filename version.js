// Bump APP_VERSION and the ?v= numbers in index.html, and add an entry at the top of CHANGELOG for every release.
const APP_VERSION = "2.26.1";
const CHANGELOG = [
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
