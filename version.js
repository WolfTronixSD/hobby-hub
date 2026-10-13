// Bump APP_VERSION and the ?v= numbers in index.html, and add an entry at the top of CHANGELOG for every release.
const APP_VERSION = "2.16.0";
const CHANGELOG = [
  {
    version: "2.16.0",
    date: "2026-10-13",
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
    title: "Local time and UTC",
    changes: [
      "Two big clocks at the top: your local time (with date and time zone) and UTC/Zulu time"
    ]
  },
  {
    version: "2.12.0",
    date: "2026-10-13",
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
    title: "Sunrise, sunset and moon phase",
    changes: [
      "The home weather bar shows today's sunrise, sunset and moon phase",
      "San Diego and Tempe weather pages show them as big tiles, with how much of the moon is lit"
    ]
  },
  {
    version: "2.10.1",
    date: "2026-10-13",
    title: "Weather in °F and °C",
    changes: [
      "Weather now shows Fahrenheit and Celsius together: on the home bar, the San Diego and Tempe forecast panels and the 5-day tiles"
    ]
  },
  {
    version: "2.10.0",
    date: "2026-10-12",
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
    title: "San Diego and Tempe podcasts open the actual show",
    changes: [
      "San Diego and Tempe podcast buttons now open the show page in Apple Podcasts, newest episodes first, instead of a search full of old episodes",
      "KPBS San Diego News Now, KJZZ's Sun Up and The Gaggle replace outdated or vague news picks"
    ]
  },
  {
    version: "2.9.1",
    date: "2026-10-12",
    title: "More reliable news updates",
    changes: [
      "Headlines are now fetched every hour instead of every 3 hours, because GitHub was skipping most scheduled updates",
      "An open page checks for new headlines every 15 minutes and when you come back to it, no reload needed"
    ]
  },
  {
    version: "2.9.0",
    date: "2026-10-12",
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
    title: "Shortcuts to GoldRabbit and WRadio",
    changes: [
      "Two big buttons at the top open your other apps: GoldRabbit (live stocks) and WRadio (internet radio)"
    ]
  },
  {
    version: "2.6.0",
    date: "2026-10-12",
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
    title: "Traveling",
    changes: [
      "New Traveling hobby with four big sub-buttons: Road Trips USA, Europe, Asia and Camping",
      "Each sub-category has its own podcasts, YouTube and news"
    ]
  },
  {
    version: "1.5.0",
    date: "2026-10-11",
    title: "3D Printing and Bambu Lab",
    changes: [
      "New 3D Printing hobby: podcasts, YouTube and news",
      "New Bambu Lab section: official guides, MakerWorld, Bambu-focused videos and news"
    ]
  },
  {
    version: "1.4.0",
    date: "2026-10-11",
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
    title: "Always load the newest version",
    changes: [
      "Fixed phones and browsers showing an old cached copy after an update"
    ]
  },
  {
    version: "1.3.0",
    date: "2026-10-11",
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
