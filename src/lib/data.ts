export const personalInfo = {
  name: "Flavio Cury Gorodscy",
  titles: ["Motion Designer", "Software Developer"],
  tagline: "I craft immersive visual experiences and build the code that brings them to life.",
  bio: "With a unique blend of creative and technical skills, I bridge the gap between motion design and software engineering. I specialize in creating captivating visual narratives through animation and 3D design, while also developing robust web applications that push the boundaries of what's possible online.\n\nMy approach combines artistic vision with engineering precision — every pixel matters, and every line of code should be as elegant as a well-composed scene.",
  email: "flavio@example.com",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/Flaviodscy", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/flaviodscy", icon: "linkedin" },
  { label: "Behance", url: "https://behance.net/flaviodscy", icon: "behance" },
  { label: "Dribbble", url: "https://dribbble.com/flaviodscy", icon: "dribbble" },
];

export const designSkills = [
  { name: "After Effects", level: 95, icon: "ae" },
  { name: "Premiere Pro", level: 90, icon: "pp" },
  { name: "Blender", level: 85, icon: "blender" },
  { name: "Cinema 4D", level: 80, icon: "c4d" },
  { name: "Figma", level: 90, icon: "figma" },
  { name: "DaVinci Resolve", level: 75, icon: "davinci" },
];

export const devSkills = [
  { name: "React / Next.js", level: 90, icon: "react" },
  { name: "TypeScript", level: 88, icon: "ts" },
  { name: "Node.js", level: 82, icon: "node" },
  { name: "Python", level: 78, icon: "python" },
  { name: "GLSL / Shaders", level: 70, icon: "glsl" },
  { name: "Tailwind CSS", level: 92, icon: "tailwind" },
];

export const projects = [
  {
    id: 1,
    title: "Ambient Flow",
    description: "A real-time generative art installation using WebGL shaders and sensor data to create immersive visual environments.",
    category: "dev",
    image: "/images/project-ambient.jpg",
    tags: ["Three.js", "GLSL", "WebGL", "React"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Brand Motion Reel 2025",
    description: "A showreel of motion graphics and animated branding for international clients including product launches and identity animations.",
    category: "motion",
    image: "/images/project-reel.jpg",
    tags: ["After Effects", "Cinema 4D", "Octane"],
    demo: "#",
  },
  {
    id: 3,
    title: "Particle Studio",
    description: "A web-based particle system editor with real-time preview, custom shader support, and export to multiple formats.",
    category: "dev",
    image: "/images/project-particle.jpg",
    tags: ["TypeScript", "WebGPU", "GLSL"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "3D Product Visualization",
    description: "Photorealistic 3D product renders and animated sequences for e-commerce and advertising campaigns.",
    category: "motion",
    image: "/images/project-3d.jpg",
    tags: ["Blender", "Octane", "Photoshop"],
    demo: "#",
  },
  {
    id: 5,
    title: "DataViz Dashboard",
    description: "An interactive dashboard for real-time data visualization with smooth animations and custom chart components.",
    category: "dev",
    image: "/images/project-dashboard.jpg",
    tags: ["Next.js", "D3.js", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Title Sequence — 'The Drift'",
    description: "Custom animated title sequence for an independent film, combining typography with procedural animation.",
    category: "motion",
    image: "/images/project-title.jpg",
    tags: ["After Effects", "Trapcode", "C4D"],
    demo: "#",
  },
];

export const experiences = [
  {
    role: "Senior Motion Designer",
    company: "Creative Studio (2023 — Present)",
    dates: "2023 — Present",
    description: "Lead motion design for high-profile brand campaigns. Created animated identities, title sequences, and product visualizations for international clients.",
  },
  {
    role: "Software Engineer",
    company: "Tech Company (2021 — 2023)",
    dates: "2021 — 2023",
    description: "Developed full-stack web applications using React and Node.js. Built design systems, API services, and real-time data pipelines.",
  },
  {
    role: "Junior Motion Designer & 3D Artist",
    company: "Animation Agency (2019 — 2021)",
    dates: "2019 — 2021",
    description: "Produced 3D animations and motion graphics for advertising. Specialized in product visualization and logo animations.",
  },
];
