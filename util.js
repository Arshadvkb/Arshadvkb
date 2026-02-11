const projects = [
  {
    title: "Aero AI",
    description:
      "AI-powered aeroponics automation system optimizing plant growth via intelligent monitoring and control.",
    detailedDescription:
      "The AERO AI project automates an aeroponics system by integrating Gemini 2.5 Flash for AI-driven optimization, MQTT for real-time data communication, Raspberry Pi as the central hub hosting a Mosquitto MQTT broker and Node.js server, ESP32 for interfacing with sensors (e.g., DHT22 for temperature/humidity, pH for nutrients) and actuators (e.g., ultrasonic foggers, pumps), and a Flutter-based dashboard for user monitoring and control. Sensor data is published via MQTT, processed by the Node.js server with Gemini API for intelligent decisions (e.g., adjusting misting based on humidity), and commands are sent back to the ESP32, while the Flutter dashboard displays real-time data and allows manual control, creating an efficient, scalable system for automated plant growth.",
    technologies: [
      "IoT",
      "Python",
      "Node.js",
      "Flutter",
      "Gemini AI",
      "Raspberry Pi",
    ],
    image: "/lovable-uploads/314fe94b-27e1-4b25-908d-a7cc05e75d9d.png",
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
    technologies: ["Django", "React", "OpenCV", "Tensorflow", "Flutter"],
    image: "/lovable-uploads/a38ac704-4929-49fe-b3b4-eba6b58a7244.png",
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
    technologies: ["MERN Stack", "JWT", "Tailwind CSS"],
    image: libraryLogo,
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
    technologies: ["MERN Stack", "Socket.io", "Cloudinary"],
    image: chatapp,
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
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    className: "hover:border-blue-500/50",
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
    icon: <Layers className="w-5 h-5 text-indigo-500" />,
    className: "hover:border-indigo-500/50",
  },

  {
    title: "Databases",
    description: "Data Storage Solutions",
    skills: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
    ],
    icon: <Database className="w-5 h-5 text-purple-500" />,
    className: "hover:border-purple-500/50 md:col-span-2 lg:col-span-1",
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
    icon: <Wrench className="w-5 h-5 text-amber-500" />,
    className: "hover:border-amber-500/50",
  },
  {
    title: "IoT & Embedded",
    description: "Hardware & Automation",
    skills: [
      { name: "Raspberry Pi", logo: "https://cdn.simpleicons.org/raspberrypi" },
      { name: "Arduino", logo: "https://cdn.simpleicons.org/arduino" },
    ],
    icon: <Cpu className="w-5 h-5 text-emerald-500" />,
    className: "hover:border-emerald-500/50",
  },
];





 const experiences = [
   {
     title: "10th",
     company: "St Mary's English Medium School Chevrambalam",
     duration: "2020",
     description:
       "Gained hands on experience in programming and problem-solving.",
     icon: <GraduationCap className="w-5 h-5 text-primary" />,
   },
   {
     title: "12th",
     company: "St Mary's English Medium School Chevrambalam",
     duration: "2022",
     description:
       "Specialized in Computer Science. Active member of the tech community and gained hands on experience in data structures and algorithms.",
     icon: <GraduationCap className="w-5 h-5 text-primary" />,
   },
   {
     title: "BSc Computer Science",
     company: "College of Applied Science Vazhakkad",
     duration: "2022 - 2025",
     description:
       "Specialized in Computer Science. Active member of the tech community and participated in various hackathons and coding competitions.",
     icon: <GraduationCap className="w-5 h-5 text-primary" />,
   },
   {
     title: "Python and Flutter Intern",
     company: "Regional Technologies",
     duration: "2025",
     description:
       "Developed cross-platform mobile applications using Flutter and built robust backend services with Python. Collaborated on full-stack projects to deliver scalable solutions.",
     icon: <Briefcase className="w-5 h-5 text-primary" />,
   },
 ];