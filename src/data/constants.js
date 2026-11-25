const createProjectBanner = (title, subtitle, accent1, accent2, tagText) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090F1E"/>
          <stop offset="100%" stop-color="#131D35"/>
        </linearGradient>
        <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accent1}" stop-opacity="0.38"/>
          <stop offset="100%" stop-color="${accent2}" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="pill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${accent1}"/>
          <stop offset="100%" stop-color="${accent2}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bg)"/>
      <circle cx="670" cy="80" r="230" fill="url(#glow)"/>
      <circle cx="120" cy="390" r="190" fill="url(#glow)"/>
      <g stroke="rgba(148,163,184,0.08)" stroke-width="1">
        <line x1="0" y1="90" x2="800" y2="90"/>
        <line x1="0" y1="180" x2="800" y2="180"/>
        <line x1="0" y1="270" x2="800" y2="270"/>
        <line x1="0" y1="360" x2="800" y2="360"/>
        <line x1="160" y1="0" x2="160" y2="450"/>
        <line x1="320" y1="0" x2="320" y2="450"/>
        <line x1="480" y1="0" x2="480" y2="450"/>
        <line x1="640" y1="0" x2="640" y2="450"/>
      </g>
      <rect x="48" y="48" width="704" height="354" rx="22" fill="rgba(15,23,42,0.84)" stroke="rgba(148,163,184,0.2)" stroke-width="1.5"/>
      <circle cx="84" cy="82" r="6" fill="#EF4444" opacity="0.85"/>
      <circle cx="104" cy="82" r="6" fill="#F59E0B" opacity="0.85"/>
      <circle cx="124" cy="82" r="6" fill="#10B981" opacity="0.85"/>
      <rect x="84" y="132" width="230" height="30" rx="15" fill="url(#pill)" opacity="0.95"/>
      <text x="199" y="152" font-family="Inter, Arial, sans-serif" font-size="11.5" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${tagText}</text>
      <text x="84" y="222" font-family="Arial, sans-serif" font-size="31" font-weight="800" fill="#F8FAFC">${title}</text>
      <text x="84" y="264" font-family="Arial, sans-serif" font-size="17.5" font-weight="500" fill="#94A3B8">${subtitle}</text>
      <rect x="84" y="314" width="210" height="8" rx="4" fill="${accent1}" opacity="0.7"/>
      <rect x="306" y="314" width="130" height="8" rx="4" fill="${accent2}" opacity="0.5"/>
      <rect x="448" y="314" width="85" height="8" rx="4" fill="rgba(148,163,184,0.22)"/>
    </svg>
  `)}`;

export const Bio = {
  name: "Rahul Wankhede",
  headline: "Engineering enterprise full-stack platforms & multi-agent AI systems.",
  roles: [
    "Full Stack Software Engineer",
    "GenAI & Multi-Agent Builder",
    "MERN & React Specialist",
    "Enterprise Web Developer",
  ],
  availability: "Open to Full-Stack, Frontend & AI Engineering Roles",
  location: "Maharashtra, India",
  currentCompany: "Tata Consultancy Services (TCS)",
  description:
    "Full Stack & GenAI Engineer with 2+ years at Tata Consultancy Services — 1st Prize Winner at the TCS AI Friday Hackathon (Nagpur), TCS Wings (MERN Stack) qualifier, and recipient of the highest TCS appraisal honors in both years (5-Star Rating in Year 1 & 'A' Band in Year 2). Proven track record shipping enterprise React & .NET systems for 500+ Jaguar Land Rover users and architecting RAG + Multi-LLM consensus agents.",
  github: "https://github.com/Rezist389",
  resume:
    "https://drive.google.com/file/d/1ruM3mHQVnnJjV9-1n5PcpYUCCPFV6kWs/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/rahul-wankhede-030848204",
  twitter: "https://twitter.com/Rezist38",
  insta: "https://www.instagram.com/_rahul_rw/",
  facebook: "https://www.facebook.com/rahul.wankhede.9041083/",
  metrics: [
    {
      value: "1st Prize",
      label: "TCS AI Friday Hackathon",
      detail: "Multi-Agent RAG & 3-LLM Winner • Nagpur",
    },
    {
      value: "2+ Yrs",
      label: "Top-Rated @ TCS",
      detail: "Yr 1: 5★ Rating • Yr 2: 'A' Band (Highest)",
    },
    {
      value: "500+",
      label: "Enterprise Users Served",
      detail: "Jaguar Land Rover Halewood Plant",
    },
    {
      value: "35%",
      label: "Data Efficiency Gain",
      detail: "Optimized React, .NET & API pipelines",
    },
  ],
};

export const achievements = [
  {
    id: "ai-hackathon-1st",
    icon: "trophy",
    accent: "#F59E0B",
    badge: "1st Prize Winner",
    period: "TCS Nagpur • AI Friday Hackathon",
    title: "1st Place — TCS AI Friday Hackathon",
    organization: "Tata Consultancy Services (Nagpur Location)",
    description:
      "Won 1st Prize presenting an enterprise Multi-Agent Insurance Intelligence System uniting Live Company APIs, Vector DB RAG, 3-LLM Cross-Verification (OpenText LLM, GPT-4o mini, Llama 3.1), an SLM verified Q&A cache, and a React.js interface to simplify policy, active claim, and cancelled claim resolution for both customers and agents.",
    tags: ["Multi-Agent AI", "RAG & Vector DB", "3-LLM Consensus", "SLM Cache", "React.js"],
  },
  {
    id: "tcs-wings-mern",
    icon: "rocket",
    accent: "#10B981",
    badge: "Wings Certified • MERN",
    period: "Career Elevation Track",
    title: "Cleared TCS Wings Program (MERN Stack)",
    organization: "Tata Consultancy Services",
    description:
      "Successfully cleared TCS's rigorous Wings accelerated career progression assessment in the Full-Stack MERN specialization—validating production-grade mastery across MongoDB, Express.js, React.js, and Node.js architecture.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-Stack Architecture"],
  },
  {
    id: "tcs-year-1-rating-5",
    icon: "star",
    accent: "#38BDF8",
    badge: "5 / 5 Star Rating (Highest)",
    period: "1st Year Anniversary Appraisal",
    title: "Highest Appraisal Rating — 5 Stars (Year 1)",
    organization: "Tata Consultancy Services",
    description:
      "Awarded the highest possible 5 / 5 Star Rating in my first-year appraisal at TCS for rapid technical ownership, zero-defect React & .NET deliveries, and immediate enterprise impact.",
    tags: ["Year 1 Highest Rating", "5-Star Appraisal", "Zero-Defect Delivery", "Enterprise Impact"],
  },
  {
    id: "tcs-year-2-band-a",
    icon: "star",
    accent: "#818CF8",
    badge: "'A' Band (Highest Tier)",
    period: "2nd Year Annual Appraisal",
    title: "Highest Performance Band — 'A' Band (Year 2)",
    organization: "Tata Consultancy Services",
    description:
      "Awarded TCS's highest annual performance tier ('A' Band) in my second year—achieving the top possible recognition in both years across 2+ years at TCS through 35% data workflow optimization, team enablement, and GenAI innovation.",
    tags: ["Year 2 Highest Band", "'A' Band", "2+ Years @ TCS", "Technical Leadership"],
  },
];

export const skills = [
  {
    title: "GenAI & Multi-Agent AI",
    subtitle: "Multi-LLM consensus verification, enterprise RAG pipelines & SLM caching",
    skills: [
      {
        name: "Multi-Agent Systems",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "RAG & Vector DB",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "GPT-4o mini / OpenAI",
        image: "",
      },
      {
        name: "OpenText & Llama LLMs",
        image: "",
      },
      {
        name: "SLM Semantic Cache",
        image: "",
      },
      {
        name: "TensorFlow",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "OpenCV",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
    ],
  },
  {
    title: "Frontend Engineering",
    subtitle: "Component architecture, state management & responsive design systems",
    skills: [
      {
        name: "React.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Redux",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Material UI",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "HTML5",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3 / Styled",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Backend & Data (MERN + .NET)",
    subtitle: "Live enterprise APIs, relational & NoSQL data modeling, and microservices",
    skills: [
      {
        name: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: ".NET REST APIs",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Django",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "Cloud, DevOps & Delivery",
    subtitle: "Agile execution, version control, cloud authentication & API testing",
    skills: [
      {
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Jira & Agile",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      {
        name: "AWS (Cognito/Auth)",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Postman",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "VS Code",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    monogram: "TCS",
    accent: "#38BDF8",
    img: "https://logo.clearbit.com/tcs.com",
    role: "Assistant System Engineer",
    type: "Full-Time • 5★ (Yr 1) & 'A' Band (Yr 2)",
    company: "Tata Consultancy Services (TCS)",
    client: "Enterprise Client: Jaguar Land Rover (Halewood Plant) • TCS Nagpur",
    date: "Aug 2024 — Present (2+ Yrs)",
    desc: "Leading enterprise React frontend engineering, .NET/MERN full-stack delivery, and multi-agent GenAI innovation.",
    bullets: [
      "Won 1st Prize at the TCS AI Friday Hackathon (Nagpur) by architecting a Multi-Agent Insurance RAG + 3-LLM Cross-Verification & SLM platform.",
      "Cleared the prestigious TCS Wings Program (MERN Stack) and achieved the highest possible TCS appraisal honors in both years — 5-Star Rating in Year 1 and 'A' Band in Year 2.",
      "Spearheaded React.js frontend development for the Jaguar Land Rover Halewood Plant platform, directly empowering 500+ daily operational users.",
      "Engineered and optimized state-driven UI modules integrated with .NET REST APIs, MySQL, and MongoDB—improving end-to-end data efficiency by 35% and sprint turnaround by 20%.",
      "Authored a comprehensive React diagnostics & troubleshooting playbook, saving ~5 engineering hours per week and accelerating developer onboarding.",
    ],
    skills: [
      "React.js",
      "MERN Stack (Wings)",
      ".NET APIs",
      "Multi-Agent AI & RAG",
      "MySQL",
      "MongoDB",
      "Jira",
      "Git",
    ],
  },
  {
    id: 1,
    monogram: "NT",
    accent: "#818CF8",
    img: "https://media.licdn.com/dms/image/v2/D560BAQH5YHtpxAHvDA/company-logo_200_200/company-logo_200_200/0/1694512590827/numetry_technologies_logo?e=2147483647&v=beta&t=ivMloinovGQuG1X7un2ik1048qLUB2tU_0NPsIyYdFs",
    role: "Full Stack Developer Intern",
    type: "Internship",
    company: "Numetry Technologies",
    date: "Jan 2024 — Jul 2024",
    desc: "Built responsive MERN-stack web applications and rapid proof-of-concept (POC) features in an agile product team.",
    bullets: [
      "Developed full-stack web modules using React.js, Node.js, Express.js, and MongoDB with clean REST API contracts.",
      "Built reusable Material UI component libraries and responsive layouts ensuring cross-device consistency.",
      "Delivered rapid engineering POCs and collaborated in peer code reviews to improve frontend maintainability.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI", "JavaScript", "HTML5/CSS3"],
  },
  {
    id: 2,
    monogram: "RD",
    accent: "#A855F7",
    img: "",
    role: "Frontend Engineering Intern",
    type: "Internship",
    company: "Raise Digital",
    date: "Mar 2022 — May 2022",
    desc: "Designed and implemented automated candidate workflow interfaces for a smart recruitment portal.",
    bullets: [
      "Engineered interactive UI components for a recruitment & job portal integrated with Django backend services.",
      "Implemented candidate status dashboards supporting automated interview email triggers based on resume scoring and interview performance.",
    ],
    skills: ["JavaScript", "Django", "Material UI", "HTML5", "CSS3"],
  },
];

export const education = [
  {
    id: 0,
    monogram: "SGGS",
    school: "Shri Guru Gobind Singhji Institute of Engineering & Technology (SGGSIET), Nanded",
    degree: "Bachelor of Technology (B.Tech) — Information Technology",
    date: "Jan 2021 — Jun 2024",
    grade: "7.96 CGPA",
    desc: "Focused on Data Structures & Algorithms, Full-Stack Web Engineering, Database Management Systems, Operating Systems, and Machine Learning.",
  },
  {
    id: 1,
    monogram: "SPJC",
    school: "St. Paul Junior College, Nagpur, Maharashtra",
    degree: "HSC (Class XII) — Science with Electronics",
    date: "Apr 2019 — Apr 2020",
    grade: "80.3%",
    desc: "Completed Higher Secondary Certificate with specialization in Physics, Mathematics, and Electronics.",
  },
  {
    id: 2,
    monogram: "SHS",
    school: "Sanjuba High School (CBSE), Nagpur, Maharashtra",
    degree: "CBSE (Class X) — Science & Computer Foundations",
    date: "Jun 2017 — Mar 2018",
    grade: "90.4%",
    desc: "Graduated with distinction and strong foundations in mathematics, analytical problem solving, and computer fundamentals.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Multi-Agent Insurance Policy & Claims AI Hub",
    date: "TCS AI Friday Hackathon • Nagpur (1st Prize Winner)",
    award: "1st Prize Winner • TCS AI Friday Hackathon (Nagpur)",
    impact: "3-LLM Consensus + Live API RAG + SLM Verified Cache",
    description:
      "Award-winning Multi-Agent GenAI platform built for insurance customers and support agents to seamlessly understand policy terms, track active claims, inspect cancelled claims, and resolve complex policy queries using live enterprise APIs, Vector DB RAG, 3-LLM cross-verification, and an SLM satisfaction cache.",
    architecture: [
      "React.js Customer & Agent UI",
      "SLM Verified Q&A Cache",
      "Live Enterprise Insurance API + Vector DB RAG",
      "3-LLM Generation & Cross-Verification (OpenText LLM • GPT-4o mini • Llama 3.1)",
      "Highest-Accuracy Score Selector",
    ],
    highlights: [
      "Won 1st Prize at the TCS AI Friday Hackathon (presented at TCS Nagpur) for solving real-time policy comprehension and claim/cancelled-claim resolution for both policyholders and insurance agents.",
      "Integrated Live Enterprise APIs with a Vector Database RAG pipeline to ground every response in up-to-the-second company policy records, claim statuses, and cancellation reasons.",
      "Engineered a 3-LLM Multi-Agent Cross-Verification architecture orchestrating OpenText LLM, ChatGPT (GPT-4o mini), and Llama 3.1—where one model's output is audited by verifier agents and the highest-accuracy scored answer is surfaced to the user.",
      "Implemented a fast Small Language Model (SLM) semantic memory store that retains frequently asked questions paired with prior user-approved LLM answers, slashing latency and token cost on recurring queries.",
      "Built an intuitive dual-persona React.js frontend tailored for instant customer self-service and guided insurance-agent decision support.",
    ],
    image: createProjectBanner(
      "Multi-Agent Insurance AI",
      "RAG + Vector DB • 3-LLM Verifier • SLM Cache • React",
      "#F59E0B",
      "#38BDF8",
      "1ST PRIZE • TCS AI HACKATHON"
    ),
    tags: [
      "Multi-Agent AI",
      "RAG & Vector DB",
      "OpenText LLM",
      "GPT-4o mini",
      "Llama 3.1",
      "SLM Cache",
      "Live REST API",
      "React.js",
    ],
    category: "machine learning",
    github: "",
    webapp: "",
  },
  {
    id: 5,
    title: "Cloud-Synced Task & Calendar Workspace",
    date: "Full-Stack Productivity App",
    impact: "Google OAuth + Calendar View + Instant Search",
    description:
      "A full-featured task orchestration web application built with React, Redux, Node.js, and Material UI. Combines secure authentication, calendar-based scheduling, real-time search filtering, and persistent state.",
    highlights: [
      "Integrated Google / AWS authentication flow for personalized multi-device workspaces.",
      "Built interactive sidebar filtering, date-indexed calendar views, and instant keyword search across task lists.",
      "Designed predictable state management with Redux and responsive Material UI components.",
    ],
    image: createProjectBanner(
      "Task & Calendar Workspace",
      "React • Redux • Node.js • Cloud Auth",
      "#38BDF8",
      "#6366F1",
      "FULL STACK WEB"
    ),
    tags: ["React.js", "Redux", "Node.js", "AWS Auth", "Material UI"],
    category: "web app",
    github: "https://github.com/Rezist389/To_Do_app",
    webapp: "",
  },
  {
    id: 2,
    title: "AI Phishing Website Detection Engine",
    date: "Cybersecurity & Deep Learning",
    impact: "98.2% Classification Accuracy",
    description:
      "End-to-end machine learning pipeline and Python inference API designed to detect malicious phishing URLs and web signatures in real time with 98.2% validation accuracy.",
    highlights: [
      "Preprocessed and augmented multi-feature URL & web datasets to eliminate class imbalance and boost generalization.",
      "Trained and benchmarked deep learning architectures (TensorFlow / Keras / VGG16 feature pipelines) achieving 98.2% accuracy.",
      "Exposed model predictions through a lightweight Python API for web integration.",
    ],
    image: createProjectBanner(
      "Phishing Detection Engine",
      "98.2% Accuracy • TensorFlow • Python API",
      "#10B981",
      "#38BDF8",
      "AI & SECURITY"
    ),
    tags: ["Python", "TensorFlow", "Keras", "VGG16", "REST API"],
    category: "machine learning",
    github: "https://github.com/Rezist389/Phising-detection-website-",
    webapp: "",
  },
  {
    id: 11,
    title: "Multi-Role Online Learning Platform",
    date: "EdTech Web Platform",
    impact: "10+ Interactive Modules for Instructors & Learners",
    description:
      "A comprehensive responsive e-learning portal spanning 10+ views that enables instructors to publish structured courses and students to enroll, track lessons, and manage coursework.",
    highlights: [
      "Architected role-based workflows separating instructor course-authoring tools from student learning dashboards.",
      "Designed relational SQL schemas for courses, enrollments, and user profiles backed by PHP & MySQL.",
      "Crafted responsive multi-page UI across desktop and mobile viewports.",
    ],
    image: createProjectBanner(
      "Online Learning Portal",
      "Role-Based EdTech • 10+ Responsive Modules",
      "#818CF8",
      "#EC4899",
      "EDTECH PLATFORM"
    ),
    tags: ["JavaScript", "HTML5", "CSS3", "PHP", "MySQL"],
    category: "web app",
    github: "https://github.com/Rezist389/Online_Learning_platform",
    webapp: "",
  },
  {
    id: 8,
    title: "Real-Time Fake Currency Vision Detector",
    date: "Computer Vision + React UI",
    impact: "Live Camera OpenCV + VGG16 Verification",
    description:
      "Computer vision verification tool combining OpenCV image processing, VGG16 deep feature extraction, and a React interface to inspect banknotes via live camera capture.",
    highlights: [
      "Built OpenCV preprocessing pipelines for edge, texture, and security-feature extraction from live camera frames.",
      "Serialized trained TensorFlow/Keras VGG16 model weights for fast local inference.",
      "Paired Python inference services with an intuitive React frontend workflow.",
    ],
    image: createProjectBanner(
      "Currency Vision Detector",
      "OpenCV • VGG16 Deep Learning • React",
      "#F59E0B",
      "#EF4444",
      "COMPUTER VISION"
    ),
    tags: ["Python", "OpenCV", "TensorFlow", "VGG16", "React.js"],
    category: "machine learning",
    github: "https://github.com/Rezist389/Fake-Currency-detection",
    webapp: "",
  },
  {
    id: 9,
    title: "Cloud Notes Android Application",
    date: "Native Mobile App",
    impact: "Real-Time Firebase Sync & Category Organization",
    description:
      "Native Android note-taking application built in Java and Firebase enabling categorized knowledge management with instant create, edit, and cloud-synced storage.",
    highlights: [
      "Engineered clean CRUD workflows with subject/category organization for fast retrieval.",
      "Integrated Firebase backend services for reliable cloud persistence and real-time synchronization.",
      "Optimized native Android layouts for smooth everyday mobile usability.",
    ],
    image: createProjectBanner(
      "Cloud Notes Mobile",
      "Android Studio • Java • Firebase Sync",
      "#A855F7",
      "#38BDF8",
      "ANDROID MOBILE"
    ),
    tags: ["Java", "Android Studio", "Firebase", "REST API"],
    category: "android app",
    github: "https://github.com/Rezist389/Notes_Android_app",
    webapp: "",
  },
];
