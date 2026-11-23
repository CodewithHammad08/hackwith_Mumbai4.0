export const UNSTOP_REGISTRATION_URL = "https://unstop.com";

export const HACKATHON_DETAILS = {
  title: "HACK WITH MUMBAI 4.0",
  tagline: "36-HOUR NATIONAL LEVEL HACKATHON",
  subTagline: "24-25 SEPTEMBER 2026 • BVUDET NM CAMPUS, NAVI MUMBAI",
  organizer: "HACK WITH INDIA",
  dates: "24-25 SEPTEMBER 2026",
  duration: "36 HOURS NON-STOP",
  venue: "BVUDET NM CAMPUS, NAVI MUMBAI",
  venueShort: "BVUDET NM CAMPUS",
  venueFull: "Bharati Vidyapeeth Department of Engineering & Technology, Navi Mumbai",
  unstopUrl: UNSTOP_REGISTRATION_URL,
  targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 42).toISOString(),
  prizePool: "₹1,50,000+",
  pricing: {
    team: {
      title: "TEAM SQUAD",
      price: 200,
      currency: "₹",
      per: "Per Team (2-5 Members)",
      badge: "TEAM PASS",
      description: "Assemble 2 to 5 builders in any domain to conquer the Grand Championship.",
      features: [
        "Full Access for all 2 to 5 Team Members",
        "Eligible for ₹75,000 Grand Championship across ALL domains",
        "Freedom to choose or combine ANY domains",
        "Priority Mentorship & Stage Pitch Opportunity",
        "Official Hack With India Certificates for all members",
        "Premium Swag Box & Cloud Credits for all members",
        "Direct VC Incubation & Job Referral Fast-Track"
      ]
    }
  },
  domains: [
    {
      id: "ai-ml",
      number: "DOMAIN 01",
      badge: "ANY DOMAIN",
      title: "AI / ML & AGENTIC SYSTEMS",
      prize: "ONE UNIFIED GRAND PRIZE",
      category: "AI & ML",
      description: "Push the frontier of generative AI, autonomous agent workflows, local LLMs, and real-time computer vision.",
      challenge: "Build autonomous multi-agent pipelines, fine-tuned lightweight open-source models, or real-time neural perception interfaces.",
      tags: ["GenAI", "Autonomous Agents", "Computer Vision", "PyTorch", "LangChain", "HuggingFace"],
      color: "#e63946",
      icon: "🤖"
    },
    {
      id: "web-fullstack",
      number: "DOMAIN 02",
      badge: "ANY DOMAIN",
      title: "WEB & FULL-STACK APPS",
      prize: "ONE UNIFIED GRAND PRIZE",
      category: "Web Development",
      description: "Ultra-responsive, accessible, and high-concurrency web systems pushing modern browser capabilities to the limit.",
      challenge: "Architect real-time collaborative workspaces, next-gen SaaS platforms, or high-throughput distributed web tools.",
      tags: ["Next.js", "React", "Node.js", "GraphQL", "WebSockets", "TypeScript"],
      color: "#ffd23f",
      icon: "🌐"
    },
    {
      id: "app-dev",
      number: "DOMAIN 03",
      badge: "ANY DOMAIN",
      title: "MOBILE & CROSS-PLATFORM",
      prize: "ONE UNIFIED GRAND PRIZE",
      category: "App Development",
      description: "Fluid, native-feel mobile and spatial experiences delivering high utility, delightful UX, and offline resilience.",
      challenge: "Build production-grade mobile utilities, campus lifestyle tools, micro-learning apps, or offline-first field diagnostics.",
      tags: ["Flutter", "React Native", "Swift", "Kotlin", "PWA", "Supabase"],
      color: "#ff2a6d",
      icon: "📱"
    },
    {
      id: "cloud-cyber",
      number: "DOMAIN 04",
      badge: "ANY DOMAIN",
      title: "CLOUD INFRA & CYBERSECURITY",
      prize: "ONE UNIFIED GRAND PRIZE",
      category: "Cloud & Cyber",
      description: "Resilient zero-trust architectures, automated security scanning, container orchestration, and edge microservices.",
      challenge: "Design zero-latency dev tools, edge compute meshes, threat detection probes, or distributed fault-tolerant backends.",
      tags: ["Kubernetes", "Docker", "Zero Trust", "Rust", "Go", "AWS/GCP"],
      color: "#05d9e8",
      icon: "☁️"
    },
    {
      id: "web3-blockchain",
      number: "DOMAIN 05",
      badge: "ANY DOMAIN",
      title: "WEB3 & DECENTRALIZED TECH",
      prize: "ONE UNIFIED GRAND PRIZE",
      category: "Blockchain",
      description: "Decentralized identity, zero-knowledge proofs, verifiable student credentials, and transparent peer micro-economies.",
      challenge: "Solve acute institutional bottlenecks using verifiable credentials, trustless voting, or automated micro-grant distributions.",
      tags: ["Smart Contracts", "Solidity", "Zero Knowledge", "IPFS", "Ethereum", "Polygon"],
      color: "#ffb0c4",
      icon: "⛓️"
    },
    {
      id: "open-innovation",
      number: "DOMAIN 06",
      badge: "ANY DOMAIN",
      title: "OPEN INNOVATION / WILDCARD",
      prize: "ONE UNIFIED GRAND PRIZE",
      category: "Open Innovation",
      description: "Got an idea that defies categories? Hardware, IoT, HealthTech, EdTech, ClimateTech, or radical sandbox experiments.",
      challenge: "Zero restrictions. Pick any problem, any technology stack, and build a working prototype that changes the world.",
      tags: ["IoT & Hardware", "HealthTech", "Robotics", "Fintech", "ClimateTech", "Wildcard"],
      color: "#fff9cb",
      icon: "🚀"
    }
  ],
  schedule: [
    { time: "09:30", title: "CHECK-IN & BADGE PICKUP", phase: "PHASE 01", description: "Registration desk opens. Hacker badge distribution, welcome swag kits, breakfast & coffee refuel." },
    { time: "10:00", title: "PORTAL OPEN & CEREMONY", phase: "PHASE 02", description: "Opening keynote by Hack With India leadership. Domain problem statements revealed & submission portal live." },
    { time: "10:30", title: "BUILD MODE ENGAGED", phase: "PHASE 03", description: "The 36-Hour National Hack begins! Discord war rooms open. Mentorship Round 1: Architecture review." },
    { time: "13:00", title: "CHECKPOINT & REVIEW", phase: "PHASE 04", description: "Mid-way code commits verification. Technical health-check with mentors & lunch recharge break." },
    { time: "15:00", title: "FINAL PUSH & SUBMISSION", phase: "PHASE 05", description: "Code freeze countdown. GitHub repository lock, project video demo upload, and pitch deck finalization." },
    { time: "16:00", title: "TIME UP & GRAND FINALE", phase: "PHASE 06", description: "Stage presentations to national jury. Live Q&A, scoring, and the ₹1,50,000 podium award ceremony." }
  ],
  prizes: [
    { place: "1ST", title: "GRAND CHAMPION", amount: "₹75,000", badge: "👑", perks: ["₹75,000 Direct Cash Prize", "Championship Trophy & Medals", "Direct VC Incubation Pitch", "₹50,000 Cloud Credits", "Wall of Fame Feature"] },
    { place: "2ND", title: "FIRST RUNNER-UP", amount: "₹50,000", badge: "🥈", perks: ["₹50,000 Direct Cash Prize", "Silver Trophy", "₹25,000 Cloud Credits", "Internship Fast-Track", "Winner Certificate"] },
    { place: "3RD", title: "SECOND RUNNER-UP", amount: "₹25,000", badge: "🥉", perks: ["₹25,000 Direct Cash Prize", "Bronze Memento", "₹15,000 Cloud Credits", "Mentor Network Access", "Exclusive Swag Kit"] }
  ],
  rules: [
    "Choose ANY domain: Pick any domain of your choice or combine multiple domains. The prize is ONE unified pool!",
    "Open to all college students, independent developers, and tech enthusiasts nationwide.",
    "Team Size: Strictly 2–5 members per team. Cross-college and cross-institutional teams are fully permitted.",
    "All code must be developed during the 36-hour window. Pre-built projects are disqualified.",
    "Projects must be on a public GitHub repo with regular timestamped commits throughout.",
    "Industry mentors available 24/7 on the official Discord server.",
    "You own 100% of the code and IP you build during the hackathon."
  ],
  faqs: [
    { q: "Are there separate track prizes or is the prize unified?", a: "The prize is ONLY ONE unified grand prize pool! There are no separate track restrictions — you can choose ANY domain you like (or even combine multiple domains). All participants compete together on a single national leaderboard for the ₹1,50,000 podium prize pool (1st: ₹75k, 2nd: ₹50k, 3rd: ₹25k)!" },
    { q: "Can I choose any domain or tech stack?", a: "Yes! You have 100% freedom to choose ANY domain — AI/ML, Web, Mobile, Cloud, Cybersecurity, Web3, IoT, or any wildcard idea. You are judged on innovation, execution, and impact, not restricted by rigid tracks." },
    { q: "What is the registration fee?", a: "₹200 per Team (2–5 members). Covers 36-hour arena access for all teammates, mentorship, swag boxes, certificates, and eligibility for the ₹1,50,000 grand prize pool." },
    { q: "Is this online, offline, or hybrid?", a: "Hybrid! Compete online via Discord War Room or attend at official Mumbai Arena + regional hubs nationwide." },
    { q: "Can beginners participate?", a: "Yes! All skill levels welcome. We have 24/7 mentorship, starter templates, workshops, and dedicated beginner bounties." },
    { q: "Can team members be from different colleges?", a: "Yes — multi-institutional cross-college teams are actively encouraged!" },
    { q: "When are prizes disbursed?", a: "Within 7 business days after the ceremony via direct bank transfer, with official certificates and trophies." }
  ],
  sponsors: [
    { name: "HACK WITH INDIA", role: "Title Organiser" },
    { name: "GITHUB CAMPUS", role: "Platform Partner" },
    { name: "AWS STARTUPS", role: "Cloud Partner" },
    { name: "POSTMAN", role: "API Partner" },
    { name: "DEVVERSE GLOBAL", role: "Co-Sponsor" }
  ]
};

// Backward-compatible alias
export const tracks = HACKATHON_DETAILS.domains;
HACKATHON_DETAILS.tracks = HACKATHON_DETAILS.domains;
HACKATHON_DETAILS.faq = HACKATHON_DETAILS.faqs;
