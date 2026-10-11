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
          { name: "National Park After Dark", desc: "True stories from the parks, great for long drives.", url: "https://podcasts.apple.com/us/search?term=National%20Park%20After%20Dark" },
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
          { name: "The Dirtbag Diaries", desc: "Stories from people who love the outdoors.", url: "https://podcasts.apple.com/us/search?term=The%20Dirtbag%20Diaries" },
          { name: "Backpacker Radio", desc: "The Trek's show on hiking and backpacking.", url: "https://podcasts.apple.com/us/search?term=Backpacker%20Radio%20The%20Trek" },
          { name: "She Explores", desc: "Women in the outdoors and on the road.", url: "https://podcasts.apple.com/us/search?term=She%20Explores" },
          { name: "The RV Atlas", desc: "Campgrounds and family camping trips.", url: "https://podcasts.apple.com/us/search?term=The%20RV%20Atlas" },
          { name: "Outside Podcast", desc: "Survival stories and outdoor science.", url: "https://podcasts.apple.com/us/search?term=Outside%20Podcast" },
          { name: "Wild Ideas Worth Living", desc: "REI's interviews with adventurers.", url: "https://podcasts.apple.com/us/search?term=Wild%20Ideas%20Worth%20Living" },
          { name: "National Park After Dark", desc: "Campfire stories from the parks.", url: "https://podcasts.apple.com/us/search?term=National%20Park%20After%20Dark" },
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
  }
];
