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
        id: "sd-mtb",
        name: "Mountain Biking",
        icon: "🚵",
        podcasts: [
          { name: "The Pinkbike Podcast", desc: "Bikes, gear and racing talk from Pinkbike.", url: "https://podcasts.apple.com/us/search?term=The%20Pinkbike%20Podcast" },
          { name: "Downtime Podcast", desc: "Interviews with mountain bike riders and racers.", url: "https://podcasts.apple.com/us/search?term=Downtime%20Podcast%20mountain%20bike" },
          { name: "Blister Podcast", desc: "Gear reviews and conversations about riding.", url: "https://podcasts.apple.com/us/search?term=Blister%20Podcast" },
          { name: "Singletracks Podcast", desc: "Trails, bikes and the MTB community.", url: "https://podcasts.apple.com/us/search?term=Singletracks%20Podcast" },
          { name: "The Loam Wolf Podcast", desc: "Long-form bike reviews and tech.", url: "https://podcasts.apple.com/us/search?term=The%20Loam%20Wolf%20Podcast" }
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
          { name: "Backpacker Radio", desc: "Hiking and backpacking talk from The Trek.", url: "https://podcasts.apple.com/us/search?term=Backpacker%20Radio%20The%20Trek" },
          { name: "The Dirtbag Diaries", desc: "Stories from people who love the outdoors.", url: "https://podcasts.apple.com/us/search?term=The%20Dirtbag%20Diaries" },
          { name: "She Explores", desc: "Women outdoors and on the trail.", url: "https://podcasts.apple.com/us/search?term=She%20Explores" },
          { name: "Wild Ideas Worth Living", desc: "REI's adventurer interviews.", url: "https://podcasts.apple.com/us/search?term=Wild%20Ideas%20Worth%20Living" },
          { name: "National Park After Dark", desc: "Trail stories for the drive to the trailhead.", url: "https://podcasts.apple.com/us/search?term=National%20Park%20After%20Dark" }
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
          { name: "San Diego News Matters (KPBS)", desc: "Daily local news podcast from KPBS.", url: "https://podcasts.apple.com/us/search?term=San%20Diego%20News%20Matters%20KPBS" },
          { name: "KPBS Midday Edition", desc: "Conversations on San Diego issues.", url: "https://podcasts.apple.com/us/search?term=KPBS%20Midday%20Edition" },
          { name: "Voice of San Diego Podcast", desc: "Local politics and policy explained.", url: "https://podcasts.apple.com/us/search?term=Voice%20of%20San%20Diego%20Podcast" },
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
        id: "tp-mtb",
        name: "Mountain Biking",
        icon: "🚵",
        podcasts: [
          { name: "The Pinkbike Podcast", desc: "Bikes, gear and racing talk from Pinkbike.", url: "https://podcasts.apple.com/us/search?term=The%20Pinkbike%20Podcast" },
          { name: "Downtime Podcast", desc: "Interviews with mountain bike riders and racers.", url: "https://podcasts.apple.com/us/search?term=Downtime%20Podcast%20mountain%20bike" },
          { name: "Blister Podcast", desc: "Gear reviews and conversations about riding.", url: "https://podcasts.apple.com/us/search?term=Blister%20Podcast" },
          { name: "Singletracks Podcast", desc: "Trails, bikes and the MTB community.", url: "https://podcasts.apple.com/us/search?term=Singletracks%20Podcast" },
          { name: "The Loam Wolf Podcast", desc: "Long-form bike reviews and tech.", url: "https://podcasts.apple.com/us/search?term=The%20Loam%20Wolf%20Podcast" }
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
          { name: "Backpacker Radio", desc: "Hiking and backpacking talk from The Trek.", url: "https://podcasts.apple.com/us/search?term=Backpacker%20Radio%20The%20Trek" },
          { name: "The Dirtbag Diaries", desc: "Stories from people who love the outdoors.", url: "https://podcasts.apple.com/us/search?term=The%20Dirtbag%20Diaries" },
          { name: "She Explores", desc: "Women outdoors and on the trail.", url: "https://podcasts.apple.com/us/search?term=She%20Explores" },
          { name: "Wild Ideas Worth Living", desc: "REI's adventurer interviews.", url: "https://podcasts.apple.com/us/search?term=Wild%20Ideas%20Worth%20Living" },
          { name: "National Park After Dark", desc: "Trail stories for the drive to the trailhead.", url: "https://podcasts.apple.com/us/search?term=National%20Park%20After%20Dark" }
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
          { name: "KJZZ The Show", desc: "Phoenix public radio's local stories.", url: "https://podcasts.apple.com/us/search?term=KJZZ%20The%20Show" },
          { name: "KJZZ news podcasts", desc: "Local news from KJZZ 91.5.", url: "https://podcasts.apple.com/us/search?term=KJZZ" },
          { name: "Arizona Republic podcasts", desc: "Local news and politics.", url: "https://podcasts.apple.com/us/search?term=Arizona%20Republic%20podcast" }
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
  }
];
