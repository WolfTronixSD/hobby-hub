// My own apps, shown as big buttons under the clocks.
// Each one opens in its own tab/window (target "hub-<id>"), so several can run side by side,
// e.g. WRadio keeps playing while Dit Dah Dojo is open. Tapping a button again jumps back to its tab.
// Removing a button in the hub only hides it on that phone (localStorage "hiddenApps").
// Optional "appLink": on a phone the button opens that native app first and offers the website if it isn't installed.
const APPS = [
  { id: "goldrabbit", name: "GoldRabbit", sub: "Live stocks", color: "#f5b301", emoji: "🐇",
    url: "https://wolftronixsd.github.io/tickerdeck/", img: "https://wolftronixsd.github.io/tickerdeck/icon-180.png" },
  { id: "wradio", name: "WRadio", sub: "Internet radio", color: "#4fd1c5", emoji: "📻",
    url: "https://wolftronixsd.github.io/Wradio/", img: "https://wolftronixsd.github.io/Wradio/icons/icon-180.png" },
  { id: "ironman", name: "Wolf Ironman", sub: "Daily workouts", color: "#ef4444", emoji: "💪",
    url: "https://darling-kheer-93b7f4.netlify.app/", img: "https://darling-kheer-93b7f4.netlify.app/icons/icon-180.png?v=5" },
  { id: "morse", name: "Dit Dah Dojo", sub: "Morse trainer", color: "#a78bfa", emoji: "📡",
    url: "https://wolftronixsd.github.io/morse-trainer/", img: "https://wolftronixsd.github.io/morse-trainer/icons/logo-96.png" },
  { id: "kmyfnav", name: "NAV → KMYF", sub: "Compass & ATC", color: "#22c55e", emoji: "🧭",
    url: "https://wolftronixsd.github.io/Wradio/kmyf-nav.html" },
  { id: "checkup", name: "Super Checkup", sub: "Eyes & ears", color: "#1f4fd1", emoji: "🩺",
    url: "checkup/" },
  { id: "seasonhouse", name: "SeasonHouse", sub: "Haunted props", color: "#f97316", emoji: "🎃",
    url: "https://github.com/WolfTronixSD/SeasonHouse" },
  { id: "karaoke", name: "Karaoke Wolf", sub: "Sing & score", color: "#ec4899", emoji: "🎤",
    url: "https://wolftronixsd.github.io/karaoke-wolf/" },
  { id: "claude", name: "Claude", sub: "AI quick start", color: "#d97757", emoji: "✳️",
    url: "https://claude.ai/new", appLink: "claude://" }
];
