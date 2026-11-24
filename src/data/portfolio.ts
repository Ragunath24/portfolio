export interface SocialLink {
  label: 'GitHub' | 'LinkedIn';
  url: string | null;
  placeholderNote: string;
}

export interface SkillItem {
  name: string;
  tier: 'production' | 'foundation';
}

export interface SkillCategory {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  experienceNote: string;
  summary: string;
  technologies: string[];
  contributions: string[];
  moduleGroups: {
    product: string;
    modules: string[];
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  timeline: string;
  company: string;
  shortOverview: string;
  overview: string;
  businessProblem: string;
  solutionDeveloped: string;
  systemScope: string;
  individualContributions: string[];
  modules: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  allTags: string[];
  technicalHighlights: string[];
  architectureNodes: {
    layer: string;
    title: string;
    tech: string;
  }[];
  repositoryNote: string;
  githubUrl: string | null;
  liveUrl: string | null;
}

export interface ProblemSolvingCase {
  id: string;
  title: string;
  projectRef: string;
  tags: string[];
  problem: string;
  whyItOccurred: string;
  analysis: string;
  solution: string;
  result: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gradeLabel: string;
  gradeValue: string;
}

export interface CertificationItem {
  title: string;
  focus: string;
  category: string;
}

/**
 * Single source of truth populated strictly from Ragunath R's resume PDF.
 * TODO: Add exact GitHub / LinkedIn URLs when ready.
 */
export const PORTFOLIO_DATA = {
  profile: {
    name: 'Ragunath R',
    initials: 'RR',
    title: 'Software Developer',
    headline:
      'Building enterprise Offline-First POS apps, responsive React interfaces, and NestJS REST APIs.',
    experienceDurationBadge: 'Software Developer · ~1.5 Years Experience',
    email: 'raguraju2003@gmail.com',
    phone: '+91 9043950244',
    location: 'Namakkal',
    resumePath: `${import.meta.env.BASE_URL}Ragunath_R_Resume.pdf`,
    resumeFilename: 'Ragunath_R_Resume.pdf',
    avatarPath: `${import.meta.env.BASE_URL}profile.jpg`,
    socialLinks: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ragunath24',
        placeholderNote:
          'Direct GitHub URL was not exposed in PDF text. Request via raguraju2003@gmail.com.',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ragunath-r-207b37264/',
        placeholderNote:
          'Direct LinkedIn URL was not exposed in PDF text. Request via raguraju2003@gmail.com.',
      },
    ] as SocialLink[],
  },

  heroSnapshot: {
    currentRole: 'Software Developer',
    company: 'Maaya Software Solutions Pvt. Ltd.',
    period: '07/2025 – Present',
    productionSystems: ['FreshPi POS', 'PoultryCare ERP'],
    architectureStack: [
      { layer: 'Frontend', tech: 'React.js · TypeScript · Electron.js' },
      { layer: 'Backend', tech: 'NestJS · Node.js · PHP · REST APIs' },
      { layer: 'Database', tech: 'MySQL · SQLite · Offline Sync' },
    ],
  },

  about: {
    bio: 'Software Developer at Maaya Software Solutions Pvt. Ltd. (07/2025 – Present) with a B.E. in Electronics and Communication Engineering (2020–2024, CGPA 7.59) and Java Full-Stack certification. I work end-to-end across React.js, TypeScript, Electron.js, NestJS, PHP, MySQL, and SQLite on live enterprise POS and ERP products.',
    highlights: [
      {
        title: 'Offline-First Systems',
        detail: 'Local SQLite persistence synced cleanly with central MySQL.',
      },
      {
        title: 'Full-Stack Delivery',
        detail: 'React + TypeScript UIs paired with NestJS REST APIs.',
      },
      {
        title: 'Production Reliability',
        detail: 'Module enhancements, bug fixes, and SQL query tuning.',
      },
    ],
  },

  skillCategories: [
    {
      id: 'languages',
      title: 'Programming Languages',
      items: [
        { name: 'TypeScript', tier: 'production' },
        { name: 'JavaScript', tier: 'production' },
        { name: 'PHP', tier: 'production' },
        { name: 'HTML', tier: 'production' },
        { name: 'CSS', tier: 'production' },
        { name: 'Core Java', tier: 'foundation' },
        { name: 'Advanced Java', tier: 'foundation' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      items: [
        { name: 'React.js', tier: 'production' },
        { name: 'TypeScript', tier: 'production' },
        { name: 'JavaScript', tier: 'production' },
        { name: 'HTML / CSS', tier: 'production' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      items: [
        { name: 'NestJS', tier: 'production' },
        { name: 'Node.js', tier: 'production' },
        { name: 'REST APIs', tier: 'production' },
        { name: 'PHP', tier: 'production' },
        { name: 'Core & Advanced Java', tier: 'foundation' },
      ],
    },
    {
      id: 'database',
      title: 'Database Management',
      items: [
        { name: 'MySQL', tier: 'production' },
        { name: 'SQLite', tier: 'production' },
        { name: 'JDBC', tier: 'foundation' },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      items: [
        { name: 'React.js', tier: 'production' },
        { name: 'NestJS', tier: 'production' },
        { name: 'Electron.js', tier: 'production' },
        { name: 'Node.js', tier: 'production' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Dev Environment',
      items: [
        { name: 'Git & GitHub', tier: 'production' },
        { name: 'VS Code', tier: 'production' },
        { name: 'Postman', tier: 'production' },
        { name: 'Eclipse', tier: 'foundation' },
        { name: 'SQL Plus', tier: 'foundation' },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: 'maaya-software',
      company: 'Maaya Software Solutions Pvt. Ltd.',
      role: 'Software Developer',
      duration: '07/2025 – Present',
      experienceNote: '~1.5 Years Full-Stack Experience',
      summary:
        'Developing and maintaining enterprise Offline-First POS desktop software and web/mobile ERP modules.',
      technologies: [
        'React.js',
        'TypeScript',
        'Electron.js',
        'NestJS',
        'MySQL',
        'SQLite',
        'PHP',
        'REST APIs',
      ],
      contributions: [
        'Built and maintained FreshPi POS across Billing, Inventory, Purchase, Transfer, Reports, and Customer modules.',
        'Developed responsive React.js + TypeScript interfaces and NestJS REST APIs with SQLite & MySQL.',
        'Implemented offline database synchronization and optimized SQL queries for POS reporting.',
        'Contributed feature enhancements, bug fixes, and performance improvements to PoultryCare ERP (Web & Mobile).',
      ],
      moduleGroups: [
        {
          product: 'FreshPi POS',
          modules: ['Billing', 'Inventory', 'Purchase', 'Transfer', 'Reports', 'Customer'],
        },
        {
          product: 'PoultryCare ERP',
          modules: ['Web Features', 'Mobile Features', 'Enhancements', 'Performance'],
        },
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'freshpi-pos',
      name: 'FreshPi – Offline-First POS',
      subtitle: 'Enterprise Desktop Retail POS & Sync System',
      badge: 'Production',
      timeline: '07/2025 – Present',
      company: 'Maaya Software Solutions Pvt. Ltd.',
      shortOverview:
        'Enterprise desktop POS for retail businesses featuring local SQLite persistence, NestJS REST APIs, and MySQL offline synchronization.',
      overview:
        'Enterprise desktop Point of Sale (POS) application built for retail businesses to execute billing, inventory, purchasing, stock transfers, customer management, and reporting reliably offline.',
      businessProblem:
        'Retail billing and stock operations cannot stall during internet outages, yet central databases still require consistent synchronized records.',
      solutionDeveloped:
        'Offline-First Electron.js desktop POS pairing a React.js + TypeScript UI with local SQLite storage, synced via NestJS REST APIs to MySQL.',
      systemScope:
        'Enterprise desktop POS product at Maaya Software Solutions Pvt. Ltd. supporting retail store operations.',
      individualContributions: [
        'Developed Billing, Inventory, Purchase, Transfer, Reports, and Customer modules.',
        'Built responsive interfaces using React.js and TypeScript.',
        'Designed NestJS REST APIs connected to SQLite and MySQL.',
        'Implemented offline database synchronization and optimized SQL queries.',
      ],
      modules: ['Billing', 'Inventory', 'Purchase', 'Transfer', 'Reports', 'Customer'],
      techStack: {
        frontend: ['React.js', 'TypeScript', 'Electron.js'],
        backend: ['NestJS', 'Node.js', 'REST APIs'],
        database: ['SQLite (Local)', 'MySQL (Central)'],
      },
      allTags: ['React.js', 'TypeScript', 'Electron.js', 'NestJS', 'MySQL', 'SQLite'],
      technicalHighlights: [
        'Offline-first SQLite persistence inside Electron.js.',
        'Database synchronization bridged through NestJS REST APIs to MySQL.',
        'SQL query tuning for inventory and reporting endpoints.',
      ],
      architectureNodes: [
        { layer: 'UI', title: 'Electron + React + TS', tech: 'POS Modules' },
        { layer: 'Local DB', title: 'SQLite', tech: 'Offline Store' },
        { layer: 'API', title: 'NestJS REST', tech: 'Sync Bridge' },
        { layer: 'Central DB', title: 'MySQL', tech: 'Optimized SQL' },
      ],
      repositoryNote: 'Private enterprise product — source repository is proprietary.',
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 'poultrycare-erp',
      name: 'PoultryCare ERP',
      subtitle: 'Web & Mobile Poultry Farm Management Platform',
      badge: 'Production',
      timeline: '07/2025 – Present',
      company: 'Maaya Software Solutions Pvt. Ltd.',
      shortOverview:
        'Enterprise Resource Planning system for poultry farm management spanning web and mobile application enhancements and stability.',
      overview:
        'Enterprise Resource Planning (ERP) platform supporting poultry farm management across web and mobile workflows.',
      businessProblem:
        'Active farm operations across web and mobile surfaces require continuous module enhancements, defect fixes, and consistent runtime performance.',
      solutionDeveloped:
        'Full-stack PHP web and mobile ERP enhancements focused on expanding module functionality, bug resolution, and performance tuning.',
      systemScope:
        'Production web and mobile ERP ecosystem at Maaya Software Solutions Pvt. Ltd. for poultry farm management.',
      individualContributions: [
        'Contributed to ongoing PoultryCare ERP development and enhancements.',
        'Worked on web and mobile application features for poultry farm management.',
        'Implemented module enhancements to extend functionality.',
        'Fixed bugs and supported application maintenance and performance improvements.',
      ],
      modules: ['Web App Features', 'Mobile App Features', 'Module Enhancements', 'Maintenance & Perf'],
      techStack: {
        frontend: ['Web Development', 'Mobile App Features'],
        backend: ['PHP'],
        database: ['Relational DB Maintenance'],
      },
      allTags: ['PHP', 'Web Development', 'Mobile App Development'],
      technicalHighlights: [
        'Cross-surface web and mobile ERP feature delivery.',
        'Production defect diagnosis and resolution.',
        'Application maintenance and performance improvements.',
      ],
      architectureNodes: [
        { layer: 'Clients', title: 'Web & Mobile', tech: 'Farm Workflows' },
        { layer: 'Core', title: 'PHP ERP Modules', tech: 'Enhancements' },
        { layer: 'Quality', title: 'Stability & Perf', tech: 'Bug Fixes' },
      ],
      repositoryNote: 'Private enterprise ERP — source repository is proprietary.',
      githubUrl: null,
      liveUrl: null,
    },
  ] as ProjectItem[],

  problemSolvingCases: [
    {
      id: 'offline-sync',
      title: 'Offline-First Persistence & DB Sync',
      projectRef: 'FreshPi POS',
      tags: ['Electron.js', 'SQLite', 'NestJS', 'MySQL'],
      problem: 'Retail billing and stock workflows must keep running during network drops without losing central consistency.',
      whyItOccurred: 'Direct remote DB coupling blocks checkout and inventory updates whenever connectivity fluctuates.',
      analysis: 'Decoupled local transactional reads/writes from remote server synchronization across POS modules.',
      solution: 'Paired embedded SQLite inside Electron.js with NestJS REST APIs to synchronize records to central MySQL.',
      result: 'Uninterrupted offline Billing, Inventory, Purchase, and Transfer operations with reliable MySQL sync.',
    },
    {
      id: 'sql-optimization',
      title: 'SQL Query Optimization & API Integration',
      projectRef: 'FreshPi POS',
      tags: ['MySQL', 'SQLite', 'NestJS', 'TypeScript'],
      problem: 'Inventory, Purchase, Transfer, and Reports screens require fast relational lookups as transaction volume grows.',
      whyItOccurred: 'Frequent multi-module joins and unaligned API queries create latency on reporting views.',
      analysis: 'Reviewed NestJS service endpoints alongside SQL query execution across SQLite and MySQL.',
      solution: 'Optimized SQL queries and integrated structured NestJS REST APIs tailored per POS module.',
      result: 'Responsive data flow and consistent query performance across POS reporting and operational screens.',
    },
    {
      id: 'erp-stability',
      title: 'ERP Bug Resolution & Performance Tuning',
      projectRef: 'PoultryCare ERP',
      tags: ['PHP', 'Web', 'Mobile'],
      problem: 'Evolving web and mobile farm management workflows needed new features without regressing existing modules.',
      whyItOccurred: 'Ongoing ERP module growth across dual web/mobile surfaces exposes edge-case bugs and bottlenecks.',
      analysis: 'Traced functional defects across existing PHP web and mobile workflows before modifying modules.',
      solution: 'Resolved bugs, shipped targeted module enhancements, and delivered maintenance and performance fixes.',
      result: 'Improved application stability, functionality, and day-to-day responsiveness for ERP users.',
    },
  ] as ProblemSolvingCase[],

  education: [
    {
      degree: 'B.E – Electronics & Communication Engineering',
      institution: 'Kongunadu College of Engineering',
      duration: '2020 – 2024',
      gradeLabel: 'CGPA',
      gradeValue: '7.59',
    },
  ] as EducationItem[],

  certifications: [
    {
      title: 'Java Full Stack Development Course',
      focus: 'Core Java, Advanced Java & JDBC',
      category: 'Full-Stack',
    },
    {
      title: 'MySQL for Developers',
      focus: 'Relational Modeling & SQL',
      category: 'Database',
    },
    {
      title: 'Web Development Bootcamp',
      focus: 'HTML, CSS & JavaScript',
      category: 'Frontend',
    },
  ] as CertificationItem[],
} as const;
