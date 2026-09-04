import type { Course, Database } from "./types";

function lesson(id: string, title: string, duration: string, isFreePreview = false) {
  return { id, title, duration, isFreePreview, videoFileName: null };
}

function course(partial: Course): Course {
  return partial;
}

export function buildSeedCourses(): Course[] {
  return [
    course({
      id: "c-ai-ml",
      slug: "ai-ml",
      title: "AI / ML",
      subtitle: "Master AI/ML with Python, TensorFlow, and real-world projects",
      description:
        "A job-oriented Artificial Intelligence and Machine Learning program covering Python, statistics, supervised/unsupervised learning, deep learning, and deployment. Learn through live interactive sessions, case studies, and portfolio projects with 100% job assistance.",
      category: "Courses",
      duration: "5 months",
      rating: 4.9,
      students: "2.5K+",
      price: 12500,
      originalPrice: 45000,
      badge: "Most Popular",
      thumbnail: "/thumbs/ai-ml.webp",
      banner: "/banners/ai-ml.webp",
      highlights: ["Live Interactive Sessions", "Industry Certification", "100% Job Assistance", "Real Projects"],
      learnings: [
        "Python for data science and ML pipelines",
        "Supervised and unsupervised learning algorithms",
        "Deep learning with TensorFlow and Keras",
        "NLP, computer vision, and model evaluation",
        "MLOps basics and cloud deployment",
        "Capstone projects for your portfolio",
      ],
      tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "AWS"],
      mentor: { name: "Chevuri Raghunath", title: "AI & ML Trainer", experience: "15+ years" },
      validUntil: "19 Aug, 2027",
      modules: [
        {
          id: "m1",
          title: "Module 1: Python & Math for ML",
          duration: "4 weeks",
          lessons: [
            lesson("ai-1", "Course orientation & AI landscape", "18 min", true),
            lesson("ai-2", "Python essentials for ML", "42 min"),
            lesson("ai-3", "NumPy, Pandas and data wrangling", "38 min"),
            lesson("ai-4", "Linear algebra & statistics crash course", "45 min"),
          ],
        },
        {
          id: "m2",
          title: "Module 2: Machine Learning",
          duration: "5 weeks",
          lessons: [
            lesson("ai-5", "Regression and classification", "40 min"),
            lesson("ai-6", "Decision trees, ensembles and boosting", "44 min"),
            lesson("ai-7", "Model evaluation and feature engineering", "36 min"),
          ],
        },
        {
          id: "m3",
          title: "Module 3: Deep Learning & Deployment",
          duration: "6 weeks",
          lessons: [
            lesson("ai-8", "Neural networks with TensorFlow", "48 min"),
            lesson("ai-9", "CNN, RNN and transformers overview", "50 min"),
            lesson("ai-10", "Capstone: deploy an ML API", "35 min"),
          ],
        },
      ],
    }),
    course({
      id: "c-devsecops",
      slug: "multi-cloud-devsecops-ai",
      title: "Multi Cloud DevSecOps with AI",
      subtitle: "Master DevSecOps across multiple cloud platforms with AI integration",
      description:
        "Build secure, scalable cloud infrastructure across AWS, Azure and GCP. Learn CI/CD, Terraform, Kubernetes, security scanning, and AI-assisted operations from industry mentors including Praveen Sir — with live workshops at our Hi-Tech City corporate office.",
      category: "Courses",
      duration: "4 months",
      rating: 4.8,
      students: "1.8K+",
      price: 15000,
      originalPrice: 50000,
      badge: "New Course",
      thumbnail: "/thumbs/devsecops.webp",
      banner: "/banners/devsecops.webp",
      highlights: ["Multi-cloud labs", "Terraform & Kubernetes", "100% Job Assistance", "Corporate workshops"],
      learnings: [
        "Linux, Git and cloud fundamentals",
        "AWS, Azure and GCP core services",
        "CI/CD with Jenkins, GitHub Actions and GitLab",
        "Infrastructure as Code with Terraform",
        "Docker, Kubernetes and Helm",
        "DevSecOps scanning, monitoring and AI ops",
      ],
      tools: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
      mentor: { name: "Praveen Sir", title: "Multi Cloud DevOps Mentor", experience: "17+ years" },
      validUntil: "19 Aug, 2027",
      modules: [
        {
          id: "d1",
          title: "Module 1: Cloud & Linux Foundations",
          duration: "3 weeks",
          lessons: [
            lesson("do-1", "DevOps career path & tooling map", "16 min", true),
            lesson("do-2", "Linux administration for engineers", "40 min"),
            lesson("do-3", "AWS, Azure and GCP core services", "46 min"),
          ],
        },
        {
          id: "d2",
          title: "Module 2: CI/CD & Containers",
          duration: "5 weeks",
          lessons: [
            lesson("do-4", "Pipelines with Jenkins and GitHub Actions", "42 min"),
            lesson("do-5", "Docker images, registries and Compose", "38 min"),
            lesson("do-6", "Kubernetes workloads and services", "50 min"),
          ],
        },
        {
          id: "d3",
          title: "Module 3: Terraform, Security & AI Ops",
          duration: "5 weeks",
          lessons: [
            lesson("do-7", "Terraform modules and remote state", "44 min"),
            lesson("do-8", "DevSecOps scanning and secrets", "36 min"),
            lesson("do-9", "AI-assisted monitoring capstone", "32 min"),
          ],
        },
      ],
    }),
    course({
      id: "c-java",
      slug: "java-fullstack-ai-dsa",
      title: "Java Full Stack with AI + DSA",
      subtitle: "Complete Java development with AI and Data Structures & Algorithms",
      description:
        "Master complete full-stack development with Java, React, AI/ML integration, and Data Structures & Algorithms. Build enterprise-grade applications with live classes from Jaya Krishna Sir and dedicated placement support.",
      category: "Courses",
      duration: "5 months",
      rating: 4.7,
      students: "3.2K+",
      price: 16000,
      originalPrice: 48000,
      thumbnail: "/thumbs/java.webp",
      banner: "/banners/java.webp",
      highlights: ["DSA mastery", "Spring Boot + React", "AI integration", "Internship option"],
      learnings: [
        "Core Java and advanced OOP",
        "Data Structures and Algorithm optimization",
        "Spring Boot and microservices",
        "React.js and modern frontend",
        "SQL/NoSQL database design",
        "AI/ML model integration with Java apps",
      ],
      tools: ["Java", "Spring Boot", "React.js", "MySQL", "MongoDB", "Docker", "AWS", "Git"],
      mentor: { name: "Jaya Krishna", title: "Senior Java Full Stack Trainer", experience: "12+ years" },
      validUntil: "19 Aug, 2027",
      modules: [
        {
          id: "j1",
          title: "Module 1: Java Fundamentals & OOP",
          duration: "4 weeks",
          lessons: [
            lesson("jv-1", "Java syntax, JVM and tooling", "20 min", true),
            lesson("jv-2", "OOP, collections and exceptions", "44 min"),
            lesson("jv-3", "Multithreading and concurrency", "40 min"),
          ],
        },
        {
          id: "j2",
          title: "Module 2: DSA + Spring + React",
          duration: "8 weeks",
          lessons: [
            lesson("jv-4", "Arrays, trees, graphs and DP", "52 min"),
            lesson("jv-5", "Spring Boot REST and JPA", "48 min"),
            lesson("jv-6", "React components, hooks and Redux", "46 min"),
          ],
        },
        {
          id: "j3",
          title: "Module 3: AI Integration & Capstone",
          duration: "4 weeks",
          lessons: [
            lesson("jv-7", "Connecting ML models with Java APIs", "38 min"),
            lesson("jv-8", "E-commerce with AI recommendations", "42 min"),
          ],
        },
      ],
    }),
    course({
      id: "c-web",
      slug: "full-stack-web-development",
      title: "Full Stack Web Development",
      subtitle: "Master React, Node.js, MongoDB, and modern web technologies",
      description:
        "Master modern web development with React, Node.js, MongoDB, and build production-ready applications from scratch. Live interactive sessions, industry certification, and 100% job assistance.",
      category: "Courses",
      duration: "6 months",
      rating: 4.6,
      students: "4.1K+",
      price: 12000,
      originalPrice: 40000,
      thumbnail: "/thumbs/web.webp",
      banner: "/banners/web.webp",
      highlights: ["MERN stack", "Live projects", "Industry Certification", "Career support"],
      learnings: [
        "HTML5, CSS3 and responsive design",
        "JavaScript ES6+ and advanced programming",
        "React.js with hooks and state management",
        "Node.js and Express REST APIs",
        "MongoDB design and aggregation",
        "Auth, testing and cloud deployment",
      ],
      tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Docker"],
      mentor: { name: "Skillora Mentors", title: "Full Stack Faculty", experience: "8+ years" },
      validUntil: "19 Aug, 2027",
      modules: [
        {
          id: "w1",
          title: "Module 1: Frontend Fundamentals",
          duration: "4 weeks",
          lessons: [
            lesson("web-1", "How the web works & course map", "14 min", true),
            lesson("web-2", "HTML5, CSS3 and Tailwind", "40 min"),
            lesson("web-3", "JavaScript ES6+ and the DOM", "42 min"),
          ],
        },
        {
          id: "w2",
          title: "Module 2: React & Node",
          duration: "8 weeks",
          lessons: [
            lesson("web-4", "React components, hooks and routing", "46 min"),
            lesson("web-5", "Express APIs and JWT auth", "44 min"),
            lesson("web-6", "MongoDB, Mongoose and aggregations", "38 min"),
          ],
        },
        {
          id: "w3",
          title: "Module 3: Capstone",
          duration: "3 weeks",
          lessons: [
            lesson("web-7", "E-commerce platform walkthrough", "36 min"),
            lesson("web-8", "Deploy with Docker and CI/CD", "30 min"),
          ],
        },
      ],
    }),
    course({
      id: "c-python",
      slug: "python-full-stack",
      title: "Python Full Stack Development",
      subtitle: "Build scalable applications with Django, Flask, and modern Python",
      description:
        "Master Python, Django, React, and build scalable web applications with the world's most popular programming language. Includes live sessions, projects, and 1 year mentorship support.",
      category: "Courses",
      duration: "7 months",
      rating: 4.5,
      students: "2.9K+",
      price: 12000,
      originalPrice: 40000,
      thumbnail: "/thumbs/python.webp",
      banner: "/banners/python.webp",
      highlights: ["Django + React", "REST APIs", "Internship option", "Portfolio projects"],
      learnings: [
        "Python from basics to advanced OOP",
        "Django MVT and Django REST Framework",
        "Frontend development with React.js",
        "PostgreSQL design and Redis caching",
        "Auth, testing and performance",
        "Docker and AWS deployment",
      ],
      tools: ["Python", "Django", "Flask", "React.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      mentor: { name: "Chevuri Raghunath", title: "Python Full Stack Trainer", experience: "15+ years" },
      validUntil: "19 Aug, 2027",
      modules: [
        {
          id: "p1",
          title: "Module 1: Python Fundamentals",
          duration: "4 weeks",
          lessons: [
            lesson("py-1", "Why Python full stack & setup", "12 min", true),
            lesson("py-2", "Syntax, data types and functions", "38 min"),
            lesson("py-3", "OOP, modules and exceptions", "40 min"),
          ],
        },
        {
          id: "p2",
          title: "Module 2: Django, APIs & React",
          duration: "10 weeks",
          lessons: [
            lesson("py-4", "Django models, views and templates", "46 min"),
            lesson("py-5", "DRF serializers and viewsets", "42 min"),
            lesson("py-6", "React integration with Django APIs", "44 min"),
          ],
        },
        {
          id: "p3",
          title: "Module 3: Capstone",
          duration: "3 weeks",
          lessons: [
            lesson("py-7", "E-commerce with Django", "36 min"),
            lesson("py-8", "Deploy with Gunicorn, Nginx and AWS", "32 min"),
          ],
        },
      ],
    }),
    course({
      id: "c-ds",
      slug: "data-science-machine-learning",
      title: "Data Science & Machine Learning",
      subtitle: "Master Python, R, TensorFlow, and advanced analytics",
      description:
        "Become job-ready in data science with Python, analytics, visualization, machine learning, and business case studies. Designed for graduates and working professionals targeting analyst and ML roles.",
      category: "Courses",
      duration: "4 months",
      rating: 4.8,
      students: "2.1K+",
      price: 14000,
      originalPrice: 45000,
      thumbnail: "/thumbs/data-science.webp",
      banner: "/banners/data-science.webp",
      highlights: ["Analytics + ML", "Business case studies", "Certification", "Placement support"],
      learnings: [
        "Python and SQL for analysis",
        "Statistics and hypothesis testing",
        "Visualization with Matplotlib and Power BI",
        "Classical ML and model selection",
        "Intro to deep learning",
        "End-to-end data science projects",
      ],
      tools: ["Python", "SQL", "Pandas", "TensorFlow", "Power BI", "Scikit-learn", "Jupyter", "Excel"],
      mentor: { name: "Skillora Data Faculty", title: "Data Science Mentor", experience: "10+ years" },
      validUntil: "19 Aug, 2027",
      modules: [
        {
          id: "ds1",
          title: "Module 1: Analytics Foundations",
          duration: "3 weeks",
          lessons: [
            lesson("ds-1", "Data science roles and workflow", "15 min", true),
            lesson("ds-2", "SQL for analysts", "36 min"),
            lesson("ds-3", "Exploratory data analysis", "40 min"),
          ],
        },
        {
          id: "ds2",
          title: "Module 2: ML & Storytelling",
          duration: "6 weeks",
          lessons: [
            lesson("ds-4", "Regression, classification and clustering", "44 min"),
            lesson("ds-5", "Dashboards and stakeholder storytelling", "32 min"),
            lesson("ds-6", "Capstone: predict and present", "38 min"),
          ],
        },
      ],
    }),
  ];
}

export function createSeedDatabase(): Database {
  return {
    users: [
      {
        id: "u-admin",
        name: "Skillora Admin",
        email: "admin@skillora.co.in",
        passwordHash: "$2b$10$ljHaaDvXILkR5Rz0ML/SeeVB1bmG1.DwuN866xl.Yzs43577bEC02",
        role: "admin",
        enrolledCourseIds: [],
        createdAt: "2026-01-01T00:00:00.000Z",
      },
      {
        id: "u-student",
        name: "Demo Student",
        email: "student@skillora.co.in",
        passwordHash: "$2b$10$HZdPAuCK863s5wJqoFfS9uaxxVkTuD0lGWxgSS7klRnm91C/cwQom",
        role: "student",
        enrolledCourseIds: ["c-devsecops"],
        createdAt: "2026-01-01T00:00:00.000Z",
      },
    ],
    courses: buildSeedCourses(),
    ebooks: [
      {
        id: "eb-iot",
        slug: "internet-of-things-applications",
        title: "Internet of Things & Its Applications",
        description:
          "A practical e-book on the Internet of Things covering smart homes, industry, wearables, connected vehicles, automation and more. Written by Gudimella Sai Ram, Mohammad Gandhi Babu, Dr. P. Vamsheedhar Reddy and Y. Raju. Published by Groovi Techno IT Solution Private Limited.",
        cover: "/ebooks/iot.jpg",
        price: 150,
        originalPrice: 540,
        authors: ["Gudimella Sai Ram", "Mohammad Gandhi Babu", "Dr. P. Vamsheedhar Reddy", "Y. Raju"],
        publisher: "Groovi Techno IT Solution Private Limited",
        isbn: "978-93-6368-015-9",
        publishedAt: "24 Jun 2026",
        authorBios: [
          {
            name: "Gudimella Sai Ram",
            role: "Assistant Professor, ECE, Siddhartha Institute of Engineering and Technology (Autonomous), Ibrahimpatnam, Hyderabad",
            bio: "M.Tech in Digital Electronics and Communication Systems and B.Tech in ECE from JNTU Hyderabad. Currently pursuing Ph.D. at KL University. Over 10 years of teaching experience, 14 research papers, 5 patents, 2 design patents and 2 book publications. Member of IAENG. Research interests include IoT, communication systems, signal processing, image processing, embedded systems and VLSI design.",
          },
          {
            name: "Mohammad Gandhi Babu",
            role: "Assistant Professor, ECE, AVN Institute of Engineering and Technology (Autonomous), Ibrahimpatnam, Hyderabad",
            bio: "M.Tech in VLSI & Embedded Systems and B.Tech in ECE from JNTU Hyderabad. Currently pursuing Ph.D. from KL University. More than 10 years of teaching experience, 8 research papers and 1 granted patent. Lifetime member of IETE, ISTE and IAENG. Areas of interest: IoT, VLSI design, communication systems and embedded systems.",
          },
          {
            name: "Dr. P. Vamsheedhar Reddy",
            role: "Associate Professor, CSE (AI & ML), Keshav Memorial Engineering College, Hyderabad",
            bio: "Ph.D. in Cloud Computing from VIT University. Over 14 years of teaching experience, 6 SCIE-indexed journal papers, 14 international conference papers and 4 patents. Research interests: fog computing, cloud computing, deep learning, IoT and cybersecurity. Senior Member of IEEE and IAENG.",
          },
          {
            name: "Y. Raju",
            role: "Assistant Professor, ECE, Sri Indu Institute of Engineering and Technology (Autonomous), Ibrahimpatnam, Hyderabad",
            bio: "M.Tech in VLSI System Design and B.Tech in ECE from JNTU Hyderabad. 10 years of teaching experience, 10 research papers and 3 patents. Member of IAENG and IRED. Areas of interest: IoT, communication systems, signal processing, embedded systems and VLSI design.",
          },
        ],
      },
      {
        id: "eb-1",
        slug: "devops-interview-playbook",
        title: "DevOps Interview Playbook",
        description: "Cloud, CI/CD, Kubernetes and Terraform questions used in Skillora placement drills.",
        cover: "/ebooks/devops.webp",
        price: 499,
        originalPrice: 1499,
      },
      {
        id: "eb-2",
        slug: "java-dsa-cheat-sheets",
        title: "Java + DSA Cheat Sheets",
        description: "Patterns, complexity notes and Spring Boot interview maps for full-stack roles.",
        cover: "/ebooks/java.webp",
        price: 399,
        originalPrice: 1299,
      },
      {
        id: "eb-3",
        slug: "python-full-stack-handbook",
        title: "Python Full Stack Handbook",
        description: "Django, REST APIs, PostgreSQL and deployment notes from live classroom labs.",
        cover: "/ebooks/python.webp",
        price: 399,
        originalPrice: 1299,
      },
    ],
    blogs: [
      {
        slug: "non-it-to-devops",
        title: "From non-IT to DevOps: how Skillora learners land cloud roles",
        excerpt: "A practical path covering Linux, cloud, pipelines and interview readiness.",
        date: "12 Aug 2026",
        category: "Careers",
        cover: "/banners/devsecops.webp",
        content:
          "Skillora designed its Multi Cloud DevSecOps program so career switchers can move from zero to job-ready with live labs, corporate-office workshops in Hi-Tech City, and 100% job assistance. Learners work on AWS, Azure, GCP, Terraform and Kubernetes while mentors like Praveen Sir keep the teaching simple — from basics to production workflows.",
      },
      {
        slug: "why-live-classes-beat-recordings",
        title: "Why Skillora runs live interactive classes (not only recordings)",
        excerpt: "Doubt-solving, case studies and real-time feedback change outcomes.",
        date: "28 Jul 2026",
        category: "Learning",
        cover: "/banners/java.webp",
        content:
          "Unlike pre-recorded-only platforms, Skillora sessions are live and interactive. Trainers solve real business problems in class, students get immediate feedback, and recordings stay available for revision. That blend is why learners report a 4.8/5 experience and a 95% job success rate.",
      },
      {
        slug: "hitech-city-workshops",
        title: "Inside Skillora’s Hi-Tech City corporate workshops",
        excerpt: "Professional meeting rooms, small batches and project-based Saturday labs.",
        date: "05 Jul 2026",
        category: "Workshops",
        cover: "/banners/workshop.webp",
        content:
          "Workshops at Level 6, N Height, Hi-Tech City give Skillora students a corporate environment — not a typical institute classroom. Batches stay small (max 15), every Saturday is project-based, and an online option exists for those who cannot travel.",
      },
    ],
    testimonials: [
      {
        id: "t1",
        name: "Sridhar Enduri",
        course: "Multi Cloud DevOps",
        trainer: "Trained by Praveen Sir",
        photo: "/avatars/sridhar.webp",
        quote:
          "It was a great learning experience with industry standard training and I had a very supportive mentor. Thank you, Praveen sir!",
      },
      {
        id: "t2",
        name: "Shiva Kumar",
        course: "Multi Cloud DevOps",
        trainer: "Trained by Praveen Sir",
        photo: "/avatars/shiva.webp",
        quote:
          "It's a great decision to have come here for Multi Cloud DevOps with Terraform and other tools. Mentor Praveen is well experienced in IT and makes everyone feel comfortable with his simple teaching skills from Zero to Hero. I recommend Skillora to anyone enthusiastic about a DevOps career.",
      },
      {
        id: "t3",
        name: "Eshwari Gummadidala",
        course: "Java Full Stack with AI + DSA",
        trainer: "Trained by Jaya Krishna Sir",
        photo: "/avatars/eshwari.webp",
        quote:
          "I'm very happy to have started my Full Stack Java with AI learning journey under JK sir. The way sir personally checks in with each student to ensure we're understanding the concepts motivates me to learn consistently. I highly recommend Skillora to anyone who wants industry-oriented, practical skills.",
      },
      {
        id: "t4",
        name: "Vara Prasad",
        course: "Java Full Stack with AI + DSA",
        trainer: "Trained by Jaya Krishna Sir",
        photo: "/avatars/vara.webp",
        quote:
          "The Jaya Krishna sir classes are getting more interesting as days pass, and more practical. I am satisfied with the classes and supporting team. All the best to everyone who is joining at Skillora!",
      },
    ],
    contacts: [],
  };
}
