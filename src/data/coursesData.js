// Enhanced course catalog with additional features
export const coursesData = [
  {
    id: 1,
    title: 'Complete React Development Bootcamp',
    subtitle: 'Master modern React with hooks, context, and advanced patterns',
    description: 'Build production-ready React applications from scratch. This comprehensive bootcamp covers everything from React fundamentals to advanced concepts like hooks, context API, state management, routing, testing, and deployment.',
    detailedDescription: `This comprehensive React bootcamp is designed to take you from a complete beginner to an advanced React developer. You'll start with the fundamentals of React and gradually progress to advanced concepts and real-world application development.

**What makes this course special:**
- **Project-Based Learning**: Build 8+ real-world projects including an e-commerce platform, social media dashboard, and task management application
- **Modern React Patterns**: Learn the latest React patterns and best practices used in top tech companies
- **Industry-Standard Tools**: Work with the same tools and workflows used by professional development teams
- **Career Support**: Get guidance on building your portfolio, writing technical resumes, and preparing for React developer interviews

**Course Highlights:**
- Master React 18 features including Concurrent Mode and Suspense
- Build responsive, accessible, and performant applications
- Implement complex state management with Redux Toolkit and Zustand
- Learn testing strategies with Jest and React Testing Library
- Deploy applications to production using modern CI/CD pipelines
- Understand React internals and optimization techniques

**Prerequisites:**
- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with ES6+ features (arrow functions, destructuring, modules)
- Understanding of asynchronous JavaScript (Promises, async/await)

**Career Outcomes:**
Upon completion, you'll be ready for junior to mid-level React developer positions. Our graduates have been hired at companies like Google, Facebook, Netflix, and hundreds of startups worldwide.`,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoPreview: 'https://example.com/react-preview.mp4',
    category: 'technology',
    level: 'intermediate',
    duration: '12 weeks',
    durationWeeks: 12,
    lessons: 45,
    totalHours: 40,
    students: 2847,
    rating: 4.8,
    reviews: 342,
    price: 149,
    originalPrice: 199,
    lastUpdated: '2024-12-01',
    language: 'English',
    subtitles: ['English', 'Spanish', 'French'],
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'SJ',
      rating: 4.9,
      students: 15000,
      courses: 5,
      bio: 'Senior React Developer with 8+ years of experience at Google and Facebook. Expert in modern frontend architecture and React ecosystem.',
      credentials: ['Senior Software Engineer at Google', 'React Core Contributor', 'Conference Speaker'],
      socialLinks: {
        twitter: 'https://twitter.com/sarahjohnson',
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        github: 'https://github.com/sarahjohnson'
      }
    },
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development', 'Hooks', 'Redux'],
    features: [
      'Lifetime Access',
      'Certificate of Completion',
      'Live Support & Q&A',
      '30+ Real-world Projects',
      'Source Code Access',
      'Community Access',
      'Career Guidance',
      'Interview Preparation'
    ],
    requirements: [
      'Basic HTML, CSS, and JavaScript knowledge',
      'Computer with internet connection',
      'Code editor (VS Code recommended)',
      'Node.js installed'
    ],
    curriculum: [
      {
        title: 'React Fundamentals',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          { name: 'Introduction to React', duration: '15 min', type: 'video', free: true },
          { name: 'JSX Syntax and Components', duration: '25 min', type: 'video', free: true },
          { name: 'Props and State', duration: '30 min', type: 'video', free: false },
          { name: 'Event Handling', duration: '20 min', type: 'video', free: false },
          { name: 'First React Project', duration: '45 min', type: 'exercise', free: false }
        ]
      },
      {
        title: 'Advanced React Concepts',
        lessons: 12,
        duration: '3 weeks',
        topics: [
          { name: 'React Hooks Deep Dive', duration: '35 min', type: 'video', free: false },
          { name: 'Context API', duration: '25 min', type: 'video', free: false },
          { name: 'Error Boundaries', duration: '20 min', type: 'video', free: false },
          { name: 'Refs and Portals', duration: '30 min', type: 'video', free: false },
          { name: 'Advanced Patterns Exercise', duration: '60 min', type: 'exercise', free: false }
        ]
      },
      {
        title: 'State Management',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          { name: 'Redux Toolkit Setup', duration: '25 min', type: 'video', free: false },
          { name: 'Zustand State Management', duration: '20 min', type: 'video', free: false },
          { name: 'React Query', duration: '30 min', type: 'video', free: false },
          { name: 'State Management Project', duration: '90 min', type: 'project', free: false }
        ]
      },
      {
        title: 'React Router & Navigation',
        lessons: 6,
        duration: '1.5 weeks',
        topics: [
          { name: 'Router Setup', duration: '20 min', type: 'video', free: false },
          { name: 'Dynamic Routes', duration: '25 min', type: 'video', free: false },
          { name: 'Protected Routes', duration: '30 min', type: 'video', free: false },
          { name: 'Navigation Project', duration: '60 min', type: 'project', free: false }
        ]
      },
      {
        title: 'Testing & Quality Assurance',
        lessons: 7,
        duration: '2 weeks',
        topics: [
          { name: 'Jest Testing Framework', duration: '30 min', type: 'video', free: false },
          { name: 'React Testing Library', duration: '35 min', type: 'video', free: false },
          { name: 'E2E Testing with Cypress', duration: '40 min', type: 'video', free: false },
          { name: 'Testing Best Practices', duration: '25 min', type: 'video', free: false }
        ]
      },
      {
        title: 'Performance & Optimization',
        lessons: 4,
        duration: '1.5 weeks',
        topics: [
          { name: 'React.memo and useMemo', duration: '25 min', type: 'video', free: false },
          { name: 'Code Splitting', duration: '30 min', type: 'video', free: false },
          { name: 'Lazy Loading', duration: '20 min', type: 'video', free: false },
          { name: 'Performance Optimization Project', duration: '75 min', type: 'project', free: false }
        ]
      }
    ],
    projects: [
      {
        title: 'Todo Application with Local Storage',
        description: 'Build a fully functional todo app with CRUD operations',
        difficulty: 'Beginner',
        estimatedTime: '4 hours'
      },
      {
        title: 'Weather Dashboard with API Integration',
        description: 'Create a weather app using external APIs and state management',
        difficulty: 'Intermediate',
        estimatedTime: '6 hours'
      },
      {
        title: 'E-commerce Platform with Shopping Cart',
        description: 'Develop a complete e-commerce solution with payment integration',
        difficulty: 'Advanced',
        estimatedTime: '15 hours'
      },
      {
        title: 'Social Media Dashboard',
        description: 'Build a social media management dashboard with real-time features',
        difficulty: 'Advanced',
        estimatedTime: '12 hours'
      },
      {
        title: 'Real-time Chat Application',
        description: 'Create a chat app with WebSocket integration',
        difficulty: 'Advanced',
        estimatedTime: '10 hours'
      },
      {
        title: 'Portfolio Website Generator',
        description: 'Build a tool that generates portfolio websites dynamically',
        difficulty: 'Intermediate',
        estimatedTime: '8 hours'
      }
    ],
    learningOutcomes: [
      'Build modern React applications from scratch',
      'Implement complex state management solutions',
      'Create responsive and accessible user interfaces',
      'Test React applications effectively',
      'Deploy applications to production',
      'Optimize React apps for performance',
      'Work with modern development tools and workflows'
    ],
    featured: true,
    bestseller: true,
    new: false,
    trending: true,
    difficulty: 3, // 1-5 scale
    completion_rate: 85,
    job_guarantee: true,
    money_back_guarantee: 30, // days
    forum_access: true,
    mobile_access: true,
    downloadable: true,
    certificate: true
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    subtitle: 'Create stunning user interfaces and exceptional user experiences',
    description: 'Master the principles of user interface and user experience design. Learn design thinking, user research, wireframing, prototyping, and design systems using industry-standard tools like Figma, Sketch, and Adobe XD.',
    detailedDescription: `Transform your creative ideas into beautiful, functional designs that users love. This comprehensive UI/UX design course covers everything from design theory to practical application, preparing you for a successful career in digital design.

**What You'll Master:**
- **Design Thinking Process**: Learn the human-centered design approach used by top design teams
- **User Research Methods**: Conduct user interviews, surveys, and usability testing to inform design decisions
- **Wireframing & Prototyping**: Create low-fidelity wireframes to high-fidelity interactive prototypes
- **Visual Design Principles**: Master typography, color theory, layout, and visual hierarchy
- **Design Systems**: Build scalable design systems that maintain consistency across products

**Industry Tools Covered:**
- **Figma**: Professional interface design and prototyping
- **Sketch**: Vector-based design for digital interfaces
- **Adobe XD**: End-to-end UX design workflow
- **Principle**: Advanced animation and interaction design
- **InVision**: Collaboration and handoff tools

**Real-World Projects:**
- Design a complete mobile app from concept to prototype
- Create a responsive web application design system
- Redesign an existing website with improved UX
- Build an interactive prototype for user testing

**Career Preparation:**
- Portfolio development and presentation techniques
- Client communication and design presentation skills
- Understanding of development constraints and possibilities
- Freelancing and agency workflow knowledge`,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoPreview: 'https://example.com/ux-preview.mp4',
    category: 'design',
    level: 'beginner',
    duration: '8 weeks',
    durationWeeks: 8,
    lessons: 32,
    totalHours: 28,
    students: 1924,
    rating: 4.9,
    reviews: 287,
    price: 99,
    originalPrice: 149,
    lastUpdated: '2024-11-15',
    language: 'English',
    subtitles: ['English', 'Spanish'],
    instructor: {
      name: 'Emma Rodriguez',
      avatar: 'ER',
      rating: 4.8,
      students: 8500,
      courses: 3,
      bio: 'Lead Product Designer at Airbnb with 10+ years of experience. Expert in design systems and user-centered design.',
      credentials: ['Lead Designer at Airbnb', 'Design Systems Expert', 'UX Research Specialist'],
      socialLinks: {
        dribbble: 'https://dribbble.com/emmarodriguez',
        behance: 'https://behance.net/emmarodriguez',
        linkedin: 'https://linkedin.com/in/emmarodriguez'
      }
    },
    tags: ['UI Design', 'UX Design', 'Figma', 'Prototyping', 'Design Systems', 'User Research'],
    features: [
      'Design Portfolio Development',
      'Figma Pro License Included',
      'Personal Mentorship',
      'Job Guarantee Program',
      'Industry Case Studies',
      'Design Community Access',
      'Live Design Reviews',
      'Client Project Simulation'
    ],
    requirements: [
      'No prior design experience needed',
      'Computer with internet connection',
      'Figma account (free)',
      'Creative mindset and willingness to learn'
    ],
    curriculum: [
      {
        title: 'Design Fundamentals',
        lessons: 6,
        duration: '1.5 weeks',
        topics: [
          { name: 'Introduction to UI/UX Design', duration: '20 min', type: 'video', free: true },
          { name: 'Design Principles', duration: '25 min', type: 'video', free: true },
          { name: 'Color Theory', duration: '30 min', type: 'video', free: false },
          { name: 'Typography Basics', duration: '25 min', type: 'video', free: false },
          { name: 'Layout & Composition', duration: '35 min', type: 'video', free: false },
          { name: 'Design Principles Exercise', duration: '60 min', type: 'exercise', free: false }
        ]
      },
      {
        title: 'User Research & Analysis',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          { name: 'User Personas', duration: '30 min', type: 'video', free: false },
          { name: 'User Journey Mapping', duration: '35 min', type: 'video', free: false },
          { name: 'Competitive Analysis', duration: '25 min', type: 'video', free: false },
          { name: 'Usability Testing', duration: '40 min', type: 'video', free: false },
          { name: 'Research Methods Exercise', duration: '90 min', type: 'exercise', free: false }
        ]
      },
      {
        title: 'Wireframing & Information Architecture',
        lessons: 6,
        duration: '1.5 weeks',
        topics: [
          { name: 'Site Maps', duration: '20 min', type: 'video', free: false },
          { name: 'User Flows', duration: '30 min', type: 'video', free: false },
          { name: 'Low-fidelity Wireframes', duration: '35 min', type: 'video', free: false },
          { name: 'Content Strategy', duration: '25 min', type: 'video', free: false },
          { name: 'Wireframing Project', duration: '120 min', type: 'project', free: false }
        ]
      },
      {
        title: 'Visual Design & Prototyping',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          { name: 'High-fidelity Mockups', duration: '40 min', type: 'video', free: false },
          { name: 'Interactive Prototypes', duration: '45 min', type: 'video', free: false },
          { name: 'Micro-interactions', duration: '30 min', type: 'video', free: false },
          { name: 'Animation in Design', duration: '35 min', type: 'video', free: false },
          { name: 'Prototype Project', duration: '150 min', type: 'project', free: false }
        ]
      },
      {
        title: 'Design Systems & Handoff',
        lessons: 4,
        duration: '1 week',
        topics: [
          { name: 'Component Libraries', duration: '30 min', type: 'video', free: false },
          { name: 'Design Tokens', duration: '25 min', type: 'video', free: false },
          { name: 'Developer Handoff', duration: '35 min', type: 'video', free: false },
          { name: 'Design System Project', duration: '180 min', type: 'project', free: false }
        ]
      }
    ],
    projects: [
      {
        title: 'Mobile Banking App Design',
        description: 'Design a complete mobile banking application with user research',
        difficulty: 'Intermediate',
        estimatedTime: '8 hours'
      },
      {
        title: 'E-commerce Website Redesign',
        description: 'Redesign an existing e-commerce site with improved UX',
        difficulty: 'Intermediate',
        estimatedTime: '10 hours'
      },
      {
        title: 'SaaS Dashboard Interface',
        description: 'Create a comprehensive dashboard for a SaaS application',
        difficulty: 'Advanced',
        estimatedTime: '12 hours'
      },
      {
        title: 'Travel Booking Platform',
        description: 'Design a travel booking platform with complex user flows',
        difficulty: 'Advanced',
        estimatedTime: '15 hours'
      },
      {
        title: 'Design System Creation',
        description: 'Build a complete design system with components and guidelines',
        difficulty: 'Advanced',
        estimatedTime: '20 hours'
      }
    ],
    learningOutcomes: [
      'Master fundamental design principles and theory',
      'Conduct effective user research and testing',
      'Create professional wireframes and prototypes',
      'Design scalable design systems',
      'Use industry-standard design tools effectively',
      'Present and communicate design decisions',
      'Understand the complete design process'
    ],
    featured: true,
    bestseller: false,
    new: true,
    trending: false,
    difficulty: 2,
    completion_rate: 92,
    job_guarantee: true,
    money_back_guarantee: 30,
    forum_access: true,
    mobile_access: true,
    downloadable: false,
    certificate: true
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    subtitle: 'Complete digital marketing strategy from beginner to expert',
    description: 'Master SEO, social media marketing, content strategy, email marketing, PPC advertising, and analytics to grow any business online. Learn proven strategies used by top marketers and agencies.',
    detailedDescription: `Become a digital marketing expert with this comprehensive course that covers all aspects of modern online marketing. From SEO to social media, from content marketing to paid advertising, you'll learn the strategies and tactics that drive real business results.

**Complete Marketing Toolkit:**
- **Search Engine Optimization (SEO)**: Master on-page, off-page, and technical SEO
- **Content Marketing**: Create compelling content that converts visitors into customers
- **Social Media Marketing**: Build engaged communities across all major platforms
- **Email Marketing**: Design automated campaigns that nurture leads and drive sales
- **Pay-Per-Click (PPC)**: Manage profitable Google Ads and Facebook Ads campaigns
- **Analytics & Optimization**: Use data to improve campaign performance and ROI

**Platform Expertise:**
- Google Ads & Google Analytics
- Facebook & Instagram Advertising
- LinkedIn Marketing for B2B
- YouTube Marketing & Video SEO
- Email platforms (Mailchimp, ConvertKit)
- Marketing automation tools (HubSpot, Autopilot)

**Real Business Applications:**
- Launch a complete digital marketing campaign for a startup
- Optimize an existing business's marketing funnel
- Create and execute a content marketing strategy
- Build and grow social media presence from scratch
- Set up analytics and reporting dashboards

**Industry Certifications Prep:**
- Google Ads Certification
- Google Analytics Certification
- Facebook Blueprint Certification
- HubSpot Content Marketing Certification`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    videoPreview: 'https://example.com/marketing-preview.mp4',
    category: 'business',
    level: 'intermediate',
    duration: '10 weeks',
    durationWeeks: 10,
    lessons: 38,
    totalHours: 35,
    students: 3156,
    rating: 4.7,
    reviews: 421,
    price: 129,
    originalPrice: 179,
    lastUpdated: '2024-12-10',
    language: 'English',
    subtitles: ['English', 'Spanish', 'Portuguese'],
    instructor: {
      name: 'David Park',
      avatar: 'DP',
      rating: 4.7,
      students: 12000,
      courses: 4,
      bio: 'Digital Marketing Director with 12+ years experience. Former Head of Growth at several unicorn startups.',
      credentials: ['Director of Marketing at Slack', 'Growth Hacker', 'Google Ads Expert'],
      socialLinks: {
        twitter: 'https://twitter.com/davidpark',
        linkedin: 'https://linkedin.com/in/davidpark',
        medium: 'https://medium.com/@davidpark'
      }
    },
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Google Ads', 'Analytics', 'Content Marketing'],
    features: [
      'Marketing Tools Access',
      'Real Campaign Case Studies',
      'Template Library',
      'Community Access',
      'Live Campaign Reviews',
      'Industry Connections',
      'Certification Prep',
      'Agency Workflow Training'
    ],
    requirements: [
      'Basic computer and internet skills',
      'Gmail account for Google tools',
      'Facebook account for advertising',
      'Willingness to experiment with campaigns'
    ],
    curriculum: [
      {
        title: 'Digital Marketing Foundations',
        lessons: 6,
        duration: '1.5 weeks',
        topics: [
          { name: 'Marketing Fundamentals', duration: '25 min', type: 'video', free: true },
          { name: 'Customer Journey', duration: '30 min', type: 'video', free: false },
          { name: 'Marketing Funnels', duration: '35 min', type: 'video', free: false },
          { name: 'KPIs & Metrics', duration: '25 min', type: 'video', free: false }
        ]
      },
      {
        title: 'Search Engine Optimization',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          { name: 'Keyword Research', duration: '40 min', type: 'video', free: false },
          { name: 'On-page SEO', duration: '35 min', type: 'video', free: false },
          { name: 'Link Building', duration: '30 min', type: 'video', free: false },
          { name: 'Technical SEO', duration: '45 min', type: 'video', free: false }
        ]
      },
      {
        title: 'Content & Social Media Marketing',
        lessons: 10,
        duration: '2.5 weeks',
        topics: [
          { name: 'Content Strategy', duration: '35 min', type: 'video', free: false },
          { name: 'Social Media Platforms', duration: '40 min', type: 'video', free: false },
          { name: 'Community Building', duration: '30 min', type: 'video', free: false },
          { name: 'Influencer Marketing', duration: '25 min', type: 'video', free: false }
        ]
      },
      {
        title: 'Paid Advertising',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          { name: 'Google Ads Setup', duration: '45 min', type: 'video', free: false },
          { name: 'Facebook Ads', duration: '50 min', type: 'video', free: false },
          { name: 'Campaign Optimization', duration: '40 min', type: 'video', free: false },
          { name: 'Budget Management', duration: '30 min', type: 'video', free: false }
        ]
      },
      {
        title: 'Email Marketing & Automation',
        lessons: 6,
        duration: '2 weeks',
        topics: [
          { name: 'Email Campaigns', duration: '35 min', type: 'video', free: false },
          { name: 'Marketing Automation', duration: '40 min', type: 'video', free: false },
          { name: 'Lead Nurturing', duration: '30 min', type: 'video', free: false },
          { name: 'Segmentation', duration: '25 min', type: 'video', free: false }
        ]
      }
    ],
    projects: [
      {
        title: 'SEO Audit and Strategy',
        description: 'Conduct a complete SEO audit and create an optimization strategy',
        difficulty: 'Intermediate',
        estimatedTime: '6 hours'
      },
      {
        title: 'Social Media Campaign',
        description: 'Plan and execute a complete social media marketing campaign',
        difficulty: 'Intermediate',
        estimatedTime: '8 hours'
      },
      {
        title: 'Google Ads Campaign Setup',
        description: 'Create and optimize Google Ads campaigns for maximum ROI',
        difficulty: 'Advanced',
        estimatedTime: '10 hours'
      },
      {
        title: 'Email Marketing Funnel',
        description: 'Build an automated email marketing funnel',
        difficulty: 'Intermediate',
        estimatedTime: '5 hours'
      },
      {
        title: 'Complete Digital Marketing Plan',
        description: 'Create a comprehensive digital marketing strategy',
        difficulty: 'Advanced',
        estimatedTime: '15 hours'
      }
    ],
    learningOutcomes: [
      'Develop comprehensive digital marketing strategies',
      'Master SEO and content marketing techniques',
      'Create and manage paid advertising campaigns',
      'Build effective email marketing funnels',
      'Analyze and optimize marketing performance',
      'Use marketing automation tools effectively',
      'Understand customer acquisition and retention'
    ],
    featured: false,
    bestseller: true,
    new: false,
    trending: true,
    difficulty: 3,
    completion_rate: 78,
    job_guarantee: false,
    money_back_guarantee: 14,
    forum_access: true,
    mobile_access: true,
    downloadable: true,
    certificate: true
  }
];

// Enhanced helper functions
export const getCourseById = (id) => {
  return coursesData.find(course => course.id === parseInt(id));
};

export const getCoursesByCategory = (category) => {
  if (category === 'all') return coursesData;
  return coursesData.filter(course => course.category === category);
};

export const getFeaturedCourses = () => {
  return coursesData.filter(course => course.featured);
};

export const getBestsellerCourses = () => {
  return coursesData.filter(course => course.bestseller);
};

export const getNewCourses = () => {
  return coursesData.filter(course => course.new);
};

export const getTrendingCourses = () => {
  return coursesData.filter(course => course.trending);
};

export const getCoursesByLevel = (level) => {
  if (level === 'all') return coursesData;
  return coursesData.filter(course => course.level === level);
};

export const getCoursesByPriceRange = (min, max) => {
  return coursesData.filter(course => course.price >= min && course.price <= max);
};

export const searchCourses = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return coursesData.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    course.instructor.name.toLowerCase().includes(lowercaseQuery) ||
    course.subtitle.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterCourses = (filters) => {
  const { category, level, duration, priceRange, rating, features } = filters;
  
  return coursesData.filter(course => {
    const matchesCategory = !category || category === 'all' || course.category === category;
    const matchesLevel = !level || level === 'all' || course.level === level;
    const matchesDuration = !duration || duration === 'all' || 
      (duration === 'short' && course.durationWeeks < 6) ||
      (duration === 'medium' && course.durationWeeks >= 6 && course.durationWeeks <= 12) ||
      (duration === 'long' && course.durationWeeks > 12);
    const matchesPrice = !priceRange || 
      (priceRange === 'free' && course.price === 0) ||
      (priceRange === 'under100' && course.price < 100) ||
      (priceRange === '100to200' && course.price >= 100 && course.price <= 200) ||
      (priceRange === 'over200' && course.price > 200);
    const matchesRating = !rating || course.rating >= rating;
    const matchesFeatures = !features || features.every(feature => 
      (feature === 'certificate' && course.certificate) ||
      (feature === 'lifetime' && course.features.some(f => f.includes('Lifetime'))) ||
      (feature === 'mobile' && course.mobile_access) ||
      (feature === 'downloadable' && course.downloadable)
    );
    
    return matchesCategory && matchesLevel && matchesDuration && matchesPrice && matchesRating && matchesFeatures;
  });
};

export const getRelatedCourses = (courseId, limit = 3) => {
  const course = getCourseById(courseId);
  if (!course) return [];
  
  return coursesData
    .filter(c => c.id !== courseId && c.category === course.category)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getCourseStatistics = () => {
  return {
    totalCourses: coursesData.length,
    totalStudents: coursesData.reduce((sum, course) => sum + course.students, 0),
    averageRating: coursesData.reduce((sum, course) => sum + course.rating, 0) / coursesData.length,
    categories: [...new Set(coursesData.map(course => course.category))].length,
    featuredCount: coursesData.filter(course => course.featured).length,
    newCount: coursesData.filter(course => course.new).length
  };
};

export default coursesData;