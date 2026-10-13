// Content for each hobby. Add a new hobby by adding another entry to HOBBIES.
const HOBBIES = [
  {
    id: "ham",
    name: "Ham Radio",
    icon: "📡",
    accent: "#ff9f43",
    tagline: "Antennas, DX, POTA and everything on the air",
    subs: [
      {
        id: "ham-main",
        name: "Shows & News",
        icon: "🎙️",
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
        id: "ham-events",
        name: "Hamfests",
        icon: "🎪",
        labels: {
          podcasts: "Events",
          icon: "📅",
          heading: "links"
        },
        events: [
          {
            name: "Pacificon",
            date: "2026-10-16",
            end: "2026-10-18",
            place: "San Ramon, CA",
            desc: "ARRL Pacific Division Convention: talks, vendors and swap meet.",
            url: "https://www.pacificon.org/"
          },
          {
            name: "HamTastic San Diego",
            date: "2026-10-17",
            place: "Fiesta Island, Mission Bay, San Diego",
            desc: "SANDRA's open-air ham day, sunrise to whenever. Your home turf!",
            url: "https://www.hamtasticsd.com/"
          },
          {
            name: "W6TRW Swap Meet",
            date: null,
            place: "Torrance, CA",
            desc: "Monthly SoCal swap meet, last Saturday of every month.",
            url: "https://w6trw.com/",
            recur: "last-saturday"
          },
          {
            name: "SuperFest",
            date: "2026-11-07",
            place: "Arizona Athletic Grounds, Mesa, AZ",
            desc: "ARRL Arizona State Convention, close to Tempe.",
            url: "https://superfest.superstitionarc.org/"
          },
          {
            name: "Quartzfest",
            date: "2027-01-17",
            end: "2027-01-23",
            place: "Quartzsite, AZ",
            desc: "A week of ham radio camping and seminars in the desert.",
            url: "https://quartzfest.org/"
          },
          {
            name: "HamCation",
            date: "2027-02-12",
            end: "2027-02-14",
            place: "Orlando, FL",
            desc: "One of the biggest US hamfests.",
            url: "https://www.hamcation.com/"
          },
          {
            name: "Yuma Hamfest",
            date: "2027-02-19",
            end: "2027-02-20",
            place: "Yuma County Fairgrounds, AZ",
            desc: "Big Southwest hamfest. Date not final (Feb 19-20 or 26-27), check before you go.",
            url: "https://www.yumahamfest.com/"
          },
          {
            name: "Dayton Hamvention",
            date: "2027-05-21",
            end: "2027-05-23",
            place: "Greene County Fairgrounds, Xenia, OH",
            desc: "The world's largest ham radio gathering.",
            url: "https://hamvention.org/"
          }
        ],
        podcasts: [
          {
            name: "ARRL hamfest calendar",
            desc: "Every ARRL-sanctioned hamfest and convention.",
            url: "https://www.arrl.org/hamfests-and-conventions-calendar"
          },
          {
            name: "HamTastic San Diego",
            desc: "San Diego's ham radio day on Fiesta Island.",
            url: "https://www.hamtasticsd.com/"
          },
          {
            name: "SuperFest (Mesa, AZ)",
            desc: "Arizona State Convention near Tempe.",
            url: "https://superfest.superstitionarc.org/"
          },
          {
            name: "Yuma Hamfest",
            desc: "Southwest hamfest every February.",
            url: "https://www.yumahamfest.com/"
          },
          {
            name: "Quartzfest",
            desc: "Ham radio camping week in Quartzsite, AZ.",
            url: "https://quartzfest.org/"
          },
          {
            name: "Pacificon",
            desc: "ARRL Pacific Division Convention, Bay Area.",
            url: "https://www.pacificon.org/"
          },
          {
            name: "W6TRW swap meet",
            desc: "Monthly SoCal swap, last Saturday.",
            url: "https://w6trw.com/"
          },
          {
            name: "Dayton Hamvention",
            desc: "The big one, every May in Ohio.",
            url: "https://hamvention.org/"
          },
          {
            name: "HamCation",
            desc: "Orlando's huge February hamfest.",
            url: "https://www.hamcation.com/"
          },
          {
            name: "Hamfests near me",
            desc: "Search for swap meets around you.",
            url: "https://www.google.com/search?q=hamfest+swap+meet+near+me"
          }
        ],
        youtube: [
          {
            name: "Hamvention walkthrough",
            desc: "Tour the flea market and halls.",
            url: "https://www.youtube.com/results?search_query=Hamvention+walkthrough"
          },
          {
            name: "HamCation tour",
            desc: "What's new at HamCation.",
            url: "https://www.youtube.com/results?search_query=HamCation+tour"
          },
          {
            name: "Quartzfest",
            desc: "Ham radio in the desert.",
            url: "https://www.youtube.com/results?search_query=Quartzfest+ham+radio"
          },
          {
            name: "Pacificon",
            desc: "Talks and highlights.",
            url: "https://www.youtube.com/results?search_query=Pacificon+ham+radio"
          },
          {
            name: "Hamfest tips",
            desc: "How to shop a swap meet.",
            url: "https://www.youtube.com/results?search_query=hamfest+tips+buying+used+radio"
          },
          {
            name: "Hamfest haul",
            desc: "What people found this year.",
            url: "https://www.youtube.com/results?search_query=hamfest+haul"
          },
          {
            name: "Ham Radio 2.0 at Hamvention",
            desc: "Interviews from the show floor.",
            url: "https://www.youtube.com/results?search_query=Ham+Radio+2.0+Hamvention"
          },
          {
            name: "HRCC at Hamvention",
            desc: "Ham Radio Crash Course coverage.",
            url: "https://www.youtube.com/results?search_query=Ham+Radio+Crash+Course+Hamvention"
          },
          {
            name: "Yuma Hamfest",
            desc: "Southwest hamfest coverage.",
            url: "https://www.youtube.com/results?search_query=Yuma+Hamfest"
          },
          {
            name: "Forums and talks",
            desc: "Recorded hamfest forums.",
            url: "https://www.youtube.com/results?search_query=hamfest+forum+presentation+amateur+radio"
          }
        ],
        newsSources: [
          {
            name: "ARRL hamfest calendar",
            url: "https://www.arrl.org/hamfests-and-conventions-calendar"
          },
          {
            name: "Google News: hamfests",
            url: "https://news.google.com/search?q=hamfest%20OR%20%22ham%20radio%20convention%22%20OR%20Hamvention"
          }
        ]
      }
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
  },
  {
    id: "arduino",
    name: "Arduino",
    icon: "🤖",
    accent: "#00c2c7",
    tagline: "Sketches, shields, sensors and robots",
    podcasts: [
      { name: "The Amp Hour", desc: "Chris Gammell and Dave Jones on electronics design and making.", url: "https://theamphour.com/" },
      { name: "Hackaday Podcast", desc: "Weekly roundup of hacks, many of them Arduino-powered.", url: "https://hackaday.libsyn.com/" },
      { name: "The Electromaker Show", desc: "Weekly maker news: new boards, Arduino and Pi projects.", url: "https://www.electromaker.io/blog/article/the-electromaker-show-podcast" },
      { name: "Embedded.fm", desc: "From blinking an LED to shipping firmware for real products.", url: "https://embedded.fm/" },
      { name: "Ham Radio Workbench: What is Arduino?", desc: "A friendly beginner episode on what Arduino is and why it matters.", url: "https://www.hamradioworkbench.com/podcast/what-is-arduino" },
      { name: "The Simple Electronics Podcast", desc: "Beginner-friendly electronics, one idea at a time.", url: "https://podcasts.apple.com/us/search?term=Simple%20Electronics%20Podcast" },
      { name: "The D-Code Podcast", desc: "Hobby electronics and DIY project chat.", url: "https://podcasts.apple.com/us/search?term=D-Code%20Podcast" },
      { name: "Embedded Insiders", desc: "News and new parts for embedded and IoT builders.", url: "https://embeddedcomputing.com/" },
      { name: "PCB Chat", desc: "Short interviews about designing and building circuit boards.", url: "https://podcasts.apple.com/us/search?term=PCB%20Chat" },
      { name: "Inside Electronics", desc: "Conversations about how electronics really get made.", url: "https://podcasts.apple.com/us/search?term=Inside%20Electronics" }
    ],
    youtube: [
      { name: "Paul McWhorter", desc: "Famous step-by-step Arduino lesson series for beginners.", url: "https://www.youtube.com/@paulmcwhorter" },
      { name: "Arduino (official)", desc: "Tutorials, project ideas and new board launches.", url: "https://www.youtube.com/results?search_query=Arduino+official+channel" },
      { name: "Jeremy Blum", desc: "Classic Arduino tutorial series from an EE.", url: "https://www.youtube.com/user/sciguy14" },
      { name: "Ralph S Bacon", desc: "Relaxed Arduino tutorials, modules and PCBs.", url: "https://www.youtube.com/ralphbacon" },
      { name: "Adafruit", desc: "Sensors, kits and weekly show-and-tell.", url: "https://www.youtube.com/results?search_query=Adafruit+Industries" },
      { name: "SparkFun Electronics", desc: "Product walkthroughs and practical builds.", url: "https://www.youtube.com/results?search_query=SparkFun+Electronics" },
      { name: "element14 presents", desc: "Builds and hacks with Arduino and Raspberry Pi.", url: "https://www.youtube.com/results?search_query=element14+presents" },
      { name: "Programming Electronics Academy", desc: "Arduino programming explained from zero.", url: "https://www.youtube.com/results?search_query=Programming+Electronics+Academy" },
      { name: "DroneBot Workshop", desc: "Deep, thorough Arduino and motor tutorials.", url: "https://www.youtube.com/@Dronebotworkshop" },
      { name: "Electronoobs", desc: "Arduino projects, homemade tools and experiments.", url: "https://www.youtube.com/results?search_query=Electronoobs" }
    ],
    newsSources: [
      { name: "Arduino Blog", url: "https://blog.arduino.cc/" },
      { name: "Hackaday: Arduino Hacks", url: "https://hackaday.com/category/arduino-hacks/" },
      { name: "Hackster: Arduino", url: "https://www.hackster.io/arduino" },
      { name: "Instructables: Arduino", url: "https://www.instructables.com/circuits/arduino/projects/" },
      { name: "Adafruit Blog", url: "https://blog.adafruit.com/" },
      { name: "Google News: Arduino", url: "https://news.google.com/search?q=Arduino" }
    ]
  },
  {
    id: "garden",
    name: "Electronic Gardening",
    icon: "🌱",
    accent: "#8bd346",
    tagline: "Smart watering, sensors, grow lights and hydroponics",
    podcasts: [
      { name: "Garden Talk with Mr. Grow It", desc: "Gardeners worldwide, including hydroponics how-tos.", url: "https://www.buzzsprout.com/1691170" },
      { name: "The Urban Farm", desc: "Greg Peterson on growing food, indoor systems and grow tech.", url: "https://www.urbanfarm.org/" },
      { name: "The Joe Gardener Show", desc: "Weekly, practical gardening with Joe Lamp'l.", url: "https://joegardener.com/podcast/" },
      { name: "How to Hydroponic", desc: "Tessa and Ryan make indoor hydroponics easy.", url: "https://podcasts.apple.com/gb/podcast/how-to-hydroponic/id1763105660" },
      { name: "Hydroponics Daily", desc: "Short daily episodes on soilless growing.", url: "https://podcasts.apple.com/us/podcast/hydroponics-daily/id1788172771" },
      { name: "Epic Gardening", desc: "Kevin Espiritu on growing more in small spaces.", url: "https://podcasts.apple.com/us/search?term=Epic%20Gardening" },
      { name: "Growing Joy with Maria", desc: "Upbeat gardening, plus a great hydroponics 101 episode.", url: "https://growingjoywithmaria.com/hydroponics/" },
      { name: "The Hydro Chronicle", desc: "Long-form talk about the indoor growing world.", url: "https://podcasts.apple.com/us/search?term=The%20Hydro%20Chronicle" },
      { name: "Home Assistant Podcast", desc: "Smart home automations, including irrigation and sensors.", url: "https://hasspodcast.io/" },
      { name: "Gardeners' Question Time", desc: "BBC classic: experts answer growing questions.", url: "https://www.bbc.co.uk/programmes/b006qp2f" }
    ],
    youtube: [
      { name: "Giovanni Aggiustatutto", desc: "DIY smart drip irrigation with Arduino and ESP32.", url: "https://www.youtube.com/results?search_query=Giovanni+Aggiustatutto" },
      { name: "FarmBot", desc: "Open-source CNC robot that plants and waters a garden.", url: "https://www.youtube.com/results?search_query=FarmBot" },
      { name: "Hoocho", desc: "Rain-gutter and bucket hydroponic builds that work.", url: "https://www.youtube.com/@Hoocho" },
      { name: "Epic Gardening", desc: "Kevin Espiritu's garden tech, kits and hydroponics.", url: "https://www.youtube.com/results?search_query=Epic+Gardening" },
      { name: "Becky's Hydroponics", desc: "Indoor hydroponic systems, pumps and nutrients.", url: "https://www.youtube.com/results?search_query=Becky's+Hydroponics" },
      { name: "The Hook Up", desc: "Home automation deep dives, including smart sprinklers.", url: "https://www.youtube.com/results?search_query=The+Hook+Up" },
      { name: "MIGRO", desc: "Grow light science: spectrums, PPFD and LED tests.", url: "https://www.youtube.com/results?search_query=MIGRO+grow+lights" },
      { name: "Programming Electronics Academy", desc: "Build an Arduino IoT hydroponic garden.", url: "https://www.youtube.com/results?search_query=Programming+Electronics+Academy+hydroponic+garden" },
      { name: "Rob Bob's Aquaponics", desc: "Backyard aquaponics with pumps, timers and fish.", url: "https://www.youtube.com/results?search_query=Rob+Bob's+Aquaponics" },
      { name: "Andreas Spiess", desc: "Soil sensors, LoRa and low-power ESP32 for the garden.", url: "https://www.youtube.com/@AndreasSpiess" }
    ],
    newsSources: [
      { name: "Hackaday: Garden", url: "https://hackaday.com/tag/garden/" },
      { name: "Hackaday: Hydroponics", url: "https://hackaday.com/tag/hydroponics/" },
      { name: "Instructables: Gardening", url: "https://www.instructables.com/search/?q=arduino%20garden" },
      { name: "FarmBot Blog", url: "https://farm.bot/blogs/news" },
      { name: "Google News: Smart Garden", url: "https://news.google.com/search?q=%22smart%20garden%22%20OR%20hydroponics" }
    ]
  },
  {
    id: "computers",
    name: "Computers",
    icon: "💻",
    accent: "#5b9dff",
    tagline: "PC builds, hardware, Linux and security",
    podcasts: [
      { name: "This Week in Tech", desc: "Leo Laporte's weekly roundtable on the tech news.", url: "https://twit.tv/shows/this-week-in-tech" },
      { name: "Security Now", desc: "Steve Gibson explains security and how computers really work.", url: "https://twit.tv/shows/security-now" },
      { name: "Windows Weekly", desc: "Everything Windows, PCs and Microsoft.", url: "https://twit.tv/shows/windows-weekly" },
      { name: "The Vergecast", desc: "The Verge's flagship show on gadgets and tech.", url: "https://www.theverge.com/the-vergecast" },
      { name: "Accidental Tech Podcast", desc: "Three developers on Apple, programming and tech.", url: "https://atp.fm/" },
      { name: "Linux Unplugged", desc: "Weekly Linux talk for desktop and homelab users.", url: "https://linuxunplugged.com/" },
      { name: "Darknet Diaries", desc: "True stories from the dark side of the internet.", url: "https://darknetdiaries.com/" },
      { name: "The Full Nerd", desc: "PCWorld on PC hardware, GPUs, CPUs and builds.", url: "https://podcasts.apple.com/us/search?term=The%20Full%20Nerd%20PCWorld" },
      { name: "Hanselminutes", desc: "Scott Hanselman talks tech with makers and engineers.", url: "https://hanselminutes.com/" },
      { name: "Clockwise", desc: "Four people, four tech topics, thirty minutes.", url: "https://www.relay.fm/clockwise" }
    ],
    youtube: [
      { name: "Linus Tech Tips", desc: "PC builds, gadgets and big tech projects.", url: "https://www.youtube.com/@LinusTechTips" },
      { name: "Gamers Nexus", desc: "Deep, data-driven hardware testing.", url: "https://www.youtube.com/@GamersNexus" },
      { name: "Hardware Unboxed", desc: "CPU, GPU and monitor benchmarks.", url: "https://www.youtube.com/@Hardwareunboxed" },
      { name: "JayzTwoCents", desc: "PC building, cooling and hardware news.", url: "https://www.youtube.com/@Jayztwocents" },
      { name: "Level1Techs", desc: "Servers, Linux, workstations and homelabs.", url: "https://www.youtube.com/@Level1Techs" },
      { name: "ExplainingComputers", desc: "Calm, clear guides to computers and SBCs.", url: "https://www.youtube.com/@ExplainingComputers" },
      { name: "Jeff Geerling", desc: "Raspberry Pi clusters, homelab and open source.", url: "https://www.youtube.com/@JeffGeerling" },
      { name: "Ben Eater", desc: "Build a computer from scratch on breadboards.", url: "https://www.youtube.com/@BenEater" },
      { name: "Computerphile", desc: "Computer science explained by university experts.", url: "https://www.youtube.com/@Computerphile" },
      { name: "Techquickie", desc: "Short, simple answers to tech questions.", url: "https://www.youtube.com/@Techquickie" }
    ],
    newsSources: [
      { name: "Ars Technica", url: "https://arstechnica.com/" },
      { name: "Tom's Hardware", url: "https://www.tomshardware.com/" },
      { name: "The Verge: Tech", url: "https://www.theverge.com/tech" },
      { name: "Hackaday", url: "https://hackaday.com/" },
      { name: "Phoronix (Linux)", url: "https://www.phoronix.com/" },
      { name: "Google News: Computers", url: "https://news.google.com/search?q=PC%20hardware%20OR%20computers" }
    ]
  },
  {
    id: "ai",
    name: "AI",
    icon: "🧠",
    accent: "#c084fc",
    tagline: "Machine learning, chatbots, robots and the future",
    podcasts: [
      { name: "Hard Fork", desc: "Kevin Roose and Casey Newton on AI and the tech future.", url: "https://www.nytimes.com/column/hard-fork" },
      { name: "Lex Fridman Podcast", desc: "Long conversations with AI researchers and builders.", url: "https://lexfridman.com/podcast/" },
      { name: "Latent Space", desc: "The AI engineer's podcast: models, tools and agents.", url: "https://www.latent.space/podcast" },
      { name: "The TWIML AI Podcast", desc: "This Week in Machine Learning and AI interviews.", url: "https://twimlai.com/" },
      { name: "Practical AI", desc: "Making AI practical, productive and accessible.", url: "https://practicalai.fm/" },
      { name: "Last Week in AI", desc: "Weekly summary of what happened in AI.", url: "https://lastweekin.ai/" },
      { name: "The AI Daily Brief", desc: "Daily AI news and analysis, great for the commute.", url: "https://podcasts.apple.com/us/search?term=The%20AI%20Daily%20Brief" },
      { name: "Dwarkesh Podcast", desc: "In-depth interviews with leading AI thinkers.", url: "https://www.dwarkesh.com/podcast" },
      { name: "Eye on AI", desc: "Craig Smith interviews people shaping AI.", url: "https://www.eye-on.ai/" },
      { name: "The Cognitive Revolution", desc: "Builders and researchers on the AI transformation.", url: "https://podcasts.apple.com/us/search?term=The%20Cognitive%20Revolution" }
    ],
    youtube: [
      { name: "Two Minute Papers", desc: "New AI research papers, explained with excitement.", url: "https://www.youtube.com/@TwoMinutePapers" },
      { name: "3Blue1Brown", desc: "Beautiful visual explanations of neural networks.", url: "https://www.youtube.com/@3blue1brown" },
      { name: "Andrej Karpathy", desc: "Build GPT from scratch with a top AI researcher.", url: "https://www.youtube.com/@AndrejKarpathy" },
      { name: "AI Explained", desc: "Careful breakdowns of new models and benchmarks.", url: "https://www.youtube.com/@aiexplained-official" },
      { name: "Yannic Kilcher", desc: "ML paper reviews and AI news.", url: "https://www.youtube.com/@YannicKilcher" },
      { name: "Matt Wolfe", desc: "Hands-on with the newest AI tools.", url: "https://www.youtube.com/@mreflow" },
      { name: "StatQuest", desc: "Machine learning concepts, clearly explained.", url: "https://www.youtube.com/@statquest" },
      { name: "sentdex", desc: "Python, machine learning and AI projects.", url: "https://www.youtube.com/@sentdex" },
      { name: "Fireship", desc: "Fast, funny takes on AI and coding.", url: "https://www.youtube.com/@Fireship" },
      { name: "Wes Roth", desc: "Daily AI news and model releases.", url: "https://www.youtube.com/@WesRoth" }
    ],
    newsSources: [
      { name: "The Verge: AI", url: "https://www.theverge.com/ai-artificial-intelligence" },
      { name: "TechCrunch: AI", url: "https://techcrunch.com/category/artificial-intelligence/" },
      { name: "Ars Technica: AI", url: "https://arstechnica.com/ai/" },
      { name: "Hacker News", url: "https://news.ycombinator.com/" },
      { name: "Hugging Face Blog", url: "https://huggingface.co/blog" },
      { name: "Google News: AI", url: "https://news.google.com/search?q=%22artificial%20intelligence%22" }
    ]
  },
  {
    id: "drones",
    name: "DIY Drones",
    icon: "🚁",
    accent: "#ff6b6b",
    tagline: "FPV quads, builds, flight controllers and autopilots",
    podcasts: [
      { name: "Team Failsafe", desc: "Insider FPV news and long chats with top pilots.", url: "https://podcasts.apple.com/us/search?term=Team%20Failsafe" },
      { name: "Kwadverse", desc: "Monthly micro FPV show: Tiny Whoops to toothpicks.", url: "https://podcasts.apple.com/us/search?term=Kwadverse" },
      { name: "Ask Drone U", desc: "Daily show answering one listener drone question.", url: "https://podcasts.apple.com/us/search?term=Ask%20Drone%20U" },
      { name: "Drone Radio Show", desc: "Randy Goers interviews leaders in the drone world.", url: "https://www.droneradioshow.com/" },
      { name: "Drone Trainer Podcast", desc: "Flying tips, regulations and pilot stories.", url: "https://podcasts.apple.com/us/search?term=Drone%20Trainer%20Podcast" },
      { name: "Commercial Drones FM", desc: "Drone tech, autonomy and the industry behind it.", url: "https://commercialdrones.fm/" },
      { name: "UAV Digest", desc: "Drone news and interviews, deep archive.", url: "https://podcasts.apple.com/us/search?term=UAV%20Digest" },
      { name: "Hackaday Podcast", desc: "Weekly hacks, often including homebuilt drones.", url: "https://hackaday.libsyn.com/" },
      { name: "The Amp Hour", desc: "Electronics design talk for building your own flight hardware.", url: "https://theamphour.com/" },
      { name: "Ham Radio Crash Course", desc: "Ham licensing and radio know-how that helps FPV pilots.", url: "https://www.hamradiocrashcourse.com/" }
    ],
    youtube: [
      { name: "Joshua Bardwell", desc: "The FPV encyclopedia: builds, Betaflight, weekly news.", url: "https://www.youtube.com/@JoshuaBardwell" },
      { name: "Chris Rosser", desc: "Engineering-minded FPV: frames, props and tuning.", url: "https://www.youtube.com/@ChrisRosser" },
      { name: "UAVfutures", desc: "FPV builds, races and gear reviews.", url: "https://www.youtube.com/c/UAVfutures" },
      { name: "Painless360", desc: "Patient step-by-step guides: radios, INAV, ArduPilot.", url: "https://www.youtube.com/results?search_query=Painless360" },
      { name: "Mads Tech", desc: "In-depth FPV gear reviews and setup guides.", url: "https://www.youtube.com/results?search_query=Mads+Tech+FPV" },
      { name: "Oscar Liang", desc: "Builds and reviews from the top FPV blogger.", url: "https://www.youtube.com/results?search_query=Oscar+Liang+FPV" },
      { name: "Botgrinder", desc: "Freestyle, builds and FPV community talk.", url: "https://www.youtube.com/results?search_query=Botgrinder" },
      { name: "Le Drib", desc: "Freestyle FPV flying and tutorials.", url: "https://www.youtube.com/results?search_query=Le+Drib+FPV" },
      { name: "Rotor Riot", desc: "FPV freestyle, racing and how-tos.", url: "https://www.youtube.com/results?search_query=Rotor+Riot" },
      { name: "ArduPilot", desc: "Open-source autopilot for DIY drones, planes and rovers.", url: "https://www.youtube.com/results?search_query=ArduPilot" }
    ],
    newsSources: [
      { name: "Oscar Liang", url: "https://oscarliang.com/" },
      { name: "DroneDJ", url: "https://dronedj.com/" },
      { name: "DroneXL", url: "https://dronexl.co/" },
      { name: "Hackaday: Drones", url: "https://hackaday.com/category/drone-hacks/" },
      { name: "r/Multicopter", url: "https://www.reddit.com/r/Multicopter/" },
      { name: "Google News: FPV Drones", url: "https://news.google.com/search?q=%22FPV%20drone%22%20OR%20%22DIY%20drone%22" }
    ]
  },
  {
    id: "food",
    name: "Food",
    icon: "🍳",
    accent: "#ffb84d",
    tagline: "Cooking, recipes, food science and great eats",
    podcasts: [
      { name: "The Splendid Table", desc: "Public radio's long-running show for curious cooks.", url: "https://www.splendidtable.org/" },
      { name: "Milk Street Radio", desc: "Christopher Kimball on how to cook and eat better.", url: "https://www.177milkstreet.com/radio" },
      { name: "Gastropod", desc: "The science and history behind what we eat.", url: "https://gastropod.com/" },
      { name: "The Sporkful", desc: "Dan Pashman's show for eaters, not foodies.", url: "https://www.sporkful.com/" },
      { name: "Good Food (KCRW)", desc: "Evan Kleiman on food, cooks and restaurants.", url: "https://www.kcrw.com/culture/shows/good-food" },
      { name: "Home Cooking", desc: "Samin Nosrat and Hrishikesh Hirway answer cooking questions.", url: "https://podcasts.apple.com/us/search?term=Home%20Cooking%20Samin%20Nosrat" },
      { name: "Dinner SOS", desc: "America's Test Kitchen fixes your weeknight dinner problems.", url: "https://podcasts.apple.com/us/search?term=Dinner%20SOS" },
      { name: "Proof", desc: "America's Test Kitchen's stories behind the food.", url: "https://podcasts.apple.com/us/search?term=Proof%20America's%20Test%20Kitchen" },
      { name: "The Food Programme", desc: "BBC Radio 4's classic food documentary series.", url: "https://www.bbc.co.uk/programmes/b006qnx3" },
      { name: "Bon Appétit Foodcast", desc: "Recipes, techniques and tips from the BA kitchen.", url: "https://podcasts.apple.com/us/search?term=Bon%20Appetit%20Foodcast" }
    ],
    youtube: [
      { name: "J. Kenji López-Alt", desc: "POV cooking with the food-science legend.", url: "https://www.youtube.com/@JKenjiLopezAlt" },
      { name: "Joshua Weissman", desc: "Make it better than store-bought, from scratch.", url: "https://www.youtube.com/@JoshuaWeissman" },
      { name: "Babish Culinary Universe", desc: "Movie and TV foods plus cooking basics.", url: "https://www.youtube.com/@babishculinaryuniverse" },
      { name: "Adam Ragusea", desc: "Home cooking and the why behind it.", url: "https://www.youtube.com/@aragusea" },
      { name: "Ethan Chlebowski", desc: "Smarter home cooking and flavor building.", url: "https://www.youtube.com/@EthanChlebowski" },
      { name: "Food Wishes (Chef John)", desc: "Thousands of clear, friendly recipe videos.", url: "https://www.youtube.com/@foodwishes" },
      { name: "America's Test Kitchen", desc: "Tested recipes, equipment and taste tests.", url: "https://www.youtube.com/@americastestkitchen" },
      { name: "Internet Shaquille", desc: "Short, funny, practical cooking advice.", url: "https://www.youtube.com/@internetshaquille" },
      { name: "Gordon Ramsay", desc: "Quick recipes and restaurant technique.", url: "https://www.youtube.com/@gordonramsay" },
      { name: "Bon Appétit", desc: "Test kitchen recipes and food series.", url: "https://www.youtube.com/@bonappetit" }
    ],
    newsSources: [
      { name: "Serious Eats", url: "https://www.seriouseats.com/" },
      { name: "Eater", url: "https://www.eater.com/" },
      { name: "The Kitchn", url: "https://www.thekitchn.com/" },
      { name: "NYT Cooking", url: "https://cooking.nytimes.com/" },
      { name: "Budget Bytes", url: "https://www.budgetbytes.com/" },
      { name: "Google News: Food", url: "https://news.google.com/search?q=recipes%20OR%20cooking%20OR%20%22food%20science%22" }
    ]
  },
  {
    id: "longevity",
    name: "Longevity Hacks",
    icon: "🧬",
    accent: "#38e0c2",
    tagline: "Healthspan, sleep, exercise and the science of aging. Not medical advice.",
    podcasts: [
      { name: "The Drive (Peter Attia)", desc: "Deep dives on the science of living longer and better.", url: "https://peterattiamd.com/podcast/" },
      { name: "Huberman Lab", desc: "Neuroscience tools for sleep, focus and health.", url: "https://www.hubermanlab.com/podcast" },
      { name: "FoundMyFitness", desc: "Rhonda Patrick on aging, nutrition and healthspan.", url: "https://www.foundmyfitness.com/episodes" },
      { name: "STEM-Talk", desc: "Scientists on health, performance and aging research.", url: "https://www.ihmc.us/stemtalk/" },
      { name: "The Proof with Simon Hill", desc: "Evidence-based nutrition and longevity interviews.", url: "https://podcasts.apple.com/us/search?term=The%20Proof%20with%20Simon%20Hill" },
      { name: "ZOE Science & Nutrition", desc: "Gut health and nutrition research made practical.", url: "https://podcasts.apple.com/us/search?term=ZOE%20Science%20and%20Nutrition" },
      { name: "Lifespan with Dr. David Sinclair", desc: "The biology of aging, episode by episode.", url: "https://podcasts.apple.com/us/search?term=Lifespan%20with%20Dr%20David%20Sinclair" },
      { name: "Don't Die (Bryan Johnson)", desc: "Extreme-protocol experiments and guests.", url: "https://podcasts.apple.com/us/search?term=Bryan%20Johnson%20Don't%20Die" },
      { name: "The Doctor's Farmacy", desc: "Mark Hyman on food as medicine.", url: "https://podcasts.apple.com/us/search?term=The%20Doctor's%20Farmacy" },
      { name: "Ben Greenfield Life", desc: "Biohacking, fitness and longevity tactics.", url: "https://podcasts.apple.com/us/search?term=Ben%20Greenfield%20Life" }
    ],
    youtube: [
      { name: "Peter Attia MD", desc: "Clips on exercise, metabolic health and longevity.", url: "https://www.youtube.com/results?search_query=Peter+Attia+MD" },
      { name: "Andrew Huberman", desc: "Huberman Lab episodes and practical protocols.", url: "https://www.youtube.com/@hubermanlab" },
      { name: "FoundMyFitness", desc: "Rhonda Patrick's interviews and research summaries.", url: "https://www.youtube.com/results?search_query=FoundMyFitness+Rhonda+Patrick" },
      { name: "Dr. Brad Stanfield", desc: "A GP's evidence-based take on longevity.", url: "https://www.youtube.com/results?search_query=Dr+Brad+Stanfield" },
      { name: "Nutrition Made Simple!", desc: "Gil Carvalho breaks down nutrition studies.", url: "https://www.youtube.com/results?search_query=Nutrition+Made+Simple+Gil+Carvalho" },
      { name: "Physionic", desc: "Animated deep dives on metabolism and nutrition.", url: "https://www.youtube.com/results?search_query=Physionic" },
      { name: "Bryan Johnson", desc: "Blueprint protocol updates and measurements.", url: "https://www.youtube.com/results?search_query=Bryan+Johnson+Blueprint" },
      { name: "David Sinclair", desc: "Talks and Q&As on the biology of aging.", url: "https://www.youtube.com/results?search_query=David+Sinclair+aging" },
      { name: "ZOE", desc: "Gut health and nutrition science, short and clear.", url: "https://www.youtube.com/results?search_query=ZOE+science+nutrition" },
      { name: "The Proof (Simon Hill)", desc: "Nutrition science interviews on video.", url: "https://www.youtube.com/results?search_query=The+Proof+Simon+Hill" }
    ],
    newsSources: [
      { name: "Fight Aging!", url: "https://www.fightaging.org/" },
      { name: "Lifespan.io News", url: "https://www.lifespan.io/news/" },
      { name: "ScienceDaily: Healthy Aging", url: "https://www.sciencedaily.com/news/health_medicine/healthy_aging/" },
      { name: "Peter Attia Articles", url: "https://peterattiamd.com/articles/" },
      { name: "Examine", url: "https://examine.com/" },
      { name: "Google News: Longevity", url: "https://news.google.com/search?q=longevity%20OR%20healthspan%20OR%20%22aging%20research%22" }
    ]
  },
  {
    id: "printing",
    name: "3D Printing",
    icon: "🖨️",
    accent: "#ff8a3d",
    tagline: "FDM, resin, filaments, CAD and slicing",
    podcasts: [
      { name: "3D Printing Today", desc: "Long-running weekly show on desktop 3D printing.", url: "https://podcasts.apple.com/us/search?term=3D%20Printing%20Today" },
      { name: "3DPOD", desc: "3DPrint.com's interviews across the 3D printing world.", url: "https://podcasts.apple.com/us/search?term=3DPOD%203DPrint.com" },
      { name: "Printing Money", desc: "Industry news and analysis on additive manufacturing.", url: "https://podcasts.apple.com/us/search?term=Printing%20Money%20additive%20manufacturing" },
      { name: "The Additive Snack", desc: "Short, friendly dives into additive manufacturing.", url: "https://podcasts.apple.com/us/search?term=The%20Additive%20Snack" },
      { name: "The Cool Parts Show", desc: "Stories behind remarkable 3D printed parts.", url: "https://podcasts.apple.com/us/search?term=The%20Cool%20Parts%20Show" },
      { name: "AM Radio", desc: "Additive Manufacturing Media's podcast.", url: "https://podcasts.apple.com/us/search?term=AM%20Radio%20Additive%20Manufacturing" },
      { name: "3D Hangouts (Adafruit)", desc: "Weekly 3D design and printing projects from Adafruit.", url: "https://podcasts.apple.com/us/search?term=3D%20Hangouts%20Adafruit" },
      { name: "Hackaday Podcast", desc: "Weekly hacks, with plenty of 3D printing.", url: "https://hackaday.libsyn.com/" },
      { name: "The Electromaker Show", desc: "Weekly maker news including new printers.", url: "https://www.electromaker.io/blog/article/the-electromaker-show-podcast" },
      { name: "The Adam Savage Project", desc: "Adam Savage on making, tools and builds.", url: "https://podcasts.apple.com/us/search?term=Still%20Untitled%20The%20Adam%20Savage%20Project" }
    ],
    youtube: [
      { name: "CNC Kitchen", desc: "Stefan tests strength, settings and materials scientifically.", url: "https://www.youtube.com/@CNCKitchen" },
      { name: "Maker's Muse", desc: "Design tips, printer reviews and clever prints.", url: "https://www.youtube.com/@MakersMuse" },
      { name: "Thomas Sanladerer", desc: "Thoughtful printer reviews and deep dives.", url: "https://www.youtube.com/@ThomasSanladerer" },
      { name: "Teaching Tech", desc: "Calibration guides and printer upgrades.", url: "https://www.youtube.com/@TeachingTech" },
      { name: "Uncle Jessy", desc: "Printer reviews and fun projects.", url: "https://www.youtube.com/@UncleJessy" },
      { name: "3D Printing Nerd", desc: "Joel's prints, events and printer news.", url: "https://www.youtube.com/@3DPrintingNerd" },
      { name: "Slant 3D", desc: "Print farm know-how and design for printing.", url: "https://www.youtube.com/@Slant3D" },
      { name: "CHEP (Filament Friday)", desc: "Weekly beginner-friendly printing tips.", url: "https://www.youtube.com/results?search_query=CHEP+Filament+Friday" },
      { name: "Lost in Tech", desc: "Printer reviews, mods and comparisons.", url: "https://www.youtube.com/results?search_query=Lost+in+Tech+3D+printing" },
      { name: "Nero 3dp", desc: "High-speed printing and hardware deep dives.", url: "https://www.youtube.com/results?search_query=Nero+3dp" }
    ],
    newsSources: [
      { name: "3DPrint.com", url: "https://3dprint.com/" },
      { name: "Fabbaloo", url: "https://www.fabbaloo.com/" },
      { name: "Hackaday: 3D Printer Hacks", url: "https://hackaday.com/category/3d-printer-hacks/" },
      { name: "All3DP", url: "https://all3dp.com/" },
      { name: "Printables", url: "https://www.printables.com/" },
      { name: "Google News: 3D Printing", url: "https://news.google.com/search?q=%223D%20printing%22%20OR%20%223D%20printer%22" }
    ]
  },
  {
    id: "bambu",
    name: "Bambu Lab",
    icon: "🟩",
    accent: "#00c853",
    tagline: "X1, P1, A1 and H2 printers, AMS, MakerWorld",
    labels: { podcasts: "Guides" },
    podcasts: [
      { name: "Bambu Lab Wiki", desc: "Official guides, maintenance and troubleshooting.", url: "https://wiki.bambulab.com/" },
      { name: "MakerWorld", desc: "Bambu's model library with one-tap printing.", url: "https://makerworld.com/" },
      { name: "Bambu Studio", desc: "Download the official slicer.", url: "https://bambulab.com/en/download/studio" },
      { name: "Bambu Lab Forum", desc: "Official community forum for questions and fixes.", url: "https://forum.bambulab.com/" },
      { name: "r/BambuLab", desc: "The busy Reddit community for Bambu owners.", url: "https://www.reddit.com/r/BambuLab/" },
      { name: "Bambu Lab Blog", desc: "Product news and firmware announcements.", url: "https://blog.bambulab.com/" },
      { name: "BambuStudio on GitHub", desc: "Release notes and source for the slicer.", url: "https://github.com/bambulab/BambuStudio" },
      { name: "Bambu Lab Store", desc: "Printers, AMS, filament and spare parts.", url: "https://bambulab.com/" },
      { name: "Printables", desc: "Huge free model library that works great with Bambu.", url: "https://www.printables.com/" },
      { name: "Podcast episodes about Bambu", desc: "Search podcast episodes that cover Bambu Lab.", url: "https://podcasts.apple.com/us/search?term=Bambu%20Lab" }
    ],
    youtube: [
      { name: "Bambu Lab (official)", desc: "Product launches, tutorials and maintenance.", url: "https://www.youtube.com/results?search_query=Bambu+Lab+official" },
      { name: "Teaching Tech on Bambu", desc: "Setup, calibration and upgrade guides.", url: "https://www.youtube.com/results?search_query=Teaching+Tech+Bambu+Lab" },
      { name: "CNC Kitchen on Bambu", desc: "Strength tests and settings on Bambu printers.", url: "https://www.youtube.com/results?search_query=CNC+Kitchen+Bambu" },
      { name: "Uncle Jessy on Bambu", desc: "Reviews and projects with Bambu printers.", url: "https://www.youtube.com/results?search_query=Uncle+Jessy+Bambu+Lab" },
      { name: "Maker's Muse on Bambu", desc: "Honest reviews and design tips for Bambu.", url: "https://www.youtube.com/results?search_query=Makers+Muse+Bambu+Lab" },
      { name: "Thomas Sanladerer on Bambu", desc: "In-depth Bambu reviews and analysis.", url: "https://www.youtube.com/results?search_query=Thomas+Sanladerer+Bambu" },
      { name: "3D Printing Nerd on Bambu", desc: "Bambu launches, prints and events.", url: "https://www.youtube.com/results?search_query=3D+Printing+Nerd+Bambu" },
      { name: "AMS tips and tricks", desc: "Multi-color printing with the AMS.", url: "https://www.youtube.com/results?search_query=Bambu+AMS+tips+multicolor" },
      { name: "Bambu maintenance guides", desc: "Nozzle swaps, cleaning and lubrication.", url: "https://www.youtube.com/results?search_query=Bambu+Lab+maintenance+guide" },
      { name: "Best Bambu upgrades", desc: "Mods and accessories worth printing.", url: "https://www.youtube.com/results?search_query=best+Bambu+Lab+upgrades+mods" }
    ],
    newsSources: [
      { name: "Bambu Lab Blog", url: "https://blog.bambulab.com/" },
      { name: "Bambu Lab Wiki", url: "https://wiki.bambulab.com/" },
      { name: "MakerWorld", url: "https://makerworld.com/" },
      { name: "Bambu Lab Forum", url: "https://forum.bambulab.com/" },
      { name: "r/BambuLab", url: "https://www.reddit.com/r/BambuLab/" },
      { name: "Google News: Bambu Lab", url: "https://news.google.com/search?q=%22Bambu%20Lab%22" }
    ]
  },
  {
    id: "travel",
    name: "Traveling",
    icon: "🧳",
    accent: "#4dd0e1",
    tagline: "Road trips USA, Europe, Asia and camping",
    subs: [
      {
        id: "roadtrips",
        name: "Road Trips USA",
        icon: "🛣️",
        podcasts: [
          { name: "The RV Atlas", desc: "Jeremy and Stephanie Puglisi on RV trips and campgrounds.", url: "https://podcasts.apple.com/us/search?term=The%20RV%20Atlas" },
          { name: "RV Miles", desc: "Weekly RV travel stories, routes and tips.", url: "https://podcasts.apple.com/us/search?term=RV%20Miles%20Podcast" },
          { name: "National Parks Traveler", desc: "News and stories from America's national parks.", url: "https://podcasts.apple.com/us/search?term=National%20Parks%20Traveler" },
          { name: "Amateur Traveler", desc: "Chris Christensen's destination episodes, many US road trips.", url: "https://amateurtraveler.com/" },
          { name: "Zero To Travel", desc: "Practical travel inspiration and road-trip know-how.", url: "https://podcasts.apple.com/us/search?term=Zero%20To%20Travel" },
          { name: "Atlas Obscura Podcast", desc: "Short daily stories about strange and wonderful places.", url: "https://podcasts.apple.com/us/search?term=Atlas%20Obscura%20Podcast" },
          { name: "Overland Journal Podcast", desc: "Vehicle-based travel, gear and routes.", url: "https://podcasts.apple.com/us/search?term=Overland%20Journal%20Podcast" },
          { name: "Extra Pack of Peanuts", desc: "Travel hacking and trip planning.", url: "https://podcasts.apple.com/us/search?term=Extra%20Pack%20of%20Peanuts" },
          { name: "National Park After Dark", desc: "True stories from the parks, great for long drives.", url: "https://podcasts.apple.com/us/podcast/national-park-after-dark/id1549433407" },
          { name: "Route 66 stories", desc: "Episodes about the Mother Road and classic drives.", url: "https://podcasts.apple.com/us/search?term=Route%2066" }
        ],
        youtube: [
          { name: "Kara and Nate", desc: "Couple traveling every US state and the world.", url: "https://www.youtube.com/results?search_query=Kara+and+Nate" },
          { name: "Eamon & Bec", desc: "Van life across America.", url: "https://www.youtube.com/results?search_query=Eamon+and+Bec+van+life" },
          { name: "Nomadic Fanatic", desc: "Solo RV life on the road across the US.", url: "https://www.youtube.com/results?search_query=Nomadic+Fanatic" },
          { name: "Long Long Honeymoon", desc: "Airstream travel tips and destinations.", url: "https://www.youtube.com/results?search_query=Long+Long+Honeymoon" },
          { name: "Weekend Wanderer", desc: "Hidden gems and national park itineraries.", url: "https://www.youtube.com/results?search_query=national+park+road+trip+itinerary" },
          { name: "Route 66 drives", desc: "Full road-trip guides for Route 66.", url: "https://www.youtube.com/results?search_query=Route+66+road+trip+guide" },
          { name: "Pacific Coast Highway", desc: "Drive guides for Highway 1 in California.", url: "https://www.youtube.com/results?search_query=Pacific+Coast+Highway+road+trip+guide" },
          { name: "Utah Mighty 5", desc: "Road-trip plans for Zion, Bryce, Arches and more.", url: "https://www.youtube.com/results?search_query=Utah+Mighty+5+road+trip" },
          { name: "Blue Ridge Parkway", desc: "Fall drives and stops on the parkway.", url: "https://www.youtube.com/results?search_query=Blue+Ridge+Parkway+road+trip" },
          { name: "Alaska road trips", desc: "Driving the Alaska Highway and beyond.", url: "https://www.youtube.com/results?search_query=Alaska+road+trip" }
        ],
        newsSources: [
          { name: "NPS Alerts & News", url: "https://www.nps.gov/aboutus/news/index.htm" },
          { name: "Roadtrippers Blog", url: "https://roadtrippers.com/magazine/" },
          { name: "National Parks Traveler", url: "https://www.nationalparkstraveler.org/" },
          { name: "Atlas Obscura: USA", url: "https://www.atlasobscura.com/things-to-do/united-states" },
          { name: "Gas prices (GasBuddy)", url: "https://www.gasbuddy.com/" },
          { name: "Google News: Road Trips", url: "https://news.google.com/search?q=%22road%20trip%22%20USA%20OR%20%22national%20parks%22" }
        ]
      },
      {
        id: "europe",
        name: "Europe",
        icon: "🏰",
        podcasts: [
          { name: "Travel with Rick Steves", desc: "The classic weekly show on European travel.", url: "https://podcasts.apple.com/us/search?term=Travel%20with%20Rick%20Steves" },
          { name: "Amateur Traveler", desc: "Detailed episodes on European destinations.", url: "https://amateurtraveler.com/" },
          { name: "Women Who Travel", desc: "Condé Nast Traveler's stories and tips.", url: "https://podcasts.apple.com/us/search?term=Women%20Who%20Travel%20Conde%20Nast" },
          { name: "The Travel Diaries", desc: "Holly Rubenstein's guests share favorite trips.", url: "https://podcasts.apple.com/us/search?term=The%20Travel%20Diaries%20Holly%20Rubenstein" },
          { name: "Europe Uncovered", desc: "Episodes on traveling Europe beyond the big cities.", url: "https://podcasts.apple.com/us/search?term=Europe%20travel%20podcast" },
          { name: "Monocle: The Urbanist", desc: "Cities and urban life around the world.", url: "https://podcasts.apple.com/us/search?term=Monocle%20The%20Urbanist" },
          { name: "Zero To Travel", desc: "Practical long-term travel advice.", url: "https://podcasts.apple.com/us/search?term=Zero%20To%20Travel" },
          { name: "Extra Pack of Peanuts", desc: "Travel hacking for Europe trips.", url: "https://podcasts.apple.com/us/search?term=Extra%20Pack%20of%20Peanuts" },
          { name: "Join Us in France", desc: "All about France, region by region.", url: "https://podcasts.apple.com/us/search?term=Join%20Us%20in%20France" },
          { name: "Italy Unpacked", desc: "Stories and tips about Italy.", url: "https://podcasts.apple.com/us/search?term=Italy%20travel%20podcast" }
        ],
        youtube: [
          { name: "Rick Steves' Europe", desc: "Full TV episodes on Europe's best places.", url: "https://www.youtube.com/results?search_query=Rick+Steves+Europe" },
          { name: "Wolters World", desc: "Honest do's and don'ts for every country.", url: "https://www.youtube.com/results?search_query=Wolters+World+Europe" },
          { name: "Kara and Nate in Europe", desc: "Budget and highlight trips across Europe.", url: "https://www.youtube.com/results?search_query=Kara+and+Nate+Europe" },
          { name: "Hey Nadine", desc: "Practical European travel guides.", url: "https://www.youtube.com/results?search_query=Hey+Nadine+Europe" },
          { name: "Rick Steves' Travel Talks", desc: "Hour-long talks on planning trips.", url: "https://www.youtube.com/results?search_query=Rick+Steves+travel+talks" },
          { name: "Europe by train", desc: "Rail passes, routes and night trains.", url: "https://www.youtube.com/results?search_query=Europe+by+train+guide" },
          { name: "Germany travel guides", desc: "Cities, castles and the Autobahn.", url: "https://www.youtube.com/results?search_query=Germany+travel+guide" },
          { name: "Italy travel guides", desc: "Rome, Tuscany, Amalfi and more.", url: "https://www.youtube.com/results?search_query=Italy+travel+guide" },
          { name: "Driving in Europe", desc: "Rules, tolls and rental tips.", url: "https://www.youtube.com/results?search_query=driving+in+Europe+tips" },
          { name: "Alps road trips", desc: "Mountain passes and scenic drives.", url: "https://www.youtube.com/results?search_query=Alps+road+trip" }
        ],
        newsSources: [
          { name: "Rick Steves Travel News", url: "https://www.ricksteves.com/watch-read-listen/read/articles" },
          { name: "The Local Europe", url: "https://www.thelocal.com/" },
          { name: "Euronews Travel", url: "https://www.euronews.com/travel" },
          { name: "Seat 61 (train travel)", url: "https://www.seat61.com/" },
          { name: "EU Travel Rules (ETIAS)", url: "https://travel-europe.europa.eu/etias_en" },
          { name: "Google News: Europe Travel", url: "https://news.google.com/search?q=Europe%20travel" }
        ]
      },
      {
        id: "asia",
        name: "Asia",
        icon: "🏯",
        podcasts: [
          { name: "Amateur Traveler", desc: "Destination episodes across Asia.", url: "https://amateurtraveler.com/" },
          { name: "Japan Station", desc: "All things Japan travel and culture.", url: "https://podcasts.apple.com/us/search?term=Japan%20Station" },
          { name: "Tokyo Cheapo", desc: "Budget tips for traveling Japan.", url: "https://podcasts.apple.com/us/search?term=Tokyo%20Cheapo" },
          { name: "Women Who Travel", desc: "Stories and tips, often from Asia.", url: "https://podcasts.apple.com/us/search?term=Women%20Who%20Travel%20Conde%20Nast" },
          { name: "Zero To Travel", desc: "Long-term travel and Southeast Asia know-how.", url: "https://podcasts.apple.com/us/search?term=Zero%20To%20Travel" },
          { name: "Extra Pack of Peanuts", desc: "Flights, points and Asia itineraries.", url: "https://podcasts.apple.com/us/search?term=Extra%20Pack%20of%20Peanuts" },
          { name: "Travel with Rick Steves", desc: "Occasional episodes on Asia too.", url: "https://podcasts.apple.com/us/search?term=Travel%20with%20Rick%20Steves" },
          { name: "The Thailand Podcast", desc: "Living in and traveling Thailand.", url: "https://podcasts.apple.com/us/search?term=Thailand%20travel%20podcast" },
          { name: "Korea travel episodes", desc: "Seoul, Busan and beyond.", url: "https://podcasts.apple.com/us/search?term=Korea%20travel%20podcast" },
          { name: "Vietnam travel episodes", desc: "Hanoi to Ho Chi Minh City.", url: "https://podcasts.apple.com/us/search?term=Vietnam%20travel%20podcast" }
        ],
        youtube: [
          { name: "Abroad in Japan", desc: "Chris Broad explores Japan with humor.", url: "https://www.youtube.com/results?search_query=Abroad+in+Japan" },
          { name: "Paolo fromTOKYO", desc: "Japanese life, food and travel.", url: "https://www.youtube.com/results?search_query=Paolo+fromTOKYO" },
          { name: "Mark Wiens", desc: "Street food across Asia.", url: "https://www.youtube.com/results?search_query=Mark+Wiens" },
          { name: "Best Ever Food Review Show", desc: "Wild food adventures, especially Asia.", url: "https://www.youtube.com/results?search_query=Best+Ever+Food+Review+Show" },
          { name: "Drew Binsky", desc: "Visiting every country, many in Asia.", url: "https://www.youtube.com/results?search_query=Drew+Binsky+Asia" },
          { name: "Lost LeBlanc", desc: "Cinematic travel guides to Southeast Asia.", url: "https://www.youtube.com/results?search_query=Lost+LeBlanc" },
          { name: "Japan travel guides", desc: "First-timer guides for Tokyo, Kyoto and Osaka.", url: "https://www.youtube.com/results?search_query=Japan+travel+guide+first+time" },
          { name: "Thailand travel guides", desc: "Bangkok, Chiang Mai and the islands.", url: "https://www.youtube.com/results?search_query=Thailand+travel+guide" },
          { name: "Vietnam travel guides", desc: "Itineraries and costs for Vietnam.", url: "https://www.youtube.com/results?search_query=Vietnam+travel+guide" },
          { name: "South Korea travel guides", desc: "Seoul and beyond.", url: "https://www.youtube.com/results?search_query=South+Korea+travel+guide" }
        ],
        newsSources: [
          { name: "Japan Guide", url: "https://www.japan-guide.com/" },
          { name: "Tokyo Cheapo", url: "https://tokyocheapo.com/" },
          { name: "Travel Off Path: Asia", url: "https://www.traveloffpath.com/category/asia/" },
          { name: "South China Morning Post: Travel", url: "https://www.scmp.com/lifestyle/travel-leisure" },
          { name: "Nikkei Asia", url: "https://asia.nikkei.com/" },
          { name: "Google News: Asia Travel", url: "https://news.google.com/search?q=Asia%20travel%20OR%20Japan%20travel" }
        ]
      },
      {
        id: "camping",
        name: "Camping",
        icon: "🏕️",
        podcasts: [
          { name: "The Dirtbag Diaries", desc: "Stories from people who love the outdoors.", url: "https://podcasts.apple.com/us/podcast/the-dirtbag-diaries/id218290471" },
          { name: "Backpacker Radio", desc: "The Trek's show on hiking and backpacking.", url: "https://podcasts.apple.com/us/podcast/backpacker-radio/id1339028551" },
          { name: "She Explores", desc: "Women outdoors (ended 2023, great archive).", url: "https://podcasts.apple.com/us/podcast/she-explores/id1124566025" },
          { name: "The RV Atlas", desc: "Campgrounds and family camping trips.", url: "https://podcasts.apple.com/us/search?term=The%20RV%20Atlas" },
          { name: "Outside Podcast", desc: "Survival stories and outdoor science.", url: "https://podcasts.apple.com/us/search?term=Outside%20Podcast" },
          { name: "Wild Ideas Worth Living", desc: "REI's interviews with adventurers.", url: "https://podcasts.apple.com/us/podcast/wild-ideas-worth-living/id1183017174" },
          { name: "National Park After Dark", desc: "Campfire stories from the parks.", url: "https://podcasts.apple.com/us/podcast/national-park-after-dark/id1549433407" },
          { name: "RV Miles", desc: "RV camping destinations and tips.", url: "https://podcasts.apple.com/us/search?term=RV%20Miles%20Podcast" },
          { name: "Overland Journal Podcast", desc: "Overlanding, rooftop tents and gear.", url: "https://podcasts.apple.com/us/search?term=Overland%20Journal%20Podcast" },
          { name: "The MeatEater Podcast", desc: "Steven Rinella on hunting, fishing and the wild.", url: "https://podcasts.apple.com/us/search?term=The%20MeatEater%20Podcast" }
        ],
        youtube: [
          { name: "Outdoor Boys", desc: "Extreme camping, shelters and cooking.", url: "https://www.youtube.com/results?search_query=Outdoor+Boys" },
          { name: "My Self Reliance", desc: "Cabin building and quiet camping.", url: "https://www.youtube.com/results?search_query=My+Self+Reliance" },
          { name: "TA Outdoors", desc: "Bushcraft and solo camping in all weather.", url: "https://www.youtube.com/results?search_query=TA+Outdoors" },
          { name: "Darwin onthetrail", desc: "Thru-hiking and backpacking advice.", url: "https://www.youtube.com/results?search_query=Darwin+onthetrail" },
          { name: "Kraig Adams", desc: "Calm solo hikes and camping trips.", url: "https://www.youtube.com/results?search_query=Kraig+Adams+hiking" },
          { name: "Steve Wallis", desc: "Fun, low-budget stealth camping.", url: "https://www.youtube.com/results?search_query=Steve+Wallis+camping" },
          { name: "Car camping setups", desc: "Sleep in your car comfortably.", url: "https://www.youtube.com/results?search_query=car+camping+setup+guide" },
          { name: "Camping gear reviews", desc: "Tents, stoves and sleep systems tested.", url: "https://www.youtube.com/results?search_query=best+camping+gear+review" },
          { name: "Camp cooking", desc: "Easy campfire and stove recipes.", url: "https://www.youtube.com/results?search_query=camp+cooking+recipes" },
          { name: "Off-grid power for camping", desc: "Solar generators and 12V setups.", url: "https://www.youtube.com/results?search_query=camping+solar+power+setup" }
        ],
        newsSources: [
          { name: "Recreation.gov", url: "https://www.recreation.gov/" },
          { name: "NPS Camping", url: "https://www.nps.gov/subjects/camping/index.htm" },
          { name: "The Dyrt", url: "https://thedyrt.com/" },
          { name: "Hipcamp", url: "https://www.hipcamp.com/" },
          { name: "REI Expert Advice", url: "https://www.rei.com/learn/expert-advice" },
          { name: "Google News: Camping", url: "https://news.google.com/search?q=camping%20OR%20campground" }
        ]
      }
    ]
  },
  {
    id: "sandiego",
    name: "San Diego",
    icon: "🌴",
    accent: "#ffcc4d",
    tagline: "Today, this week, trails, breweries, nightlife and local news",
    subs: [
      {
        id: "sd-today",
        name: "Today",
        icon: "📅",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Eventbrite: today", desc: "Events happening in San Diego today.", url: "https://www.eventbrite.com/d/ca--san-diego/events--today/" },
          { name: "Do619", desc: "San Diego's local event and concert calendar.", url: "https://do619.com/" },
          { name: "San Diego Reader events", desc: "Shows, markets and things to do.", url: "https://www.sandiegoreader.com/events/" },
          { name: "Balboa Park events", desc: "Museums, concerts and festivals in the park.", url: "https://www.balboapark.org/events" },
          { name: "Padres schedule", desc: "Is there a game at Petco Park today?", url: "https://www.mlb.com/padres/schedule" },
          { name: "Weather today", desc: "National Weather Service forecast for San Diego.", url: "https://forecast.weather.gov/MapClick.php?CityName=San+Diego&state=CA" },
          { name: "Surf report", desc: "Waves and conditions at San Diego beaches.", url: "https://www.google.com/search?q=Surfline+San+Diego+surf+report" },
          { name: "Farmers markets today", desc: "Find a market open today.", url: "https://www.google.com/search?q=San+Diego+farmers+market+today" },
          { name: "Happy hours today", desc: "Deals near you right now.", url: "https://www.google.com/search?q=San+Diego+happy+hour+today" },
          { name: "Free things to do today", desc: "No-cost ideas around the county.", url: "https://www.google.com/search?q=free+things+to+do+in+San+Diego+today" }
        ],
        youtube: [
          { name: "Things to do in San Diego", desc: "Video guides to the city's highlights.", url: "https://www.youtube.com/results?search_query=things+to+do+in+San+Diego" },
          { name: "San Diego hidden gems", desc: "Lesser-known spots locals love.", url: "https://www.youtube.com/results?search_query=San+Diego+hidden+gems" },
          { name: "San Diego beaches guide", desc: "Which beach to pick today.", url: "https://www.youtube.com/results?search_query=San+Diego+best+beaches+guide" },
          { name: "San Diego food spots", desc: "Tacos, fish and more.", url: "https://www.youtube.com/results?search_query=best+food+San+Diego" },
          { name: "San Diego sunset spots", desc: "Where to watch the sunset.", url: "https://www.youtube.com/results?search_query=best+sunset+spots+San+Diego" },
          { name: "Rainy day in San Diego", desc: "Indoor ideas for gray days.", url: "https://www.youtube.com/results?search_query=rainy+day+things+to+do+San+Diego" }
        ],
        newsSources: [
          { name: "Eventbrite: today", url: "https://www.eventbrite.com/d/ca--san-diego/events--today/" },
          { name: "Do619", url: "https://do619.com/" },
          { name: "San Diego Reader", url: "https://www.sandiegoreader.com/events/" },
          { name: "Google News: SD events", url: "https://news.google.com/search?q=San%20Diego%20events%20today" }
        ]
      },
      {
        id: "sd-week",
        name: "This Week",
        icon: "🗓️",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Eventbrite: this week", desc: "Everything on in San Diego this week.", url: "https://www.eventbrite.com/d/ca--san-diego/events--this-week/" },
          { name: "Eventbrite: this weekend", desc: "Plans for Saturday and Sunday.", url: "https://www.eventbrite.com/d/ca--san-diego/events--this-weekend/" },
          { name: "Do619", desc: "Concerts, comedy and parties by day.", url: "https://do619.com/" },
          { name: "San Diego Reader events", desc: "The full local events calendar.", url: "https://www.sandiegoreader.com/events/" },
          { name: "Meetup: San Diego", desc: "Groups for biking, hiking, tech and more.", url: "https://www.meetup.com/find/?location=us--ca--San%20Diego" },
          { name: "Concerts this week", desc: "Live music around the county.", url: "https://www.google.com/search?q=San+Diego+concerts+this+week" },
          { name: "Comedy this week", desc: "Stand-up shows and open mics.", url: "https://www.google.com/search?q=San+Diego+comedy+shows+this+week" },
          { name: "Theater this week", desc: "Old Globe, La Jolla Playhouse and more.", url: "https://www.google.com/search?q=San+Diego+theater+this+week" },
          { name: "Padres schedule", desc: "Home games this week.", url: "https://www.mlb.com/padres/schedule" },
          { name: "7-day forecast", desc: "Plan around the weather.", url: "https://forecast.weather.gov/MapClick.php?CityName=San+Diego&state=CA" }
        ],
        youtube: [
          { name: "San Diego weekend ideas", desc: "Video ideas for the weekend.", url: "https://www.youtube.com/results?search_query=San+Diego+weekend+things+to+do" },
          { name: "San Diego day trips", desc: "Julian, Temecula, Borrego and more.", url: "https://www.youtube.com/results?search_query=San+Diego+day+trips" },
          { name: "Julian day trip", desc: "Apple pie and mountain town fun.", url: "https://www.youtube.com/results?search_query=Julian+California+day+trip" },
          { name: "Temecula wine country", desc: "Wineries an hour north.", url: "https://www.youtube.com/results?search_query=Temecula+wine+country+guide" },
          { name: "Anza-Borrego trip", desc: "Desert art and wildflowers.", url: "https://www.youtube.com/results?search_query=Anza+Borrego+day+trip" },
          { name: "La Jolla guide", desc: "Seals, caves and kayaking.", url: "https://www.youtube.com/results?search_query=La+Jolla+things+to+do" }
        ],
        newsSources: [
          { name: "Eventbrite: this week", url: "https://www.eventbrite.com/d/ca--san-diego/events--this-week/" },
          { name: "Meetup", url: "https://www.meetup.com/find/?location=us--ca--San%20Diego" },
          { name: "Do619", url: "https://do619.com/" },
          { name: "Google News: SD this week", url: "https://news.google.com/search?q=San%20Diego%20this%20week%20events" }
        ]
      },
      {
        id: "sd-wx",
        name: "Weather",
        icon: "🌤️",
        labels: {
          podcasts: "Guides"
        },
        weather: {
          name: "San Diego",
          lat: 32.7157,
          lon: -117.1611
        },
        podcasts: [
          {
            name: "NWS San Diego forecast",
            desc: "Official 7-day forecast for downtown San Diego.",
            url: "https://forecast.weather.gov/MapClick.php?lat=32.7157&lon=-117.1611"
          },
          {
            name: "NWS San Diego office",
            desc: "Forecast discussion, warnings and Santa Ana wind alerts.",
            url: "https://www.weather.gov/sgx/"
          },
          {
            name: "Live radar",
            desc: "National Weather Service radar loop.",
            url: "https://radar.weather.gov/"
          },
          {
            name: "Windy: San Diego",
            desc: "Animated wind, rain and swell maps.",
            url: "https://www.windy.com/32.716/-117.161"
          },
          {
            name: "Surf and swell",
            desc: "Surf forecasts and beach cams for SD spots.",
            url: "https://www.surfline.com/"
          },
          {
            name: "Ocean water temps",
            desc: "NOAA coastal water temperatures for Southern California.",
            url: "https://www.google.com/search?q=NOAA+San+Diego+water+temperature"
          },
          {
            name: "Air quality",
            desc: "AirNow AQI for San Diego.",
            url: "https://www.airnow.gov/?city=San%20Diego&state=CA&country=USA"
          },
          {
            name: "Inland vs coast",
            desc: "Forecast for East County (El Cajon).",
            url: "https://forecast.weather.gov/MapClick.php?lat=32.7948&lon=-116.9625"
          },
          {
            name: "Mountains (Julian)",
            desc: "Forecast for the mountains, snow in winter.",
            url: "https://forecast.weather.gov/MapClick.php?lat=33.0787&lon=-116.602"
          },
          {
            name: "Desert (Borrego)",
            desc: "Forecast for Anza-Borrego desert trips.",
            url: "https://forecast.weather.gov/MapClick.php?lat=33.2559&lon=-116.375"
          }
        ],
        youtube: [
          {
            name: "NWS San Diego",
            desc: "Briefings from the San Diego weather office.",
            url: "https://www.youtube.com/results?search_query=NWS+San+Diego+weather+briefing"
          },
          {
            name: "NBC 7 San Diego weather",
            desc: "Local TV forecasts.",
            url: "https://www.youtube.com/results?search_query=NBC+7+San+Diego+weather+forecast"
          },
          {
            name: "FOX 5 San Diego weather",
            desc: "Local TV forecasts.",
            url: "https://www.youtube.com/results?search_query=FOX+5+San+Diego+weather"
          },
          {
            name: "10News San Diego weather",
            desc: "Local TV forecasts.",
            url: "https://www.youtube.com/results?search_query=10News+San+Diego+weather+forecast"
          },
          {
            name: "Santa Ana winds explained",
            desc: "Why SD gets hot, dry offshore winds.",
            url: "https://www.youtube.com/results?search_query=Santa+Ana+winds+explained"
          },
          {
            name: "May Gray and June Gloom",
            desc: "Why the coast stays cloudy in early summer.",
            url: "https://www.youtube.com/results?search_query=May+Gray+June+Gloom+explained"
          },
          {
            name: "Marine layer explained",
            desc: "The fog machine behind SD weather.",
            url: "https://www.youtube.com/results?search_query=marine+layer+explained+San+Diego"
          },
          {
            name: "Ryan Hall, Y'all",
            desc: "Big-picture US weather and storms.",
            url: "https://www.youtube.com/results?search_query=Ryan+Hall+Yall"
          },
          {
            name: "Max Velocity",
            desc: "Severe weather and storm breakdowns.",
            url: "https://www.youtube.com/results?search_query=Max+Velocity+weather"
          },
          {
            name: "Atmospheric rivers explained",
            desc: "SoCal's big winter rain storms.",
            url: "https://www.youtube.com/results?search_query=atmospheric+river+California+explained"
          }
        ],
        newsSources: [
          {
            name: "NWS San Diego",
            url: "https://www.weather.gov/sgx/"
          },
          {
            name: "Google News: SD weather",
            url: "https://news.google.com/search?q=San%20Diego%20weather"
          },
          {
            name: "San Diego Union-Tribune",
            url: "https://www.sandiegouniontribune.com/"
          },
          {
            name: "NBC 7 San Diego",
            url: "https://www.nbcsandiego.com/weather/"
          }
        ]
      },
      {
        id: "sd-mtb",
        name: "Mountain Biking",
        icon: "🚵",
        podcasts: [
          { name: "The Pinkbike Podcast", desc: "Bikes, gear and racing talk from Pinkbike.", url: "https://podcasts.apple.com/us/podcast/the-pinkbike-podcast/id1505577005" },
          { name: "Downtime Podcast", desc: "Interviews with mountain bike riders and racers.", url: "https://podcasts.apple.com/us/podcast/downtime-the-mountain-bike-podcast/id1202593158" },
          { name: "Blister Podcast", desc: "Gear reviews and conversations about riding.", url: "https://podcasts.apple.com/us/podcast/blister-podcast/id1066375775" },
          { name: "Singletracks Podcast", desc: "Trails, bikes and the MTB community.", url: "https://podcasts.apple.com/us/podcast/singletracks-mountain-bike-podcast/id1046094700" },
          { name: "GMBN Presents The Mountain Bike Podcast", desc: "Global Mountain Bike Network chats and news.", url: "https://podcasts.apple.com/us/podcast/gmbn-presents-the-mountain-bike-podcast/id1461786022" }
        ],
        youtube: [
          { name: "GMBN", desc: "Global Mountain Bike Network: skills and tech.", url: "https://www.youtube.com/results?search_query=GMBN+Global+Mountain+Bike+Network" },
          { name: "Berm Peak", desc: "Seth's bike builds and trail adventures.", url: "https://www.youtube.com/results?search_query=Berm+Peak" },
          { name: "Skills with Phil", desc: "Learn to ride better, step by step.", url: "https://www.youtube.com/results?search_query=Skills+with+Phil" },
          { name: "Noble Canyon", desc: "San Diego's classic epic trail.", url: "https://www.youtube.com/results?search_query=Noble+Canyon+mountain+bike" },
          { name: "Daley Ranch", desc: "Escondido trail network rides.", url: "https://www.youtube.com/results?search_query=Daley+Ranch+mountain+bike" },
          { name: "Black Mountain", desc: "Rides at Black Mountain Open Space Park.", url: "https://www.youtube.com/results?search_query=Black+Mountain+San+Diego+mountain+bike" },
          { name: "Mission Trails", desc: "Riding Mission Trails Regional Park.", url: "https://www.youtube.com/results?search_query=Mission+Trails+mountain+bike" },
          { name: "Lake Hodges", desc: "Flowy trails around Lake Hodges.", url: "https://www.youtube.com/results?search_query=Lake+Hodges+mountain+bike" },
          { name: "Sycamore Canyon", desc: "Goodan Ranch and Sycamore Canyon rides.", url: "https://www.youtube.com/results?search_query=Sycamore+Canyon+Goodan+Ranch+mountain+bike" },
          { name: "Laguna Mountains", desc: "Big Laguna Trail and mountain riding.", url: "https://www.youtube.com/results?search_query=Big+Laguna+Trail+mountain+bike" }
        ],
        newsSources: [
          { name: "SDMBA (San Diego MTB Association)", url: "https://www.sdmba.com/" },
          { name: "Trailforks: San Diego", url: "https://www.trailforks.com/region/san-diego/" },
          { name: "MTB Project", url: "https://www.mtbproject.com/" },
          { name: "Pinkbike", url: "https://www.pinkbike.com/" },
          { name: "Google News: SD MTB", url: "https://news.google.com/search?q=San%20Diego%20mountain%20bike" }
        ]
      },
      {
        id: "sd-hike",
        name: "Hiking",
        icon: "🥾",
        podcasts: [
          { name: "Backpacker Radio", desc: "Hiking and backpacking talk from The Trek.", url: "https://podcasts.apple.com/us/podcast/backpacker-radio/id1339028551" },
          { name: "The Dirtbag Diaries", desc: "Stories from people who love the outdoors.", url: "https://podcasts.apple.com/us/podcast/the-dirtbag-diaries/id218290471" },
          { name: "She Explores", desc: "Women outdoors (ended 2023, great archive).", url: "https://podcasts.apple.com/us/podcast/she-explores/id1124566025" },
          { name: "Wild Ideas Worth Living", desc: "REI's adventurer interviews.", url: "https://podcasts.apple.com/us/podcast/wild-ideas-worth-living/id1183017174" },
          { name: "National Park After Dark", desc: "Trail stories for the drive to the trailhead.", url: "https://podcasts.apple.com/us/podcast/national-park-after-dark/id1549433407" }
        ],
        youtube: [
          { name: "Potato Chip Rock", desc: "Mt. Woodson's famous photo spot.", url: "https://www.youtube.com/results?search_query=Potato+Chip+Rock+hike" },
          { name: "Cowles Mountain", desc: "Highest point in San Diego city.", url: "https://www.youtube.com/results?search_query=Cowles+Mountain+hike" },
          { name: "Torrey Pines", desc: "Coastal trails and ocean views.", url: "https://www.youtube.com/results?search_query=Torrey+Pines+hike" },
          { name: "Iron Mountain", desc: "Popular Poway summit hike.", url: "https://www.youtube.com/results?search_query=Iron+Mountain+Poway+hike" },
          { name: "Three Sisters Falls", desc: "Waterfall hike in the backcountry.", url: "https://www.youtube.com/results?search_query=Three+Sisters+Falls+hike" },
          { name: "Cedar Creek Falls", desc: "Devil's Punchbowl swimming hole.", url: "https://www.youtube.com/results?search_query=Cedar+Creek+Falls+hike" },
          { name: "El Cajon Mountain", desc: "One of the county's toughest hikes.", url: "https://www.youtube.com/results?search_query=El+Cajon+Mountain+hike" },
          { name: "Anza-Borrego hikes", desc: "Palm Canyon and slot canyons.", url: "https://www.youtube.com/results?search_query=Anza+Borrego+hikes" },
          { name: "Cuyamaca Peak", desc: "Second-highest peak in the county.", url: "https://www.youtube.com/results?search_query=Cuyamaca+Peak+hike" },
          { name: "Kraig Adams", desc: "Calm solo hiking videos.", url: "https://www.youtube.com/results?search_query=Kraig+Adams+hiking" }
        ],
        newsSources: [
          { name: "AllTrails: San Diego", url: "https://www.alltrails.com/us/california/san-diego" },
          { name: "Mission Trails Regional Park", url: "https://mtrp.org/" },
          { name: "Torrey Pines Reserve", url: "https://torreypine.org/" },
          { name: "Cleveland National Forest alerts", url: "https://www.fs.usda.gov/cleveland" },
          { name: "Anza-Borrego State Park", url: "https://www.parks.ca.gov/?page_id=638" },
          { name: "Google News: SD hiking", url: "https://news.google.com/search?q=San%20Diego%20hiking%20trail" }
        ]
      },
      {
        id: "sd-snorkel",
        name: "Snorkeling",
        icon: "🤿",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Scripps Pier underwater cam", desc: "Live camera under Scripps Pier. Two pilings visible on the left means about 30 ft visibility.", url: "https://coollab.ucsd.edu/pierviz/" },
          { name: "Scripps Pier cam (HDOnTap)", desc: "The same underwater live stream on HDOnTap.", url: "https://hdontap.com/stream/018408/scripps-pier-underwater-live-cam/about" },
          { name: "Beach water quality", desc: "County beach closures and advisories.", url: "https://www.sdbeachinfo.com/" },
          { name: "La Jolla tides", desc: "NOAA tide predictions for La Jolla.", url: "https://tidesandcurrents.noaa.gov/stationhome.html?id=9410230" },
          { name: "Surf report La Jolla", desc: "Waves and swell before you go in.", url: "https://www.google.com/search?q=Surfline+La+Jolla+Shores+surf+report" },
          { name: "Water temperature", desc: "Today's ocean temperature in La Jolla.", url: "https://www.google.com/search?q=La+Jolla+water+temperature+today" },
          { name: "La Jolla Cove snorkeling", desc: "Garibaldi, sea lions and kelp.", url: "https://www.google.com/search?q=La+Jolla+Cove+snorkeling+guide" },
          { name: "Leopard shark season", desc: "When and where at La Jolla Shores.", url: "https://www.google.com/search?q=La+Jolla+Shores+leopard+sharks+season" },
          { name: "Snorkel rentals", desc: "Gear rentals at La Jolla Shores.", url: "https://www.google.com/search?q=La+Jolla+Shores+snorkel+rental" },
          { name: "Other SD snorkel spots", desc: "Casa Cove, Windansea and more.", url: "https://www.google.com/search?q=best+snorkeling+spots+San+Diego" }
        ],
        youtube: [
          { name: "La Jolla snorkeling", desc: "Underwater videos from La Jolla.", url: "https://www.youtube.com/results?search_query=La+Jolla+snorkeling" },
          { name: "Leopard sharks", desc: "Snorkeling with leopard sharks.", url: "https://www.youtube.com/results?search_query=La+Jolla+Shores+leopard+sharks+snorkel" },
          { name: "La Jolla Cove", desc: "Cove snorkel and sea lions.", url: "https://www.youtube.com/results?search_query=La+Jolla+Cove+snorkel+sea+lions" },
          { name: "Kelp forest", desc: "San Diego kelp forest dives.", url: "https://www.youtube.com/results?search_query=San+Diego+kelp+forest" },
          { name: "Scripps Pier underwater", desc: "Under the pier.", url: "https://www.youtube.com/results?search_query=Scripps+Pier+underwater" }
        ],
        newsSources: [
          { name: "Scripps Pier cam", url: "https://coollab.ucsd.edu/pierviz/" },
          { name: "Beach water quality", url: "https://www.sdbeachinfo.com/" },
          { name: "Google News: La Jolla ocean", url: "https://news.google.com/search?q=La%20Jolla%20snorkel%20OR%20%22beach%20closure%22%20OR%20%22water%20quality%22%20San%20Diego" }
        ]
      },
      {
        id: "sd-beer",
        name: "Breweries",
        icon: "🍺",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "San Diego Brewers Guild", desc: "Brewery map, events and San Diego Beer Week.", url: "https://sdbeer.com/" },
          { name: "West Coaster", desc: "San Diego's craft beer news and guide.", url: "https://www.westcoastersd.com/" },
          { name: "Stone Brewing", desc: "World Bistro & Gardens in Escondido and Liberty Station.", url: "https://www.stonebrewing.com/" },
          { name: "AleSmith", desc: "Speedway Stout and a big Miramar tasting room.", url: "https://alesmith.com/" },
          { name: "Pizza Port", desc: "Award-winning beer and pizza by the beach.", url: "https://www.pizzaport.com/" },
          { name: "Karl Strauss", desc: "San Diego's original craft brewery since 1989.", url: "https://www.karlstrauss.com/" },
          { name: "Ballast Point", desc: "Sculpin IPA and the Little Italy brewery.", url: "https://www.ballastpoint.com/" },
          { name: "Belching Beaver", desc: "Vista brewery with tavern and grill.", url: "https://belchingbeaver.com/" },
          { name: "North Park brewery crawl", desc: "The densest beer walk in town.", url: "https://www.google.com/search?q=North+Park+San+Diego+brewery+crawl" },
          { name: "Beer Miramar", desc: "Miramar's 'Beeramar' tasting rooms.", url: "https://www.google.com/search?q=Miramar+San+Diego+breweries+Beeramar" }
        ],
        youtube: [
          { name: "San Diego brewery tour", desc: "Videos touring the best breweries.", url: "https://www.youtube.com/results?search_query=San+Diego+brewery+tour" },
          { name: "Best San Diego breweries", desc: "Ranked lists and reviews.", url: "https://www.youtube.com/results?search_query=best+San+Diego+breweries" },
          { name: "Stone Brewing Escondido", desc: "Tour of the Stone gardens.", url: "https://www.youtube.com/results?search_query=Stone+Brewing+Escondido+tour" },
          { name: "Vista brewery trail", desc: "Vista's many tasting rooms.", url: "https://www.youtube.com/results?search_query=Vista+California+breweries" },
          { name: "San Diego Beer Week", desc: "The city's big beer festival.", url: "https://www.youtube.com/results?search_query=San+Diego+Beer+Week" },
          { name: "Craft Beer & Brewing", desc: "Brewing tips and beer culture.", url: "https://www.youtube.com/results?search_query=Craft+Beer+and+Brewing+Magazine" }
        ],
        newsSources: [
          { name: "West Coaster", url: "https://www.westcoastersd.com/" },
          { name: "San Diego Brewers Guild", url: "https://sdbeer.com/" },
          { name: "Google News: SD beer", url: "https://news.google.com/search?q=San%20Diego%20brewery" }
        ]
      },
      {
        id: "sd-party",
        name: "Party",
        icon: "🎉",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Gaslamp Quarter", desc: "Bars, clubs and rooftops downtown.", url: "https://www.gaslamp.org/" },
          { name: "Resident Advisor: San Diego", desc: "Club nights and DJ events.", url: "https://ra.co/events/us/sandiego" },
          { name: "Do619 nightlife", desc: "Parties and shows by night.", url: "https://do619.com/" },
          { name: "House of Blues San Diego", desc: "Concerts downtown.", url: "https://www.houseofblues.com/sandiego" },
          { name: "Belly Up Tavern", desc: "Legendary Solana Beach music venue.", url: "https://bellyup.com/" },
          { name: "The Observatory North Park", desc: "Concert hall in North Park.", url: "https://www.observatorysd.com/" },
          { name: "Pacific Beach bars", desc: "Beach bars and late nights in PB.", url: "https://www.google.com/search?q=Pacific+Beach+bars+nightlife" },
          { name: "North Park nightlife", desc: "Cocktail bars and dive bars.", url: "https://www.google.com/search?q=North+Park+San+Diego+nightlife" },
          { name: "Rooftop bars", desc: "Best views with a drink.", url: "https://www.google.com/search?q=best+rooftop+bars+San+Diego" },
          { name: "Eventbrite: parties", desc: "Parties this week in San Diego.", url: "https://www.eventbrite.com/d/ca--san-diego/parties/" }
        ],
        youtube: [
          { name: "San Diego nightlife guide", desc: "Where to go out.", url: "https://www.youtube.com/results?search_query=San+Diego+nightlife+guide" },
          { name: "Gaslamp nightlife", desc: "Downtown bars and clubs.", url: "https://www.youtube.com/results?search_query=Gaslamp+Quarter+nightlife" },
          { name: "Pacific Beach bars", desc: "PB bar crawl videos.", url: "https://www.youtube.com/results?search_query=Pacific+Beach+bar+crawl" },
          { name: "Rooftop bars", desc: "Best rooftops in San Diego.", url: "https://www.youtube.com/results?search_query=San+Diego+rooftop+bars" },
          { name: "Live music San Diego", desc: "Venues and shows.", url: "https://www.youtube.com/results?search_query=San+Diego+live+music+venues" }
        ],
        newsSources: [
          { name: "Resident Advisor", url: "https://ra.co/events/us/sandiego" },
          { name: "Do619", url: "https://do619.com/" },
          { name: "Google News: SD nightlife", url: "https://news.google.com/search?q=San%20Diego%20nightlife" }
        ]
      },
      {
        id: "sd-fun",
        name: "Fun",
        icon: "🎢",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "San Diego Zoo", desc: "World-famous zoo in Balboa Park.", url: "https://zoo.sandiegozoo.org/" },
          { name: "Safari Park", desc: "Escondido's open-range wildlife park.", url: "https://sdzsafaripark.org/" },
          { name: "USS Midway Museum", desc: "Aircraft carrier museum on the bay.", url: "https://www.midway.org/" },
          { name: "Balboa Park", desc: "Museums, gardens and the Spanish Village.", url: "https://www.balboapark.org/" },
          { name: "SeaWorld San Diego", desc: "Rides, shows and marine life.", url: "https://seaworld.com/san-diego/" },
          { name: "LEGOLAND California", desc: "Carlsbad theme park for families.", url: "https://www.legoland.com/california/" },
          { name: "Belmont Park", desc: "Mission Beach roller coaster and arcade.", url: "https://www.belmontpark.com/" },
          { name: "Birch Aquarium", desc: "Scripps aquarium in La Jolla.", url: "https://aquarium.ucsd.edu/" },
          { name: "La Jolla Cove kayaking", desc: "Sea caves and sea lions.", url: "https://www.google.com/search?q=La+Jolla+sea+caves+kayak+tour" },
          { name: "Old Town San Diego", desc: "History, Mexican food and shops.", url: "https://www.google.com/search?q=Old+Town+San+Diego+State+Historic+Park" }
        ],
        youtube: [
          { name: "San Diego Zoo tour", desc: "Highlights and tips.", url: "https://www.youtube.com/results?search_query=San+Diego+Zoo+tour+tips" },
          { name: "USS Midway tour", desc: "Walkthrough of the carrier.", url: "https://www.youtube.com/results?search_query=USS+Midway+Museum+tour" },
          { name: "La Jolla sea caves", desc: "Kayak and snorkel videos.", url: "https://www.youtube.com/results?search_query=La+Jolla+sea+caves+kayak" },
          { name: "Balboa Park guide", desc: "Museums and gardens.", url: "https://www.youtube.com/results?search_query=Balboa+Park+guide" },
          { name: "Coronado guide", desc: "Hotel del and the beach.", url: "https://www.youtube.com/results?search_query=Coronado+things+to+do" },
          { name: "Whale watching", desc: "Gray whale season off San Diego.", url: "https://www.youtube.com/results?search_query=San+Diego+whale+watching" }
        ],
        newsSources: [
          { name: "San Diego Tourism", url: "https://www.sandiego.org/" },
          { name: "Balboa Park", url: "https://www.balboapark.org/" },
          { name: "Google News: SD things to do", url: "https://news.google.com/search?q=San%20Diego%20things%20to%20do" }
        ]
      },
      {
        id: "sd-news",
        name: "News",
        icon: "📰",
        podcasts: [
          { name: "San Diego News Now (KPBS)", desc: "Daily local news podcast from KPBS.", url: "https://podcasts.apple.com/us/podcast/san-diego-news-now/id1118579458" },
          { name: "KPBS Midday Edition", desc: "Conversations on San Diego issues.", url: "https://podcasts.apple.com/us/podcast/kpbs-midday-edition/id73329598" },
          { name: "Voice of San Diego Podcast", desc: "Local politics and policy explained.", url: "https://podcasts.apple.com/us/podcast/voice-of-san-diego-podcast/id430101991" },
          { name: "Good Food (KCRW)", desc: "SoCal food news and restaurants.", url: "https://www.kcrw.com/culture/shows/good-food" }
        ],
        youtube: [
          { name: "NBC 7 San Diego", desc: "Local TV news.", url: "https://www.youtube.com/results?search_query=NBC+7+San+Diego" },
          { name: "FOX 5 San Diego", desc: "Local TV news.", url: "https://www.youtube.com/results?search_query=FOX+5+San+Diego+news" },
          { name: "ABC 10News San Diego", desc: "Local TV news.", url: "https://www.youtube.com/results?search_query=10News+San+Diego" },
          { name: "CBS 8 San Diego", desc: "Local TV news.", url: "https://www.youtube.com/results?search_query=CBS+8+San+Diego" },
          { name: "KPBS", desc: "Public media for San Diego.", url: "https://www.youtube.com/results?search_query=KPBS+San+Diego" }
        ],
        newsSources: [
          { name: "KPBS", url: "https://www.kpbs.org/" },
          { name: "San Diego Union-Tribune", url: "https://www.sandiegouniontribune.com/" },
          { name: "Voice of San Diego", url: "https://voiceofsandiego.org/" },
          { name: "Times of San Diego", url: "https://timesofsandiego.com/" },
          { name: "NBC 7 San Diego", url: "https://www.nbcsandiego.com/" },
          { name: "ABC 10News", url: "https://www.10news.com/" },
          { name: "FOX 5 San Diego", url: "https://fox5sandiego.com/" },
          { name: "CBS 8", url: "https://www.cbs8.com/" }
        ]
      }
    ]
  },
  {
    id: "tempe",
    name: "Tempe, AZ",
    icon: "🌵",
    accent: "#ff7043",
    tagline: "Today, this week, desert trails, breweries, nightlife and local news",
    subs: [
      {
        id: "tp-today",
        name: "Today",
        icon: "📅",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Eventbrite: today", desc: "Events happening in Tempe today.", url: "https://www.eventbrite.com/d/az--tempe/events--today/" },
          { name: "Tempe Tourism", desc: "Official guide to events and things to do.", url: "https://www.tempetourism.com/" },
          { name: "Downtown Tempe", desc: "Mill Avenue events, shops and dining.", url: "https://www.downtowntempe.com/" },
          { name: "ASU Events", desc: "Lectures, games and shows on campus.", url: "https://asuevents.asu.edu/" },
          { name: "Weather today", desc: "National Weather Service forecast for Tempe.", url: "https://forecast.weather.gov/MapClick.php?CityName=Tempe&state=AZ" },
          { name: "Heat warnings", desc: "NWS Phoenix alerts and heat safety.", url: "https://www.weather.gov/psr/" },
          { name: "Tempe Town Lake today", desc: "Paddleboards, walks and events.", url: "https://www.google.com/search?q=Tempe+Town+Lake+events+today" },
          { name: "Farmers markets today", desc: "Find a market open today.", url: "https://www.google.com/search?q=Tempe+farmers+market+today" },
          { name: "Happy hours today", desc: "Deals near you right now.", url: "https://www.google.com/search?q=Tempe+happy+hour+today" },
          { name: "Free things to do today", desc: "No-cost ideas around Tempe.", url: "https://www.google.com/search?q=free+things+to+do+in+Tempe+today" }
        ],
        youtube: [
          { name: "Things to do in Tempe", desc: "Video guides to the city.", url: "https://www.youtube.com/results?search_query=things+to+do+in+Tempe+Arizona" },
          { name: "Mill Avenue guide", desc: "Downtown Tempe highlights.", url: "https://www.youtube.com/results?search_query=Mill+Avenue+Tempe+guide" },
          { name: "Phoenix area hidden gems", desc: "Spots locals love.", url: "https://www.youtube.com/results?search_query=Phoenix+hidden+gems" },
          { name: "Tempe food spots", desc: "Where to eat in Tempe.", url: "https://www.youtube.com/results?search_query=best+food+Tempe+Arizona" },
          { name: "Beat the heat", desc: "Indoor fun in the Valley.", url: "https://www.youtube.com/results?search_query=indoor+things+to+do+Phoenix+summer" },
          { name: "Sunset spots", desc: "Desert sunsets near Tempe.", url: "https://www.youtube.com/results?search_query=best+sunset+spots+Phoenix+Tempe" }
        ],
        newsSources: [
          { name: "Eventbrite: today", url: "https://www.eventbrite.com/d/az--tempe/events--today/" },
          { name: "Tempe Tourism", url: "https://www.tempetourism.com/" },
          { name: "Google News: Tempe events", url: "https://news.google.com/search?q=Tempe%20events%20today" }
        ]
      },
      {
        id: "tp-week",
        name: "This Week",
        icon: "🗓️",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Eventbrite: this week", desc: "Everything on in Tempe this week.", url: "https://www.eventbrite.com/d/az--tempe/events--this-week/" },
          { name: "Eventbrite: this weekend", desc: "Plans for Saturday and Sunday.", url: "https://www.eventbrite.com/d/az--tempe/events--this-weekend/" },
          { name: "Meetup: Tempe", desc: "Groups for biking, hiking, tech and more.", url: "https://www.meetup.com/find/?location=us--az--Tempe" },
          { name: "ASU Gammage", desc: "Broadway shows and concerts.", url: "https://www.asugammage.com/" },
          { name: "Sun Devil Athletics", desc: "ASU home games this week.", url: "https://thesundevils.com/" },
          { name: "Diamondbacks schedule", desc: "D-backs games at Chase Field.", url: "https://www.mlb.com/dbacks/schedule" },
          { name: "Concerts this week", desc: "Live music around the Valley.", url: "https://www.google.com/search?q=Tempe+Phoenix+concerts+this+week" },
          { name: "Comedy this week", desc: "Stand-up shows in the Valley.", url: "https://www.google.com/search?q=Tempe+comedy+shows+this+week" },
          { name: "Phoenix events calendar", desc: "KTAR's weekly events roundup.", url: "https://www.google.com/search?q=KTAR+Phoenix+events+calendar+this+weekend" },
          { name: "7-day forecast", desc: "Plan around the heat.", url: "https://forecast.weather.gov/MapClick.php?CityName=Tempe&state=AZ" }
        ],
        youtube: [
          { name: "Phoenix weekend ideas", desc: "What to do this weekend.", url: "https://www.youtube.com/results?search_query=Phoenix+weekend+things+to+do" },
          { name: "Sedona day trip", desc: "Red rocks two hours north.", url: "https://www.youtube.com/results?search_query=Sedona+day+trip+from+Phoenix" },
          { name: "Jerome and Cottonwood", desc: "Historic towns and wineries.", url: "https://www.youtube.com/results?search_query=Jerome+Arizona+day+trip" },
          { name: "Tucson day trip", desc: "Food and Saguaro National Park.", url: "https://www.youtube.com/results?search_query=Tucson+day+trip" },
          { name: "Lake Saguaro", desc: "Boating close to Phoenix.", url: "https://www.youtube.com/results?search_query=Saguaro+Lake+day+trip" },
          { name: "Scottsdale guide", desc: "Old Town and more.", url: "https://www.youtube.com/results?search_query=Scottsdale+things+to+do" }
        ],
        newsSources: [
          { name: "Eventbrite: this week", url: "https://www.eventbrite.com/d/az--tempe/events--this-week/" },
          { name: "Meetup", url: "https://www.meetup.com/find/?location=us--az--Tempe" },
          { name: "Google News: Tempe this week", url: "https://news.google.com/search?q=Tempe%20Phoenix%20events%20this%20weekend" }
        ]
      },
      {
        id: "tp-wx",
        name: "Weather",
        icon: "🌤️",
        labels: {
          podcasts: "Guides"
        },
        weather: {
          name: "Tempe",
          lat: 33.4255,
          lon: -111.94
        },
        podcasts: [
          {
            name: "NWS Tempe forecast",
            desc: "Official 7-day forecast for Tempe.",
            url: "https://forecast.weather.gov/MapClick.php?lat=33.4255&lon=-111.94"
          },
          {
            name: "NWS Phoenix office",
            desc: "Excessive heat, monsoon and dust storm warnings.",
            url: "https://www.weather.gov/psr/"
          },
          {
            name: "Live radar",
            desc: "National Weather Service radar loop.",
            url: "https://radar.weather.gov/"
          },
          {
            name: "Windy: Tempe",
            desc: "Animated wind, rain and storm maps.",
            url: "https://www.windy.com/33.426/-111.940"
          },
          {
            name: "Heat safety",
            desc: "Heat risk and cooling centers in Maricopa County.",
            url: "https://www.google.com/search?q=Maricopa+County+heat+relief+cooling+centers"
          },
          {
            name: "Monsoon tracker",
            desc: "Storm season updates for the Valley.",
            url: "https://www.google.com/search?q=Arizona+monsoon+tracker+Phoenix"
          },
          {
            name: "Air quality",
            desc: "AirNow AQI for Phoenix and Tempe.",
            url: "https://www.airnow.gov/?city=Tempe&state=AZ&country=USA"
          },
          {
            name: "Flagstaff forecast",
            desc: "Escape the heat: forecast up north.",
            url: "https://forecast.weather.gov/MapClick.php?lat=35.1983&lon=-111.6513"
          },
          {
            name: "Payson forecast",
            desc: "Rim country forecast for day trips.",
            url: "https://forecast.weather.gov/MapClick.php?lat=34.2309&lon=-111.3251"
          },
          {
            name: "ADOT road conditions",
            desc: "Highway closures from storms and dust.",
            url: "https://az511.gov/"
          }
        ],
        youtube: [
          {
            name: "NWS Phoenix",
            desc: "Briefings from the Phoenix weather office.",
            url: "https://www.youtube.com/results?search_query=NWS+Phoenix+weather+briefing"
          },
          {
            name: "ABC15 Arizona weather",
            desc: "Local TV forecasts.",
            url: "https://www.youtube.com/results?search_query=ABC15+Arizona+weather+forecast"
          },
          {
            name: "12News weather",
            desc: "Local TV forecasts.",
            url: "https://www.youtube.com/results?search_query=12News+Phoenix+weather"
          },
          {
            name: "FOX 10 Phoenix weather",
            desc: "Local TV forecasts.",
            url: "https://www.youtube.com/results?search_query=FOX+10+Phoenix+weather"
          },
          {
            name: "Monsoon storms Arizona",
            desc: "Lightning, haboobs and flash floods.",
            url: "https://www.youtube.com/results?search_query=Arizona+monsoon+storm"
          },
          {
            name: "Haboob explained",
            desc: "How giant dust storms form.",
            url: "https://www.youtube.com/results?search_query=haboob+explained+Phoenix"
          },
          {
            name: "Heat safety tips",
            desc: "Staying safe in triple-digit heat.",
            url: "https://www.youtube.com/results?search_query=Phoenix+extreme+heat+safety+tips"
          },
          {
            name: "Ryan Hall, Y'all",
            desc: "Big-picture US weather and storms.",
            url: "https://www.youtube.com/results?search_query=Ryan+Hall+Yall"
          },
          {
            name: "Max Velocity",
            desc: "Severe weather and storm breakdowns.",
            url: "https://www.youtube.com/results?search_query=Max+Velocity+weather"
          },
          {
            name: "Pecos Hank",
            desc: "Storm chasing, including Arizona monsoon.",
            url: "https://www.youtube.com/results?search_query=Pecos+Hank"
          }
        ],
        newsSources: [
          {
            name: "NWS Phoenix",
            url: "https://www.weather.gov/psr/"
          },
          {
            name: "Google News: Phoenix weather",
            url: "https://news.google.com/search?q=Phoenix%20OR%20Tempe%20weather"
          },
          {
            name: "azcentral weather",
            url: "https://www.azcentral.com/weather/"
          },
          {
            name: "ABC15 weather",
            url: "https://www.abc15.com/weather"
          }
        ]
      },
      {
        id: "tp-mtb",
        name: "Mountain Biking",
        icon: "🚵",
        podcasts: [
          { name: "The Pinkbike Podcast", desc: "Bikes, gear and racing talk from Pinkbike.", url: "https://podcasts.apple.com/us/podcast/the-pinkbike-podcast/id1505577005" },
          { name: "Downtime Podcast", desc: "Interviews with mountain bike riders and racers.", url: "https://podcasts.apple.com/us/podcast/downtime-the-mountain-bike-podcast/id1202593158" },
          { name: "Blister Podcast", desc: "Gear reviews and conversations about riding.", url: "https://podcasts.apple.com/us/podcast/blister-podcast/id1066375775" },
          { name: "Singletracks Podcast", desc: "Trails, bikes and the MTB community.", url: "https://podcasts.apple.com/us/podcast/singletracks-mountain-bike-podcast/id1046094700" },
          { name: "GMBN Presents The Mountain Bike Podcast", desc: "Global Mountain Bike Network chats and news.", url: "https://podcasts.apple.com/us/podcast/gmbn-presents-the-mountain-bike-podcast/id1461786022" }
        ],
        youtube: [
          { name: "South Mountain National Trail", desc: "The Valley's classic technical ride.", url: "https://www.youtube.com/results?search_query=South+Mountain+National+Trail+mountain+bike" },
          { name: "Hawes Trails", desc: "Mesa's flowy favorite.", url: "https://www.youtube.com/results?search_query=Hawes+Trail+system+mountain+bike+Mesa" },
          { name: "McDowell Competitive Track", desc: "Fast desert loops.", url: "https://www.youtube.com/results?search_query=McDowell+Mountain+Competitive+Track+mountain+bike" },
          { name: "Papago Park", desc: "Easy rides right next to Tempe.", url: "https://www.youtube.com/results?search_query=Papago+Park+mountain+bike" },
          { name: "Desert Classic", desc: "South Mountain's popular route.", url: "https://www.youtube.com/results?search_query=Desert+Classic+trail+mountain+bike" },
          { name: "Brown's Ranch", desc: "Scottsdale trail network.", url: "https://www.youtube.com/results?search_query=Browns+Ranch+mountain+bike" },
          { name: "Phoenix MTB trail guide", desc: "Best trails in the Valley.", url: "https://www.youtube.com/results?search_query=best+mountain+bike+trails+Phoenix" },
          { name: "GMBN", desc: "Global Mountain Bike Network.", url: "https://www.youtube.com/results?search_query=GMBN+Global+Mountain+Bike+Network" },
          { name: "Berm Peak", desc: "Seth's builds and adventures.", url: "https://www.youtube.com/results?search_query=Berm+Peak" },
          { name: "Skills with Phil", desc: "Learn to ride better.", url: "https://www.youtube.com/results?search_query=Skills+with+Phil" }
        ],
        newsSources: [
          { name: "MBAA (Mountain Bike Association of AZ)", url: "https://mbaa.net/" },
          { name: "Trailforks: Phoenix", url: "https://www.google.com/search?q=Trailforks+Phoenix" },
          { name: "MTB Project", url: "https://www.mtbproject.com/" },
          { name: "Pinkbike", url: "https://www.pinkbike.com/" },
          { name: "Google News: AZ MTB", url: "https://news.google.com/search?q=Arizona%20mountain%20bike%20Phoenix%20trail" }
        ]
      },
      {
        id: "tp-hike",
        name: "Hiking",
        icon: "🥾",
        podcasts: [
          { name: "Backpacker Radio", desc: "Hiking and backpacking talk from The Trek.", url: "https://podcasts.apple.com/us/podcast/backpacker-radio/id1339028551" },
          { name: "The Dirtbag Diaries", desc: "Stories from people who love the outdoors.", url: "https://podcasts.apple.com/us/podcast/the-dirtbag-diaries/id218290471" },
          { name: "She Explores", desc: "Women outdoors (ended 2023, great archive).", url: "https://podcasts.apple.com/us/podcast/she-explores/id1124566025" },
          { name: "Wild Ideas Worth Living", desc: "REI's adventurer interviews.", url: "https://podcasts.apple.com/us/podcast/wild-ideas-worth-living/id1183017174" },
          { name: "National Park After Dark", desc: "Trail stories for the drive to the trailhead.", url: "https://podcasts.apple.com/us/podcast/national-park-after-dark/id1549433407" }
        ],
        youtube: [
          { name: "Hayden Butte (A Mountain)", desc: "Quick climb with a Tempe view.", url: "https://www.youtube.com/results?search_query=Hayden+Butte+A+Mountain+Tempe+hike" },
          { name: "Camelback Echo Canyon", desc: "Phoenix's iconic hard hike.", url: "https://www.youtube.com/results?search_query=Camelback+Mountain+Echo+Canyon+hike" },
          { name: "Piestewa Peak", desc: "Steep summit in the city.", url: "https://www.youtube.com/results?search_query=Piestewa+Peak+hike" },
          { name: "Hole in the Rock", desc: "Easy Papago Park classic.", url: "https://www.youtube.com/results?search_query=Hole+in+the+Rock+Papago+Park" },
          { name: "South Mountain hikes", desc: "Largest city park in the US.", url: "https://www.youtube.com/results?search_query=South+Mountain+Phoenix+hike" },
          { name: "Flatiron", desc: "Superstition Mountains challenge.", url: "https://www.youtube.com/results?search_query=Flatiron+Superstition+hike" },
          { name: "Wind Cave Trail", desc: "Usery Mountain views.", url: "https://www.youtube.com/results?search_query=Wind+Cave+Trail+Usery+hike" },
          { name: "Pinnacle Peak", desc: "Scottsdale's scenic trail.", url: "https://www.youtube.com/results?search_query=Pinnacle+Peak+hike" },
          { name: "Summer hiking safety", desc: "Stay safe in the heat.", url: "https://www.youtube.com/results?search_query=Arizona+summer+hiking+safety" },
          { name: "Kraig Adams", desc: "Calm solo hiking videos.", url: "https://www.youtube.com/results?search_query=Kraig+Adams+hiking" }
        ],
        newsSources: [
          { name: "AllTrails: Tempe", url: "https://www.alltrails.com/us/arizona/tempe" },
          { name: "Phoenix Trails", url: "https://www.phoenix.gov/parks/trails" },
          { name: "Maricopa County Parks", url: "https://www.maricopacountyparks.net/" },
          { name: "NWS Phoenix heat alerts", url: "https://www.weather.gov/psr/" },
          { name: "Google News: AZ hiking", url: "https://news.google.com/search?q=Phoenix%20hiking%20trail" }
        ]
      },
      {
        id: "tp-beer",
        name: "Breweries",
        icon: "🍺",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Four Peaks Brewing", desc: "Tempe's famous brewery, home of Kilt Lifter.", url: "https://www.fourpeaks.com/" },
          { name: "Huss Brewing", desc: "Tempe-born brewery with a big taproom.", url: "https://hussbrewing.com/" },
          { name: "Pedal Haus", desc: "Brewery and beer garden on Mill Avenue.", url: "https://pedalhausbrewery.com/" },
          { name: "OHSO Brewery", desc: "Dog-friendly brewpubs around the Valley.", url: "https://ohsobrewery.com/" },
          { name: "Arizona Wilderness", desc: "Award-winning local brewery.", url: "https://azwbeer.com/" },
          { name: "Arizona Craft Brewers Guild", desc: "Brewery map and beer events.", url: "https://azbeer.org/" },
          { name: "Tempe brewery crawl", desc: "Breweries close to Mill Avenue.", url: "https://www.google.com/search?q=Tempe+brewery+crawl" },
          { name: "Mesa and Gilbert breweries", desc: "More taprooms nearby.", url: "https://www.google.com/search?q=Gilbert+Mesa+breweries" },
          { name: "Phoenix brewery guide", desc: "Best breweries in the Valley.", url: "https://www.google.com/search?q=best+breweries+Phoenix" },
          { name: "Beer festivals", desc: "Upcoming Arizona beer festivals.", url: "https://www.google.com/search?q=Arizona+beer+festival" }
        ],
        youtube: [
          { name: "Four Peaks tour", desc: "Tempe's iconic brewery.", url: "https://www.youtube.com/results?search_query=Four+Peaks+Brewing+Tempe" },
          { name: "Phoenix brewery tour", desc: "Videos touring Valley breweries.", url: "https://www.youtube.com/results?search_query=Phoenix+brewery+tour" },
          { name: "Best Phoenix breweries", desc: "Ranked lists and reviews.", url: "https://www.youtube.com/results?search_query=best+breweries+Phoenix+Arizona" },
          { name: "Arizona Strong Beer Festival", desc: "The state's big beer fest.", url: "https://www.youtube.com/results?search_query=Arizona+Strong+Beer+Festival" },
          { name: "Craft Beer & Brewing", desc: "Brewing tips and beer culture.", url: "https://www.youtube.com/results?search_query=Craft+Beer+and+Brewing+Magazine" }
        ],
        newsSources: [
          { name: "Arizona Craft Brewers Guild", url: "https://azbeer.org/" },
          { name: "Google News: AZ beer", url: "https://news.google.com/search?q=Tempe%20Phoenix%20brewery" }
        ]
      },
      {
        id: "tp-party",
        name: "Party",
        icon: "🎉",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Downtown Tempe / Mill Ave", desc: "Bars, clubs and patios.", url: "https://www.downtowntempe.com/" },
          { name: "Marquee Theatre", desc: "Big concerts in Tempe.", url: "https://www.marqueetheatreaz.com/" },
          { name: "Crescent Ballroom", desc: "Phoenix's favorite music venue.", url: "https://www.crescentphx.com/" },
          { name: "Resident Advisor: Phoenix", desc: "Club nights and DJ events.", url: "https://ra.co/events/us/phoenix" },
          { name: "Eventbrite: parties", desc: "Parties this week in Tempe.", url: "https://www.eventbrite.com/d/az--tempe/parties/" },
          { name: "Mill Avenue bars", desc: "Where to go out downtown.", url: "https://www.google.com/search?q=Mill+Avenue+Tempe+bars" },
          { name: "Old Town Scottsdale", desc: "The Valley's biggest nightlife district.", url: "https://www.google.com/search?q=Old+Town+Scottsdale+nightlife" },
          { name: "Rooftop bars", desc: "Best views with a drink.", url: "https://www.google.com/search?q=best+rooftop+bars+Tempe+Phoenix" },
          { name: "Live music this week", desc: "Shows around the Valley.", url: "https://www.google.com/search?q=Phoenix+live+music+this+week" }
        ],
        youtube: [
          { name: "Tempe nightlife", desc: "Mill Ave bars and clubs.", url: "https://www.youtube.com/results?search_query=Tempe+nightlife+Mill+Avenue" },
          { name: "Scottsdale nightlife", desc: "Old Town bar scene.", url: "https://www.youtube.com/results?search_query=Old+Town+Scottsdale+nightlife" },
          { name: "Phoenix rooftop bars", desc: "Best rooftops.", url: "https://www.youtube.com/results?search_query=Phoenix+rooftop+bars" },
          { name: "Phoenix live music", desc: "Venues and shows.", url: "https://www.youtube.com/results?search_query=Phoenix+live+music+venues" }
        ],
        newsSources: [
          { name: "Resident Advisor", url: "https://ra.co/events/us/phoenix" },
          { name: "Google News: AZ nightlife", url: "https://news.google.com/search?q=Tempe%20Phoenix%20nightlife%20concert" }
        ]
      },
      {
        id: "tp-fun",
        name: "Fun",
        icon: "🎢",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "Tempe Town Lake", desc: "Kayaks, boats and lakeside paths.", url: "https://www.google.com/search?q=Tempe+Town+Lake+rentals" },
          { name: "Papago Park", desc: "Red rocks, trails and Hole in the Rock.", url: "https://www.google.com/search?q=Papago+Park+Tempe" },
          { name: "Phoenix Zoo", desc: "Big zoo next to Papago Park.", url: "https://phoenixzoo.org/" },
          { name: "Desert Botanical Garden", desc: "Cactus gardens and night lights.", url: "https://dbg.org/" },
          { name: "Musical Instrument Museum", desc: "World-class music museum.", url: "https://mim.org/" },
          { name: "Salt River Tubing", desc: "Float the Salt River in summer.", url: "https://saltrivertubing.com/" },
          { name: "Tempe Marketplace", desc: "Shops, food and events.", url: "https://tempemarketplace.com/" },
          { name: "ASU Gammage", desc: "Broadway and concerts.", url: "https://www.asugammage.com/" },
          { name: "Kiwanis Park", desc: "Lake, rec center and paddleboats.", url: "https://www.google.com/search?q=Kiwanis+Park+Tempe" },
          { name: "Odysea Aquarium", desc: "Aquarium in Scottsdale.", url: "https://www.google.com/search?q=OdySea+Aquarium+Scottsdale" }
        ],
        youtube: [
          { name: "Tempe Town Lake", desc: "Lake activities.", url: "https://www.youtube.com/results?search_query=Tempe+Town+Lake" },
          { name: "Desert Botanical Garden", desc: "Garden tour.", url: "https://www.youtube.com/results?search_query=Desert+Botanical+Garden+tour" },
          { name: "Salt River tubing", desc: "What to expect.", url: "https://www.youtube.com/results?search_query=Salt+River+tubing+guide" },
          { name: "Phoenix Zoo", desc: "Zoo tour and tips.", url: "https://www.youtube.com/results?search_query=Phoenix+Zoo+tour" },
          { name: "Musical Instrument Museum", desc: "Museum tour.", url: "https://www.youtube.com/results?search_query=Musical+Instrument+Museum+Phoenix+tour" },
          { name: "Wild horses of the Salt River", desc: "Watch the wild horses.", url: "https://www.youtube.com/results?search_query=Salt+River+wild+horses" }
        ],
        newsSources: [
          { name: "Tempe Tourism", url: "https://www.tempetourism.com/" },
          { name: "Google News: Tempe things to do", url: "https://news.google.com/search?q=Tempe%20things%20to%20do" }
        ]
      },
      {
        id: "tp-news",
        name: "News",
        icon: "📰",
        podcasts: [
          { name: "KJZZ The Show", desc: "Phoenix public radio's local stories.", url: "https://podcasts.apple.com/us/podcast/kjzzs-the-show/id1362716867" },
          { name: "KJZZ's Sun Up", desc: "Daily morning news from KJZZ 91.5.", url: "https://podcasts.apple.com/us/podcast/kjzzs-sun-up/id1505598185" },
          { name: "The Gaggle (Arizona Republic)", desc: "Weekly Arizona politics podcast.", url: "https://podcasts.apple.com/us/podcast/the-gaggle-an-arizona-politics-podcast/id1233487637" }
        ],
        youtube: [
          { name: "12News", desc: "Phoenix local news.", url: "https://www.youtube.com/results?search_query=12News+Phoenix" },
          { name: "ABC15 Arizona", desc: "Phoenix local news.", url: "https://www.youtube.com/results?search_query=ABC15+Arizona+news" },
          { name: "FOX 10 Phoenix", desc: "Phoenix local news.", url: "https://www.youtube.com/results?search_query=FOX+10+Phoenix+news" },
          { name: "AZFamily", desc: "Phoenix local news.", url: "https://www.youtube.com/results?search_query=AZFamily+news" }
        ],
        newsSources: [
          { name: "City of Tempe news", url: "https://www.tempe.gov/" },
          { name: "azcentral", url: "https://www.azcentral.com/" },
          { name: "KJZZ", url: "https://kjzz.org/" },
          { name: "Phoenix New Times", url: "https://www.phoenixnewtimes.com/" },
          { name: "ASU State Press", url: "https://www.statepress.com/" },
          { name: "12News", url: "https://www.12news.com/" },
          { name: "ABC15", url: "https://www.abc15.com/" },
          { name: "KTAR", url: "https://ktar.com/" }
        ]
      }
    ]
  },
  {
    id: "flying",
    name: "Flying",
    icon: "✈️",
    accent: "#7aa2ff",
    tagline: "KMYF, aviation weather and ATIS",
    subs: [
      {
        id: "fly-kmyf",
        name: "KMYF",
        icon: "🛩️",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "AirNav: KMYF", desc: "Runways, FBOs, fuel prices and phone numbers.", url: "https://www.airnav.com/airport/KMYF" },
          { name: "SkyVector: MYF", desc: "Sectional chart, frequencies and procedures.", url: "https://skyvector.com/airport/MYF/Montgomery-Gibbs-Exec-Airport" },
          { name: "FltPlan: MYF", desc: "Airport and FBO info, frequencies.", url: "https://www.fltplan.com/AirportInformation/MYF.htm" },
          { name: "FAA NOTAM search", desc: "Check NOTAMs for KMYF before you fly.", url: "https://notams.aim.faa.gov/notamSearch/" },
          { name: "FlightAware: KMYF", desc: "Live arrivals and departures.", url: "https://www.flightaware.com/live/airport/KMYF" },
          { name: "LiveATC: KMYF", desc: "Listen to Montgomery tower if a feed is up.", url: "https://www.liveatc.net/search/?icao=KMYF" },
          { name: "Airport diagram", desc: "FAA airport diagram for MYF.", url: "https://www.google.com/search?q=KMYF+airport+diagram+FAA" },
          { name: "Montgomery-Gibbs (City of SD)", desc: "Official airport page.", url: "https://www.google.com/search?q=Montgomery-Gibbs+Executive+Airport+City+of+San+Diego" },
          { name: "San Diego Class B", desc: "Chart and transition tips.", url: "https://www.google.com/search?q=San+Diego+Class+B+VFR+transition" },
          { name: "Flight schools at MYF", desc: "Training and rentals at Montgomery.", url: "https://www.google.com/search?q=flight+school+Montgomery+Field+San+Diego" }
        ],
        youtube: [
          { name: "Landing at Montgomery Field", desc: "Pilot videos into KMYF.", url: "https://www.youtube.com/results?search_query=KMYF+landing+Montgomery+Field" },
          { name: "San Diego VFR flights", desc: "Coastal and city flying.", url: "https://www.youtube.com/results?search_query=San+Diego+VFR+flight+Cessna" },
          { name: "Class B transition", desc: "Flying through San Diego's Class B.", url: "https://www.youtube.com/results?search_query=San+Diego+Class+B+transition+VFR" },
          { name: "Fly8MA", desc: "Flight training lessons.", url: "https://www.youtube.com/results?search_query=Fly8MA" },
          { name: "Pilot Debrief", desc: "Flight training and radio tips.", url: "https://www.youtube.com/results?search_query=Pilot+Debrief" },
          { name: "FlyWire", desc: "Aviation tips and flying vlogs.", url: "https://www.youtube.com/results?search_query=FlyWire+aviation" },
          { name: "Steveo1kinevo", desc: "Real flights with ATC audio.", url: "https://www.youtube.com/results?search_query=Steveo1kinevo" },
          { name: "Air Safety Institute", desc: "AOPA safety lessons.", url: "https://www.youtube.com/results?search_query=AOPA+Air+Safety+Institute" }
        ],
        newsSources: [
          { name: "AirNav: KMYF", url: "https://www.airnav.com/airport/KMYF" },
          { name: "AOPA News", url: "https://www.aopa.org/news-and-media" },
          { name: "AVweb", url: "https://www.avweb.com/" },
          { name: "Google News: Montgomery Field", url: "https://news.google.com/search?q=%22Montgomery-Gibbs%22%20OR%20%22Montgomery%20Field%22%20San%20Diego" }
        ]
      },
      {
        id: "fly-wx",
        name: "Weather",
        icon: "🌦️",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "METAR and TAF: KMYF", desc: "Current conditions and forecast, decoded.", url: "https://aviationweather.gov/data/metar/?id=KMYF&hours=0&decoded=yes&include_taf=yes" },
          { name: "Graphical Forecasts (GFA)", desc: "Clouds, visibility and weather for VFR.", url: "https://aviationweather.gov/gfa/" },
          { name: "1800wxbrief", desc: "Official FAA weather briefing.", url: "https://www.1800wxbrief.com/" },
          { name: "NWS San Diego discussion", desc: "Forecasters explain the marine layer.", url: "https://forecast.weather.gov/product.php?site=SGX&issuedby=SGX&product=AFD" },
          { name: "GOES satellite (SoCal)", desc: "Watch the marine layer move.", url: "https://www.star.nesdis.noaa.gov/GOES/sector.php?sat=G18&sector=psw" },
          { name: "Windy", desc: "Wind, clouds and radar map.", url: "https://www.windy.com/?32.816,-117.139,10" },
          { name: "Winds aloft", desc: "Forecast winds and temps at altitude.", url: "https://aviationweather.gov/" },
          { name: "PIREPs", desc: "Pilot reports near San Diego.", url: "https://www.google.com/search?q=aviationweather.gov+PIREPs+San+Diego" },
          { name: "Density altitude", desc: "Calculator for hot days.", url: "https://www.google.com/search?q=density+altitude+calculator" },
          { name: "NWS forecast KMYF area", desc: "Hour-by-hour forecast.", url: "https://forecast.weather.gov/MapClick.php?lat=32.8157&lon=-117.1396" }
        ],
        youtube: [
          { name: "Marine layer flying", desc: "Understanding San Diego's June gloom.", url: "https://www.youtube.com/results?search_query=marine+layer+flying+San+Diego" },
          { name: "Reading METARs and TAFs", desc: "Quick refresher.", url: "https://www.youtube.com/results?search_query=how+to+read+METAR+TAF" },
          { name: "Weather briefing tips", desc: "How to brief like a pro.", url: "https://www.youtube.com/results?search_query=pilot+weather+briefing+tips" },
          { name: "Santa Ana winds", desc: "Flying in Santa Ana conditions.", url: "https://www.youtube.com/results?search_query=Santa+Ana+winds+flying" },
          { name: "Air Safety Institute weather", desc: "AOPA weather lessons.", url: "https://www.youtube.com/results?search_query=AOPA+Air+Safety+Institute+weather" }
        ],
        newsSources: [
          { name: "Aviation Weather Center", url: "https://aviationweather.gov/" },
          { name: "NWS San Diego", url: "https://www.weather.gov/sgx/" },
          { name: "Google News: SD weather", url: "https://news.google.com/search?q=San%20Diego%20weather%20forecast" }
        ]
      },
      {
        id: "fly-atis",
        name: "ATIS KMYF",
        icon: "📻",
        labels: { podcasts: "Guides" },
        podcasts: [
          { name: "ATIS 126.9 MHz", desc: "Montgomery-Gibbs ATIS frequency (tower 119.2, ground 118.225, clearance 123.725).", url: "https://skyvector.com/airport/MYF/Montgomery-Gibbs-Exec-Airport" },
          { name: "METAR: KMYF", desc: "The same weather the ATIS reads, decoded.", url: "https://aviationweather.gov/data/metar/?id=KMYF&hours=0&decoded=yes&include_taf=yes" },
          { name: "ATIS and ASOS phone", desc: "Phone numbers are listed on AirNav and SkyVector.", url: "https://www.airnav.com/airport/KMYF" },
          { name: "LiveATC: KMYF", desc: "Listen live if a feed is available.", url: "https://www.liveatc.net/search/?icao=KMYF" },
          { name: "Frequencies list", desc: "All MYF frequencies.", url: "https://www.fltplan.com/AirportInformation/MYF.htm" },
          { name: "NOTAMs", desc: "Check before you call ground.", url: "https://notams.aim.faa.gov/notamSearch/" }
        ],
        youtube: [
          { name: "ATIS explained", desc: "What every part of an ATIS means.", url: "https://www.youtube.com/results?search_query=ATIS+explained+pilot" },
          { name: "Radio calls at a towered airport", desc: "Practice calls.", url: "https://www.youtube.com/results?search_query=towered+airport+radio+calls+VFR" },
          { name: "KMYF ATC audio", desc: "Real Montgomery tower audio.", url: "https://www.youtube.com/results?search_query=Montgomery+Field+ATC+audio" }
        ],
        newsSources: [
          { name: "Aviation Weather Center", url: "https://aviationweather.gov/" },
          { name: "Google News: KMYF", url: "https://news.google.com/search?q=KMYF%20OR%20%22Montgomery%20Field%22" }
        ]
      },
      {
        id: "fly-events",
        name: "Events",
        icon: "🛩️",
        labels: {
          podcasts: "Events",
          icon: "📅",
          heading: "links"
        },
        events: [
          {
            name: "California International Airshow",
            date: "2026-11-07",
            end: "2026-11-08",
            place: "Salinas, CA",
            desc: "Thunderbirds headline. A day trip up the coast.",
            url: "https://www.seemonterey.com/event/california-international-airshow-salinas/"
          },
          {
            name: "SD Air & Space Museum Hall of Fame",
            date: "2026-11-21",
            place: "Balboa Park, San Diego",
            desc: "The museum's annual International Air & Space Hall of Fame evening.",
            url: "https://sandiegoairandspace.org/calendar"
          },
          {
            name: "NAF El Centro Festival of Flight",
            date: "2027-03-13",
            place: "NAF El Centro, CA (2 hrs east of SD)",
            desc: "Blue Angels at their winter home. The 2026 show was canceled; confirm before you go.",
            url: "https://www.elcentroairshow.com/"
          },
          {
            name: "Southern California Air Show",
            date: "2027-03-27",
            place: "March Air Reserve Base, Riverside, CA",
            desc: "Military and civilian demos. Date from airshow listings; confirm closer to the show.",
            url: "https://www.airshowcenter.com/airshows/28/southern-california-air-show"
          },
          {
            name: "SUN 'n FUN Aerospace Expo",
            date: "2027-04-06",
            end: "2027-04-11",
            place: "Lakeland, FL",
            desc: "The big spring fly-in and expo.",
            url: "https://www.flysnf.org/"
          },
          {
            name: "EAA AirVenture Oshkosh",
            date: "2027-07-26",
            end: "2027-08-01",
            place: "Oshkosh, WI",
            desc: "The world's greatest aviation celebration. Tickets go on sale in early December.",
            url: "https://www.eaa.org/airventure"
          }
        ],
        podcasts: [
          {
            name: "Miramar Air Show",
            desc: "San Diego's big one, usually late September. Free admission.",
            url: "https://miramarairshow.com/"
          },
          {
            name: "SD Air & Space Museum calendar",
            desc: "Talks, Hall of Fame and family events in Balboa Park.",
            url: "https://sandiegoairandspace.org/calendar"
          },
          {
            name: "NAF El Centro air show",
            desc: "Blue Angels winter home, usually March.",
            url: "https://www.elcentroairshow.com/"
          },
          {
            name: "Planes of Fame Air Show",
            desc: "Warbirds in Chino, usually early May.",
            url: "https://planesoffame.org/"
          },
          {
            name: "FAA Safety Team seminars",
            desc: "WINGS safety seminars around San Diego, free.",
            url: "https://www.faasafety.gov/"
          },
          {
            name: "EAA Chapter 14 (San Diego)",
            desc: "Local EAA chapter: Young Eagles, meetings, fly-ins.",
            url: "https://www.google.com/search?q=EAA+Chapter+14+San+Diego"
          },
          {
            name: "CAF Air Group One",
            desc: "Commemorative Air Force warbirds at Gillespie Field.",
            url: "https://www.google.com/search?q=Commemorative+Air+Force+Air+Group+One+Gillespie+Field"
          },
          {
            name: "Copperstate Fly-In (AZ)",
            desc: "Arizona's fly-in, usually October near Mesa.",
            url: "https://www.google.com/search?q=Copperstate+Fly-In"
          },
          {
            name: "Air show schedule",
            desc: "Every US air show, searchable.",
            url: "https://www.airshownetwork.com/schedule"
          },
          {
            name: "AOPA events",
            desc: "AOPA fly-ins and Rusty Pilots seminars.",
            url: "https://www.google.com/search?q=AOPA+fly-in+events+Rusty+Pilots"
          }
        ],
        youtube: [
          {
            name: "Miramar Air Show",
            desc: "Highlights from San Diego's show.",
            url: "https://www.youtube.com/results?search_query=Miramar+Air+Show+highlights"
          },
          {
            name: "Blue Angels",
            desc: "Demos and cockpit video.",
            url: "https://www.youtube.com/results?search_query=Blue+Angels+cockpit"
          },
          {
            name: "EAA AirVenture Oshkosh",
            desc: "Oshkosh arrivals and tours.",
            url: "https://www.youtube.com/results?search_query=Oshkosh+AirVenture+arrival"
          },
          {
            name: "Fly-in arrivals",
            desc: "Flying into a big fly-in, from the cockpit.",
            url: "https://www.youtube.com/results?search_query=fly-in+arrival+cockpit+Oshkosh+Fisk"
          },
          {
            name: "Planes of Fame Air Show",
            desc: "Warbirds over Chino.",
            url: "https://www.youtube.com/results?search_query=Planes+of+Fame+Air+Show+Chino"
          },
          {
            name: "SUN 'n FUN",
            desc: "Highlights from Lakeland.",
            url: "https://www.youtube.com/results?search_query=Sun+n+Fun+fly-in"
          },
          {
            name: "San Diego Air & Space Museum",
            desc: "Tours and talks.",
            url: "https://www.youtube.com/results?search_query=San+Diego+Air+and+Space+Museum+tour"
          },
          {
            name: "Gillespie Field warbirds",
            desc: "CAF and vintage aircraft at KSEE.",
            url: "https://www.youtube.com/results?search_query=Gillespie+Field+warbirds"
          },
          {
            name: "Steveo1kinevo",
            desc: "Real pilot vlogs from big fly-ins.",
            url: "https://www.youtube.com/results?search_query=Steveo1kinevo"
          },
          {
            name: "Airshow photography tips",
            desc: "Get great shots at the show.",
            url: "https://www.youtube.com/results?search_query=airshow+photography+tips"
          }
        ],
        newsSources: [
          {
            name: "Google News: SD air shows",
            url: "https://news.google.com/search?q=San%20Diego%20air%20show%20OR%20fly-in%20OR%20aviation%20event"
          },
          {
            name: "General Aviation News: events",
            url: "https://generalaviationnews.com/"
          },
          {
            name: "EAA news",
            url: "https://www.eaa.org/eaa/news-and-publications"
          }
        ]
      }
    ]
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: "💪",
    accent: "#ff5d73",
    tagline: "Gym, running in SD, lifting and plans",
    subs: [
      {
        id: "fit-24h",
        name: "24 Hour Fitness",
        icon: "🕒",
        labels: {
          podcasts: "Guides"
        },
        podcasts: [
          {
            name: "24 Hour Fitness",
            desc: "Official site: memberships, clubs and classes.",
            url: "https://www.24hourfitness.com/"
          },
          {
            name: "Find a club",
            desc: "Official club finder, search by city or zip.",
            url: "https://www.24hourfitness.com/health_clubs/find-a-gym/"
          },
          {
            name: "Clubs in San Diego (map)",
            desc: "24 Hour Fitness locations around San Diego on Google Maps.",
            url: "https://www.google.com/maps/search/24+Hour+Fitness+San+Diego"
          },
          {
            name: "Clubs in Tempe (map)",
            desc: "24 Hour Fitness locations around Tempe and Phoenix.",
            url: "https://www.google.com/maps/search/24+Hour+Fitness+Tempe+AZ"
          },
          {
            name: "Group class schedule",
            desc: "Find your club's class times.",
            url: "https://www.google.com/search?q=24+Hour+Fitness+class+schedule+San+Diego"
          },
          {
            name: "24 Hour Fitness app",
            desc: "Check in, book classes and track workouts.",
            url: "https://www.google.com/search?q=24+Hour+Fitness+app"
          },
          {
            name: "Gym beginner guide",
            desc: "How to use the gym floor and machines with confidence.",
            url: "https://www.youtube.com/results?search_query=beginner+gym+guide+how+to+use+machines"
          },
          {
            name: "Clubs with a pool",
            desc: "Super Sport clubs with pool, sauna or courts.",
            url: "https://www.google.com/search?q=24+Hour+Fitness+Super+Sport+San+Diego+pool"
          },
          {
            name: "Membership help",
            desc: "Freeze, cancel or change your plan.",
            url: "https://www.google.com/search?q=24+Hour+Fitness+membership+freeze+cancel+help"
          },
          {
            name: "Member reviews",
            desc: "See what members say about each SD club.",
            url: "https://www.google.com/maps/search/24+Hour+Fitness+reviews+San+Diego"
          }
        ],
        youtube: [
          {
            name: "24 Hour Fitness",
            desc: "Official channel: workouts and trainer tips.",
            url: "https://www.youtube.com/results?search_query=24+Hour+Fitness"
          },
          {
            name: "Jeff Nippard",
            desc: "Science-based gym workouts and programs.",
            url: "https://www.youtube.com/results?search_query=Jeff+Nippard"
          },
          {
            name: "Jeremy Ethier",
            desc: "Clear, research-backed gym training.",
            url: "https://www.youtube.com/results?search_query=Jeremy+Ethier"
          },
          {
            name: "Renaissance Periodization",
            desc: "Dr. Mike on muscle growth and technique.",
            url: "https://www.youtube.com/results?search_query=Renaissance+Periodization"
          },
          {
            name: "ATHLEAN-X",
            desc: "Jeff Cavaliere's training and injury-proofing tips.",
            url: "https://www.youtube.com/results?search_query=ATHLEAN-X"
          },
          {
            name: "Mind Pump TV",
            desc: "Trainers answer real gym questions.",
            url: "https://www.youtube.com/results?search_query=Mind+Pump+TV"
          },
          {
            name: "Garage Gym Reviews",
            desc: "Equipment and training reviews.",
            url: "https://www.youtube.com/results?search_query=Garage+Gym+Reviews"
          },
          {
            name: "Squat University",
            desc: "Fix pain and move better under the bar.",
            url: "https://www.youtube.com/results?search_query=Squat+University"
          },
          {
            name: "Fitness Blender",
            desc: "Free full-length workouts for any level.",
            url: "https://www.youtube.com/results?search_query=Fitness+Blender"
          },
          {
            name: "Sydney Cummings Houdyshell",
            desc: "Daily follow-along workouts.",
            url: "https://www.youtube.com/results?search_query=Sydney+Cummings+Houdyshell"
          }
        ],
        newsSources: [
          {
            name: "24 Hour Fitness",
            url: "https://www.24hourfitness.com/"
          },
          {
            name: "Google News: 24 Hour Fitness",
            url: "https://news.google.com/search?q=24%20Hour%20Fitness"
          },
          {
            name: "Club Industry",
            url: "https://www.clubindustry.com/"
          },
          {
            name: "Athletech News",
            url: "https://athletechnews.com/"
          }
        ]
      },
      {
        id: "fit-run",
        name: "Running SD",
        icon: "🏃",
        labels: {
          podcasts: "Guides"
        },
        podcasts: [
          {
            name: "San Diego Track Club",
            desc: "SD's big running club: group workouts and the Balboa Park 8 Miler.",
            url: "https://www.google.com/search?q=San+Diego+Track+Club"
          },
          {
            name: "Mission Bay loop",
            desc: "Flat bay-side miles with water views.",
            url: "https://www.google.com/maps/search/Mission+Bay+Park+running+path"
          },
          {
            name: "Coronado Silver Strand",
            desc: "Long flat run along the bayshore bikeway.",
            url: "https://www.google.com/maps/search/Silver+Strand+Bikeway+Coronado"
          },
          {
            name: "Lake Miramar loop",
            desc: "Classic 5-mile paved lake loop.",
            url: "https://www.google.com/maps/search/Lake+Miramar+Reservoir"
          },
          {
            name: "Balboa Park trails",
            desc: "Shady loops, hills and the park's trail system.",
            url: "https://www.google.com/maps/search/Balboa+Park+trails+San+Diego"
          },
          {
            name: "Torrey Pines",
            desc: "Hilly trail runs above the ocean.",
            url: "https://www.google.com/maps/search/Torrey+Pines+State+Natural+Reserve"
          },
          {
            name: "Lake Murray",
            desc: "Paved out-and-back with lake views.",
            url: "https://www.google.com/maps/search/Lake+Murray+Community+Park+San+Diego"
          },
          {
            name: "SD half marathons",
            desc: "Upcoming San Diego half marathons and 5Ks.",
            url: "https://running.life/half-marathons/united-states/california/san-diego"
          },
          {
            name: "Rock 'n' Roll San Diego",
            desc: "San Diego's big marathon and half.",
            url: "https://www.google.com/search?q=Rock+n+Roll+San+Diego+marathon"
          },
          {
            name: "Run clubs",
            desc: "Social run clubs around San Diego.",
            url: "https://www.google.com/search?q=San+Diego+run+clubs+weekly"
          }
        ],
        youtube: [
          {
            name: "The Running Channel",
            desc: "Training tips, gear and races.",
            url: "https://www.youtube.com/results?search_query=The+Running+Channel"
          },
          {
            name: "Ben Parkes",
            desc: "Running coach: plans, form and motivation.",
            url: "https://www.youtube.com/results?search_query=Ben+Parkes"
          },
          {
            name: "Sage Canaday",
            desc: "Pro runner coaching on training and racing.",
            url: "https://www.youtube.com/results?search_query=Sage+Canaday"
          },
          {
            name: "The Run Experience",
            desc: "Form, strength and injury prevention.",
            url: "https://www.youtube.com/results?search_query=The+Run+Experience"
          },
          {
            name: "Believe in the Run",
            desc: "Shoe reviews and running talk.",
            url: "https://www.youtube.com/results?search_query=Believe+in+the+Run"
          },
          {
            name: "Seth James DeMoor",
            desc: "Trail and marathon coaching.",
            url: "https://www.youtube.com/results?search_query=Seth+James+DeMoor"
          },
          {
            name: "Kofuzi",
            desc: "Running shoe and race gear reviews.",
            url: "https://www.youtube.com/results?search_query=Kofuzi"
          },
          {
            name: "Coach Parry",
            desc: "Training plans and running science.",
            url: "https://www.youtube.com/results?search_query=Coach+Parry"
          },
          {
            name: "Global Triathlon Network",
            desc: "Run, swim and bike technique.",
            url: "https://www.youtube.com/results?search_query=Global+Triathlon+Network"
          },
          {
            name: "Running in San Diego",
            desc: "Routes and races around SD.",
            url: "https://www.youtube.com/results?search_query=San+Diego+running+route"
          }
        ],
        newsSources: [
          {
            name: "Runner's World",
            url: "https://www.runnersworld.com/"
          },
          {
            name: "iRunFar (trail)",
            url: "https://www.irunfar.com/"
          },
          {
            name: "Google News: SD running",
            url: "https://news.google.com/search?q=San%20Diego%20running%20race"
          },
          {
            name: "Strava",
            url: "https://www.strava.com/"
          }
        ]
      },
      {
        id: "fit-lift",
        name: "Weight Lifting",
        icon: "🏋️",
        podcasts: [
          {
            name: "Barbell Medicine Podcast",
            desc: "Doctors and coaches on strength and health.",
            url: "https://podcasts.apple.com/us/search?term=Barbell%20Medicine%20Podcast"
          },
          {
            name: "Stronger By Science",
            desc: "Greg Nuckols' team on the research behind lifting.",
            url: "https://podcasts.apple.com/us/search?term=Stronger%20By%20Science"
          },
          {
            name: "Mark Bell's Power Project",
            desc: "Powerlifting, training and life with Mark Bell.",
            url: "https://podcasts.apple.com/us/search?term=Mark%20Bell%27s%20Power%20Project"
          },
          {
            name: "BarBend Podcast",
            desc: "Big names across powerlifting, weightlifting and strongman.",
            url: "https://podcasts.apple.com/us/search?term=BarBend%20Podcast"
          },
          {
            name: "Weightlifting House",
            desc: "Olympic weightlifting champions and coaches.",
            url: "https://podcasts.apple.com/us/search?term=Weightlifting%20House"
          },
          {
            name: "The Absolute Strength Podcast",
            desc: "Kyle Hunt on training, nutrition and mindset.",
            url: "https://podcasts.apple.com/us/search?term=The%20Absolute%20Strength%20Podcast"
          },
          {
            name: "Barbell Shrugged",
            desc: "Long-form strength and CrossFit conversations.",
            url: "https://podcasts.apple.com/us/search?term=Barbell%20Shrugged"
          },
          {
            name: "Revive Stronger",
            desc: "Evidence-based muscle and strength training.",
            url: "https://podcasts.apple.com/us/search?term=Revive%20Stronger"
          },
          {
            name: "Starting Strength Radio",
            desc: "Mark Rippetoe on barbell basics.",
            url: "https://podcasts.apple.com/us/search?term=Starting%20Strength%20Radio"
          },
          {
            name: "Mind Pump",
            desc: "Four trainers on fitness, muscle and fat loss.",
            url: "https://podcasts.apple.com/us/search?term=Mind%20Pump"
          }
        ],
        youtube: [
          {
            name: "Jeff Nippard",
            desc: "Science-based programs and technique.",
            url: "https://www.youtube.com/results?search_query=Jeff+Nippard"
          },
          {
            name: "Alan Thrall",
            desc: "Barbell form and no-nonsense lifting.",
            url: "https://www.youtube.com/results?search_query=Alan+Thrall"
          },
          {
            name: "Calgary Barbell",
            desc: "Powerlifting coaching and programming.",
            url: "https://www.youtube.com/results?search_query=Calgary+Barbell"
          },
          {
            name: "Renaissance Periodization",
            desc: "Muscle growth with Dr. Mike Israetel.",
            url: "https://www.youtube.com/results?search_query=Renaissance+Periodization"
          },
          {
            name: "Squat University",
            desc: "Mobility and pain-free lifting.",
            url: "https://www.youtube.com/results?search_query=Squat+University"
          },
          {
            name: "Juggernaut Training Systems",
            desc: "Strength coaching and form fixes.",
            url: "https://www.youtube.com/results?search_query=Juggernaut+Training+Systems"
          },
          {
            name: "Starting Strength",
            desc: "Rippetoe's barbell lift tutorials.",
            url: "https://www.youtube.com/results?search_query=Starting+Strength"
          },
          {
            name: "Torokhtiy",
            desc: "Olympic weightlifting technique.",
            url: "https://www.youtube.com/results?search_query=Torokhtiy"
          },
          {
            name: "Brian Alsruhe",
            desc: "Strongman-style strength and conditioning.",
            url: "https://www.youtube.com/results?search_query=Brian+Alsruhe"
          },
          {
            name: "Mike Thurston",
            desc: "Training and physique building.",
            url: "https://www.youtube.com/results?search_query=Mike+Thurston"
          }
        ],
        newsSources: [
          {
            name: "BarBend",
            url: "https://barbend.com/"
          },
          {
            name: "T-Nation",
            url: "https://www.t-nation.com/"
          },
          {
            name: "Stronger By Science",
            url: "https://www.strongerbyscience.com/"
          },
          {
            name: "Google News: weightlifting",
            url: "https://news.google.com/search?q=weightlifting%20OR%20powerlifting"
          }
        ]
      },
      {
        id: "fit-music",
        name: "Workout Music",
        icon: "🎵",
        labels: {
          podcasts: "Spotify",
          icon: "🟢",
          heading: "Spotify playlists"
        },
        podcasts: [
          {
            name: "Beast Mode",
            desc: "Spotify's hard-hitting hip-hop and trap for lifting.",
            url: "https://open.spotify.com/search/Beast%20Mode/playlists"
          },
          {
            name: "Power Workout",
            desc: "High-energy pop and dance.",
            url: "https://open.spotify.com/search/Power%20Workout/playlists"
          },
          {
            name: "Motivation Mix",
            desc: "Uplifting anthems to push through.",
            url: "https://open.spotify.com/search/Motivation%20Mix/playlists"
          },
          {
            name: "Cardio",
            desc: "Upbeat tracks for the treadmill or bike.",
            url: "https://open.spotify.com/search/Cardio/playlists"
          },
          {
            name: "Workout Twerkout",
            desc: "Hip-hop and R&B bangers.",
            url: "https://open.spotify.com/search/Workout%20Twerkout/playlists"
          },
          {
            name: "Rock Hard",
            desc: "Big guitar riffs for heavy days.",
            url: "https://open.spotify.com/search/Rock%20workout/playlists"
          },
          {
            name: "Running 170 BPM",
            desc: "Steady beat for an easy running cadence.",
            url: "https://open.spotify.com/search/Running%20170%20BPM/playlists"
          },
          {
            name: "Techno Bunker",
            desc: "Driving techno, straight from Berlin.",
            url: "https://open.spotify.com/search/Techno%20Bunker/playlists"
          },
          {
            name: "Deutschrap Workout",
            desc: "German rap for the gym.",
            url: "https://open.spotify.com/search/Deutschrap%20Workout/playlists"
          },
          {
            name: "80s Workout",
            desc: "Retro hits for a fun session.",
            url: "https://open.spotify.com/search/80s%20Workout/playlists"
          }
        ],
        youtube: [
          {
            name: "Best Gym Workout Music Mix",
            desc: "Long mixed gym sessions.",
            url: "https://www.youtube.com/results?search_query=best+gym+workout+music+mix"
          },
          {
            name: "Hip-Hop Workout Mix",
            desc: "Rap and hip-hop for lifting.",
            url: "https://www.youtube.com/results?search_query=hip+hop+workout+music+mix"
          },
          {
            name: "Rock Workout Mix",
            desc: "Rock and metal for heavy sets.",
            url: "https://www.youtube.com/results?search_query=rock+workout+music+mix"
          },
          {
            name: "EDM Workout Mix",
            desc: "Electronic and dance for cardio.",
            url: "https://www.youtube.com/results?search_query=EDM+workout+music+mix"
          },
          {
            name: "Running Music 170-180 BPM",
            desc: "Cadence-matched running mixes.",
            url: "https://www.youtube.com/results?search_query=running+music+180+bpm+mix"
          },
          {
            name: "Techno Running Mix",
            desc: "Driving techno for long runs.",
            url: "https://www.youtube.com/results?search_query=techno+running+mix"
          },
          {
            name: "Phonk Gym Music",
            desc: "Aggressive phonk for PR attempts.",
            url: "https://www.youtube.com/results?search_query=phonk+gym+music+mix"
          },
          {
            name: "Motivational Speech Workout",
            desc: "Speeches over workout beats.",
            url: "https://www.youtube.com/results?search_query=motivational+speech+workout+music"
          },
          {
            name: "80s Workout Music",
            desc: "Retro hits for the gym.",
            url: "https://www.youtube.com/results?search_query=80s+workout+music+mix"
          },
          {
            name: "Deutschrap Workout Mix",
            desc: "German rap gym mixes.",
            url: "https://www.youtube.com/results?search_query=deutschrap+workout+mix"
          }
        ],
        newsSources: [
          {
            name: "Spotify: Workout",
            url: "https://open.spotify.com/search/workout/playlists"
          },
          {
            name: "YouTube Music",
            url: "https://music.youtube.com/"
          },
          {
            name: "Billboard",
            url: "https://www.billboard.com/"
          },
          {
            name: "Google News: workout music",
            url: "https://news.google.com/search?q=workout%20playlist%20OR%20gym%20music"
          }
        ]
      },
      {
        id: "fit-plans",
        name: "Plans & Apps",
        icon: "📋",
        labels: {
          podcasts: "Guides"
        },
        podcasts: [
          {
            name: "r/Fitness wiki",
            desc: "Free, well-tested beginner guide and programs.",
            url: "https://thefitness.wiki/"
          },
          {
            name: "Recommended routines",
            desc: "Proven free programs for every level.",
            url: "https://thefitness.wiki/routines/strength-training-muscle-building/"
          },
          {
            name: "StrongLifts 5x5",
            desc: "Simple 3-day barbell plan for beginners.",
            url: "https://stronglifts.com/5x5/"
          },
          {
            name: "Couch to 5K",
            desc: "9-week plan from zero to running 5K.",
            url: "https://www.google.com/search?q=Couch+to+5K+plan"
          },
          {
            name: "Hevy app",
            desc: "Free workout log with routines and progress.",
            url: "https://www.google.com/search?q=Hevy+workout+app"
          },
          {
            name: "Strong app",
            desc: "Simple gym log for sets, reps and PRs.",
            url: "https://www.google.com/search?q=Strong+workout+tracker+app"
          },
          {
            name: "Strava",
            desc: "Track runs and rides and see local segments.",
            url: "https://www.strava.com/"
          },
          {
            name: "One-rep max calculator",
            desc: "Estimate your max from any set.",
            url: "https://www.google.com/search?q=one+rep+max+calculator"
          },
          {
            name: "TDEE calculator",
            desc: "Daily calories to lose, keep or gain weight.",
            url: "https://www.google.com/search?q=TDEE+calculator"
          },
          {
            name: "Daily stretching routine",
            desc: "Follow-along mobility for desk and car days.",
            url: "https://www.youtube.com/results?search_query=10+minute+daily+stretching+routine"
          }
        ],
        youtube: [
          {
            name: "Yoga With Adriene",
            desc: "Free yoga for mobility and recovery.",
            url: "https://www.youtube.com/results?search_query=Yoga+With+Adriene"
          },
          {
            name: "Tom Merrick",
            desc: "Bodyweight Warrior flexibility routines.",
            url: "https://www.youtube.com/results?search_query=Tom+Merrick"
          },
          {
            name: "GMB Fitness",
            desc: "Bodyweight skills and mobility.",
            url: "https://www.youtube.com/results?search_query=GMB+Fitness"
          },
          {
            name: "The Ready State",
            desc: "Kelly Starrett on mobility and pain.",
            url: "https://www.youtube.com/results?search_query=The+Ready+State"
          },
          {
            name: "Bob & Brad",
            desc: "Physical therapists on aches and fixes.",
            url: "https://www.youtube.com/results?search_query=Bob+%26+Brad"
          },
          {
            name: "Hybrid Calisthenics",
            desc: "Friendly bodyweight progressions.",
            url: "https://www.youtube.com/results?search_query=Hybrid+Calisthenics"
          },
          {
            name: "Caroline Girvan",
            desc: "Structured dumbbell programs.",
            url: "https://www.youtube.com/results?search_query=Caroline+Girvan"
          },
          {
            name: "Heather Robertson",
            desc: "Free full workout plans.",
            url: "https://www.youtube.com/results?search_query=Heather+Robertson"
          },
          {
            name: "Fitness Blender",
            desc: "Free workouts sorted by goal and length.",
            url: "https://www.youtube.com/results?search_query=Fitness+Blender"
          },
          {
            name: "Jeremy Ethier",
            desc: "Build a plan that fits your week.",
            url: "https://www.youtube.com/results?search_query=Jeremy+Ethier"
          }
        ],
        newsSources: [
          {
            name: "Stronger By Science",
            url: "https://www.strongerbyscience.com/"
          },
          {
            name: "Runner's World",
            url: "https://www.runnersworld.com/"
          },
          {
            name: "Google News: fitness",
            url: "https://news.google.com/search?q=fitness%20training%20study"
          },
          {
            name: "r/Fitness",
            url: "https://www.reddit.com/r/Fitness/"
          }
        ]
      }
    ]
  },
  {
    id: "comedy",
    name: "Comedy",
    icon: "😂",
    accent: "#ffd23f",
    tagline: "German comedy and the best of the rest of the world",
    subs: [
      {
        id: "com-de",
        name: "German Comedy",
        icon: "🇩🇪",
        podcasts: [
          {
            name: "Gemischtes Hack",
            desc: "Felix Lobrecht und Tommi Schmitt quatschen über alles.",
            url: "https://podcasts.apple.com/de/search?term=Gemischtes%20Hack"
          },
          {
            name: "Fest & Flauschig",
            desc: "Jan Böhmermann und Olli Schulz, Kult seit Jahren.",
            url: "https://podcasts.apple.com/de/search?term=Fest%20%26%20Flauschig"
          },
          {
            name: "Baywatch Berlin",
            desc: "Klaas Heufer-Umlauf, Thomas Schmitt und Jakob Lundt.",
            url: "https://podcasts.apple.com/de/search?term=Baywatch%20Berlin"
          },
          {
            name: "Das Podcast UFO",
            desc: "Florentin Will und Stefan Titze, herrlich absurd.",
            url: "https://podcasts.apple.com/de/search?term=Das%20Podcast%20UFO"
          },
          {
            name: "Hobbylos",
            desc: "Rezo und Julien Bam über Gott und die Welt.",
            url: "https://podcasts.apple.com/de/search?term=Hobbylos"
          },
          {
            name: "Zärtliche Cousinen",
            desc: "Atze Schröder und Till Hoheneder, Ruhrpott-Humor.",
            url: "https://podcasts.apple.com/de/search?term=Z%C3%A4rtliche%20Cousinen"
          },
          {
            name: "Talk ohne Gast",
            desc: "Till Reiners und Moritz Neumeier, satirisch und böse.",
            url: "https://podcasts.apple.com/de/search?term=Talk%20ohne%20Gast"
          },
          {
            name: "Sträter & Streberg",
            desc: "Torsten Sträter und Gerry Streberg über Filme, Serien und Games.",
            url: "https://podcasts.apple.com/de/search?term=Str%C3%A4ter%20%26%20Streberg"
          },
          {
            name: "Apokalypse & Filterkaffee",
            desc: "Micky Beisenherz: News mit viel Humor.",
            url: "https://podcasts.apple.com/de/search?term=Apokalypse%20%26%20Filterkaffee"
          },
          {
            name: "Kurt Krömer - Feelings",
            desc: "Kurt Krömer trifft Gäste, ehrlich und trotzdem witzig.",
            url: "https://podcasts.apple.com/de/search?term=Kurt%20Kr%C3%B6mer%20-%20Feelings"
          }
        ],
        youtube: [
          {
            name: "heute-show",
            desc: "ZDF-Satire mit Oliver Welke.",
            url: "https://www.youtube.com/results?search_query=heute-show"
          },
          {
            name: "ZDF Magazin Royale",
            desc: "Jan Böhmermanns Satire-Show.",
            url: "https://www.youtube.com/results?search_query=ZDF+Magazin+Royale"
          },
          {
            name: "extra 3",
            desc: "NDR-Satire, inklusive Realer Irrsinn.",
            url: "https://www.youtube.com/results?search_query=extra+3"
          },
          {
            name: "Die Anstalt",
            desc: "Politisches Kabarett vom ZDF.",
            url: "https://www.youtube.com/results?search_query=Die+Anstalt"
          },
          {
            name: "NightWash",
            desc: "Stand-up aus Deutschland.",
            url: "https://www.youtube.com/results?search_query=NightWash"
          },
          {
            name: "Loriot",
            desc: "Die Klassiker: Sketche für die Ewigkeit.",
            url: "https://www.youtube.com/results?search_query=Loriot+Sketche"
          },
          {
            name: "Felix Lobrecht",
            desc: "Stand-up-Programme und Clips.",
            url: "https://www.youtube.com/results?search_query=Felix+Lobrecht"
          },
          {
            name: "Torsten Sträter",
            desc: "Geschichten aus dem Ruhrpott.",
            url: "https://www.youtube.com/results?search_query=Torsten+Str%C3%A4ter+Comedy"
          },
          {
            name: "Hazel Brugger",
            desc: "Trockener Humor aus der Schweiz.",
            url: "https://www.youtube.com/results?search_query=Hazel+Brugger"
          },
          {
            name: "Teddy Teclebrhan",
            desc: "Antoine und viele andere Figuren.",
            url: "https://www.youtube.com/results?search_query=Teddy+Comedy"
          }
        ],
        newsSources: [
          {
            name: "Der Postillon",
            url: "https://www.der-postillon.com/"
          },
          {
            name: "Titanic Magazin",
            url: "https://www.titanic-magazin.de/"
          },
          {
            name: "heute-show (ZDF)",
            url: "https://www.zdf.de/comedy/heute-show"
          },
          {
            name: "Google News: Comedy (DE)",
            url: "https://news.google.com/search?q=Comedy%20Komiker&hl=de&gl=DE&ceid=DE:de"
          }
        ]
      },
      {
        id: "com-row",
        name: "World Comedy",
        icon: "🌍",
        podcasts: [
          {
            name: "SmartLess",
            desc: "Jason Bateman, Sean Hayes and Will Arnett surprise each other with guests.",
            url: "https://podcasts.apple.com/us/search?term=SmartLess"
          },
          {
            name: "Conan O'Brien Needs a Friend",
            desc: "Conan, Sona and Matt, endlessly silly.",
            url: "https://podcasts.apple.com/us/search?term=Conan%20O%27Brien%20Needs%20a%20Friend"
          },
          {
            name: "Comedy Bang! Bang!",
            desc: "Scott Aukerman's improv classic.",
            url: "https://podcasts.apple.com/us/search?term=Comedy%20Bang%21%20Bang%21"
          },
          {
            name: "Wait Wait... Don't Tell Me!",
            desc: "NPR's news quiz, funny and smart.",
            url: "https://podcasts.apple.com/us/search?term=Wait%20Wait...%20Don%27t%20Tell%20Me%21"
          },
          {
            name: "Off Menu",
            desc: "Ed Gamble and James Acaster's dream-meal podcast (UK).",
            url: "https://podcasts.apple.com/us/search?term=Off%20Menu"
          },
          {
            name: "The Adam Buxton Podcast",
            desc: "Warm, rambling British chats.",
            url: "https://podcasts.apple.com/us/search?term=The%20Adam%20Buxton%20Podcast"
          },
          {
            name: "My Dad Wrote a Porno",
            desc: "Reading a dad's very bad novel (UK).",
            url: "https://podcasts.apple.com/us/search?term=My%20Dad%20Wrote%20a%20Porno"
          },
          {
            name: "2 Bears 1 Cave",
            desc: "Tom Segura and Bert Kreischer.",
            url: "https://podcasts.apple.com/us/search?term=2%20Bears%201%20Cave"
          },
          {
            name: "Good Hang with Amy Poehler",
            desc: "Amy Poehler and funny friends.",
            url: "https://podcasts.apple.com/us/search?term=Good%20Hang%20with%20Amy%20Poehler"
          },
          {
            name: "Fly on the Wall",
            desc: "Dana Carvey and David Spade on SNL stories.",
            url: "https://podcasts.apple.com/us/search?term=Fly%20on%20the%20Wall"
          }
        ],
        youtube: [
          {
            name: "Saturday Night Live",
            desc: "Sketches and Weekend Update.",
            url: "https://www.youtube.com/results?search_query=Saturday+Night+Live"
          },
          {
            name: "Netflix Is A Joke",
            desc: "Stand-up clips from Netflix specials.",
            url: "https://www.youtube.com/results?search_query=Netflix+Is+A+Joke"
          },
          {
            name: "Comedy Central Stand-Up",
            desc: "Clean cuts from top comics.",
            url: "https://www.youtube.com/results?search_query=Comedy+Central+Stand-Up"
          },
          {
            name: "Dry Bar Comedy",
            desc: "Clean stand-up you can play in the car.",
            url: "https://www.youtube.com/results?search_query=Dry+Bar+Comedy"
          },
          {
            name: "Just For Laughs",
            desc: "Montreal festival stand-up and gags.",
            url: "https://www.youtube.com/results?search_query=Just+For+Laughs"
          },
          {
            name: "Key & Peele",
            desc: "Sketch comedy classics.",
            url: "https://www.youtube.com/results?search_query=Key+%26+Peele"
          },
          {
            name: "Last Week Tonight",
            desc: "John Oliver's deep-dive satire.",
            url: "https://www.youtube.com/results?search_query=Last+Week+Tonight"
          },
          {
            name: "Taskmaster",
            desc: "British comedians, ridiculous tasks.",
            url: "https://www.youtube.com/results?search_query=Taskmaster"
          },
          {
            name: "Nate Bargatze",
            desc: "Clean, deadpan stand-up.",
            url: "https://www.youtube.com/results?search_query=Nate+Bargatze"
          },
          {
            name: "George Carlin",
            desc: "The legend: classic specials and bits.",
            url: "https://www.youtube.com/results?search_query=George+Carlin+stand+up"
          }
        ],
        newsSources: [
          {
            name: "The Onion",
            url: "https://theonion.com/"
          },
          {
            name: "Vulture: Comedy",
            url: "https://www.vulture.com/comedy/"
          },
          {
            name: "Chortle (UK)",
            url: "https://www.chortle.co.uk/"
          },
          {
            name: "Google News: comedy",
            url: "https://news.google.com/search?q=comedy%20special%20OR%20stand-up%20comedian"
          }
        ]
      },
      {
        id: "com-live",
        name: "Live Shows",
        icon: "🎤",
        labels: {
          podcasts: "Shows",
          icon: "🎟️",
          heading: "links"
        },
        podcasts: [
          {
            name: "The Comedy Store La Jolla",
            desc: "Big names and local comics in La Jolla.",
            url: "https://www.google.com/search?q=The+Comedy+Store+La+Jolla+tickets"
          },
          {
            name: "American Comedy Co.",
            desc: "Gaslamp club, 818 6th Ave, San Diego.",
            url: "https://www.google.com/search?q=American+Comedy+Co+San+Diego+shows"
          },
          {
            name: "Comedy shows in San Diego",
            desc: "Everything on this week, all venues.",
            url: "https://www.google.com/search?q=comedy+shows+San+Diego+this+week"
          },
          {
            name: "Tempe Improv",
            desc: "Tempe's comedy club at Cornerstone Mall.",
            url: "https://www.google.com/search?q=Tempe+Improv+comedy+shows"
          },
          {
            name: "Stand Up Live Phoenix",
            desc: "Downtown Phoenix comedy club.",
            url: "https://www.google.com/search?q=Stand+Up+Live+Phoenix+shows"
          },
          {
            name: "Comedy shows in Phoenix and Tempe",
            desc: "Everything on this week.",
            url: "https://www.google.com/search?q=comedy+shows+Phoenix+Tempe+this+week"
          },
          {
            name: "Big tours on Ticketmaster",
            desc: "Arena comedy tours near you.",
            url: "https://www.ticketmaster.com/search?q=comedy"
          },
          {
            name: "German comedians on tour",
            desc: "Comedy tickets in Germany on Eventim.",
            url: "https://www.google.com/search?q=eventim+Comedy+Tickets+Tournee"
          },
          {
            name: "German comedians in the US",
            desc: "Rare US dates by German comics.",
            url: "https://www.google.com/search?q=German+comedian+US+tour+2027"
          },
          {
            name: "Netflix Is A Joke Fest",
            desc: "LA's big comedy festival.",
            url: "https://www.google.com/search?q=Netflix+Is+A+Joke+Fest+dates"
          }
        ],
        youtube: [
          {
            name: "Comedy Store La Jolla",
            desc: "Clips from the club.",
            url: "https://www.youtube.com/results?search_query=Comedy+Store+La+Jolla"
          },
          {
            name: "Tempe Improv",
            desc: "Clips and promos.",
            url: "https://www.youtube.com/results?search_query=Tempe+Improv+comedy"
          },
          {
            name: "Don't Tell Comedy",
            desc: "Secret-location stand-up sets.",
            url: "https://www.youtube.com/results?search_query=Don%27t+Tell+Comedy"
          },
          {
            name: "Comedy Cellar",
            desc: "NYC's legendary club.",
            url: "https://www.youtube.com/results?search_query=Comedy+Cellar"
          },
          {
            name: "Laugh Factory",
            desc: "Hollywood club sets.",
            url: "https://www.youtube.com/results?search_query=Laugh+Factory"
          },
          {
            name: "Just For Laughs",
            desc: "Montreal festival highlights.",
            url: "https://www.youtube.com/results?search_query=Just+For+Laughs"
          },
          {
            name: "Netflix Is A Joke",
            desc: "Festival and special clips.",
            url: "https://www.youtube.com/results?search_query=Netflix+Is+A+Joke"
          },
          {
            name: "Dry Bar Comedy",
            desc: "Clean live stand-up.",
            url: "https://www.youtube.com/results?search_query=Dry+Bar+Comedy"
          },
          {
            name: "Quatsch Comedy Club",
            desc: "Berlin's classic stand-up club.",
            url: "https://www.youtube.com/results?search_query=Quatsch+Comedy+Club"
          },
          {
            name: "NightWash Live",
            desc: "German stand-up from the stage.",
            url: "https://www.youtube.com/results?search_query=NightWash+live"
          }
        ],
        newsSources: [
          {
            name: "Google News: SD comedy shows",
            url: "https://news.google.com/search?q=comedy%20San%20Diego%20show"
          },
          {
            name: "Google News: Phoenix comedy shows",
            url: "https://news.google.com/search?q=comedy%20Phoenix%20OR%20Tempe%20show"
          },
          {
            name: "Vulture: Comedy",
            url: "https://www.vulture.com/comedy/"
          }
        ]
      }
    ]
  },
  {
    id: "meditation",
    name: "Meditation",
    icon: "🧘",
    accent: "#9b7bff",
    tagline: "Teachers, sound healing and binaural beats",
    subs: [
      {
        id: "med-guided",
        name: "Guided",
        icon: "🪷",
        podcasts: [
          {
            name: "Tara Brach",
            desc: "Guided meditations and talks on mindfulness and compassion.",
            url: "https://podcasts.apple.com/us/search?term=Tara%20Brach"
          },
          {
            name: "Ten Percent Happier with Dan Harris",
            desc: "Practical meditation for skeptics.",
            url: "https://podcasts.apple.com/us/search?term=Ten%20Percent%20Happier%20with%20Dan%20Harris"
          },
          {
            name: "Waking Up with Sam Harris",
            desc: "Meditation, mind and big questions.",
            url: "https://podcasts.apple.com/us/search?term=Making%20Sense%20Sam%20Harris"
          },
          {
            name: "Meditation Minis",
            desc: "Short guided meditations by Chel Hamilton.",
            url: "https://podcasts.apple.com/us/search?term=Meditation%20Minis"
          },
          {
            name: "The Daily Meditation Podcast",
            desc: "A new guided practice every day.",
            url: "https://podcasts.apple.com/us/search?term=The%20Daily%20Meditation%20Podcast"
          },
          {
            name: "Headspace Guide to Meditation",
            desc: "Bite-size sessions from Headspace.",
            url: "https://podcasts.apple.com/us/search?term=Headspace"
          },
          {
            name: "Calm Sleep Stories",
            desc: "Wind down with Calm.",
            url: "https://podcasts.apple.com/us/search?term=Calm"
          },
          {
            name: "Insight Timer Podcast",
            desc: "Teachers from the free Insight Timer app.",
            url: "https://podcasts.apple.com/us/search?term=Insight%20Timer"
          },
          {
            name: "Jack Kornfield: Heart Wisdom",
            desc: "Buddhist teacher on living with an open heart.",
            url: "https://podcasts.apple.com/us/search?term=Heart%20Wisdom%20Jack%20Kornfield"
          },
          {
            name: "On Being",
            desc: "Krista Tippett on meaning and inner life.",
            url: "https://podcasts.apple.com/us/search?term=On%20Being"
          }
        ],
        youtube: [
          {
            name: "Great Meditation",
            desc: "Guided meditations for sleep, calm and focus.",
            url: "https://www.youtube.com/results?search_query=Great+Meditation"
          },
          {
            name: "The Honest Guys",
            desc: "Relaxing guided meditations and visualizations.",
            url: "https://www.youtube.com/results?search_query=The+Honest+Guys"
          },
          {
            name: "Headspace",
            desc: "Short animated lessons and guided sessions.",
            url: "https://www.youtube.com/results?search_query=Headspace"
          },
          {
            name: "Tara Brach",
            desc: "Talks and guided meditations.",
            url: "https://www.youtube.com/results?search_query=Tara+Brach"
          },
          {
            name: "Jon Kabat-Zinn",
            desc: "Mindfulness-based stress reduction pioneer.",
            url: "https://www.youtube.com/results?search_query=Jon+Kabat-Zinn+guided+meditation"
          },
          {
            name: "Michael Sealey",
            desc: "Hypnotic guided sleep meditations.",
            url: "https://www.youtube.com/results?search_query=Michael+Sealey"
          },
          {
            name: "Yoga With Adriene",
            desc: "Gentle yoga and breath for calm.",
            url: "https://www.youtube.com/results?search_query=Yoga+With+Adriene"
          },
          {
            name: "Eckhart Tolle",
            desc: "Presence and the power of now.",
            url: "https://www.youtube.com/results?search_query=Eckhart+Tolle"
          },
          {
            name: "Wim Hof breathing",
            desc: "Guided breathing sessions.",
            url: "https://www.youtube.com/results?search_query=Wim+Hof+guided+breathing"
          },
          {
            name: "Box breathing 5 minutes",
            desc: "Quick reset you can do anywhere (not while driving).",
            url: "https://www.youtube.com/results?search_query=box+breathing+5+minutes"
          }
        ],
        newsSources: [
          {
            name: "Mindful.org",
            url: "https://www.mindful.org/"
          },
          {
            name: "Tricycle",
            url: "https://tricycle.org/"
          },
          {
            name: "Insight Timer (free app)",
            url: "https://insighttimer.com/"
          },
          {
            name: "Google News: meditation",
            url: "https://news.google.com/search?q=meditation%20study%20OR%20mindfulness"
          }
        ]
      },
      {
        id: "med-sadhguru",
        name: "Sadhguru",
        icon: "🕉️",
        labels: {
          podcasts: "Guides"
        },
        podcasts: [
          {
            name: "Sadhguru official site",
            desc: "Talks, articles and programs from Isha.",
            url: "https://isha.sadhguru.org/"
          },
          {
            name: "Isha Kriya (free)",
            desc: "Sadhguru's free 12-minute guided meditation.",
            url: "https://www.google.com/search?q=Isha+Kriya+free+guided+meditation+Sadhguru"
          },
          {
            name: "Miracle of Mind app",
            desc: "Sadhguru's free meditation app.",
            url: "https://www.google.com/search?q=Miracle+of+Mind+app+Sadhguru"
          },
          {
            name: "Sadhguru app",
            desc: "Daily wisdom, videos and meditations.",
            url: "https://www.google.com/search?q=Sadhguru+app"
          },
          {
            name: "Inner Engineering",
            desc: "Sadhguru's core online program.",
            url: "https://www.google.com/search?q=Inner+Engineering+online+Sadhguru"
          },
          {
            name: "Sadhguru podcast",
            desc: "Talks you can listen to in the car.",
            url: "https://podcasts.apple.com/us/search?term=Sadhguru"
          },
          {
            name: "Sadhguru on Spotify",
            desc: "Podcasts and chants.",
            url: "https://open.spotify.com/search/Sadhguru"
          },
          {
            name: "Book: Inner Engineering",
            desc: "A yogi's guide to joy.",
            url: "https://www.google.com/search?q=Inner+Engineering+book+Sadhguru"
          },
          {
            name: "Book: Karma",
            desc: "A yogi's guide to crafting your destiny.",
            url: "https://www.google.com/search?q=Karma+book+Sadhguru"
          },
          {
            name: "Isha Yoga Center",
            desc: "Programs in Tennessee and India.",
            url: "https://www.google.com/search?q=Isha+Institute+of+Inner+Sciences+Tennessee"
          }
        ],
        youtube: [
          {
            name: "Sadhguru",
            desc: "Official channel: short talks on life and meditation.",
            url: "https://www.youtube.com/results?search_query=Sadhguru"
          },
          {
            name: "Sadhguru guided meditation",
            desc: "Follow-along meditations.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+guided+meditation"
          },
          {
            name: "Isha Kriya",
            desc: "The free guided practice.",
            url: "https://www.youtube.com/results?search_query=Isha+Kriya+guided+meditation"
          },
          {
            name: "Sadhguru on sleep",
            desc: "Sleep better, rest deeper.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+on+sleep"
          },
          {
            name: "Sadhguru on stress",
            desc: "Handling pressure and anxiety.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+stress+anxiety"
          },
          {
            name: "Sadhguru on food",
            desc: "What and how to eat.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+on+food+diet"
          },
          {
            name: "Sadhguru on success",
            desc: "Work, money and ambition.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+on+success"
          },
          {
            name: "Sadhguru chants",
            desc: "Brahmananda Swaroopa and other chants.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+chants"
          },
          {
            name: "Sadhguru conversations",
            desc: "Talks with celebrities and scientists.",
            url: "https://www.youtube.com/results?search_query=Sadhguru+in+conversation"
          },
          {
            name: "Isha Foundation",
            desc: "Programs, events and yoga.",
            url: "https://www.youtube.com/results?search_query=Isha+Foundation"
          }
        ],
        newsSources: [
          {
            name: "Isha Blog",
            url: "https://isha.sadhguru.org/en/wisdom"
          },
          {
            name: "Google News: Sadhguru",
            url: "https://news.google.com/search?q=Sadhguru"
          }
        ]
      },
      {
        id: "med-hicks",
        name: "Esther Hicks",
        icon: "✨",
        labels: {
          podcasts: "Guides"
        },
        podcasts: [
          {
            name: "Abraham-Hicks official site",
            desc: "Workshops, books and daily quotes.",
            url: "https://www.abraham-hicks.com/"
          },
          {
            name: "Abraham Hicks podcast",
            desc: "Law of Attraction workshop recordings.",
            url: "https://podcasts.apple.com/us/search?term=Abraham%20Hicks"
          },
          {
            name: "Abraham Hicks on Spotify",
            desc: "Workshops and meditations.",
            url: "https://open.spotify.com/search/Abraham%20Hicks"
          },
          {
            name: "Getting into the Vortex",
            desc: "The guided meditations album.",
            url: "https://www.google.com/search?q=Getting+into+the+Vortex+guided+meditations+Abraham+Hicks"
          },
          {
            name: "Book: Ask and It Is Given",
            desc: "The core Law of Attraction teachings.",
            url: "https://www.google.com/search?q=Ask+and+It+Is+Given+Esther+Hicks"
          },
          {
            name: "Book: The Vortex",
            desc: "Relationships and the Law of Attraction.",
            url: "https://www.google.com/search?q=The+Vortex+Esther+Jerry+Hicks+book"
          },
          {
            name: "Book: Money and the Law of Attraction",
            desc: "Wealth, health and happiness.",
            url: "https://www.google.com/search?q=Money+and+the+Law+of+Attraction+Esther+Hicks"
          },
          {
            name: "Workshop schedule",
            desc: "Live events and cruises.",
            url: "https://www.google.com/search?q=Abraham+Hicks+workshop+schedule"
          },
          {
            name: "Daily quote",
            desc: "A short dose of Abraham every day.",
            url: "https://www.google.com/search?q=Abraham+Hicks+daily+quote"
          },
          {
            name: "The 22 processes",
            desc: "Practical exercises from Ask and It Is Given.",
            url: "https://www.google.com/search?q=Abraham+Hicks+22+processes+list"
          }
        ],
        youtube: [
          {
            name: "Abraham Hicks Publications",
            desc: "The official channel.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+Publications+official"
          },
          {
            name: "Abraham Hicks morning meditation",
            desc: "Start the day aligned.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+morning+meditation"
          },
          {
            name: "Abraham Hicks 15 minute meditation",
            desc: "The classic Vortex meditation.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+15+minute+meditation"
          },
          {
            name: "Abraham Hicks for sleep",
            desc: "Fall asleep feeling good.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+sleep"
          },
          {
            name: "Abraham Hicks on money",
            desc: "Abundance and allowing.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+money+abundance"
          },
          {
            name: "Abraham Hicks on health",
            desc: "Wellbeing and the body.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+health+wellbeing"
          },
          {
            name: "Abraham Hicks on relationships",
            desc: "Love and contrast.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+relationships"
          },
          {
            name: "Abraham Hicks hot seat",
            desc: "Workshop Q&A highlights.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+hot+seat"
          },
          {
            name: "Abraham Hicks no music",
            desc: "Talks without background music.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+no+music"
          },
          {
            name: "Abraham Hicks in German",
            desc: "Abraham auf Deutsch.",
            url: "https://www.youtube.com/results?search_query=Abraham+Hicks+deutsch"
          }
        ],
        newsSources: [
          {
            name: "Abraham-Hicks",
            url: "https://www.abraham-hicks.com/"
          },
          {
            name: "Google News: Abraham Hicks",
            url: "https://news.google.com/search?q=Abraham%20Hicks%20OR%20%22law%20of%20attraction%22"
          }
        ]
      },
      {
        id: "med-goldman",
        name: "Jonathan Goldman",
        icon: "🎶",
        labels: {
          podcasts: "Spotify",
          icon: "🟢",
          heading: "Spotify picks"
        },
        podcasts: [
          {
            name: "Jonathan Goldman",
            desc: "All his music on Spotify.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman/artists"
          },
          {
            name: "Chakra Chants",
            desc: "His best-known chakra toning album.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman%20Chakra%20Chants/albums"
          },
          {
            name: "Holy Harmony",
            desc: "Solfeggio frequencies for healing.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman%20Holy%20Harmony/albums"
          },
          {
            name: "The Divine Name",
            desc: "With Gregg Braden: sacred sound.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman%20The%20Divine%20Name/albums"
          },
          {
            name: "Ultimate Om",
            desc: "Deep, steady Om chanting.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman%20Ultimate%20Om/albums"
          },
          {
            name: "Reiki Chants",
            desc: "Sounds for energy work.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman%20Reiki%20Chants/albums"
          },
          {
            name: "Frequencies: Sounds of Healing",
            desc: "Pure healing tones.",
            url: "https://open.spotify.com/search/Jonathan%20Goldman%20Frequencies/albums"
          },
          {
            name: "Healing Sounds website",
            desc: "Books, CDs and workshops.",
            url: "https://www.healingsounds.com/"
          },
          {
            name: "Book: The 7 Secrets of Sound Healing",
            desc: "His practical guide.",
            url: "https://www.google.com/search?q=The+7+Secrets+of+Sound+Healing+Jonathan+Goldman"
          },
          {
            name: "Book: Healing Sounds",
            desc: "The power of harmonics.",
            url: "https://www.google.com/search?q=Healing+Sounds+book+Jonathan+Goldman"
          }
        ],
        youtube: [
          {
            name: "Jonathan Goldman",
            desc: "Talks and sound healing sessions.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman"
          },
          {
            name: "Chakra Chants",
            desc: "Listen to the album.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman+Chakra+Chants"
          },
          {
            name: "Holy Harmony",
            desc: "Solfeggio healing tones.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman+Holy+Harmony"
          },
          {
            name: "Ultimate Om",
            desc: "Om chanting for meditation.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman+Ultimate+Om"
          },
          {
            name: "Vowels as mantras",
            desc: "His toning technique.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman+vowel+sounds+chakras"
          },
          {
            name: "Frequency + Intent",
            desc: "His formula for sound healing.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman+frequency+intent"
          },
          {
            name: "Sound healing interview",
            desc: "Jonathan Goldman explains sound healing.",
            url: "https://www.youtube.com/results?search_query=Jonathan+Goldman+interview+sound+healing"
          },
          {
            name: "Gregg Braden & Goldman",
            desc: "The Divine Name.",
            url: "https://www.youtube.com/results?search_query=Gregg+Braden+Jonathan+Goldman+Divine+Name"
          },
          {
            name: "Toning for beginners",
            desc: "Use your own voice to relax.",
            url: "https://www.youtube.com/results?search_query=toning+sound+healing+for+beginners"
          },
          {
            name: "Overtone chanting",
            desc: "Harmonics you can sing.",
            url: "https://www.youtube.com/results?search_query=overtone+chanting+tutorial"
          }
        ],
        newsSources: [
          {
            name: "Healing Sounds",
            url: "https://www.healingsounds.com/"
          },
          {
            name: "Google News: sound healing",
            url: "https://news.google.com/search?q=%22sound%20healing%22%20OR%20%22sound%20bath%22"
          }
        ]
      },
      {
        id: "med-bowls",
        name: "Crystal Bowls",
        icon: "🔔",
        labels: {
          podcasts: "Spotify",
          icon: "🟢",
          heading: "Spotify picks"
        },
        podcasts: [
          {
            name: "Crystal Singing Bowls",
            desc: "Pure crystal bowl tones.",
            url: "https://open.spotify.com/search/Crystal%20Singing%20Bowls/playlists"
          },
          {
            name: "Sound Bath",
            desc: "Full sound bath sessions.",
            url: "https://open.spotify.com/search/Sound%20Bath/playlists"
          },
          {
            name: "Crystal Bowls for Sleep",
            desc: "Slow, soft bowls to fall asleep.",
            url: "https://open.spotify.com/search/crystal%20bowls%20sleep/playlists"
          },
          {
            name: "Chakra Crystal Bowls",
            desc: "One bowl for each chakra.",
            url: "https://open.spotify.com/search/chakra%20crystal%20bowls/playlists"
          },
          {
            name: "432 Hz Crystal Bowls",
            desc: "Tuned to 432 Hz.",
            url: "https://open.spotify.com/search/432%20Hz%20crystal%20bowls/playlists"
          },
          {
            name: "Tibetan Singing Bowls",
            desc: "Metal bowls, warmer sound.",
            url: "https://open.spotify.com/search/Tibetan%20singing%20bowls/playlists"
          },
          {
            name: "Gong Bath",
            desc: "Deep gong waves.",
            url: "https://open.spotify.com/search/gong%20bath/playlists"
          },
          {
            name: "Crystal Bowls Meditation",
            desc: "Bowls for sitting practice.",
            url: "https://open.spotify.com/search/crystal%20bowls%20meditation/playlists"
          },
          {
            name: "Alchemy Crystal Bowls",
            desc: "Shimmering alchemy bowl tones.",
            url: "https://open.spotify.com/search/alchemy%20crystal%20singing%20bowls/playlists"
          },
          {
            name: "Bowls and Rain",
            desc: "Crystal bowls mixed with rain.",
            url: "https://open.spotify.com/search/singing%20bowls%20rain/playlists"
          }
        ],
        youtube: [
          {
            name: "Crystal bowl sound bath 1 hour",
            desc: "A full session.",
            url: "https://www.youtube.com/results?search_query=crystal+singing+bowl+sound+bath+1+hour"
          },
          {
            name: "Chakra crystal bowls",
            desc: "Each chakra in turn.",
            url: "https://www.youtube.com/results?search_query=chakra+crystal+singing+bowls"
          },
          {
            name: "Crystal bowls for sleep",
            desc: "Fall asleep in minutes.",
            url: "https://www.youtube.com/results?search_query=crystal+singing+bowls+sleep"
          },
          {
            name: "432 Hz crystal bowls",
            desc: "Calming 432 Hz tones.",
            url: "https://www.youtube.com/results?search_query=432+Hz+crystal+singing+bowls"
          },
          {
            name: "Crystal bowls for anxiety",
            desc: "Settle your nervous system.",
            url: "https://www.youtube.com/results?search_query=crystal+bowls+anxiety+relief"
          },
          {
            name: "Alchemy crystal bowls",
            desc: "Shimmering alchemy bowls.",
            url: "https://www.youtube.com/results?search_query=alchemy+crystal+bowls+sound+bath"
          },
          {
            name: "Crystal bowls and gong",
            desc: "Layered sound bath.",
            url: "https://www.youtube.com/results?search_query=crystal+bowls+gong+sound+bath"
          },
          {
            name: "Tibetan singing bowls",
            desc: "Classic metal bowls.",
            url: "https://www.youtube.com/results?search_query=Tibetan+singing+bowls+meditation"
          },
          {
            name: "How to play a crystal bowl",
            desc: "Start playing your own.",
            url: "https://www.youtube.com/results?search_query=how+to+play+crystal+singing+bowl"
          },
          {
            name: "Sound bath San Diego",
            desc: "Find a live sound bath near you.",
            url: "https://www.youtube.com/results?search_query=sound+bath+San+Diego"
          }
        ],
        newsSources: [
          {
            name: "Sound baths in San Diego",
            url: "https://www.google.com/search?q=sound+bath+San+Diego+this+week"
          },
          {
            name: "Sound baths in Tempe",
            url: "https://www.google.com/search?q=sound+bath+Tempe+AZ"
          },
          {
            name: "Google News: sound bath",
            url: "https://news.google.com/search?q=%22sound%20bath%22"
          }
        ]
      },
      {
        id: "med-binaural",
        name: "Binaural Beats",
        icon: "🎧",
        labels: {
          podcasts: "Spotify",
          icon: "🟢",
          heading: "Spotify picks"
        },
        podcasts: [
          {
            name: "Binaural Beats",
            desc: "Use headphones. Not while driving.",
            url: "https://open.spotify.com/search/binaural%20beats/playlists"
          },
          {
            name: "Theta Waves",
            desc: "Deep meditation (4-8 Hz).",
            url: "https://open.spotify.com/search/theta%20binaural%20beats/playlists"
          },
          {
            name: "Alpha Waves",
            desc: "Relaxed focus (8-12 Hz).",
            url: "https://open.spotify.com/search/alpha%20waves%20binaural/playlists"
          },
          {
            name: "Delta Waves Sleep",
            desc: "Deep sleep (0.5-4 Hz).",
            url: "https://open.spotify.com/search/delta%20waves%20sleep/playlists"
          },
          {
            name: "Gamma 40 Hz Focus",
            desc: "Concentration and study.",
            url: "https://open.spotify.com/search/40%20Hz%20gamma%20binaural/playlists"
          },
          {
            name: "Beta Focus",
            desc: "Alert work mode (12-30 Hz).",
            url: "https://open.spotify.com/search/beta%20waves%20focus/playlists"
          },
          {
            name: "Solfeggio 528 Hz",
            desc: "The so-called love frequency.",
            url: "https://open.spotify.com/search/528%20Hz/playlists"
          },
          {
            name: "Brain.fm",
            desc: "Music made for focus and sleep.",
            url: "https://open.spotify.com/search/brain.fm/playlists"
          },
          {
            name: "Lucid Dreaming",
            desc: "Theta beats for dreaming.",
            url: "https://open.spotify.com/search/lucid%20dreaming%20binaural/playlists"
          },
          {
            name: "Monaural Isochronic Tones",
            desc: "Works without headphones.",
            url: "https://open.spotify.com/search/isochronic%20tones/playlists"
          }
        ],
        youtube: [
          {
            name: "Theta waves meditation",
            desc: "Deep meditation beats.",
            url: "https://www.youtube.com/results?search_query=theta+waves+binaural+beats+meditation"
          },
          {
            name: "Alpha waves focus",
            desc: "Calm focus while working.",
            url: "https://www.youtube.com/results?search_query=alpha+waves+binaural+beats+focus"
          },
          {
            name: "Delta waves deep sleep",
            desc: "8-hour sleep tracks.",
            url: "https://www.youtube.com/results?search_query=delta+waves+deep+sleep+binaural+8+hours"
          },
          {
            name: "40 Hz gamma",
            desc: "Focus and memory.",
            url: "https://www.youtube.com/results?search_query=40+Hz+gamma+binaural+beats"
          },
          {
            name: "Isochronic tones",
            desc: "No headphones needed.",
            url: "https://www.youtube.com/results?search_query=isochronic+tones+meditation"
          },
          {
            name: "Jason Lewis Mind Amend",
            desc: "Popular binaural sleep and calm tracks.",
            url: "https://www.youtube.com/results?search_query=Jason+Lewis+Mind+Amend"
          },
          {
            name: "Greenred Productions",
            desc: "Relaxing music with binaural layers.",
            url: "https://www.youtube.com/results?search_query=Greenred+Productions"
          },
          {
            name: "Meditative Mind",
            desc: "Solfeggio and chakra frequencies.",
            url: "https://www.youtube.com/results?search_query=Meditative+Mind"
          },
          {
            name: "Binaural beats explained",
            desc: "What they do and what the science says.",
            url: "https://www.youtube.com/results?search_query=binaural+beats+explained+science"
          },
          {
            name: "Hemi-Sync Gateway",
            desc: "The Monroe Institute's classic process.",
            url: "https://www.youtube.com/results?search_query=Monroe+Institute+Hemi-Sync+Gateway"
          }
        ],
        newsSources: [
          {
            name: "Monroe Institute",
            url: "https://www.monroeinstitute.org/"
          },
          {
            name: "Google News: binaural beats",
            url: "https://news.google.com/search?q=%22binaural%20beats%22"
          }
        ]
      }
    ]
  },
  {
    id: "money",
    name: "Money Saver",
    icon: "💰",
    accent: "#3ddc84",
    tagline: "Tips and tricks to save on groceries, gas, travel and bills",
    subs: [
      {
        id: "save-groceries",
        name: "Groceries",
        icon: "🛒",
        labels: {
          podcasts: "Tips",
          icon: "💡",
          heading: "money-saving tips"
        },
        podcasts: [
          {
            name: "Flipp",
            desc: "All weekly grocery ads in one app, plus price matching.",
            url: "https://flipp.com/"
          },
          {
            name: "Store apps: digital coupons",
            desc: "Vons, Ralphs, Albertsons, Fry's: clip coupons before you shop.",
            url: "https://www.google.com/search?q=Vons+for+U+digital+coupons+Ralphs+digital+coupons"
          },
          {
            name: "Costco",
            desc: "Bulk staples, cheap gas, rotisserie chicken. Check the Executive rebate.",
            url: "https://www.costco.com/"
          },
          {
            name: "Aldi",
            desc: "Low prices on everyday groceries.",
            url: "https://www.aldi.us/"
          },
          {
            name: "Grocery Outlet",
            desc: "Bargain brand-name groceries.",
            url: "https://groceryoutlet.com/"
          },
          {
            name: "Ibotta",
            desc: "Cash back on groceries you already buy.",
            url: "https://home.ibotta.com/"
          },
          {
            name: "Fetch",
            desc: "Scan any receipt for points.",
            url: "https://fetch.com/"
          },
          {
            name: "Too Good To Go",
            desc: "Surprise bags of unsold food at big discounts.",
            url: "https://www.toogoodtogo.com/"
          },
          {
            name: "Meal planning",
            desc: "Plan around sales to cut waste.",
            url: "https://www.google.com/search?q=meal+plan+around+grocery+sales+tips"
          },
          {
            name: "Unit price trick",
            desc: "Compare price per ounce, not per package.",
            url: "https://www.google.com/search?q=how+to+compare+unit+prices+grocery"
          }
        ],
        youtube: [
          {
            name: "Grocery haul on a budget",
            desc: "Real budget hauls and tips.",
            url: "https://www.youtube.com/results?search_query=budget+grocery+haul+tips"
          },
          {
            name: "Aldi vs Costco",
            desc: "Where to buy what.",
            url: "https://www.youtube.com/results?search_query=Aldi+vs+Costco+prices"
          },
          {
            name: "Cheap healthy meals",
            desc: "Eat well for less.",
            url: "https://www.youtube.com/results?search_query=cheap+healthy+meal+prep"
          },
          {
            name: "Budget Bytes",
            desc: "Recipes with cost per serving.",
            url: "https://www.youtube.com/results?search_query=Budget+Bytes"
          },
          {
            name: "Clark Howard grocery tips",
            desc: "Consumer champion's tips.",
            url: "https://www.youtube.com/results?search_query=Clark+Howard+grocery+saving"
          },
          {
            name: "Costco best buys",
            desc: "What's worth it at Costco.",
            url: "https://www.youtube.com/results?search_query=Costco+best+buys"
          },
          {
            name: "Meal prep for the week",
            desc: "Save time and money.",
            url: "https://www.youtube.com/results?search_query=meal+prep+for+the+week+budget"
          },
          {
            name: "Stop food waste",
            desc: "Store food so it lasts.",
            url: "https://www.youtube.com/results?search_query=how+to+reduce+food+waste+at+home"
          },
          {
            name: "Couponing basics",
            desc: "Coupons without the craziness.",
            url: "https://www.youtube.com/results?search_query=couponing+for+beginners"
          },
          {
            name: "Frugal cooking",
            desc: "Simple, cheap staples.",
            url: "https://www.youtube.com/results?search_query=frugal+cooking"
          }
        ],
        newsSources: [
          {
            name: "Google News: grocery prices",
            url: "https://news.google.com/search?q=grocery%20prices"
          },
          {
            name: "Clark.com",
            url: "https://clark.com/"
          }
        ]
      },
      {
        id: "save-gas",
        name: "Gas & Car",
        icon: "⛽",
        labels: {
          podcasts: "Tips",
          icon: "💡",
          heading: "money-saving tips"
        },
        podcasts: [
          {
            name: "GasBuddy",
            desc: "Cheapest gas near you, live prices.",
            url: "https://www.gasbuddy.com/"
          },
          {
            name: "Costco gas",
            desc: "Usually among the cheapest in SD and Tempe.",
            url: "https://www.google.com/search?q=Costco+gas+prices+near+me"
          },
          {
            name: "Upside",
            desc: "Cash back at gas stations.",
            url: "https://www.upside.com/"
          },
          {
            name: "Shell Fuel Rewards",
            desc: "Free program for cents off per gallon.",
            url: "https://www.fuelrewards.com/"
          },
          {
            name: "Insurance check-up",
            desc: "Compare quotes every year; raise your deductible.",
            url: "https://www.google.com/search?q=how+to+lower+car+insurance+tips+compare+quotes"
          },
          {
            name: "Tire pressure",
            desc: "Correct pressure saves gas and tires.",
            url: "https://www.google.com/search?q=tire+pressure+fuel+economy"
          },
          {
            name: "DIY oil and filters",
            desc: "Easy jobs you can do yourself.",
            url: "https://www.youtube.com/results?search_query=ChrisFix+oil+change"
          },
          {
            name: "RockAuto parts",
            desc: "Cheap car parts shipped to you.",
            url: "https://www.rockauto.com/"
          },
          {
            name: "Smog check coupons (SD)",
            desc: "Find smog check deals in San Diego.",
            url: "https://www.google.com/search?q=smog+check+coupon+San+Diego"
          },
          {
            name: "Fuel-saving driving",
            desc: "Smooth driving can save 10-20%.",
            url: "https://www.google.com/search?q=driving+habits+to+save+gas"
          }
        ],
        youtube: [
          {
            name: "ChrisFix",
            desc: "DIY car repair made easy.",
            url: "https://www.youtube.com/results?search_query=ChrisFix"
          },
          {
            name: "Scotty Kilmer",
            desc: "Car advice from a veteran mechanic.",
            url: "https://www.youtube.com/results?search_query=Scotty+Kilmer"
          },
          {
            name: "Engineering Explained",
            desc: "How to get better mileage, explained.",
            url: "https://www.youtube.com/results?search_query=Engineering+Explained"
          },
          {
            name: "Save gas tips",
            desc: "What actually works.",
            url: "https://www.youtube.com/results?search_query=how+to+save+gas+tips+that+work"
          },
          {
            name: "Car insurance tips",
            desc: "Pay less for the same coverage.",
            url: "https://www.youtube.com/results?search_query=how+to+lower+car+insurance"
          },
          {
            name: "Buying a used car",
            desc: "Avoid overpaying.",
            url: "https://www.youtube.com/results?search_query=how+to+buy+a+used+car+tips"
          },
          {
            name: "Negotiating a car",
            desc: "Scripts from car buyers.",
            url: "https://www.youtube.com/results?search_query=how+to+negotiate+car+price"
          },
          {
            name: "Brake pads DIY",
            desc: "Save on brake jobs.",
            url: "https://www.youtube.com/results?search_query=how+to+replace+brake+pads"
          },
          {
            name: "Cabin air filter DIY",
            desc: "A 5-minute job.",
            url: "https://www.youtube.com/results?search_query=cabin+air+filter+replace"
          },
          {
            name: "Car maintenance schedule",
            desc: "What to do and when.",
            url: "https://www.youtube.com/results?search_query=car+maintenance+schedule"
          }
        ],
        newsSources: [
          {
            name: "GasBuddy news",
            url: "https://www.gasbuddy.com/"
          },
          {
            name: "Google News: gas prices CA",
            url: "https://news.google.com/search?q=gas%20prices%20California%20OR%20Arizona"
          }
        ]
      },
      {
        id: "save-travel",
        name: "Travel Deals",
        icon: "✈️",
        labels: {
          podcasts: "Tips",
          icon: "💡",
          heading: "money-saving tips"
        },
        podcasts: [
          {
            name: "Google Flights",
            desc: "Price graph and tracking for the cheapest days.",
            url: "https://www.google.com/travel/flights"
          },
          {
            name: "Going",
            desc: "Flight deal alerts from your airport.",
            url: "https://www.going.com/"
          },
          {
            name: "Southwest low-fare calendar",
            desc: "Cheapest days at a glance; free changes.",
            url: "https://www.southwest.com/"
          },
          {
            name: "Kayak",
            desc: "Compare flights, hotels and rental cars.",
            url: "https://www.kayak.com/"
          },
          {
            name: "Costco Travel",
            desc: "Packages and rental cars with member pricing.",
            url: "https://www.costcotravel.com/"
          },
          {
            name: "The Points Guy",
            desc: "Get more from points and miles.",
            url: "https://thepointsguy.com/"
          },
          {
            name: "Hotel price drops",
            desc: "Book refundable, then rebook if the price falls.",
            url: "https://www.google.com/search?q=rebook+hotel+price+drop+tip"
          },
          {
            name: "Rental car tricks",
            desc: "Track prices and use off-airport pickup.",
            url: "https://www.google.com/search?q=rental+car+price+tracking+AutoSlash"
          },
          {
            name: "Shoulder season",
            desc: "Travel just before or after peak for big savings.",
            url: "https://www.google.com/search?q=shoulder+season+travel+savings"
          },
          {
            name: "Credit card perks",
            desc: "Free bags, lounges and travel insurance.",
            url: "https://www.google.com/search?q=best+travel+credit+card+perks"
          }
        ],
        youtube: [
          {
            name: "Kara and Nate",
            desc: "Budget travel around the world.",
            url: "https://www.youtube.com/results?search_query=Kara+and+Nate"
          },
          {
            name: "The Points Guy",
            desc: "Points and miles strategy.",
            url: "https://www.youtube.com/results?search_query=The+Points+Guy"
          },
          {
            name: "Google Flights tricks",
            desc: "Find cheaper flights.",
            url: "https://www.youtube.com/results?search_query=Google+Flights+tricks+cheap+flights"
          },
          {
            name: "Packing light",
            desc: "Skip bag fees.",
            url: "https://www.youtube.com/results?search_query=packing+light+carry+on+only"
          },
          {
            name: "Cheap road trips",
            desc: "Save on long drives.",
            url: "https://www.youtube.com/results?search_query=road+trip+on+a+budget+tips"
          },
          {
            name: "Hotel hacks",
            desc: "Pay less for rooms.",
            url: "https://www.youtube.com/results?search_query=hotel+booking+hacks"
          },
          {
            name: "Travel credit cards",
            desc: "Pick the right card.",
            url: "https://www.youtube.com/results?search_query=best+travel+credit+card+beginner"
          },
          {
            name: "Rental car hacks",
            desc: "Avoid surprise fees.",
            url: "https://www.youtube.com/results?search_query=rental+car+tips+save+money"
          },
          {
            name: "Europe on a budget",
            desc: "Trains, hostels and food.",
            url: "https://www.youtube.com/results?search_query=Europe+on+a+budget+tips"
          },
          {
            name: "Camping on a budget",
            desc: "Cheap campsites and gear.",
            url: "https://www.youtube.com/results?search_query=camping+on+a+budget"
          }
        ],
        newsSources: [
          {
            name: "The Points Guy",
            url: "https://thepointsguy.com/"
          },
          {
            name: "Google News: travel deals",
            url: "https://news.google.com/search?q=travel%20deals%20OR%20cheap%20flights"
          }
        ]
      },
      {
        id: "save-bills",
        name: "Bills & Subscriptions",
        icon: "📱",
        labels: {
          podcasts: "Tips",
          icon: "💡",
          heading: "money-saving tips"
        },
        podcasts: [
          {
            name: "Rocket Money",
            desc: "Find and cancel forgotten subscriptions.",
            url: "https://www.rocketmoney.com/"
          },
          {
            name: "Mint Mobile",
            desc: "Cheap phone plans on T-Mobile's network.",
            url: "https://www.mintmobile.com/"
          },
          {
            name: "Visible",
            desc: "Low-cost unlimited plan on Verizon's network.",
            url: "https://www.visible.com/"
          },
          {
            name: "Rotate streaming",
            desc: "Keep one service at a time; switch monthly.",
            url: "https://www.google.com/search?q=rotate+streaming+subscriptions+save+money"
          },
          {
            name: "Libby: free audiobooks",
            desc: "Free audiobooks for the car with your library card.",
            url: "https://libbyapp.com/"
          },
          {
            name: "SDG&E rate plans",
            desc: "Pick the right time-of-use plan in San Diego.",
            url: "https://www.sdge.com/"
          },
          {
            name: "SRP price plans (Tempe)",
            desc: "Compare Arizona electric plans.",
            url: "https://www.srpnet.com/"
          },
          {
            name: "Negotiate internet",
            desc: "Call and ask for the retention deal.",
            url: "https://www.google.com/search?q=how+to+negotiate+internet+bill+script"
          },
          {
            name: "Insurance bundle check",
            desc: "Bundle home and auto; review yearly.",
            url: "https://www.google.com/search?q=bundle+home+auto+insurance+savings"
          },
          {
            name: "Cancel gym or apps",
            desc: "Cancel the ones you don't use.",
            url: "https://www.google.com/search?q=how+to+cancel+subscriptions+iPhone"
          }
        ],
        youtube: [
          {
            name: "Cancel subscriptions iPhone",
            desc: "Find every subscription in Settings.",
            url: "https://www.youtube.com/results?search_query=how+to+cancel+subscriptions+iPhone+settings"
          },
          {
            name: "Lower your bills",
            desc: "A checklist that works.",
            url: "https://www.youtube.com/results?search_query=how+to+lower+monthly+bills"
          },
          {
            name: "Cheap phone plans",
            desc: "MVNO plans explained.",
            url: "https://www.youtube.com/results?search_query=best+cheap+phone+plans"
          },
          {
            name: "Negotiate bills",
            desc: "Phone scripts that work.",
            url: "https://www.youtube.com/results?search_query=how+to+negotiate+bills"
          },
          {
            name: "Save on electricity",
            desc: "Simple home energy tips.",
            url: "https://www.youtube.com/results?search_query=save+money+on+electricity+bill"
          },
          {
            name: "Cut the cord",
            desc: "Streaming instead of cable.",
            url: "https://www.youtube.com/results?search_query=cut+the+cord+save+money+streaming"
          },
          {
            name: "Libby app",
            desc: "Free library audiobooks.",
            url: "https://www.youtube.com/results?search_query=Libby+app+how+to+use"
          },
          {
            name: "Smart thermostat savings",
            desc: "Do they pay off?",
            url: "https://www.youtube.com/results?search_query=smart+thermostat+savings"
          },
          {
            name: "Solar in San Diego",
            desc: "Is it worth it under NEM 3?",
            url: "https://www.youtube.com/results?search_query=solar+San+Diego+NEM+3+worth+it"
          },
          {
            name: "Insurance savings",
            desc: "Lower premiums without less coverage.",
            url: "https://www.youtube.com/results?search_query=lower+home+insurance+premium+tips"
          }
        ],
        newsSources: [
          {
            name: "Google News: utility rates SD",
            url: "https://news.google.com/search?q=SDG%26E%20rates"
          },
          {
            name: "Google News: subscription prices",
            url: "https://news.google.com/search?q=subscription%20price%20increase%20streaming"
          }
        ]
      },
      {
        id: "save-shopping",
        name: "Shopping & Cash Back",
        icon: "🏷️",
        labels: {
          podcasts: "Tips",
          icon: "💡",
          heading: "money-saving tips"
        },
        podcasts: [
          {
            name: "Slickdeals",
            desc: "Community-voted best deals.",
            url: "https://slickdeals.net/"
          },
          {
            name: "CamelCamelCamel",
            desc: "Amazon price history and drop alerts.",
            url: "https://camelcamelcamel.com/"
          },
          {
            name: "Rakuten",
            desc: "Cash back at hundreds of stores.",
            url: "https://www.rakuten.com/"
          },
          {
            name: "Honey",
            desc: "Auto-applies coupon codes at checkout.",
            url: "https://www.joinhoney.com/"
          },
          {
            name: "Amazon Resale",
            desc: "Open-box and used items, discounted.",
            url: "https://www.google.com/search?q=Amazon+Resale+warehouse+deals"
          },
          {
            name: "Facebook Marketplace",
            desc: "Used gear, tools and electronics locally.",
            url: "https://www.facebook.com/marketplace/"
          },
          {
            name: "Buy Nothing groups",
            desc: "Free stuff from neighbors.",
            url: "https://www.google.com/search?q=Buy+Nothing+group+near+me"
          },
          {
            name: "Refurbished electronics",
            desc: "Apple and Dell refurbished with warranty.",
            url: "https://www.google.com/search?q=Apple+certified+refurbished"
          },
          {
            name: "30-day rule",
            desc: "Wait 30 days before a big non-essential buy.",
            url: "https://www.google.com/search?q=30+day+rule+impulse+buying"
          },
          {
            name: "Price adjustment policies",
            desc: "Get refunded when prices drop.",
            url: "https://www.google.com/search?q=store+price+adjustment+policy+list"
          }
        ],
        youtube: [
          {
            name: "Slickdeals tips",
            desc: "How deal hunters shop.",
            url: "https://www.youtube.com/results?search_query=how+to+find+deals+online+Slickdeals"
          },
          {
            name: "Amazon price tricks",
            desc: "Never overpay on Amazon.",
            url: "https://www.youtube.com/results?search_query=Amazon+price+tracking+tips"
          },
          {
            name: "Costco hacks",
            desc: "Price codes and markdowns.",
            url: "https://www.youtube.com/results?search_query=Costco+price+codes+hack"
          },
          {
            name: "Thrift flipping",
            desc: "Find value at thrift stores.",
            url: "https://www.youtube.com/results?search_query=thrift+store+finds+tips"
          },
          {
            name: "Cash back stacking",
            desc: "Card plus portal plus coupon.",
            url: "https://www.youtube.com/results?search_query=cash+back+stacking"
          },
          {
            name: "Minimalism and money",
            desc: "Buy less, save more.",
            url: "https://www.youtube.com/results?search_query=minimalism+save+money"
          },
          {
            name: "Black Friday tips",
            desc: "Real deals vs hype.",
            url: "https://www.youtube.com/results?search_query=Black+Friday+tips+real+deals"
          },
          {
            name: "Refurbished vs new",
            desc: "Is refurbished worth it?",
            url: "https://www.youtube.com/results?search_query=refurbished+vs+new+electronics"
          },
          {
            name: "Garage sale tips",
            desc: "Score cheap tools and gear.",
            url: "https://www.youtube.com/results?search_query=garage+sale+tips"
          },
          {
            name: "No-spend challenge",
            desc: "Reset your habits.",
            url: "https://www.youtube.com/results?search_query=no+spend+challenge"
          }
        ],
        newsSources: [
          {
            name: "Slickdeals front page",
            url: "https://slickdeals.net/"
          },
          {
            name: "Google News: deals",
            url: "https://news.google.com/search?q=best%20deals%20this%20week"
          }
        ]
      },
      {
        id: "save-sites",
        name: "Money Sites",
        icon: "🧠",
        labels: {
          podcasts: "Sites",
          icon: "🌐",
          heading: "to bookmark"
        },
        podcasts: [
          {
            name: "NerdWallet",
            desc: "Compare credit cards, bank rates, insurance and loans, plus clear money guides.",
            url: "https://www.nerdwallet.com/"
          },
          {
            name: "WalletHub",
            desc: "Card and loan comparisons, free credit score and city money rankings.",
            url: "https://wallethub.com/"
          },
          {
            name: "Bankrate",
            desc: "Best savings, CD and mortgage rates, updated daily.",
            url: "https://www.bankrate.com/"
          },
          {
            name: "Credit Karma",
            desc: "Free credit scores and alerts from TransUnion and Equifax.",
            url: "https://www.creditkarma.com/"
          },
          {
            name: "Doctor of Credit",
            desc: "Bank bonuses and credit card deals, posted daily.",
            url: "https://www.doctorofcredit.com/"
          },
          {
            name: "The Points Guy",
            desc: "Points, miles and travel card perks.",
            url: "https://thepointsguy.com/"
          },
          {
            name: "Clark.com",
            desc: "Clark Howard's no-nonsense saving tips.",
            url: "https://clark.com/"
          },
          {
            name: "Investopedia",
            desc: "Plain-English explanations of any money term.",
            url: "https://www.investopedia.com/"
          },
          {
            name: "Kiplinger",
            desc: "Personal finance, taxes and retirement planning.",
            url: "https://www.kiplinger.com/"
          },
          {
            name: "AnnualCreditReport.com",
            desc: "Your free official credit reports, every week.",
            url: "https://www.annualcreditreport.com/"
          }
        ],
        youtube: [
          {
            name: "NerdWallet",
            desc: "Money tips and card reviews from NerdWallet.",
            url: "https://www.youtube.com/results?search_query=NerdWallet"
          },
          {
            name: "WalletHub",
            desc: "Money tips from WalletHub.",
            url: "https://www.youtube.com/results?search_query=WalletHub"
          },
          {
            name: "Bankrate",
            desc: "Rates and money explainers.",
            url: "https://www.youtube.com/results?search_query=Bankrate"
          },
          {
            name: "Clark Howard",
            desc: "Saving tips and scam warnings.",
            url: "https://www.youtube.com/results?search_query=Clark+Howard"
          },
          {
            name: "The Points Guy",
            desc: "Points and travel card tips.",
            url: "https://www.youtube.com/results?search_query=The+Points+Guy"
          },
          {
            name: "Best high-yield savings",
            desc: "Where to park cash right now.",
            url: "https://www.youtube.com/results?search_query=best+high+yield+savings+account"
          },
          {
            name: "Bank bonus hunting",
            desc: "Earn bank sign-up bonuses.",
            url: "https://www.youtube.com/results?search_query=bank+account+bonus+how+to"
          },
          {
            name: "Raise your credit score",
            desc: "Fast, legit ways to improve it.",
            url: "https://www.youtube.com/results?search_query=how+to+raise+credit+score+fast"
          },
          {
            name: "Best cash back cards",
            desc: "Which card earns the most.",
            url: "https://www.youtube.com/results?search_query=best+cash+back+credit+card"
          },
          {
            name: "Freeze your credit",
            desc: "Protect yourself from identity theft.",
            url: "https://www.youtube.com/results?search_query=how+to+freeze+your+credit"
          }
        ],
        newsSources: [
          {
            name: "NerdWallet",
            url: "https://www.nerdwallet.com/"
          },
          {
            name: "WalletHub",
            url: "https://wallethub.com/"
          },
          {
            name: "Bankrate",
            url: "https://www.bankrate.com/"
          },
          {
            name: "Doctor of Credit",
            url: "https://www.doctorofcredit.com/"
          },
          {
            name: "Google News: rates and deals",
            url: "https://news.google.com/search?q=savings%20rates%20OR%20bank%20bonus%20OR%20credit%20card%20deals"
          }
        ]
      },
      {
        id: "save-budget",
        name: "Budget & Invest",
        icon: "📈",
        podcasts: [
          {
            name: "The Money Guy Show",
            desc: "Financial order of operations and wealth building.",
            url: "https://podcasts.apple.com/us/search?term=The%20Money%20Guy%20Show"
          },
          {
            name: "ChooseFI",
            desc: "Financial independence through saving and investing.",
            url: "https://podcasts.apple.com/us/search?term=ChooseFI"
          },
          {
            name: "The Clark Howard Podcast",
            desc: "Consumer tips to save more and spend less.",
            url: "https://podcasts.apple.com/us/search?term=The%20Clark%20Howard%20Podcast"
          },
          {
            name: "Afford Anything",
            desc: "Paula Pant on choices, money and FIRE.",
            url: "https://podcasts.apple.com/us/search?term=Afford%20Anything"
          },
          {
            name: "BiggerPockets Money",
            desc: "Real people, real money stories.",
            url: "https://podcasts.apple.com/us/search?term=BiggerPockets%20Money"
          },
          {
            name: "How to Money",
            desc: "Friendly, practical personal finance.",
            url: "https://podcasts.apple.com/us/search?term=How%20to%20Money"
          },
          {
            name: "Stacking Benjamins",
            desc: "Money talk that's actually fun.",
            url: "https://podcasts.apple.com/us/search?term=Stacking%20Benjamins"
          },
          {
            name: "The Ramsey Show",
            desc: "Debt-free living, call-in style.",
            url: "https://podcasts.apple.com/us/search?term=The%20Ramsey%20Show"
          },
          {
            name: "Frugal Friends",
            desc: "Practical frugality without deprivation.",
            url: "https://podcasts.apple.com/us/search?term=Frugal%20Friends"
          },
          {
            name: "Planet Money",
            desc: "NPR on how money works.",
            url: "https://podcasts.apple.com/us/search?term=Planet%20Money"
          }
        ],
        youtube: [
          {
            name: "The Money Guy Show",
            desc: "Step-by-step money roadmap.",
            url: "https://www.youtube.com/results?search_query=The+Money+Guy+Show"
          },
          {
            name: "Graham Stephan",
            desc: "Saving, investing and real estate.",
            url: "https://www.youtube.com/results?search_query=Graham+Stephan"
          },
          {
            name: "Humphrey Yang",
            desc: "Short, clear money explainers.",
            url: "https://www.youtube.com/results?search_query=Humphrey+Yang"
          },
          {
            name: "Two Cents",
            desc: "PBS personal finance.",
            url: "https://www.youtube.com/results?search_query=Two+Cents"
          },
          {
            name: "Ben Felix",
            desc: "Evidence-based investing.",
            url: "https://www.youtube.com/results?search_query=Ben+Felix"
          },
          {
            name: "Andrei Jikh",
            desc: "Investing and saving made visual.",
            url: "https://www.youtube.com/results?search_query=Andrei+Jikh"
          },
          {
            name: "Clark Howard",
            desc: "Consumer advice, every day.",
            url: "https://www.youtube.com/results?search_query=Clark+Howard"
          },
          {
            name: "Our Rich Journey",
            desc: "Early retirement on a plan.",
            url: "https://www.youtube.com/results?search_query=Our+Rich+Journey"
          },
          {
            name: "Dave Ramsey",
            desc: "Debt payoff and budgeting.",
            url: "https://www.youtube.com/results?search_query=The+Ramsey+Show+highlights"
          },
          {
            name: "Budgeting for beginners",
            desc: "Start a budget in 10 minutes.",
            url: "https://www.youtube.com/results?search_query=how+to+budget+for+beginners"
          }
        ],
        newsSources: [
          {
            name: "NerdWallet",
            url: "https://www.nerdwallet.com/"
          },
          {
            name: "Kiplinger",
            url: "https://www.kiplinger.com/"
          },
          {
            name: "Clark.com",
            url: "https://clark.com/"
          },
          {
            name: "Google News: personal finance",
            url: "https://news.google.com/search?q=personal%20finance%20tips"
          }
        ]
      }
    ]
  },
  {
    id: "worldnews",
    name: "World News",
    icon: "🗞️",
    accent: "#5b9cff",
    tagline: "USA, world, EU and Germany, plus politics, business, tech and more",
    defaultTab: "news",
    subs: [
      {
        id: "wn-usa",
        name: "USA",
        icon: "🇺🇸",
        podcasts: [
          {
            name: "The Daily",
            desc: "The New York Times' 20-minute daily story.",
            url: "https://podcasts.apple.com/us/search?term=The%20Daily"
          },
          {
            name: "Up First",
            desc: "NPR's morning news in 15 minutes.",
            url: "https://podcasts.apple.com/us/search?term=Up%20First"
          },
          {
            name: "Consider This",
            desc: "NPR's afternoon deep dive.",
            url: "https://podcasts.apple.com/us/search?term=Consider%20This"
          },
          {
            name: "The Journal",
            desc: "WSJ on money, business and power.",
            url: "https://podcasts.apple.com/us/search?term=The%20Journal"
          },
          {
            name: "Today, Explained",
            desc: "Vox explains one big story a day.",
            url: "https://podcasts.apple.com/us/search?term=Today%2C%20Explained"
          },
          {
            name: "Start Here",
            desc: "ABC News daily briefing.",
            url: "https://podcasts.apple.com/us/search?term=Start%20Here"
          },
          {
            name: "Post Reports",
            desc: "The Washington Post's daily podcast.",
            url: "https://podcasts.apple.com/us/search?term=Post%20Reports"
          },
          {
            name: "WSJ What's News",
            desc: "Quick business and world headlines.",
            url: "https://podcasts.apple.com/us/search?term=What%27s%20News%20WSJ"
          },
          {
            name: "The NPR Politics Podcast",
            desc: "Washington, explained.",
            url: "https://podcasts.apple.com/us/search?term=The%20NPR%20Politics%20Podcast"
          },
          {
            name: "The Dispatch Podcast",
            desc: "Center-right takes on the news.",
            url: "https://podcasts.apple.com/us/search?term=The%20Dispatch%20Podcast"
          }
        ],
        youtube: [
          {
            name: "PBS NewsHour",
            desc: "Calm, in-depth evening news.",
            url: "https://www.youtube.com/results?search_query=PBS+NewsHour"
          },
          {
            name: "Associated Press",
            desc: "Raw news video from AP.",
            url: "https://www.youtube.com/results?search_query=Associated+Press"
          },
          {
            name: "Reuters",
            desc: "Straight news from Reuters.",
            url: "https://www.youtube.com/results?search_query=Reuters"
          },
          {
            name: "NBC News",
            desc: "NBC Nightly News and more.",
            url: "https://www.youtube.com/results?search_query=NBC+News"
          },
          {
            name: "ABC News",
            desc: "World News Tonight and more.",
            url: "https://www.youtube.com/results?search_query=ABC+News"
          },
          {
            name: "CBS News",
            desc: "CBS Evening News and more.",
            url: "https://www.youtube.com/results?search_query=CBS+News"
          },
          {
            name: "CNN",
            desc: "Breaking news and analysis.",
            url: "https://www.youtube.com/results?search_query=CNN"
          },
          {
            name: "Fox News",
            desc: "News and opinion.",
            url: "https://www.youtube.com/results?search_query=Fox+News"
          },
          {
            name: "Wall Street Journal",
            desc: "WSJ explainers and video.",
            url: "https://www.youtube.com/results?search_query=Wall+Street+Journal"
          },
          {
            name: "C-SPAN",
            desc: "Congress and politics, unfiltered.",
            url: "https://www.youtube.com/results?search_query=C-SPAN"
          }
        ],
        newsSources: [
          {
            name: "AP News",
            url: "https://apnews.com/"
          },
          {
            name: "Reuters",
            url: "https://www.reuters.com/"
          },
          {
            name: "NPR",
            url: "https://www.npr.org/"
          },
          {
            name: "Google News: US",
            url: "https://news.google.com/?hl=en-US&gl=US&ceid=US:en"
          }
        ]
      },
      {
        id: "wn-world",
        name: "World",
        icon: "🌍",
        podcasts: [
          {
            name: "Global News Podcast",
            desc: "BBC World Service, twice a day.",
            url: "https://podcasts.apple.com/us/search?term=Global%20News%20Podcast"
          },
          {
            name: "The Intelligence",
            desc: "The Economist's daily news podcast.",
            url: "https://podcasts.apple.com/us/search?term=The%20Intelligence"
          },
          {
            name: "Today in Focus",
            desc: "The Guardian's daily deep dive.",
            url: "https://podcasts.apple.com/us/search?term=Today%20in%20Focus"
          },
          {
            name: "The Take",
            desc: "Al Jazeera on one global story.",
            url: "https://podcasts.apple.com/us/search?term=The%20Take"
          },
          {
            name: "The World",
            desc: "PRX and GBH global news hour.",
            url: "https://podcasts.apple.com/us/search?term=The%20World"
          },
          {
            name: "FT News Briefing",
            desc: "Financial Times morning headlines.",
            url: "https://podcasts.apple.com/us/search?term=FT%20News%20Briefing"
          },
          {
            name: "Reuters World News",
            desc: "Five-minute world roundup.",
            url: "https://podcasts.apple.com/us/search?term=Reuters%20World%20News"
          },
          {
            name: "The Rest Is Politics",
            desc: "Alastair Campbell and Rory Stewart.",
            url: "https://podcasts.apple.com/us/search?term=The%20Rest%20Is%20Politics"
          },
          {
            name: "Front Burner",
            desc: "CBC's daily news podcast.",
            url: "https://podcasts.apple.com/us/search?term=Front%20Burner"
          },
          {
            name: "The Globalist",
            desc: "Monocle's morning world news.",
            url: "https://podcasts.apple.com/us/search?term=The%20Globalist"
          }
        ],
        youtube: [
          {
            name: "BBC News",
            desc: "World news from the BBC.",
            url: "https://www.youtube.com/results?search_query=BBC+News"
          },
          {
            name: "Al Jazeera English",
            desc: "Global news, live.",
            url: "https://www.youtube.com/results?search_query=Al+Jazeera+English"
          },
          {
            name: "DW News",
            desc: "Germany's international broadcaster, in English.",
            url: "https://www.youtube.com/results?search_query=DW+News"
          },
          {
            name: "FRANCE 24 English",
            desc: "French international news.",
            url: "https://www.youtube.com/results?search_query=FRANCE+24+English"
          },
          {
            name: "Sky News",
            desc: "UK and world news.",
            url: "https://www.youtube.com/results?search_query=Sky+News"
          },
          {
            name: "CNA",
            desc: "Asia-focused news from Singapore.",
            url: "https://www.youtube.com/results?search_query=CNA"
          },
          {
            name: "NHK WORLD-JAPAN",
            desc: "Japan and Asia news.",
            url: "https://www.youtube.com/results?search_query=NHK+WORLD-JAPAN"
          },
          {
            name: "ABC News (Australia)",
            desc: "Australian and world news.",
            url: "https://www.youtube.com/results?search_query=ABC+News+In-depth+Australia"
          },
          {
            name: "CBC News",
            desc: "Canadian and world news.",
            url: "https://www.youtube.com/results?search_query=CBC+News"
          },
          {
            name: "WION",
            desc: "World news from India.",
            url: "https://www.youtube.com/results?search_query=WION"
          }
        ],
        newsSources: [
          {
            name: "BBC World",
            url: "https://www.bbc.com/news/world"
          },
          {
            name: "Al Jazeera",
            url: "https://www.aljazeera.com/"
          },
          {
            name: "The Guardian: World",
            url: "https://www.theguardian.com/world"
          },
          {
            name: "Google News: World",
            url: "https://news.google.com/search?q=world%20news"
          }
        ]
      },
      {
        id: "wn-eu",
        name: "EU",
        icon: "🇪🇺",
        podcasts: [
          {
            name: "EU Confidential",
            desc: "POLITICO Europe's weekly on Brussels.",
            url: "https://podcasts.apple.com/us/search?term=EU%20Confidential"
          },
          {
            name: "Talking Europe",
            desc: "France 24 on European politics.",
            url: "https://podcasts.apple.com/us/search?term=Talking%20Europe"
          },
          {
            name: "DW News",
            desc: "Deutsche Welle news in English.",
            url: "https://podcasts.apple.com/us/search?term=DW%20News%20podcast"
          },
          {
            name: "Euronews",
            desc: "European news and features.",
            url: "https://podcasts.apple.com/us/search?term=Euronews%20podcast"
          },
          {
            name: "The Economist: Charlemagne",
            desc: "The Economist on Europe.",
            url: "https://podcasts.apple.com/us/search?term=Economist%20Europe"
          },
          {
            name: "Brussels Sprouts",
            desc: "Transatlantic security talk from CEPA.",
            url: "https://podcasts.apple.com/us/search?term=Brussels%20Sprouts%20CEPA"
          }
        ],
        youtube: [
          {
            name: "euronews",
            desc: "News from across Europe.",
            url: "https://www.youtube.com/results?search_query=euronews"
          },
          {
            name: "DW News",
            desc: "European and world news in English.",
            url: "https://www.youtube.com/results?search_query=DW+News"
          },
          {
            name: "FRANCE 24 English",
            desc: "France and Europe.",
            url: "https://www.youtube.com/results?search_query=FRANCE+24+English"
          },
          {
            name: "European Parliament",
            desc: "Debates and plenary sessions.",
            url: "https://www.youtube.com/results?search_query=European+Parliament"
          },
          {
            name: "TLDR News EU",
            desc: "EU politics explained simply.",
            url: "https://www.youtube.com/results?search_query=TLDR+News+EU"
          },
          {
            name: "POLITICO Europe",
            desc: "Brussels insiders and interviews.",
            url: "https://www.youtube.com/results?search_query=POLITICO+Europe"
          },
          {
            name: "Sky News",
            desc: "UK and Europe.",
            url: "https://www.youtube.com/results?search_query=Sky+News"
          },
          {
            name: "BBC News",
            desc: "Europe coverage.",
            url: "https://www.youtube.com/results?search_query=BBC+News"
          },
          {
            name: "Caspian Report",
            desc: "Geopolitics explained.",
            url: "https://www.youtube.com/results?search_query=Caspian+Report"
          },
          {
            name: "Perun",
            desc: "Defense and Ukraine analysis.",
            url: "https://www.youtube.com/results?search_query=Perun"
          }
        ],
        newsSources: [
          {
            name: "POLITICO Europe",
            url: "https://www.politico.eu/"
          },
          {
            name: "Euronews",
            url: "https://www.euronews.com/"
          },
          {
            name: "DW (English)",
            url: "https://www.dw.com/en/"
          },
          {
            name: "Google News: EU",
            url: "https://news.google.com/search?q=European%20Union"
          }
        ]
      },
      {
        id: "wn-de",
        name: "Deutschland",
        icon: "🇩🇪",
        podcasts: [
          {
            name: "tagesschau in 100 Sekunden",
            desc: "Die Nachrichten in 100 Sekunden.",
            url: "https://podcasts.apple.com/de/search?term=tagesschau%20in%20100%20Sekunden"
          },
          {
            name: "Was jetzt?",
            desc: "Der tägliche Nachrichten-Podcast der ZEIT.",
            url: "https://podcasts.apple.com/de/search?term=Was%20jetzt%3F"
          },
          {
            name: "Lage der Nation",
            desc: "Politik-Podcast mit Philip Banse und Ulf Buermeyer.",
            url: "https://podcasts.apple.com/de/search?term=Lage%20der%20Nation"
          },
          {
            name: "Apokalypse & Filterkaffee",
            desc: "Micky Beisenherz und Gäste zu den News.",
            url: "https://podcasts.apple.com/de/search?term=Apokalypse%20%26%20Filterkaffee"
          },
          {
            name: "Auf den Punkt",
            desc: "Der Nachrichten-Podcast der Süddeutschen Zeitung.",
            url: "https://podcasts.apple.com/de/search?term=SZ%20Auf%20den%20Punkt"
          },
          {
            name: "Shortcut",
            desc: "Der Nachrichten-Podcast des SPIEGEL.",
            url: "https://podcasts.apple.com/de/search?term=SPIEGEL%20Shortcut"
          },
          {
            name: "FAZ Podcast für Deutschland",
            desc: "Die FAZ zum Thema des Tages.",
            url: "https://podcasts.apple.com/de/search?term=FAZ%20Podcast%20f%C3%BCr%20Deutschland"
          },
          {
            name: "Das Politikteil",
            desc: "ZEIT-Politik im Gespräch.",
            url: "https://podcasts.apple.com/de/search?term=Das%20Politikteil"
          },
          {
            name: "The Pioneer Briefing",
            desc: "Gabor Steingarts Morning Briefing.",
            url: "https://podcasts.apple.com/de/search?term=The%20Pioneer%20Briefing"
          },
          {
            name: "Table.Today",
            desc: "Hintergründe aus Berlin, Brüssel und der Welt.",
            url: "https://podcasts.apple.com/de/search?term=Table.Today"
          }
        ],
        youtube: [
          {
            name: "tagesschau",
            desc: "Die Nachrichten der ARD.",
            url: "https://www.youtube.com/results?search_query=tagesschau"
          },
          {
            name: "ZDFheute Nachrichten",
            desc: "Nachrichten vom ZDF.",
            url: "https://www.youtube.com/results?search_query=ZDFheute+Nachrichten"
          },
          {
            name: "DER SPIEGEL",
            desc: "Videos und Reportagen.",
            url: "https://www.youtube.com/results?search_query=DER+SPIEGEL"
          },
          {
            name: "WELT Nachrichtensender",
            desc: "Live und Reportagen.",
            url: "https://www.youtube.com/results?search_query=WELT+Nachrichtensender"
          },
          {
            name: "ntv Nachrichten",
            desc: "Nachrichten rund um die Uhr.",
            url: "https://www.youtube.com/results?search_query=ntv+Nachrichten"
          },
          {
            name: "phoenix",
            desc: "Politik live, Debatten aus dem Bundestag.",
            url: "https://www.youtube.com/results?search_query=phoenix"
          },
          {
            name: "BR24",
            desc: "Nachrichten aus Bayern und der Welt.",
            url: "https://www.youtube.com/results?search_query=BR24"
          },
          {
            name: "DW Deutsch",
            desc: "Deutsche Welle auf Deutsch.",
            url: "https://www.youtube.com/results?search_query=DW+Deutsch"
          },
          {
            name: "Jung & Naiv",
            desc: "Tilo Jung im langen Interview.",
            url: "https://www.youtube.com/results?search_query=Jung+%26+Naiv"
          },
          {
            name: "maiLab",
            desc: "Wissenschaft und Gesellschaft mit Mai Thi Nguyen-Kim.",
            url: "https://www.youtube.com/results?search_query=maiLab"
          }
        ],
        newsSources: [
          {
            name: "tagesschau.de",
            url: "https://www.tagesschau.de/"
          },
          {
            name: "SPIEGEL",
            url: "https://www.spiegel.de/"
          },
          {
            name: "ZEIT ONLINE",
            url: "https://www.zeit.de/"
          },
          {
            name: "Google News Deutschland",
            url: "https://news.google.com/?hl=de&gl=DE&ceid=DE:de"
          }
        ]
      },
      {
        id: "wn-politics",
        name: "Politics",
        icon: "🏛️",
        podcasts: [
          {
            name: "The NPR Politics Podcast",
            desc: "Daily Washington coverage.",
            url: "https://podcasts.apple.com/us/search?term=The%20NPR%20Politics%20Podcast"
          },
          {
            name: "Pod Save America",
            desc: "Left-leaning politics talk.",
            url: "https://podcasts.apple.com/us/search?term=Pod%20Save%20America"
          },
          {
            name: "The Ben Shapiro Show",
            desc: "Right-leaning politics talk.",
            url: "https://podcasts.apple.com/us/search?term=The%20Ben%20Shapiro%20Show"
          },
          {
            name: "Slate Political Gabfest",
            desc: "Weekly roundtable on politics.",
            url: "https://podcasts.apple.com/us/search?term=Slate%20Political%20Gabfest"
          },
          {
            name: "Left, Right & Center",
            desc: "KCRW's balanced debate.",
            url: "https://podcasts.apple.com/us/search?term=Left%2C%20Right%20%26%20Center"
          }
        ],
        youtube: [
          {
            name: "C-SPAN",
            desc: "Unfiltered politics.",
            url: "https://www.youtube.com/results?search_query=C-SPAN"
          },
          {
            name: "PBS NewsHour",
            desc: "Politics Monday and more.",
            url: "https://www.youtube.com/results?search_query=PBS+NewsHour"
          },
          {
            name: "Face the Nation",
            desc: "CBS Sunday politics.",
            url: "https://www.youtube.com/results?search_query=Face+the+Nation"
          },
          {
            name: "Meet the Press",
            desc: "NBC Sunday politics.",
            url: "https://www.youtube.com/results?search_query=Meet+the+Press"
          },
          {
            name: "Some More News",
            desc: "Satirical politics explainer.",
            url: "https://www.youtube.com/results?search_query=Some+More+News"
          }
        ],
        newsSources: [
          {
            name: "POLITICO",
            url: "https://www.politico.com/"
          },
          {
            name: "The Hill",
            url: "https://thehill.com/"
          },
          {
            name: "AllSides (balanced)",
            url: "https://www.allsides.com/"
          },
          {
            name: "Google News: politics",
            url: "https://news.google.com/search?q=politics"
          }
        ]
      },
      {
        id: "wn-business",
        name: "Business",
        icon: "💼",
        podcasts: [
          {
            name: "The Journal",
            desc: "WSJ's business stories.",
            url: "https://podcasts.apple.com/us/search?term=The%20Journal"
          },
          {
            name: "Planet Money",
            desc: "NPR on how the economy works.",
            url: "https://podcasts.apple.com/us/search?term=Planet%20Money"
          },
          {
            name: "Marketplace",
            desc: "Daily business news.",
            url: "https://podcasts.apple.com/us/search?term=Marketplace"
          },
          {
            name: "Odd Lots",
            desc: "Bloomberg on markets and economics.",
            url: "https://podcasts.apple.com/us/search?term=Odd%20Lots"
          },
          {
            name: "FT News Briefing",
            desc: "Financial Times headlines.",
            url: "https://podcasts.apple.com/us/search?term=FT%20News%20Briefing"
          }
        ],
        youtube: [
          {
            name: "CNBC Television",
            desc: "Markets and business TV.",
            url: "https://www.youtube.com/results?search_query=CNBC+Television"
          },
          {
            name: "Bloomberg Television",
            desc: "Markets and economics.",
            url: "https://www.youtube.com/results?search_query=Bloomberg+Television"
          },
          {
            name: "Yahoo Finance",
            desc: "Live market coverage.",
            url: "https://www.youtube.com/results?search_query=Yahoo+Finance"
          },
          {
            name: "Wall Street Journal",
            desc: "Business explainers.",
            url: "https://www.youtube.com/results?search_query=Wall+Street+Journal"
          },
          {
            name: "Patrick Boyle",
            desc: "Dry-humored finance analysis.",
            url: "https://www.youtube.com/results?search_query=Patrick+Boyle"
          }
        ],
        newsSources: [
          {
            name: "CNBC",
            url: "https://www.cnbc.com/"
          },
          {
            name: "MarketWatch",
            url: "https://www.marketwatch.com/"
          },
          {
            name: "Bloomberg",
            url: "https://www.bloomberg.com/"
          },
          {
            name: "Google News: business",
            url: "https://news.google.com/search?q=business%20economy"
          }
        ]
      },
      {
        id: "wn-tech",
        name: "Tech",
        icon: "💻",
        podcasts: [
          {
            name: "Hard Fork",
            desc: "NYT on tech's wild frontier.",
            url: "https://podcasts.apple.com/us/search?term=Hard%20Fork"
          },
          {
            name: "Decoder with Nilay Patel",
            desc: "The Verge's interview show.",
            url: "https://podcasts.apple.com/us/search?term=Decoder%20with%20Nilay%20Patel"
          },
          {
            name: "Pivot",
            desc: "Kara Swisher and Scott Galloway.",
            url: "https://podcasts.apple.com/us/search?term=Pivot"
          },
          {
            name: "The Vergecast",
            desc: "Gadgets and tech news.",
            url: "https://podcasts.apple.com/us/search?term=The%20Vergecast"
          },
          {
            name: "Lex Fridman Podcast",
            desc: "Long talks on AI and science.",
            url: "https://podcasts.apple.com/us/search?term=Lex%20Fridman%20Podcast"
          }
        ],
        youtube: [
          {
            name: "The Verge",
            desc: "Tech news and reviews.",
            url: "https://www.youtube.com/results?search_query=The+Verge"
          },
          {
            name: "Marques Brownlee",
            desc: "Tech reviews.",
            url: "https://www.youtube.com/results?search_query=Marques+Brownlee"
          },
          {
            name: "Linus Tech Tips",
            desc: "PC and tech.",
            url: "https://www.youtube.com/results?search_query=Linus+Tech+Tips"
          },
          {
            name: "CNET",
            desc: "Gadgets and news.",
            url: "https://www.youtube.com/results?search_query=CNET"
          },
          {
            name: "Bloomberg Technology",
            desc: "Tech business news.",
            url: "https://www.youtube.com/results?search_query=Bloomberg+Technology"
          }
        ],
        newsSources: [
          {
            name: "The Verge",
            url: "https://www.theverge.com/"
          },
          {
            name: "Ars Technica",
            url: "https://arstechnica.com/"
          },
          {
            name: "TechCrunch",
            url: "https://techcrunch.com/"
          },
          {
            name: "Google News: tech",
            url: "https://news.google.com/search?q=technology"
          }
        ]
      },
      {
        id: "wn-science",
        name: "Science",
        icon: "🔬",
        podcasts: [
          {
            name: "Science Friday",
            desc: "WNYC's science hour.",
            url: "https://podcasts.apple.com/us/search?term=Science%20Friday"
          },
          {
            name: "Short Wave",
            desc: "NPR's 10-minute science.",
            url: "https://podcasts.apple.com/us/search?term=Short%20Wave"
          },
          {
            name: "Radiolab",
            desc: "Curiosity-driven storytelling.",
            url: "https://podcasts.apple.com/us/search?term=Radiolab"
          },
          {
            name: "Nature Podcast",
            desc: "From the journal Nature.",
            url: "https://podcasts.apple.com/us/search?term=Nature%20Podcast"
          },
          {
            name: "StarTalk",
            desc: "Neil deGrasse Tyson on space and science.",
            url: "https://podcasts.apple.com/us/search?term=StarTalk"
          }
        ],
        youtube: [
          {
            name: "Veritasium",
            desc: "Science and engineering stories.",
            url: "https://www.youtube.com/results?search_query=Veritasium"
          },
          {
            name: "Kurzgesagt",
            desc: "Animated science explainers.",
            url: "https://www.youtube.com/results?search_query=Kurzgesagt+In+a+Nutshell"
          },
          {
            name: "SciShow",
            desc: "Quick science news.",
            url: "https://www.youtube.com/results?search_query=SciShow"
          },
          {
            name: "NASA",
            desc: "Missions and launches.",
            url: "https://www.youtube.com/results?search_query=NASA"
          },
          {
            name: "Scott Manley",
            desc: "Space and rockets explained.",
            url: "https://www.youtube.com/results?search_query=Scott+Manley"
          }
        ],
        newsSources: [
          {
            name: "ScienceDaily",
            url: "https://www.sciencedaily.com/"
          },
          {
            name: "NASA",
            url: "https://www.nasa.gov/news/"
          },
          {
            name: "New Scientist",
            url: "https://www.newscientist.com/"
          },
          {
            name: "Google News: science",
            url: "https://news.google.com/search?q=science"
          }
        ]
      },
      {
        id: "wn-health",
        name: "Health",
        icon: "🩺",
        podcasts: [
          {
            name: "Huberman Lab",
            desc: "Science-based health tools.",
            url: "https://podcasts.apple.com/us/search?term=Huberman%20Lab"
          },
          {
            name: "The Drive",
            desc: "Peter Attia on longevity and health.",
            url: "https://podcasts.apple.com/us/search?term=The%20Drive"
          },
          {
            name: "Life Kit",
            desc: "NPR's practical health tips.",
            url: "https://podcasts.apple.com/us/search?term=Life%20Kit"
          },
          {
            name: "ZOE Science & Nutrition",
            desc: "Food and health research.",
            url: "https://podcasts.apple.com/us/search?term=ZOE%20Science%20%26%20Nutrition"
          },
          {
            name: "Health Check",
            desc: "BBC World Service health news.",
            url: "https://podcasts.apple.com/us/search?term=Health%20Check"
          }
        ],
        youtube: [
          {
            name: "Doctor Mike",
            desc: "A doctor explains health news.",
            url: "https://www.youtube.com/results?search_query=Doctor+Mike"
          },
          {
            name: "Mayo Clinic",
            desc: "Trusted health explainers.",
            url: "https://www.youtube.com/results?search_query=Mayo+Clinic"
          },
          {
            name: "Cleveland Clinic",
            desc: "Health tips and news.",
            url: "https://www.youtube.com/results?search_query=Cleveland+Clinic"
          },
          {
            name: "Medlife Crisis",
            desc: "Cardiologist on health headlines.",
            url: "https://www.youtube.com/results?search_query=Medlife+Crisis"
          },
          {
            name: "ZOE",
            desc: "Nutrition science.",
            url: "https://www.youtube.com/results?search_query=ZOE"
          }
        ],
        newsSources: [
          {
            name: "STAT News",
            url: "https://www.statnews.com/"
          },
          {
            name: "NPR Health",
            url: "https://www.npr.org/sections/health/"
          },
          {
            name: "CDC newsroom",
            url: "https://www.cdc.gov/media/"
          },
          {
            name: "Google News: health",
            url: "https://news.google.com/search?q=health"
          }
        ]
      },
      {
        id: "wn-sports",
        name: "Sports",
        icon: "🏈",
        podcasts: [
          {
            name: "The Bill Simmons Podcast",
            desc: "Sports and pop culture.",
            url: "https://podcasts.apple.com/us/search?term=The%20Bill%20Simmons%20Podcast"
          },
          {
            name: "Pardon My Take",
            desc: "Barstool's comedy sports show.",
            url: "https://podcasts.apple.com/us/search?term=Pardon%20My%20Take"
          },
          {
            name: "The Lowe Post",
            desc: "NBA with Zach Lowe.",
            url: "https://podcasts.apple.com/us/search?term=Zach%20Lowe%20NBA%20podcast"
          },
          {
            name: "Men in Blazers",
            desc: "Soccer, American style.",
            url: "https://podcasts.apple.com/us/search?term=Men%20in%20Blazers"
          },
          {
            name: "The Athletic Football Show",
            desc: "NFL breakdowns.",
            url: "https://podcasts.apple.com/us/search?term=The%20Athletic%20Football%20Show"
          }
        ],
        youtube: [
          {
            name: "ESPN",
            desc: "Highlights and analysis.",
            url: "https://www.youtube.com/results?search_query=ESPN"
          },
          {
            name: "NFL",
            desc: "Official NFL highlights.",
            url: "https://www.youtube.com/results?search_query=NFL"
          },
          {
            name: "NBA",
            desc: "Official NBA highlights.",
            url: "https://www.youtube.com/results?search_query=NBA"
          },
          {
            name: "MLB",
            desc: "Official MLB highlights.",
            url: "https://www.youtube.com/results?search_query=MLB"
          },
          {
            name: "Bundesliga",
            desc: "German football highlights.",
            url: "https://www.youtube.com/results?search_query=Bundesliga"
          }
        ],
        newsSources: [
          {
            name: "ESPN",
            url: "https://www.espn.com/"
          },
          {
            name: "The Athletic",
            url: "https://www.nytimes.com/athletic/"
          },
          {
            name: "kicker (DE)",
            url: "https://www.kicker.de/"
          },
          {
            name: "Google News: sports",
            url: "https://news.google.com/search?q=sports"
          }
        ]
      }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    icon: "🏆",
    accent: "#ff6b3d",
    tagline: "US leagues, European football and F1, Bundesliga",
    defaultTab: "news",
    subs: [
      {
        id: "sp-usa",
        name: "USA",
        icon: "🇺🇸",
        podcasts: [
          {
            name: "The Bill Simmons Podcast",
            desc: "Sports and pop culture from The Ringer.",
            url: "https://podcasts.apple.com/us/search?term=The%20Bill%20Simmons%20Podcast"
          },
          {
            name: "Pardon My Take",
            desc: "Barstool's comedy sports show.",
            url: "https://podcasts.apple.com/us/search?term=Pardon%20My%20Take"
          },
          {
            name: "The Herd with Colin Cowherd",
            desc: "Daily hot takes across every league.",
            url: "https://podcasts.apple.com/us/search?term=The%20Herd%20with%20Colin%20Cowherd"
          },
          {
            name: "The Athletic Football Show",
            desc: "NFL film and analysis.",
            url: "https://podcasts.apple.com/us/search?term=The%20Athletic%20Football%20Show"
          },
          {
            name: "The Lowe Post",
            desc: "NBA with Zach Lowe.",
            url: "https://podcasts.apple.com/us/search?term=Zach%20Lowe%20NBA%20podcast"
          },
          {
            name: "Baseball Tonight with Buster Olney",
            desc: "ESPN's MLB podcast.",
            url: "https://podcasts.apple.com/us/search?term=Baseball%20Tonight%20with%20Buster%20Olney"
          },
          {
            name: "Spittin' Chiclets",
            desc: "Hockey talk, NHL.",
            url: "https://podcasts.apple.com/us/search?term=Spittin%20Chiclets"
          },
          {
            name: "The Mina Kimes Show",
            desc: "Smart, fun NFL talk.",
            url: "https://podcasts.apple.com/us/search?term=The%20Mina%20Kimes%20Show"
          },
          {
            name: "Padres podcast",
            desc: "San Diego Padres talk.",
            url: "https://podcasts.apple.com/us/search?term=San%20Diego%20Padres%20podcast"
          },
          {
            name: "Locked On Cardinals",
            desc: "Arizona Cardinals daily.",
            url: "https://podcasts.apple.com/us/search?term=Locked%20On%20Cardinals"
          }
        ],
        youtube: [
          {
            name: "ESPN",
            desc: "Highlights and analysis.",
            url: "https://www.youtube.com/results?search_query=ESPN"
          },
          {
            name: "NFL",
            desc: "Official NFL highlights.",
            url: "https://www.youtube.com/results?search_query=NFL"
          },
          {
            name: "NBA",
            desc: "Official NBA highlights.",
            url: "https://www.youtube.com/results?search_query=NBA"
          },
          {
            name: "MLB",
            desc: "Official MLB highlights.",
            url: "https://www.youtube.com/results?search_query=MLB"
          },
          {
            name: "NHL",
            desc: "Official NHL highlights.",
            url: "https://www.youtube.com/results?search_query=NHL"
          },
          {
            name: "Good Good Golf",
            desc: "Fun golf content.",
            url: "https://www.youtube.com/results?search_query=Good+Good+Golf"
          },
          {
            name: "Dude Perfect",
            desc: "Trick shots and sports fun.",
            url: "https://www.youtube.com/results?search_query=Dude+Perfect"
          },
          {
            name: "Padres",
            desc: "San Diego Padres highlights.",
            url: "https://www.youtube.com/results?search_query=San+Diego+Padres+highlights"
          },
          {
            name: "San Diego FC",
            desc: "MLS highlights from SD.",
            url: "https://www.youtube.com/results?search_query=San+Diego+FC+highlights"
          },
          {
            name: "Phoenix Suns",
            desc: "Suns highlights.",
            url: "https://www.youtube.com/results?search_query=Phoenix+Suns+highlights"
          }
        ],
        newsSources: [
          {
            name: "ESPN",
            url: "https://www.espn.com/"
          },
          {
            name: "CBS Sports",
            url: "https://www.cbssports.com/"
          },
          {
            name: "The Athletic",
            url: "https://www.nytimes.com/athletic/"
          },
          {
            name: "Google News: SD sports",
            url: "https://news.google.com/search?q=Padres%20OR%20%22San%20Diego%20FC%22%20OR%20%22San%20Diego%20State%22"
          },
          {
            name: "Google News: Arizona sports",
            url: "https://news.google.com/search?q=Cardinals%20OR%20Suns%20OR%20Diamondbacks%20OR%20%22Arizona%20State%22"
          }
        ]
      },
      {
        id: "sp-eu",
        name: "Europe",
        icon: "🇪🇺",
        podcasts: [
          {
            name: "The Rest Is Football",
            desc: "Gary Lineker, Alan Shearer and Micah Richards.",
            url: "https://podcasts.apple.com/us/search?term=The%20Rest%20Is%20Football"
          },
          {
            name: "Football Weekly",
            desc: "The Guardian's football podcast.",
            url: "https://podcasts.apple.com/us/search?term=Football%20Weekly"
          },
          {
            name: "The Athletic FC Podcast",
            desc: "European football analysis.",
            url: "https://podcasts.apple.com/us/search?term=The%20Athletic%20FC%20Podcast"
          },
          {
            name: "Men in Blazers",
            desc: "Soccer, American style.",
            url: "https://podcasts.apple.com/us/search?term=Men%20in%20Blazers"
          },
          {
            name: "Total Soccer Show",
            desc: "Premier League and Champions League.",
            url: "https://podcasts.apple.com/us/search?term=Total%20Soccer%20Show"
          },
          {
            name: "The Race F1 Podcast",
            desc: "Formula 1 news and analysis.",
            url: "https://podcasts.apple.com/us/search?term=The%20Race%20F1%20Podcast"
          },
          {
            name: "F1 Nation",
            desc: "The official Formula 1 podcast.",
            url: "https://podcasts.apple.com/us/search?term=F1%20Nation"
          },
          {
            name: "Beyond the Grid",
            desc: "Long F1 interviews.",
            url: "https://podcasts.apple.com/us/search?term=Beyond%20the%20Grid"
          },
          {
            name: "The Cycling Podcast",
            desc: "Tour de France and pro cycling.",
            url: "https://podcasts.apple.com/us/search?term=The%20Cycling%20Podcast"
          },
          {
            name: "The Tennis Podcast",
            desc: "Grand slams and the tours.",
            url: "https://podcasts.apple.com/us/search?term=The%20Tennis%20Podcast"
          }
        ],
        youtube: [
          {
            name: "UEFA Champions League",
            desc: "Official highlights.",
            url: "https://www.youtube.com/results?search_query=Champions+League+highlights"
          },
          {
            name: "Premier League",
            desc: "Official highlights.",
            url: "https://www.youtube.com/results?search_query=Premier+League"
          },
          {
            name: "LaLiga",
            desc: "Spanish football highlights.",
            url: "https://www.youtube.com/results?search_query=LaLiga"
          },
          {
            name: "Formula 1",
            desc: "Official F1 highlights.",
            url: "https://www.youtube.com/results?search_query=Formula+1"
          },
          {
            name: "The Race",
            desc: "F1 news and analysis.",
            url: "https://www.youtube.com/results?search_query=The+Race+F1"
          },
          {
            name: "Tifo Football",
            desc: "Tactics explained.",
            url: "https://www.youtube.com/results?search_query=Tifo+Football"
          },
          {
            name: "GCN",
            desc: "Global Cycling Network.",
            url: "https://www.youtube.com/results?search_query=GCN"
          },
          {
            name: "Eurosport",
            desc: "Winter sports, tennis and cycling.",
            url: "https://www.youtube.com/results?search_query=Eurosport"
          },
          {
            name: "UEFA",
            desc: "Euros and Nations League.",
            url: "https://www.youtube.com/results?search_query=UEFA"
          },
          {
            name: "Sky Sports Football",
            desc: "Premier League news and pundits.",
            url: "https://www.youtube.com/results?search_query=Sky+Sports+Football"
          }
        ],
        newsSources: [
          {
            name: "BBC Sport",
            url: "https://www.bbc.com/sport"
          },
          {
            name: "ESPN FC",
            url: "https://www.espn.com/soccer/"
          },
          {
            name: "Formula1.com",
            url: "https://www.formula1.com/"
          },
          {
            name: "Google News: European football",
            url: "https://news.google.com/search?q=Champions%20League%20OR%20Premier%20League%20OR%20LaLiga"
          }
        ]
      },
      {
        id: "sp-de",
        name: "Deutschland",
        icon: "🇩🇪",
        podcasts: [
          {
            name: "Phrasenmäher",
            desc: "Bild-Fußballpodcast mit Spaß und Insiderwissen.",
            url: "https://podcasts.apple.com/de/search?term=Phrasenm%C3%A4her"
          },
          {
            name: "kicker meets DAZN",
            desc: "Der Bundesliga-Podcast von kicker und DAZN.",
            url: "https://podcasts.apple.com/de/search?term=kicker%20meets%20DAZN"
          },
          {
            name: "Einfach mal Luppen",
            desc: "Toni und Felix Kroos über Fußball.",
            url: "https://podcasts.apple.com/de/search?term=Einfach%20mal%20Luppen"
          },
          {
            name: "Rasenfunk",
            desc: "Taktik und Analyse der Bundesliga.",
            url: "https://podcasts.apple.com/de/search?term=Rasenfunk"
          },
          {
            name: "Copa TS",
            desc: "Tommi Schmitt und Gäste über Fußball.",
            url: "https://podcasts.apple.com/de/search?term=Copa%20TS"
          },
          {
            name: "Bayern Insider",
            desc: "Alles über den FC Bayern.",
            url: "https://podcasts.apple.com/de/search?term=FC%20Bayern%20Podcast"
          },
          {
            name: "Bundesliga Inside",
            desc: "Hintergründe zur Liga.",
            url: "https://podcasts.apple.com/de/search?term=Bundesliga%20Podcast"
          },
          {
            name: "Formel 1 Podcast",
            desc: "F1 auf Deutsch.",
            url: "https://podcasts.apple.com/de/search?term=Formel%201%20Podcast"
          },
          {
            name: "Sportschau Podcast",
            desc: "Fußball und mehr von der ARD.",
            url: "https://podcasts.apple.com/de/search?term=Sportschau"
          },
          {
            name: "Basketball Bundesliga",
            desc: "BBL-Podcasts.",
            url: "https://podcasts.apple.com/de/search?term=Basketball%20Bundesliga%20Podcast"
          }
        ],
        youtube: [
          {
            name: "Bundesliga",
            desc: "Offizielle Highlights.",
            url: "https://www.youtube.com/results?search_query=Bundesliga"
          },
          {
            name: "Sportschau",
            desc: "ARD-Sport.",
            url: "https://www.youtube.com/results?search_query=Sportschau"
          },
          {
            name: "DAZN Bundesliga",
            desc: "Highlights und Analysen.",
            url: "https://www.youtube.com/results?search_query=DAZN+Bundesliga"
          },
          {
            name: "kicker",
            desc: "Fußball-News.",
            url: "https://www.youtube.com/results?search_query=kicker"
          },
          {
            name: "ZDF Sport",
            desc: "Sport im ZDF.",
            url: "https://www.youtube.com/results?search_query=ZDFsport"
          },
          {
            name: "FC Bayern",
            desc: "Offizieller Kanal des FC Bayern.",
            url: "https://www.youtube.com/results?search_query=FC+Bayern+M%C3%BCnchen"
          },
          {
            name: "Borussia Dortmund",
            desc: "Offizieller BVB-Kanal.",
            url: "https://www.youtube.com/results?search_query=Borussia+Dortmund"
          },
          {
            name: "DFB",
            desc: "Nationalmannschaft.",
            url: "https://www.youtube.com/results?search_query=DFB+Nationalmannschaft"
          },
          {
            name: "Sky Sport",
            desc: "Bundesliga und Formel 1.",
            url: "https://www.youtube.com/results?search_query=Sky+Sport+Deutschland"
          },
          {
            name: "Eurosport Deutschland",
            desc: "Wintersport, Radsport, Tennis.",
            url: "https://www.youtube.com/results?search_query=Eurosport+Deutschland"
          }
        ],
        newsSources: [
          {
            name: "kicker",
            url: "https://www.kicker.de/"
          },
          {
            name: "Sportschau",
            url: "https://www.sportschau.de/"
          },
          {
            name: "SPORT1",
            url: "https://www.sport1.de/"
          },
          {
            name: "Google News: Sport (DE)",
            url: "https://news.google.com/search?q=Bundesliga%20OR%20Fu%C3%9Fball%20OR%20Formel%201&hl=de&gl=DE&ceid=DE:de"
          }
        ]
      }
    ]
  }
];
