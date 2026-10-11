// Content for each hobby. Add a new hobby by adding another entry to HOBBIES.
const HOBBIES = [
  {
    id: "ham",
    name: "Ham Radio",
    icon: "📡",
    accent: "#ff9f43",
    tagline: "Antennas, DX, POTA and everything on the air",
    podcasts: [
      { name: "Ham Radio Workbench", desc: "Deep dives on DIY projects, electronics and technical ham topics.", url: "https://www.hamradioworkbench.com/" },
      { name: "QSO Today", desc: "Eric Guth 4Z1UG interviews a new ham every week about their journey.", url: "https://www.qsotoday.com/" },
      { name: "ICQ Podcast", desc: "Long-running weekly amateur radio news and feature show.", url: "https://www.icqpodcast.com/" },
      { name: "Ham Radio Crash Course", desc: "Josh KI6NAZ and Leah KN6NWZ with tips, mail and exam questions.", url: "https://www.hamradiocrashcourse.com/" },
      { name: "This Week in Amateur Radio", desc: "The news magazine of the airwaves, every week.", url: "https://www.twiar.org/" },
      { name: "Amateur Radio Newsline", desc: "Weekly ham radio news bulletin, perfect for the commute.", url: "https://www.arnewsline.org/" },
      { name: "ARRL On the Air", desc: "The ARRL's podcast for getting on the air and operating better.", url: "https://www.arrl.org/on-the-air-podcast" },
      { name: "Everyday Ham", desc: "Relaxed conversations with hams, plus Hamvention coverage.", url: "https://everydayham.buzzsprout.com/" },
      { name: "Ham Radio 360", desc: "Interviews, gear and operating, including Ham Radio 360 Workbench.", url: "https://www.hamradio360.com/" },
      { name: "100 Watts and a Wire", desc: "Portable, field and low-key operating with a friendly crew.", url: "https://www.100wattsandawire.com/" }
    ],
    youtube: [
      { name: "Ham Radio Crash Course", desc: "Josh KI6NAZ: reviews, tutorials and antennas.", url: "https://www.youtube.com/@HamRadioCrashCourse" },
      { name: "Ham Radio 2.0", desc: "Jason KC5HWB reviews new radios, modes and gear.", url: "https://www.youtube.com/c/HamRadio20" },
      { name: "Ham Radio DX", desc: "Hayden VK7HH: education, POTA and experiments.", url: "https://www.youtube.com/@HamRadioDX" },
      { name: "KM4ACK", desc: "Raspberry Pi in the shack, digital modes, portable ops.", url: "https://www.youtube.com/@KM4ACK" },
      { name: "KB9VBR Antennas", desc: "Michael's antennas, POTA and Ham Radio Q&A.", url: "https://www.youtube.com/@KB9VBRAntennas" },
      { name: "Tech Minds", desc: "SDR, antenna building, satellites and digital decoding.", url: "https://www.youtube.com/c/TechMindsOfficial" },
      { name: "Ask Dave (KE0OG)", desc: "Dave Casler explains radio theory in plain language.", url: "https://www.youtube.com/user/davecasler" },
      { name: "K0LWC", desc: "Gear reviews, hobby news and honest takes.", url: "https://www.youtube.com/@K0LWC" },
      { name: "W2AEW", desc: "Test equipment and RF electronics on the bench.", url: "https://www.youtube.com/@w2aew" },
      { name: "OH8STN", desc: "Off-grid, portable and emergency communications.", url: "https://www.youtube.com/@OH8STN" }
    ],
    newsSources: [
      { name: "ARRL News", url: "https://www.arrl.org/news" },
      { name: "Southgate ARC", url: "https://www.southgatearc.org/" },
      { name: "Hackaday Radio Hacks", url: "https://hackaday.com/category/radio-hacks/" },
      { name: "RTL-SDR Blog", url: "https://www.rtl-sdr.com/" },
      { name: "Amateur Radio Newsline", url: "https://www.arnewsline.org/" },
      { name: "Google News: Ham Radio", url: "https://news.google.com/search?q=%22amateur%20radio%22%20OR%20%22ham%20radio%22" }
    ]
  },
  {
    id: "esp32",
    name: "ESP32",
    icon: "🔌",
    accent: "#2ee6a6",
    tagline: "Microcontrollers, IoT, ESPHome and maker projects",
    podcasts: [
      { name: "Embedded.fm", desc: "Elecia and Christopher White on embedded systems and firmware.", url: "https://embedded.fm/" },
      { name: "The Amp Hour", desc: "Electronics design talk, with plenty of ESP32 episodes.", url: "https://theamphour.com/tag/esp32" },
      { name: "Hackaday Podcast", desc: "Weekly roundup of the best hacks on Hackaday.", url: "https://hackaday.libsyn.com/" },
      { name: "The Electromaker Show", desc: "Weekly maker and embedded news, new boards and giveaways.", url: "https://www.electromaker.io/blog/article/the-electromaker-show-podcast" },
      { name: "Home Assistant Podcast", desc: "Smart home and ESPHome builds, release by release.", url: "https://hasspodcast.io/" },
      { name: "Self-Hosted", desc: "Homelab and home automation, with ESP32 episodes.", url: "https://selfhosted.show/tags/esp32" },
      { name: "Embedded Insiders", desc: "Industry news and new parts for embedded and IoT engineers.", url: "https://embeddedcomputing.com/" },
      { name: "OnTrack (Altium)", desc: "PCB design, signal integrity and EMC for your own boards.", url: "https://resources.altium.com/podcasts" },
      { name: "Circuit Break (archive)", desc: "MacroFab's hardware show. Ended 2024, 500+ episodes to binge.", url: "https://www.macrofab.com/podcasts" },
      { name: "Ham Radio Workbench", desc: "Ham meets maker: microcontroller and ESP32 builds for the shack.", url: "https://www.hamradioworkbench.com/" }
    ],
    youtube: [
      { name: "Andreas Spiess", desc: "\"The guy with the Swiss accent\": ESP32, sensors, LoRa.", url: "https://www.youtube.com/@AndreasSpiess" },
      { name: "DroneBot Workshop", desc: "Thorough ESP32 and Arduino tutorials, start to finish.", url: "https://www.youtube.com/@Dronebotworkshop" },
      { name: "Random Nerd Tutorials", desc: "Rui Santos: practical ESP32 and ESP8266 projects.", url: "https://www.youtube.com/user/randomnerdtutorials" },
      { name: "atomic14", desc: "Slightly mad ESP32 projects, audio and displays.", url: "https://www.youtube.com/@atomic14" },
      { name: "Volos Projects", desc: "Beautiful ESP32 display and UI projects.", url: "https://www.youtube.com/c/VolosProjects" },
      { name: "GreatScott!", desc: "Electronics basics and DIY builds, explained well.", url: "https://www.youtube.com/@greatscottlab" },
      { name: "bitluni", desc: "Wild ESP32 hacks: VGA, composite video, huge LED builds.", url: "https://www.youtube.com/user/bitlunislab" },
      { name: "Brian Lough", desc: "ESP32 libraries, APIs and fun connected gadgets.", url: "https://www.youtube.com/c/brianlough" },
      { name: "Unexpected Maker", desc: "Designer of the TinyPICO and FeatherS3 ESP32 boards.", url: "https://www.youtube.com/@UnexpectedMaker" },
      { name: "educ8s.tv", desc: "Arduino, ESP32 and Pico projects twice a month.", url: "https://www.youtube.com/@educ8s" }
    ],
    newsSources: [
      { name: "Hackaday: ESP32", url: "https://hackaday.com/tag/esp32/" },
      { name: "CNX Software: ESP32", url: "https://www.cnx-software.com/tag/esp32/" },
      { name: "Espressif News", url: "https://www.espressif.com/en/news" },
      { name: "Random Nerd Tutorials", url: "https://randomnerdtutorials.com/" },
      { name: "Hackster: ESP32", url: "https://www.hackster.io/search?q=esp32" },
      { name: "Google News: ESP32", url: "https://news.google.com/search?q=ESP32" }
    ]
  }
];
