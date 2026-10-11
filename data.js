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
  }
];
