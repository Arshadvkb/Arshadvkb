const projects = [
  {
    title: "Aero AI",
    description:
      "AI-powered aeroponics automation system optimizing plant growth via intelligent monitoring and control.",
    detailedDescription:
      "The AERO AI project automates an aeroponics system by integrating Gemini 2.5 Flash for AI-driven optimization, MQTT for real-time data communication, Raspberry Pi as the central hub hosting a Mosquitto MQTT broker and Node.js server, ESP32 for interfacing with sensors (e.g., DHT22 for temperature/humidity, pH for nutrients) and actuators (e.g., ultrasonic foggers, pumps), and a Flutter-based dashboard for user monitoring and control. Sensor data is published via MQTT, processed by the Node.js server with Gemini API for intelligent decisions (e.g., adjusting misting based on humidity), and commands are sent back to the ESP32, while the Flutter dashboard displays real-time data and allows manual control, creating an efficient, scalable system for automated plant growth.",
    technologies: [
      "Embedded C",
      "Python",
      "Node.js",
      "Flutter",
      "Gemini AI",
      "Raspberry Pi",
    ],
    image: "./picture/aero_ai.jpeg", 
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "All-in-One Fitness App",
    description:
      "Comprehensive fitness companion featuring workout tracking, nutrition planning, and progress analytics.",
    detailedDescription:
      "All-In-One Fitness app project is an innovative and comprehensive platform designed to cater to the diverse needs of fitness enthusiasts, integrating features for admins, users, trainers, and experts. The app enhances user engagement by incorporating advanced functionalities like facial recognition for seamless attendance tracking, enabling accurate and efficient check-ins at gyms or fitness centers. It also includes a robust chat system, allowing users to communicate directly with trainers and experts for personalized health tips and guidance, fostering a supportive fitness community. Additionally, the app features an AI-powered chatbot, leveraging cutting-edge technology to provide instant responses, workout suggestions, and motivational support, enhancing the user experience. Built with a focus on modularity and scalability, the app aims to streamline fitness management, making it a versatile tool for users to achieve their health and fitness goals efficiently.",
    technologies: ["Django","OpenCV", "Tensorflow", "Flutter"],
    image: "./picture/Black and White Modern Fitness Club Logo_20250731_142203_0000.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Library Management System",
    description:
      "Secure system with JWT authentication, enabling CRUD operations for books and members.",
    detailedDescription:
      "A comprehensive Library Management System built with robust security using JWT (JSON Web Tokens) for authentication and authorization. The system streamlines library operations through essential CRUD (Create, Read, Update, Delete) functionalities with role-based access control for administrators and librarians. Features include secure user authentication, book cataloging with advanced search capabilities, member management with verification, circulation tracking, automated due date reminders, and comprehensive administrative controls for seamless library operations.",
    technologies: ["MongoDb","Express.js","React.js","Node.js", "JWT", "Tailwind CSS","Cloudinary"],
    image: "./picture/Modern Public Library Logo Template.png",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Real Time Chat App",
    description:
      "ChatSphere: Secure, instant messaging with private rooms and file sharing using Socket.io.",
    detailedDescription:
      "ChatSphere is a fun, real-time chat app I built using the MERN stack (MongoDB for data, Express and Node.js for the backend, React for the sleek frontend) and Socket.io to make conversations feel instant and alive. It lets users sign up securely, jump into private or group rooms, send messages with typing indicators and read receipts, and even share images or files—all without any lag. Deployed on Vercel and Heroku, it's perfect for quick team huddles or casual catch-ups, slashing wait times by 80% compared to old-school polling, and the code's open on GitHub for anyone to tweak or join in!",
    technologies:["MongoDb","Express.js","React.js","Node.js", "JWT", "Tailwind CSS","Cloudinary","Socket.io","DaisyUi"],
    image: "picture/Creative Chatting App Logo.png", 
    github: "#",
    live: "#",
    featured: false,
  },
];

const skillCategories = [
  {
    title: "Languages",
    description: "Core programming languages",
    skills: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk" },
      { name: "C", logo: "https://cdn.simpleicons.org/c" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
      {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      { name: "Dart", logo: "https://cdn.simpleicons.org/dart" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    iconClass: "fas fa-code",
    className: "border-blue-500",
  },
  {
    title: "Frameworks & Libraries",
    description: "Full-stack development tools",
    skills: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
      { name: "Django", logo: "https://cdn.simpleicons.org/django" },
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/black" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap" },
    ],
    iconClass: "fas fa-layer-group",
    className: "border-indigo-500",
  },

  {
    title: "Databases",
    description: "Data Storage Solutions",
    skills: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
    ],
    iconClass: "fas fa-database",
    className: "border-purple-500",
  },
  {
    title: "Tools & Platforms",
    description: "DevOps & Workflow",
    skills: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman" },
      {
        name: "VS Code",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      },
      { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
    ],
    iconClass: "fas fa-tools",
    className: "border-amber-500",
  },
  {
    title: "IoT & Embedded",
    description: "Hardware & Automation",
    skills: [
      { name: "Raspberry Pi", logo: "https://cdn.simpleicons.org/raspberrypi" },
      { name: "Arduino", logo: "https://cdn.simpleicons.org/arduino" },
    ],
    iconClass: "fas fa-microchip",
    className: "border-emerald-500",
  },
];

 const experiences = [
   {
     title: "10th",
     company: "St Mary's English Medium School Chevrambalam",
     duration: "2020",
     description:
       "Gained hands on experience in programming and problem-solving.",
     iconClass: "fas fa-graduation-cap",
   },
   {
     title: "12th",
     company: "St Mary's English Medium School Chevrambalam",
     duration: "2022",
     description:
       "Specialized in Computer Science. Active member of the tech community and gained hands on experience in data structures and algorithms.",
     iconClass: "fas fa-graduation-cap",
   },
   {
     title: "BSc Computer Science",
     company: "College of Applied Science Vazhakkad",
     duration: "2022 - 2025",
     description:
       "Specialized in Computer Science. Active member of the tech community and participated in various hackathons and coding competitions.",
     iconClass: "fas fa-graduation-cap",
   },
   {
     title: "Python and Flutter Intern",
     company: "Regional Technologies",
     duration: "2025",
     description:
       "Developed cross-platform mobile applications using Flutter and built robust backend services with Python. Collaborated on full-stack projects to deliver scalable solutions.",
     iconClass: "fas fa-briefcase",
   },
 ];

 function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = projects.map(project => {
        // Create badges HTML
        const badgesHtml = project.technologies.map(tech => 
            `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`
        ).join('');

        return `
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="card h-100 shadow-sm project-card border-0">
                <div style="height: 200px; overflow: hidden;">
                    <img class="card-img-top w-100 h-100" src="${project.image}" alt="${project.title}" style="object-fit: cover; transition: transform 0.3s ease;">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold">${project.title}</h5>
                    <p class="card-text flex-grow-1 text-muted small">${project.description}</p>
                    <div class="mt-3">
                        ${badgesHtml}
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skillCategories.map(category => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 p-4 shadow-sm border-0 ${category.className} skill-category-card" style="border-top: 4px solid var(--bs-primary);">
                <div class="d-flex align-items-center mb-4">
                    <div class="rounded-circle bg-light p-3 me-3">
                        <i class="${category.iconClass} fa-lg text-primary"></i>
                    </div>
                    <div>
                        <h5 class="mb-0 fw-bold">${category.title}</h5>
                        <small class="text-muted">${category.description}</small>
                    </div>
                </div>
                <div class="d-flex flex-wrap gap-2">
                    ${category.skills.map(skill => `
                        <div class="d-flex align-items-center p-2 border rounded bg-white shadow-sm skill-chip" title="${skill.name}" style="transition: all 0.2s;">
                            <img src="${skill.logo}" alt="${skill.name}" width="20" height="20" class="me-2">
                            <span class="small fw-medium">${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = `
        <div class="position-relative mx-auto" style="max-width: 900px;">
            <!-- Vertical Line -->
            <div class="d-none d-md-block position-absolute" style="left: 20px; top: 0; bottom: 0; width: 2px; background: #e9ecef;"></div>
            
            ${experiences.map((exp, index) => `
                <div class="row mb-5 position-relative">
                    <!-- Timeline Dot/Icon -->
                    <div class="col-auto d-none d-md-flex align-items-start ps-3">
                        <div class="d-flex align-items-center justify-content-center bg-white border border-2 border-primary rounded-circle shadow-sm" 
                             style="width: 42px; height: 42px; z-index: 1;">
                            <i class="${exp.iconClass} text-primary"></i>
                        </div>
                    </div>
                    
                    <!-- Content Card -->
                    <div class="col">
                        <div class="card border-0 shadow-sm experience-card h-100 bg-white" style="border-radius: 16px;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-3">
                                    <div>
                                        <h5 class="card-title mb-1 fw-bold text-dark" style="font-size: 1.25rem;">${exp.title}</h5>
                                        <div class="d-flex align-items-center text-primary">
                                            <i class="fas fa-building me-2 small"></i>
                                            <span class="fw-medium">${exp.company}</span>
                                        </div>
                                    </div>
                                    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill border border-primary border-opacity-10">
                                        <i class="far fa-calendar-alt me-2"></i>${exp.duration}
                                    </span>
                                </div>
                                <p class="card-text text-muted mb-0" style="line-height: 1.6;">${exp.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
 
    renderProjects();
    renderSkills();
    renderExperience();
});