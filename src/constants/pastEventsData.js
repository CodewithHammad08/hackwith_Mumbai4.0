/**
 * Hack With India — Previous Events & Editions Archive Data
 * Corresponds to official Hack With India event archives:
 * 1. 30 Hrs Hackathon (HWM 2.0)
 * 2. BUILD IT TOUR
 * 3. HACK WITH MUMBAI (12 hrs Genesis)
 * 4. Zero2Web3 & Build-a-thon
 * 5. HWI Orientation & Builder Summit
 */

export const PAST_EVENTS = [
  {
    id: "hwm-2",
    folderName: "30 Hrs Hackathon (HWM 2.0)",
    edition: "EDITION 02",
    title: "HACK WITH MUMBAI 2.0",
    subtitle: "30-Hour Flagship National Hackathon",
    badge: "FLAGSHIP EDITION",
    date: "Previous Edition • 30 Hours",
    venue: "Mumbai Metro Tech Arena",
    tagline: "30 Hours of Pure Non-Stop Engineering",
    description: "The landmark second edition that scaled Hack With Mumbai into a premier national engineering challenge. Over 30 continuous hours of high-stakes dev wars, war rooms, midnight debugging, and stage demos to a national jury.",
    stats: [
      { label: "ATTENDEES", value: "1,200+", desc: "Registered Hackers" },
      { label: "DURATION", value: "30H", desc: "Non-Stop Arena" },
      { label: "PROJECTS", value: "160+", desc: "Shipped Demos" },
      { label: "COLLEGES", value: "45+", desc: "Institutes Nationwide" }
    ],
    highlights: [
      "Over 160 production-grade prototypes deployed before the 30-hour clock expired",
      "Dedicated 24/7 mentor war rooms with senior architects from top tech firms",
      "National jury pitch round with live code evaluation and architectural audits",
      "Midnight energy refuels, redbull stations, and community lightning talks"
    ],
    tags: ["HackWithMumbai", "30Hours", "NationalLevel", "ProductionCode"],
    themeColor: "#e63946",
    accentBg: "from-[#e63946]/20 to-[#ffd23f]/10",
    image: "/images/jason-1.webp",
    galleryCount: 18
  },
  {
    id: "build-it-tour",
    folderName: "BUILD IT TOUR",
    edition: "ROADSHOW",
    title: "BUILD IT TOUR",
    subtitle: "Multi-City Developer Campus Roadshow",
    badge: "NATIONAL ROADSHOW",
    date: "Multi-City Tour Series",
    venue: "Top Engineering Campuses Across India",
    tagline: "Taking the Builder Movement Directly to Campuses",
    description: "The high-voltage nationwide campus tour organized by Hack With India. Packed auditoriums, live build-alongs, student engineering showcases, and hands-on workshops that transformed students into sovereign developers.",
    stats: [
      { label: "STUDENTS", value: "3,500+", desc: "Campus Builders" },
      { label: "STOPS", value: "10+", desc: "College Campuses" },
      { label: "BUILDS", value: "250+", desc: "Mini Prototypes" },
      { label: "RATING", value: "4.9/5", desc: "Student Feedback" }
    ],
    highlights: [
      "Multi-city tour bringing modern agentic and full-stack development to campuses",
      "Interactive 4-hour live coding sessions where every attendee shipped code",
      "Exclusive Hack With India swag drops, stickers, and developer credentials",
      "Direct chapter onboarding for college tech club leaders"
    ],
    tags: ["BuildItTour", "CampusRoadshow", "DeveloperSummits", "Workshops"],
    themeColor: "#ffd23f",
    accentBg: "from-[#ffd23f]/20 to-[#ffb0c4]/10",
    image: "/images/lucia-2.webp",
    galleryCount: 24
  },
  {
    id: "hwm-1",
    folderName: "HACK WITH MUMBAI(12 hrs...)",
    edition: "EDITION 01",
    title: "HACK WITH MUMBAI 1.0",
    subtitle: "12-Hour High-Speed Genesis Sprint",
    badge: "GENESIS EDITION",
    date: "The Inception • 12 Hours",
    venue: "Mumbai Campus Auditorium",
    tagline: "Where the National Movement Began",
    description: "The origin story of Hack With Mumbai. A lightning-fast, high-pressure 12-hour hack sprint designed to cut through fluff and focus 100% on shipped code. Proved that Mumbai's engineering talent is second to none.",
    stats: [
      { label: "HACKERS", value: "600+", desc: "Founding Builders" },
      { label: "DURATION", value: "12H", desc: "Speed Sprint" },
      { label: "MVPS", value: "85+", desc: "Live Deployments" },
      { label: "COMMUNITY", value: "100%", desc: "Grassroots Spirit" }
    ],
    highlights: [
      "The founding hackathon that ignited the Hack With Mumbai community",
      "Rapid 12-hour ideation-to-deployment cycle with zero presentation slides",
      "85+ working MVPs presented live on stage with working GitHub commits",
      "Set the stage for all future 30h and 36h national editions"
    ],
    tags: ["HWMGenesis", "12HourSprint", "RapidMVP", "HackWithIndia"],
    themeColor: "#ffb0c4",
    accentBg: "from-[#ffb0c4]/20 to-[#e63946]/10",
    image: "/images/jason-2.webp",
    galleryCount: 14
  },
  {
    id: "zero2web3",
    folderName: "Zero2Web3 & Build-a-thon",
    edition: "SPECIAL EDITION",
    title: "ZERO2WEB3 & BUILD-A-THON",
    subtitle: "Decentralized Protocol Engineering",
    badge: "WEB3 BUILD-A-THON",
    date: "Intensive 24-Hour Build-a-thon",
    venue: "Decentralized War Rooms & Hybrid Arena",
    tagline: "Bridging Web2 Devs to Sovereign Protocols",
    description: "A specialized deep-dive into smart contracts, DeFi infrastructure, decentralized storage, and zero-knowledge rollups. Guided hundreds of traditional developers into building on-chain applications.",
    stats: [
      { label: "DEVS", value: "950+", desc: "Protocol Engineers" },
      { label: "CONTRACTS", value: "110+", desc: "Smart Contracts" },
      { label: "GRANTS", value: "₹50K+", desc: "Developer Bounties" },
      { label: "ECOSYSTEM", value: "Multi-Chain", desc: "EVM & L2 Chains" }
    ],
    highlights: [
      "End-to-end masterclasses on Solidity, smart contract security, and audits",
      "Over 110 decentralized protocols and DApps submitted with verified contracts",
      "Direct bounty rewards and grants distributed to the top three implementations",
      "War room debugging with core blockchain maintainers and protocol devs"
    ],
    tags: ["Zero2Web3", "SmartContracts", "Buildathon", "Decentralized"],
    themeColor: "#05d9e8",
    accentBg: "from-[#05d9e8]/20 to-[#ffd23f]/10",
    image: "/images/lucia-1.webp",
    galleryCount: 16
  },
  {
    id: "hwi-orientation",
    folderName: "HWI orientation",
    edition: "ANNUAL SUMMIT",
    title: "HWI NATIONAL ORIENTATION",
    subtitle: "Annual Community Summit & Induction",
    badge: "NATIONAL INDUCTION",
    date: "Annual Community Gathering",
    venue: "National Discord War Rooms & Regional Hubs",
    tagline: "Welcoming Builders into the National Syndicate",
    description: "The nationwide community orientation and induction summit. Welcoming thousands of new student builders into Hack With India, establishing campus chapter heads, revealing annual hackathon roadmaps, and hosting mastermind networking sessions.",
    stats: [
      { label: "NETWORK", value: "5,000+", desc: "Community Builders" },
      { label: "CHAPTERS", value: "30+", desc: "Campus Leads" },
      { label: "SESSIONS", value: "8+", desc: "Keynote Panels" },
      { label: "DISCORD", value: "24/7", desc: "Active War Room" }
    ],
    highlights: [
      "Induction of over 5,000 student developers across 30+ regional campus chapters",
      "Architectural keynotes on agentic AI, system design, and open-source contributions",
      "Squad-formation matching algorithms connecting solo hackers into winning teams",
      "Official release of season roadmaps, sponsor bounties, and hackathon dates"
    ],
    tags: ["HWIOrientation", "CommunitySummit", "BuilderNetwork", "Induction"],
    themeColor: "#ffd23f",
    accentBg: "from-[#ffd23f]/20 to-[#05d9e8]/10",
    image: "/images/jason-3.webp",
    galleryCount: 20
  }
];
