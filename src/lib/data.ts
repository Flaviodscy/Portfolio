export const personalInfo = {
  name: "Flávio Gorodscy",
  titles: ["Motion Designer", "Creative Technologist"],
  tagline:
    "I design animated content, interfaces and digital-signage experiences—and understand the technology required to make them work reliably in the real world.",
  bio: `I am a Motion Designer and Creative Technologist with a background in communication design, branding, editorial design and digital media.\n\nMy career began with visual identity, illustration, layout and interface design. Working in laser engraving and retail production strengthened my attention to detail and taught me how to prepare creative work for real physical production environments.\n\nMy work later expanded into motion graphics, digital signage and interactive systems. Today, I create animated content, design interfaces, develop web-based tools and support the technology used to distribute content across commercial displays.\n\nThis combination allows me to work across the complete experience—from the original visual concept and animation to the platform, media player and physical screen where the audience sees it.\n\nI am especially interested in projects where design must perform outside a mockup: across different screen formats, inside live platforms and under real technical and operational constraints.`,
  email: "gorodscyflavio@gmail.com",
  phone: "+1 647 676 8244",
  location: "Toronto, Canada",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/Flaviodscy", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/flaviodscy", icon: "linkedin" },
  { label: "Behance", url: "https://behance.net/flaviodscy", icon: "behance" },
];

export const designSkills = [
  { name: "Motion Graphics", level: 95 },
  { name: "Storyboarding & Style Frames", level: 90 },
  { name: "Animation", level: 88 },
  { name: "Video Editing", level: 85 },
  { name: "Art Direction", level: 85 },
  { name: "Branding & Identity", level: 82 },
  { name: "Illustration", level: 78 },
  { name: "Typography & Layout", level: 80 },
];

export const devSkills = [
  { name: "HTML / CSS / JavaScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Firebase / GitHub", level: 82 },
  { name: "UI/UX & Wireframing", level: 80 },
  { name: "API Integration", level: 75 },
  { name: "Digital Signage Deployment", level: 92 },
  { name: "IPTV / HLS Streaming", level: 72 },
  { name: "AWS / Cloud Systems", level: 68 },
];

export const projects = [
  {
    id: 1,
    title: "AutoVisionTV — Digital Signage Management Platform",
    description:
      "A custom web-based digital-signage platform to organize displays, content, live channels and remote operations across commercial-screen networks. Connecting creative content management with the technical systems that deliver it to physical displays.",
    category: "dev",
    image: "/images/project-autovision.jpg",
    tags: ["Firebase", "JavaScript", "IPTV", "HLS", "UI/UX"],
    github: "#",
    demo: "https://autovisiontv.live",
  },
  {
    id: 2,
    title: "Motion Graphics for Commercial Screens",
    description:
      "Animated campaigns designed for automotive showrooms, waiting areas, reception displays and other commercial-screen environments. Concept development through to multi-format deployment.",
    category: "motion",
    image: "/images/project-motion.jpg",
    tags: ["After Effects", "Cinema 4D", "Digital Signage"],
    demo: "#",
  },
  {
    id: 3,
    title: "Connecting Content, Players and Displays",
    description:
      "Technical work supporting the complete path between creative content and the physical screen — media players, networks, live streams, IPTV, commercial displays and remote deployment across multiple locations.",
    category: "dev",
    image: "/images/project-signage.jpg",
    tags: ["BrightSign", "Samsung Displays", "Signagelive", "HLS"],
    demo: "#",
  },
  {
    id: 4,
    title: "Retail Design & Laser-Engraving Production",
    description:
      "At Dickson Barbeque Centre I prepared logos and custom artwork for laser engraving while creating product labels, digital marketing materials, social-media visuals and promotional content in a high-volume retail environment.",
    category: "motion",
    image: "/images/project-dickson.jpg",
    tags: ["Illustrator", "Photoshop", "Brand Design"],
    demo: "#",
  },
  {
    id: 5,
    title: "Brand Identities & Visual Experiments",
    description:
      "A selection of identity systems, apparel graphics, editorial layouts, social campaigns and experimental visual concepts developed through freelance, academic and independent work — including an eco-conscious skate/surf clothing brand.",
    category: "motion",
    image: "/images/project-branding.jpg",
    tags: ["Branding", "Editorial", "Illustration"],
    demo: "#",
  },
  {
    id: 6,
    title: "Interactive & Personal Technology Projects",
    description:
      "Independent projects exploring interface ideas, responsive design, live data, automation and emerging technologies — Tesla mobile dashboards, IPTV interfaces, charging-control apps, AI-assisted workflows and interactive signage prototypes.",
    category: "dev",
    image: "/images/project-experimental.jpg",
    tags: ["Prototyping", "Creative Code", "React"],
    github: "#",
    demo: "#",
  },
];

export const caseStudies = {
  autovisiontv: {
    title: "AutoVisionTV — Digital Signage Management Platform",
    category: "Digital Signage · Product Design · Full-Stack Development · Technical Operations",
    summary:
      "AutoVisionTV is a custom web-based digital-signage platform created to organize displays, content, live channels and remote operations across commercial-screen networks. The platform connects creative content management with the technical systems responsible for delivering that content to physical displays.",
    role: "Product design, UI/UX, creative development, full-stack web development, testing, deployment and technical support.",
    work: [
      "Dashboard and navigation structure",
      "Responsive desktop and mobile interfaces",
      "Dealership and location management",
      "Display and media-player management",
      "Content scheduling and preview tools",
      "User-management workflows",
      "Live-channel and IPTV interfaces",
      "Remote-display controls",
      "Stream-health monitoring",
      "Analytics and system-status information",
      "Backup and recovery tools",
      "Firebase and GitHub integration",
    ],
    tech: "HTML, CSS, JavaScript, Firebase, GitHub, web APIs, IPTV, HLS streaming and digital-signage platforms.",
    quote1: "Managing digital signage across multiple locations requires more than a visually attractive dashboard. The platform must make content, device status and remote controls easy to understand while remaining reliable enough for daily operations.",
    quote2: "I contribute across both design and implementation. I shape the interface hierarchy, develop features, connect data, test deployment workflows and investigate technical issues involving players, streams, networks and displays.",
  },
  motion: {
    title: "Motion Graphics for Commercial Screens",
    category: "Motion Design · Art Direction · Digital Signage",
    summary:
      "Animated campaigns designed for automotive showrooms, waiting areas, reception displays and other commercial-screen environments. The work includes concept development, storyboards, style frames, animation, video editing and adaptation for multiple display formats.",
    role: "Motion designer, visual designer and production specialist.",
    process: [
      "Understanding the campaign message",
      "Developing the visual concept",
      "Creating storyboards",
      "Designing style frames",
      "Animating the campaign",
      "Adapting to different resolutions",
      "Testing readability and playback",
      "Preparing final deployment files",
    ],
    quote: "Commercial-screen content must communicate quickly and remain readable from a distance. I use clear hierarchy, controlled motion and concise messaging to create animation that works within real viewing environments.",
  },
  signage: {
    title: "Connecting Content, Players and Displays",
    category: "Digital Signage · Deployment · Troubleshooting · Technical Operations",
    summary:
      "Technical work supporting the complete path between creative content and the physical screen. This includes media players, networks, live streams, content platforms, commercial displays and remote deployment across multiple locations.",
    role: "Digital-signage specialist, technical investigator and creative systems support.",
    systems: [
      "BrightSign media players",
      "Samsung commercial displays",
      "Signagelive",
      "iAdea players",
      "Intel NUC players",
      "IPTV and HLS streams",
      "Web-based playback",
      "Remote content deployment",
      "Player monitoring",
      "Network and server troubleshooting",
    ],
    quote1: "A successful digital-signage project does not end when the animation is exported. The player must retrieve the file, the network must remain connected and the display must be correctly configured.",
    quote2: "My technical experience allows me to investigate the complete delivery chain instead of treating content creation and system operations as separate areas.",
  },
  dickson: {
    title: "Retail Design and Laser-Engraving Production",
    category: "Graphic Design · Branding · Production · Laser Engraving",
    dates: "July 2022 – May 2023",
    summary:
      "At Dickson Barbeque Centre, I worked in a fast-paced customer and production environment, preparing logos and custom artwork for laser engraving while also creating labels and digital marketing materials.",
    quote: "Customers frequently arrived with low-resolution images, incomplete ideas or artwork that was not suitable for engraving. I translated those materials into clean, production-ready designs while helping clients understand what would create the strongest final result.",
  },
  branding: {
    title: "Brand Identities and Visual Experiments",
    category: "Branding · Editorial Design · Illustration · UI/UX",
    summary:
      "A selection of identity systems, apparel graphics, editorial layouts, social campaigns and experimental visual concepts developed through freelance, academic and independent work.",
  },
  experimental: {
    title: "Interactive and Personal Technology Projects",
    category: "UI/UX · Creative Code · Prototyping · Personal Projects",
    summary:
      "Independent projects used to explore new interface ideas, responsive design, live data, automation and emerging technologies.",
    quote: "Personal projects give me room to test ideas without the limitations of a client brief. I use them to explore interaction design, automation, responsive interfaces and how complex technology can be presented through a calm and intuitive experience.",
  },
};

export const experiences = [
  {
    role: "Team Lead, Research & Development / Graphic Designer",
    company: "BFA Group / AutoVisionTV",
    dates: "January 2024 – Present",
    location: "Toronto / Markham, Ontario",
    description:
      "Creating motion content, developing web-based tools and supporting the digital-signage systems used across commercial display networks. My work connects creative production with technical operations, including animation, interface design, development, media-player testing, content deployment and troubleshooting.",
    responsibilities: [
      "Motion graphics and animated campaigns",
      "Digital-signage content creation",
      "Product and interface design",
      "Responsive web development",
      "Internal dashboard development",
      "Firebase and GitHub workflows",
      "Digital-signage player testing",
      "Commercial-display support",
      "IPTV and live-stream testing",
      "Technical troubleshooting",
      "System documentation",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Dickson Barbeque Centre",
    dates: "July 2022 – May 2023",
    location: "Canada",
    description:
      "Created and prepared customer artwork for laser engraving, redesigned retail labels and produced digital and editorial marketing material in a high-volume retail environment.",
    responsibilities: [
      "Recreating and cleaning customer logos",
      "Preparing vector artwork for engraving",
      "Creating customized product designs",
      "Operating within physical production requirements",
      "Designing product labels",
      "Website banners and social-media visuals",
      "Email newsletters and editorial content",
    ],
  },
  {
    role: "Communication Designer (Freelance)",
    company: "Independent",
    dates: "January 2018 – July 2020",
    location: "Portugal",
    description:
      "Developed brand identities, apparel graphics, social campaigns, event concepts, wireframes, UI prototypes and website concepts for emerging brands and cultural projects.",
    responsibilities: [
      "Brand identity systems",
      "Apparel graphics and illustrations",
      "Social media campaigns",
      "Event branding and editorial layouts",
      "Website wireframes and prototypes",
      "Packaging design",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Communication Design",
    school: "University of Algarve",
    location: "Portugal",
    dates: "2016 – 2020",
  },
  {
    degree: "Media Foundation Certificate",
    school: "George Brown College",
    location: "Toronto, Ontario",
    dates: "2021 – 2022",
  },
];

export const tools = [
  "Adobe After Effects",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Adobe XD",
  "Figma",
  "Visual Studio Code",
  "GitHub",
  "Firebase",
  "React / Next.js",
  "Google Apps Script",
  "Signagelive",
  "BrightAuthor",
  "AWS Tools",
];

export const philosophy = [
  {
    title: "Clarity before decoration",
    description: "I believe strong design begins with hierarchy, purpose and an understanding of the audience.",
  },
  {
    title: "Design beyond the mockup",
    description: "I consider screen size, playback, deployment, responsiveness and the conditions in which the work will actually be used.",
  },
  {
    title: "Technology should feel human",
    description: "Complex systems are most successful when the user does not have to think about the complexity behind them.",
  },
];
