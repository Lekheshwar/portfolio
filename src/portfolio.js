/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Lekheshwar",
  logo_name: "<Lekhesh />",
  full_name: "Lekheshwar",
  subTitle: "Full Stack Developer. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1OBydVHy1lGebu_sKj6tXugEFiNHfrz2T/view?usp=sharing",
  mail: "mailto:blekheshwar@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Lekheshwar",
  linkedin: "https://www.linkedin.com/in/lekheshwar-b-2b0617155/",
  gmail: "blekheshwar@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express",
        "⚡ Worked with Databases like MongoDB, MySQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Nanak Institute of Technology, Hyderabad",
      subtitle: "Bachelor's in Computer Science and Engineering",
      logo_path: "GNI.jpg",
      alt_name: "GNIT",
      duration: "2018 - Present",
      descriptions: [
        "⚡ Final Year student at CSE department, GNIT.",
        "⚡ Studied various core subjects like Data Structures, DBMS, Networking, Algorithms, etc.",
        "⚡ Developed various projects using the subjects learnt during the coursework.",
        "⚡ Part of EPAM Pre-Education-Program 2021.",
      ],
      website_link: "https://gnithyd.ac.in/",
    },
    {
      title: "Kendriya Vidyalaya",
      subtitle: "All India Senior School Certificate Examination.",
      logo_path: "KVS.png",
      alt_name: "KVS",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ Studied Maths, Physics, Chemistry, Biology.",
        "⚡ Was the CCA captain for our house.",
        "⚡ Part of School Cricket Team. Represented at Regionals Sports Meet.",
      ],
      website_link: "https://picket.kvs.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Pre Education Program",
      subtitle: "EPAM",
      logo_path: "epam.png",
      certificate_link:
        "https://drive.google.com/file/d/1GOuf28XiIB0aa2U5gJr8WzzOkfijGVcQ/view",
      alt_name: "Epam",
      // color_code: "#46A403",
      color_code: "#e2e2e2",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "HackerRank",
      logo_path: "Hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/1ea7ef793581",
      alt_name: "HackerRank",
      // color_code: "#46A403",
      color_code: "#47c748",
    },
    {
      title: "Blockchain and Bitcoin Simplified 2021",
      subtitle: "Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-3b74d7f3-2b21-411f-acab-4d8e445c567c.jpg",
      alt_name: "Blockchain And Bitcoin",
      color_code: "#e2e2e2",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "HackerRank",
      logo_path: "Hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/54ab9f38f3c0",
      alt_name: "HackerRank",
      color_code: "#47c748",
    },
    {
      title: "Full Stack Web Development with React and MongoDB",
      subtitle: "Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1ziUsgUHhh9duEf58xrgC5Nk1QBepHJCZ/view",
      alt_name: "Full Stack",
      color_code: "#e2e2e2",
    },
    {
      title: "Microsoft Virtual Experience",
      subtitle: "Insidesherpa(Forage)",
      logo_path: "Insidesherpa.png",
      certificate_link:
        "https://drive.google.com/file/d/18X0P1euEro_KqmAoIAbvG9OWn-JMgmK5/view",
      alt_name: "Microsoft",
      color_code: "#4285f4",
    },
    {
      title: "Galactic Problem Solver",
      subtitle: "NASA Space App Challenge",
      logo_path: "Nasa.png",
      certificate_link:
        "https://drive.google.com/file/d/0B3SUp0hfKEXWTjkzUjJmWExnZDlWNWRRS18tcUR4ZGw1Mk5B/view?usp=sharing&resourcekey=0-bGnR4Syr8VZW8YKHTSuxiQ",
      alt_name: "Nasa App Challenge",
      color_code: "#e2e2e2",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships and Full Time Roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web Development and Designing Internship.",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "TSF.png",
          duration: "Jun 2021 - Jul 2021",
          location: "Remote",
          description: `Worked as web developer intern as a part of Graduate Rotational Internship Program for the month of June 2021.
          Developed a banking application with the CRUD functionality, user can transfer money from one to other account.
          Technologies: ReactJS, ExpressJS, NodeJS, MongoDb, Bootstrap.
          `,
          color: "#0071C5",
        },
        {
          title: "Technical Content Writer Intern.",
          company: "GeeksForGeeks",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg.png",
          duration: "Mar 2021 - Present",
          location: "Work From Home",
          description: `Responsible for writing technical articles in various domains like ReactJS, HTML, CSS, JavaScript.
          Participated in Technical Scripter 2020.
          `,
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. I have built various web application which mainly uses ReactJS as the Front End. ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Socket Chat",
      url: "https://github.com/Lekheshwar/socket-chat-client",
      description:
        "Socket-Chat is a web-based group chat application built using Socket.io. Several participants can join a chat room using unique room id.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "Algo-Visualizer",
      url: "https://github.com/Lekheshwar/Algo-Visualizer",
      description:
        "A tool build using ReactJs to visualize various Searching And Sorting Algorithms. Like Linear Search, Binary Search, Bubble Sort, Insertion Sort, etc.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "covid-tracker",
      url: "https://github.com/Lekheshwar/covid-tracker",
      description:
        "Covid Tracker is a web application to visualize the live Covid stats on the dashboard. Uses disease.sh API for Data.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MaterialUI",
          iconifyClass: "logos-material-ui",
        },
      ],
    },
    {
      id: "3",
      name: "spark-bank",
      url: "https://github.com/Lekheshwar/Spark-Bank",
      description:
        "Banking Application with CRUD functionality. User can view other users, transfer money from one account to other account, view the transactions history.",
      languages: [
        {
          name: "ExpressJS",
          iconifyClass: "logos-express",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "notes-app",
      url: "https://github.com/Lekheshwar/notes-app",
      description:
        "A simple notes app, which uses Local Storage to store the data. Can switch between light and dark theme.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "stop-watch",
      url: "https://github.com/Lekheshwar/stop-watch",
      description: "Simple ReactJS beginner Stop Watch.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "6",
      name: "linkedin-home-ui",
      url: "https://github.com/Lekheshwar/LinkedIn-Home-Page",
      description: "LinkedIN home page from scratch. Only HTML and CSS",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
