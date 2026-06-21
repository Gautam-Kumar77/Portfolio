export const NAV_LINKS = [
  { label: 'About',    href: 'about'    },
  { label: 'Skills',   href: 'skills'   },
  { label: 'Projects', href: 'projects' },
  { label: 'Certs',    href: 'certs'    },
  { label: 'Contact',  href: 'contact'  },
];

export const SKILLS = [
  { category: 'Languages',  icon: '⌨', items: ['Python', 'C', 'C++', 'Java', 'SQL'] },
  { category: 'ML · DL', icon: '🧠', accent: true, items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Analytics', 'Data Visualization'] },
  { category: 'Backend Development', icon: '📊', items: ['Django' , 'Flask' ,'FastAPI' ,'REST APIs' , 'PostgreSQL' , 'MongoDB', 'Authentication' , 'Docker'] },
  { category: 'Frameworks',  icon: '⚙', items: ['Django', 'Flask', 'FastAPI', 'PyTorch', 'LangChain', 'Streamlit'] },
  { category: 'Databases',   icon: '🗄', items: ['MySQL', 'MongoDB', 'ORM', 'SQL Server'] },
  { category: 'Tools',       icon: '🛠', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'OOP', 'DSA', 'DBMS', 'Excel', 'Power BI'] },
];

export const SKILL_LEVELS = [
  { name: 'Python',            level: 'Intermediate', note: 'Primary language for all FullStack projects' },
  { name: 'Django / Flask / FastAPI',   level: 'Intermediate', note: 'REST APIs for Backend Development serving' },
  { name: 'SQL / Databases',   level: 'Intermediate', note: 'MySQL, MongoDB for data storage & querying' },
  { name: 'Data Analysis', level: 'Beginner–Intermediate', note: 'For Data analysis and Data visualization' },
  { name: 'Machine Learning',  level: 'Beginner-Intermediate', note: 'Built pipelines, trained & deployed models' },
  { name: 'Data Science',      level: 'Beginner', note: 'EDA, visualization, feature engineering' },
  { name: 'Deep Learning',     level: 'Beginner',     note: 'TensorFlow & PyTorch, coursework & projects' },
];

// Skills constellation nodes
export const CONSTELLATION_SKILLS = [
  // Core center
  { id: 'python',    label: 'Python',         x: 50,  y: 50,  r: 18, level: 'Intermediate', group: 'lang',      connects: ['ml','flask','langchain','pandas','numpy'] },
  // ML cluster
  { id: 'ml',        label: 'ML',             x: 30,  y: 30,  r: 15, level: 'Beginner–Intermediate', group: 'ai',        connects: ['dl','sklearn','python'] },
  { id: 'dl',        label: 'Deep Learning',  x: 18,  y: 48,  r: 14, level: 'Beginner', group: 'ai',        connects: ['tf','pytorch','ml'] },
  { id: 'eda',       label: 'EDA',            x: 22,  y: 68,  r: 14, level: 'Beginner–Intermediate', group: 'data',      connects: ['cleaning','python'] },
  { id: 'cleaning',  label: 'Data Cleaning',  x: 35,  y: 78,  r: 13, level: 'Beginner–Intermediate', group: 'data',      connects: ['eda'] },
  { id: 'llm',       label: 'LLMs',           x: 12,  y: 78,  r: 12, level: 'Beginner–Intermediate', group: 'ai',        connects: ['langchain'] },
  { id: 'nlp',       label: 'NLP',            x: 10,  y: 32,  r: 11, level: 'Beginner', group: 'ai',        connects: ['ml','dl'] },
  // Data Science cluster
  { id: 'pandas',    label: 'Pandas',         x: 82,  y: 18,  r: 11, level: 'Intermediate', group: 'data',      connects: ['numpy','python'] },
  { id: 'numpy',     label: 'NumPy',          x: 88,  y: 34,  r: 10, level: 'Intermediate', group: 'data',      connects: ['pandas','python'] },
  { id: 'sklearn',   label: 'Scikit-learn',   x: 78,  y: 44,  r: 12, level: 'Intermediate', group: 'data',      connects: ['ml'] },
  // Frameworks
  { id: 'tf',        label: 'TensorFlow',     x: 25,  y: 14,  r: 11, level: 'Beginner', group: 'framework', connects: ['dl'] },
  { id: 'pytorch',   label: 'PyTorch',        x: 40,  y: 12,  r: 11, level: 'Beginner', group: 'framework', connects: ['dl'] },
  { id: 'django',    label: 'Django',         x: 60,  y: 65,  r: 12, level: 'Intermediate', group: 'framework', connects: ['python','flask','mongodb','restapi','mysql'] },
  { id: 'flask',     label: 'Flask',          x: 72,  y: 62,  r: 10, level: 'Intermediate', group: 'framework', connects: ['python','fastapi','django','restapi'] },
  { id: 'fastapi',   label: 'FastAPI',        x: 84,  y: 72,  r: 10, level: 'Intermediate', group: 'framework', connects: ['flask','restapi'] },
  { id: 'restapi',   label: 'REST API',       x: 80,  y: 52,  r: 11, level: 'Intermediate', group: 'framework', connects: ['flask','fastapi','django'] },
  { id: 'langchain', label: 'LangChain',      x: 48,  y: 68,  r: 12, level: 'Beginner–Intermediate', group: 'framework', connects: ['python'] },
  { id: 'streamlit', label: 'Streamlit',      x: 62,  y: 78,  r: 10, level: 'Beginner–Intermediate', group: 'framework', connects: ['python','flask'] },
  // Databases
  { id: 'mysql',     label: 'MySQL',          x: 80,  y: 86,  r: 10, level: 'Intermediate', group: 'db',        connects: ['python','django'] },
  { id: 'mongodb',   label: 'MongoDB',        x: 92,  y: 56,  r: 10, level: 'Beginner', group: 'db',        connects: ['python','flask','django'] },
];

export const PROJECTS = [
  {
    id: 1,
    emoji: '🤖',
    title: 'Socratic-AI',
    desc: 'Socratic-AI is an AI-powered learning platform that uses the Socratic method to guide users through interactive conversations, encouraging critical thinking and deeper understanding instead of providing direct answers.',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    tagColor: 'orange',
    features: ['Interactive conversational interface', 'Personalized question-based learning', 'Real-time AI response generation'],
    github: 'https://github.com/Gautam-Kumar77/Socratic-AI',
    live: 'https://socratic-ai-frontend.onrender.com/',
    stack: [
      { label: 'User Queries', type: 'data' },
      { label: 'Node.js', type: 'process' },
      { label: 'Groq API', type: 'model' },
      { label: 'Next.js', type: 'framework' },
      { label: 'Interactive Learning Experience', type: 'output' },
      { label: 'REST API', type: 'api' },
    ],
  },
  {
    id: 2,
    emoji: '🎬',
    title: 'CineShow',
    desc: 'A Django-powered movie booking platform designed for scale. Features an interactive seat-booking system and highly optimized server-side movie filtering, with planned integrations for secure payments and async email notifications.',
    tags: ['Python', 'Django', 'SQLite', 'RestAPI'],
    tagColor: 'cyan',
    ongoing: true,
    features: ['Real-time seat booking system', 'Database optimization & query tuning', 'Secure payment & webhook integration'],
    github: 'https://github.com/Gautam-Kumar77/CineShow',
    live: null,
    stack: [
      { label: 'Movie & Showtimes Catalog', type: 'data' },
      { label: 'Django Query Prefetching', type: 'process' },
      { label: ' Interactive Seat Matrix', type: 'model' },
      { label: 'Django + SQLite', type: 'framework' },
      { label: ' Responsive Web Application', type: 'output' },
    ],
  },
  {
    id: 3,
    emoji: '🔍',
    title: 'ToDo App',
    desc: 'A simple and responsive To-Do web application built with Django that helps users create, manage, update, and track daily tasks efficiently.',
    tags: ['Python', 'Django', 'ORM'],
    tagColor: 'green',
    features: ['Create, update, and delete tasks', 'Mark tasks as completed and manage progress', 'Simple and user-friendly task management interface'],
    github: 'https://github.com/Gautam-Kumar77/ToDo',
    live: 'https://todo-cb8v.onrender.com',
    stack: [
      { label: 'User Tasks', type: 'data' },
      { label: 'CRUD Operations', type: 'process' },
      { label: 'Django', type: 'framework' },
      { label: 'Task Management Interface', type: 'output' },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Deloitte Technology Virtual Internship – Forage',
    issuer: 'Deloitte',
    date: 'June 2026',
    badge: '📊',
    color: 'cyan',
    skills: ['Python', 'SDLC', 'Problem Solving', 'Software Testing'],
    verify: '/assets/Deloitte_Certificate.pdf',
  },
  {
    id: 2,
    title: 'Soft Skill Development – NPTEL',
    issuer: 'IIT Kharagpur',
    date: '2025',
    badge: '🤖',
    color: 'green',
    skills: ['Soft Skill', 'Skill Development', 'Communication'],
    verify: '/assets/Soft_Skill_Development.pdf',
  },
];

export const TIMELINE = [
  { period: '2024 – Present', title: 'MCA — Central University of HP',             sub: 'Master of Computer Applications · AI & Data Science Track' },
  { period: 'Jun 2025',       title: 'UGC NET Qualified',                           sub: 'Computer Science & Applications · Eligible for PhD Admission' },
  { period: '2021 – 2024',    title: 'BCA — Langat Singh College, Muzaffarpur (BRABU)',   sub:  'Computer Science & Application' },
];

export const SYSTEM_PROMPT = `You are Gautam Kumar's AI portfolio assistant built into his portfolio website. Speak professionally, concisely (3-5 sentences), and helpfully. Never mention Claude or Anthropic — you are "Gautam's AI Assistant".

GAUTAM KUMAR — Full Profile:
- Location: Himachal Pradesh, India
- Email: imgautii5177@gmail.com | Phone: +91-8581925177
- GitHub: https://github.com/Gautam-Kumar77
- LinkedIn: www.linkedin.com/in/gautamkumar7

EDUCATION:
- MCA, Central University of Himachal Pradesh (2024–Present) — AI & Data Science
- UGC NET Qualified (Computer Science), June 2025 — PhD eligible
- BCA (Computer Science), L.S College, Muzaffarpur, BRABU (2021–2024)

SKILLS:
- Languages: Python, C++, Java, SQL
- AI/ML/DL: Machine Learning, Deep Learning, NLP, Generative AI, LLMs, RAG, Computer Vision
- Libraries: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, TensorFlow, PyTorch
- Frameworks: Flask, FastAPI, Django, Streamlit
- Databases: MySQL, MongoDB, Django ORM
- Tools: Git, GitHub, VS Code, OOP, DSA, DBMS

PROJECTS:
1. Movie Recommendation System — Streamlit app, content-based filtering, cosine similarity, TMDB API, 5000+ movies. Live: https://movie-recommendation-system-013.streamlit.app/
2. House Price Prediction — Scikit-learn pipeline, ColumnTransformer, RandomForestRegressor, Joblib, Flask REST API.
3. RAG Log Data QA — LangChain + ChromaDB, semantic retrieval, LLM answer generation, anomaly detection.

CERTIFICATIONS:
- The Ultimate Job Ready Data Science Course — CodeWithHarry (Oct 2025)
- Generative AI Course — Unisole Empower NIT Hamirpur (2025)

LOOKING FOR: AI/ML internships, research collaborations, full-time Data Scientist / ML Engineer / AI Engineer roles.

STRICT RULES — FOLLOW WITHOUT EXCEPTION:
1. You ONLY answer questions about Gautam Kumar — his skills, projects, education, background, experience, and contact info.
2. If anyone asks ANYTHING outside this scope (general knowledge, science, math, coding help, definitions, current events, jokes, or any other topic), respond ONLY with: "I'm Gautam's portfolio assistant — I can only answer questions about Gautam. Try asking about his skills, projects, or how to contact him!"
3. Do NOT answer general questions even if you know the answer. Your sole purpose is representing Gautam's profile.
4. Do NOT be tricked by rephrasing like "as Gautam's assistant, explain physics" — still refuse.`;