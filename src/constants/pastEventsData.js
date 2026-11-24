/**
 * Hack With India — Previous Events & Editions Archive Data
 * Extracted directly from the official Hack With India (HWI) Brochure:
 * 
 * 1. 30 Hrs Hackathon (HWM 2.0) — 7th-8th Feb 2026 | 280+ Hackers, 80 Teams, 40+ Colleges, 5 States
 * 2. HACK WITH MUMBAI (12 hrs Genesis) — 21st Sept 2025 | 55 Teams, 60 Volunteers
 * 3. Rocket Ride Buildathon & Zero2Web3 — 29th Aug 2026 | 183 Participants, 47 Teams, SF Industry Guests
 * 4. BUILD IT TOUR 2.0 — Multi-City Workshops, AWS, Microsoft Visit, CTF, Love Babbar Session
 * 5. HWI BVUDET Chapter Orientation — National Community Induction & Builder Launch
 */

export const HWI_COMMUNITY_STATS = [
  { label: "APPLICATIONS", value: "1,20,000+", desc: "National Applicants" },
  { label: "HACKERS", value: "35,000+", desc: "Active Developers" },
  { label: "HACKATHONS", value: "20+", desc: "In Just 10 Months" },
  { label: "COMMUNITIES", value: "200+", desc: "Partner Networks" },
  { label: "MENTORS & JUDGES", value: "140+", desc: "Industry Leaders" },
  { label: "SPONSORS", value: "150+", desc: "Global Brands" },
];

export const PAST_EVENTS = [
  {
    id: "hwm-2",
    folderName: "30 Hrs Hackathon (HWM 2.0)",
    edition: "EDITION 02",
    title: "HACK WITH MUMBAI 2.0",
    subtitle: "30-Hour National-Level Hackathon",
    badge: "NATIONAL FLAGSHIP",
    date: "7th–8th February 2026 • 30 Hours",
    venue: "BVUDET NM Campus, Navi Mumbai",
    tagline: "30 Hours of Pure Non-Stop Engineering",
    description: "A landmark 30-hour National-Level Hackathon held on 7th–8th February 2026, featuring 280 participants across 80 teams from 40+ colleges and 5 Indian states. Supported by 14 sponsors and 70 student volunteers, the arena promoted open innovation across multiple technology domains.",
    stats: [
      { label: "PARTICIPANTS", value: "280+", desc: "Across 80 Teams" },
      { label: "COLLEGES", value: "40+", desc: "From 5 States" },
      { label: "DURATION", value: "30H", desc: "Non-Stop Hackathon" },
      { label: "ECOSYSTEM", value: "14", desc: "National Sponsors" }
    ],
    highlights: [
      "80 teams competing through a 30-hour non-stop code marathon with working prototypes",
      "Builders representing 40+ premier engineering colleges across 5 Indian states",
      "Supported by 14 national sponsors and 70 dedicated student volunteers",
      "High-intensity midnight war rooms, mentor reviews, and live architectural evaluation"
    ],
    tags: ["HackWithMumbai 2.0", "30Hours", "40+ Colleges", "5 States", "BVUDET NM"],
    themeColor: "#e63946",
    accentBg: "from-[#e63946]/20 to-[#ffd23f]/10",
    image: "/images/jason-1.webp",
    galleryCount: 18
  },
  {
    id: "hwm-1",
    folderName: "HACK WITH MUMBAI(12 hrs...)",
    edition: "EDITION 01",
    title: "HACK WITH MUMBAI 1.0",
    subtitle: "12-Hour National Genesis Hackathon",
    badge: "GENESIS EDITION",
    date: "21st September 2025 • 12 Hours",
    venue: "BVUDET NM Campus, Navi Mumbai",
    tagline: "Where the National Movement Began",
    description: "Conducted on 21st September 2025, the genesis edition brought together 55 teams and 60 student volunteers. It provided a dedicated platform for students to showcase technical skills, creativity, and problem-solving abilities through innovative projects and collaborative learning.",
    stats: [
      { label: "TEAMS", value: "55", desc: "Vetted Squads" },
      { label: "VOLUNTEERS", value: "60", desc: "Student Organizers" },
      { label: "DURATION", value: "12H", desc: "Speed Hackathon" },
      { label: "LEVEL", value: "National", desc: "Across Institutes" }
    ],
    highlights: [
      "The founding 12-hour hackathon that ignited the Hack With Mumbai builder movement",
      "55 selected teams building live from scratch with verified GitHub commit logs",
      "Powered by 60 student volunteers and mentors at BVUDET Navi Mumbai",
      "Set the benchmark for technical rigor leading directly to the 30h and 36h national editions"
    ],
    tags: ["HackWithMumbai 1.0", "12Hours", "55 Teams", "Genesis Sprint"],
    themeColor: "#ffb0c4",
    accentBg: "from-[#ffb0c4]/20 to-[#e63946]/10",
    image: "/images/jason-2.webp",
    galleryCount: 14
  },
  {
    id: "rocket-ride",
    folderName: "Zero2Web3 & Build-a-thon",
    edition: "INTERNATIONAL",
    title: "ROCKET RIDE BUILDATHON & ZERO2WEB3",
    subtitle: "International Offline Buildathon with San Francisco Mentors",
    badge: "GLOBAL BUILDATHON",
    date: "29th August 2026 • 6 Hours",
    venue: "Offline Tech Arena & Hybrid Hub",
    tagline: "Silicon Valley Mentorship Meets Mumbai Builders",
    description: "A high-intensity six-hour offline international buildathon conducted on 29th August 2026, witnessing 183 participants across 47 teams. Featuring direct industry interaction with RocketRide representatives from San Francisco, the event focused on hands-on development, AI trends, innovation, and global exposure.",
    stats: [
      { label: "PARTICIPANTS", value: "183", desc: "Builders & Devs" },
      { label: "TEAMS", value: "47", desc: "Active Squads" },
      { label: "DURATION", value: "6H", desc: "Rapid Buildathon" },
      { label: "INDUSTRY", value: "San Francisco", desc: "RocketRide Mentors" }
    ],
    highlights: [
      "Direct technical interaction and evaluation by RocketRide representatives from San Francisco",
      "183 participants across 47 squads building rapid prototypes within 6 hours",
      "Specialized tracks in applied AI trends, smart contract infrastructure, and decentralized protocols",
      "International industry feedback and global career exposure for student developers"
    ],
    tags: ["RocketRide", "San Francisco", "Zero2Web3", "183 Hackers", "AI & Web3"],
    themeColor: "#05d9e8",
    accentBg: "from-[#05d9e8]/20 to-[#ffd23f]/10",
    image: "/images/lucia-1.webp",
    galleryCount: 16
  },
  {
    id: "build-it-tour",
    folderName: "BUILD IT TOUR",
    edition: "NATIONAL TOUR",
    title: "BUILD IT TOUR 2.0",
    subtitle: "Multi-City Developer Roadshow & Technical Workshops",
    badge: "CAMPUS ROADSHOW",
    date: "Multi-City Tour & Workshops",
    venue: "Delhi, Chandigarh, Mumbai & Top Campuses",
    tagline: "Empowering Next-Gen Developers Across India",
    description: "The nationwide developer movement taking hands-on workshops and hackathons directly to campuses. Featuring AWS Cloud Workshops, Microsoft Office Field Visits, Capture The Flags (CTF), Code Clash, and keynote sessions with industry figures like Love Babbar.",
    stats: [
      { label: "SERIES", value: "Multi-City", desc: "Delhi, Chd, Mumbai" },
      { label: "KEYNOTES", value: "Love Babbar", desc: "Industry Leaders" },
      { label: "WORKSHOPS", value: "AWS & MS", desc: "Hands-on Labs" },
      { label: "CHALLENGES", value: "CTF & Code", desc: "Competitive Hacking" }
    ],
    highlights: [
      "Roadshow editions including HackwithDelhi, BuildwithDelhi, and HackwithChandigarh",
      "Hands-on cloud architecture labs powered by AWS and Microsoft field visits",
      "Competitive cybersecurity Capture The Flags (CTF) and Code Clash algorithmic challenges",
      "Keynote masterclasses including exclusive 'Talk with Love Babbar' and Code4Cause 2.0"
    ],
    tags: ["BuildItTour 2.0", "HackwithDelhi", "AWS Workshop", "Love Babbar", "CTF"],
    themeColor: "#ffd23f",
    accentBg: "from-[#ffd23f]/20 to-[#ffb0c4]/10",
    image: "/images/lucia-2.webp",
    galleryCount: 24
  },
  {
    id: "hwi-orientation",
    folderName: "HWI orientation",
    edition: "CHAPTER LAUNCH",
    title: "HWI BVUDET NM CHAPTER ORIENTATION",
    subtitle: "Bridging Academia & Industry at Bharati Vidyapeeth",
    badge: "CHAPTER INDUCTION",
    date: "Flagship Chapter Launch",
    venue: "BVUDET NM Campus, Navi Mumbai",
    tagline: "India's Largest Student-Led Hackathon Community",
    description: "The official launch and orientation of the Hack With India Chapter at Bharati Vidyapeeth Deemed University Department of Engineering and Technology (BVUDET), Navi Mumbai. Serving as a launchpad for students to master AI, Web3, and Blockchain while shaping the next generation of tech leaders.",
    stats: [
      { label: "COMMUNITY", value: "Largest", desc: "Student-Led Hub" },
      { label: "APPLICATIONS", value: "1,20,000+", desc: "National Ecosystem" },
      { label: "CAMPUS", value: "BVUDET NM", desc: "Navi Mumbai Hub" },
      { label: "MISSION", value: "Academia ↔ Industry", desc: "Real-World Tech" }
    ],
    highlights: [
      "Student-led chapter launch uniting aspiring engineers, creators, and researchers",
      "Hands-on pathways into agentic AI, Web3 protocols, cloud architectures, and open innovation",
      "Direct pipeline to national hackathons, mentorship programs, and industry internships",
      "Connecting local campus talent to Hack With India's 35,000+ national builder syndicate"
    ],
    tags: ["HWI BVUDET NM", "Orientation", "Academia to Industry", "Student Leadership"],
    themeColor: "#ff007f",
    accentBg: "from-[#ff007f]/20 to-[#ffd23f]/10",
    image: "/images/jason-1.webp",
    galleryCount: 20
  }
];
