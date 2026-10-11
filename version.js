// Bump APP_VERSION and the ?v= numbers in index.html, and add an entry at the top of CHANGELOG for every release.
const APP_VERSION = "1.3.1";
const CHANGELOG = [
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
