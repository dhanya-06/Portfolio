import { SkillCategory, Project, Education, Experience, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "Pooja Thanya Shri R",
  title: "AI & Data Science Student",
  location: "Tamil Nadu, India",
  email: "poojathanyashri13@gmail.com",
  phone: "+91 9751096777",
  linkedin: "https://www.linkedin.com/in/poojathanyashri", // Professional placeholder that feels real
  github: "https://github.com/poojathanyashri",
  resumeUrl: "#", // Direct download triggers structured mock/viewable PDF resume in-browser
  tagline: "Transforming Ideas into Digital Experiences through AI, Data, and Web Development.",
  aboutDescription: [
    "I am an Artificial Intelligence and Data Science student passionate about technology, programming, and innovation. With a curious mind and a drive for learning, I constanty seek out complex challenges to turn data into meaningful insights and beautiful, responsive web experiences.",
    "Driven by the potential of cutting-edge technologies, I am actively building a strong foundation in core programming languages, data engineering principles, and creative front-end web development with standard tools. My objective is to bridge the gap between back-end mathematical models and interactive user experiences.",
    "Currently seeking internship opportunities and impactful projects where I can apply my problem-solving skills, collaborate with diverse teams, and grow under experienced mentors."
  ]
};

export const EDUCATION_TIMELINE: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "DMI Engineering College",
    period: "2024 – Present",
    description: "Deepening knowledge in Core AI concepts, Advanced Data Structures, Statistics, Database Management Systems, and Modern Web engineering workloads.",
    grade: "Pursuing"
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Education (HSC)",
    institution: "SAV Balakrishna Matriculation Higher Secondary School",
    period: "Completed 2024",
    description: "Rigorous focus on Mathematics, Physics, Chemistry, and Computer Science foundations.",
    grade: "First Class"
  }
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    id: "exp-1",
    role: "Web Development Intern",
    company: "JClicks Solutions",
    period: "December 2025",
    responsibilities: [
      "Developed interactive static websites using high-quality semantic HTML5, CSS3 layout engines, and responsive practices.",
      "Assisted senior engineers in designing, testing, and refining user-friendly webpage layouts and interactive components.",
      "Absorbed industry-standard web development workflows, Git-based version control patterns, and modular UI best practices."
    ],
    skillsLearned: ["HTML5", "CSS3", "Web Layouts", "Responsive Design", "Git Workflow"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85, icon: "Terminal" },
      { name: "Java (Basics)", level: 65, icon: "Coffee" },
      { name: "HTML & CSS", level: 95, icon: "Code2" },
      { name: "JavaScript", level: 80, icon: "Cpu" },
      { name: "Bootstrap", level: 85, icon: "Layout" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & Version Control", level: 80, icon: "GitBranch" },
      { name: "GitHub", level: 85, icon: "GitCommit" },
      { name: "Vercel Deployment", level: 75, icon: "UploadCloud" },
      { name: "VS Code Editor", level: 90, icon: "Layers" }
    ]
  },
  {
    title: "AI Tools & Workflows",
    skills: [
      { name: "Google AI Studio", level: 80, icon: "Sparkles" },
      { name: "Claude AI", level: 90, icon: "Bot" },
      { name: "ChatGPT Development", level: 85, icon: "MessageSquareCode" }
    ]
  },
  {
    title: "Human / Soft Skills",
    skills: [
      { name: "Analytical Problem Solving", level: 90, icon: "CheckSquare" },
      { name: "Professional Communication", level: 85, icon: "Mail" },
      { name: "Team Collaboration", level: 90, icon: "Users" },
      { name: "Quick Adaptability", level: 95, icon: "Shuffle" }
    ]
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "proj-1",
    title: "Restaurant Website",
    shortDescription: "A multi-page responsive web layout featuring beautiful interactive menus and sleek booking integrations.",
    fullDescription: "A fully responsive multi-page concept website designed for a modern gourmet restaurant. Built explicitly to master layouts, clean typography, navigation flows, and interactive state components. Includes interactive section navigations and detailed menus.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox/Grid"],
    role: "Front-end Developer",
    duration: "2 Weeks",
    keyFeatures: [
      "Multi-page architecture with seamless menu item rendering",
      "Interactive contact form and reservation page layouts",
      "Dynamic responsive viewports catering perfectly to mobile, tablet, and widescreen layouts"
    ],
    image: "restaurant" // Resolved in component via custom visuals
  },
  {
    id: "proj-2",
    title: "Personal Portfolio Website",
    shortDescription: "A premium, fully responsive interactive landing page demonstrating core technologies and academic milestones.",
    fullDescription: "A customized premium developer portfolio engineered with sleek glassmorphic aesthetics, motion-react hardware-accelerated animations, and responsive structures to showcase professional competencies and educational progress.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    role: "Lead Engineer & Designer",
    duration: "1 Week",
    keyFeatures: [
      "Fluid glassmorphic UI design with real-time accent color breathing states",
      "Animated interactive skill bars and responsive interactive timeline modules",
      "Integrated dynamic resume viewer and fluid contact interfaces"
    ],
    image: "portfolio"
  },
  {
    id: "proj-3",
    title: "AI-Based Hyperlocal Beauty Trend Prediction System",
    shortDescription: "An AI-assisted salon web platform prototype built for Naturals to discover local trends and improve discovery.",
    fullDescription: "A comprehensive salon platform prototype conceptualized for Naturals. It blends responsive modern front-end layouts with mock predictive model feeds to showcase local hair and beauty trends. This smart utility streamlines customer onboarding and hyper-local service discovery.",
    technologies: ["React", "AI Prompt Engineering", "Tailwind CSS", "Bootstrap Elements", "Lucide Icons"],
    role: "Full-Stack Prototype Developer",
    duration: "4 Weeks",
    keyFeatures: [
      "Holographic style custom dashboard showing predicted styling trends based on geolocation inputs",
      "Innovative customer service matching engine built on intuitive user pref metrics",
      "Modern highly polished visuals with immersive cards and visual scheduling dialogs"
    ],
    image: "beauty_system"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "MongoDB Basics for Students",
    issuer: "MongoDB Academy",
    date: "2025"
  },
  {
    id: "cert-2",
    title: "ICT Academy Certified Web Essentials",
    issuer: "ICT Academy",
    date: "2025"
  }
];

export const LANGUAGES = [
  { name: "Tamil", level: "Native / Fluent", percentage: 100 },
  { name: "English", level: "Professional / Fluent", percentage: 95 }
];
