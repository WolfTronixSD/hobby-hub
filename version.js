// Bump APP_VERSION and the ?v= numbers in index.html, and add an entry at the top of CHANGELOG for every release.
const APP_VERSION = "2.2.0";
const CHANGELOG = [
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
