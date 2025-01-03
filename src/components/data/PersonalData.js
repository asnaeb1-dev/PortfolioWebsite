
import SuperheroAppImage from "../assets/supehero.png";
import TaskrAppIcon from "../assets/taskrapp.png";
import ReactComponent from "../assets/components.png";
import { IconName } from "./Icons";

export const LeetCode_Link = `https://leetcode.com/u/abhigyanrahawork76/`;
export const GFG_Link = "https://www.geeksforgeeks.org/user/asnaeb1/";
export const Skills = {
  title: "Skills",
  skillList: [
    {
      skillType: "Programming Languages",
      skills: [
        {
          skillName: "JavaScript",
          iconName: IconName.JAVASCRIPT,
          progress: 80
        },
        {
          skillName: "Java",
          iconName: IconName.JAVA,
          progress: 85
        },
        {
          skillName: "HTML5",
          iconName: IconName.HTML5,
          progress: 90
        },
        {
          skillName: "TypeScript",
          iconName: IconName.TYPESCRIPT,
          progress: 75
        }
      ]
    }, {
      skillType: "Libraries",
      skills: [
        {
          skillName: "React",
          iconName: IconName.REACT,
          progress: 90
        },
        {
          skillName: "Redux",
          iconName: IconName.REDUX,
          progress: 80
        },
        {
          skillName: "React Router DOM",
          iconName: IconName.REACT_ROUTER_DOM,
          progress: 85
        },
        {
          skillName: "React Query",
          iconName: IconName.REACT_QUERY,
          progress: 80
        },
      ]
    }, {
      skillType: "IDE",
      skills: [
        {
          skillName: "VS Code",
          iconName: IconName.VSCODE,
          progress: 80
        },
        {
          skillName: "Sublime Text",
          iconName: IconName.SUBLIME_TEXT,
          progress: 75
        },
        {
          skillName: "IntelliJ IDEA",
          iconName: IconName.INTELLIJ,
          progress: 65
        },
        {
          skillName: "WebStorm",
          iconName: IconName.WEBSTORM,
          progress: 70
        }
      ]
    }, {
      skillType: "Styling",
      skills: [
        {
          skillName: "CSS3",
          iconName: IconName.CSS3,
          progress: 80
        },
        {
          skillName: "Material UI",
          iconName: IconName.MATERIAL_UI,
          progress: 70
        },
        {
          skillName: "Tailwind CSS",
          iconName: IconName.TAILWIND_CSS,
          progress: 75
        },
        {
          skillName: "Bootstrap",
          iconName: IconName.BOOTSTRAP,
          progress: 85
        },
      ]
    }, {
      skillType: "VCS",
      skills: [
        {
          skillName: "Git",
          iconName: IconName.GIT,
          progress: 85
        },
        {
          skillName: "GitHub",
          iconName: IconName.GITHUB,
          progress: 83
        },
        {
          skillName: "GitLab",
          iconName: IconName.GITLAB,
          progress: 70
        },
      ]
    }, {
      skillType: "Packaging Tools",
      skills: [
        {
          skillName: "NodeJS",
          iconName: IconName.NODE_JS,
          progress: 80
        },
        {
          skillName: "Webpack",
          iconName: IconName.WEBPACK,
          progress: 85
        },
        {
          skillName: "NPM",
          iconName: IconName.NPM,
          progress: 80
        },
        {
          skillName: "Vite",
          iconName: IconName.VITE,
          progress: 75
        }
      ]
    }
  ]
};
export const Projects =  [
  {
    title: "Superhero App",
    projectImage: SuperheroAppImage,
    description: "This is an app born out of love for comics and superheros. Search, filter and get more knowledge about your favourite superhero. Marvel, DC, you can get it all here.",
    link: "https://supeheroapp.netlify.app/",
    iconName: IconName.REACT,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    },{
      skillName: "TailwindCSS",
      iconName: IconName.TAILWIND_CSS,
    },{
      skillName: "Redux",
      iconName: IconName.REDUX,
    },],
    githubLink: `https://github.com/asnaeb1-dev/Superhero-app`
  },
  {
    title: "Taskr Task Manager",
    projectImage: TaskrAppIcon,
    description: "This is a task management application which allows the user to CRUD tasks and keep track of them.",
    link: "",
    iconName: IconName.REACT,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    },{
      skillName: "CSS",
      iconName: IconName.CSS3,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    },{
      skillName: "TailwindCSS",
      iconName: IconName.TAILWIND_CSS,
    },{
      skillName: "Redux",
      iconName: IconName.REDUX,
    },],
    githubLink: `https://github.com/asnaeb1-dev/TaskManager`
  },
  {
    title: "React Components",
    projectImage: ReactComponent,
    description: "This is a React app that contains all the components that I have built for various projects and can be used.",
    link: "",
    iconName: IconName.REACT,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    },{
      skillName: "CSS",
      iconName: IconName.CSS3,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    }, {
      skillName: "TypeScript",
      iconName: IconName.TYPESCRIPT,
    }
    ],
    githubLink: `https://github.com/asnaeb1-dev/MachineCoding`
  },
  {
    title: "React Components",
    projectImage: ReactComponent,
    description: "This is a React app that contains all the components that I have built for various projects and can be used.",
    link: "",
    iconName: IconName.HTML5,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    },{
      skillName: "CSS",
      iconName: IconName.CSS3,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    }, {
      skillName: "TypeScript",
      iconName: IconName.TYPESCRIPT,
    }
    ],
    githubLink: `https://github.com/asnaeb1-dev/MachineCoding`
  },
  {
    title: "React Components",
    projectImage: ReactComponent,
    description: "This is a React app that contains all the components that I have built for various projects and can be used.",
    link: "",
    iconName: IconName.HTML5,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    },{
      skillName: "CSS",
      iconName: IconName.CSS3,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    }, {
      skillName: "TypeScript",
      iconName: IconName.TYPESCRIPT,
    }
    ],
    githubLink: `https://github.com/asnaeb1-dev/MachineCoding`
  },
  {
    title: "React Components",
    projectImage: ReactComponent,
    description: "This is a React app that contains all the components that I have built for various projects and can be used.",
    link: "",
    iconName: IconName.HTML5,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    },{
      skillName: "CSS",
      iconName: IconName.CSS3,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    }, {
      skillName: "TypeScript",
      iconName: IconName.TYPESCRIPT,
    }
    ],
    githubLink: `https://github.com/asnaeb1-dev/MachineCoding`
  },
  {
    title: "React Components",
    projectImage: ReactComponent,
    description: "This is a React app that contains all the components that I have built for various projects and can be used.",
    link: "",
    iconName: IconName.HTML5,
    techStack: [{
      skillName: "React",
      iconName: IconName.REACT,
    },{
      skillName: "HTML",
      iconName: IconName.HTML5,
    },{
      skillName: "CSS",
      iconName: IconName.CSS3,
    }, {
      skillName: "JavaScript",
      iconName: IconName.JAVASCRIPT,
    }, {
      skillName: "TypeScript",
      iconName: IconName.TYPESCRIPT,
    }
    ],
    githubLink: `https://github.com/asnaeb1-dev/MachineCoding`
  }
]
export const WorkExperience = {
  title: "Work Experience",
  workList: [
    {
      companyName: "ValueLabs LLP",
      companyLink: "https://www.valuelabs.com/",
      designation: "Software Engineer - Intern",
      duration: "Jan, 2020 - Mar, 2020",
      timeSpan: "3 months",
      description: "I have been working on various projects."
    },{
      companyName: "ValueLabs LLP",
      companyLink: "https://www.valuelabs.com/",
      designation: "Software Engineer",
      duration: "June, 2020 - September, 2022",
      timeSpan: "2 years 2 months",
      description: "I have been working on various projects. "
    },{
      companyName: "Reputation",
      companyLink: "https://reputation.com/",
      designation: "Software Engineer - Frontend",
      duration: "October, 2022 - June, 2023",
      timeSpan: "8 months",
      description: "I have been working on various projects."
    },{
      companyName: "PragmaticPlay(Arrise Solutions Pvt. Ltd.)",
      companyLink: "https://www.pragmaticplay.com/en/#",
      designation: "SDE - Frontend",
      duration: "July, 2023 - Currently working",
      timeSpan: "1 year 3 months",
      description: "I have been working on various projects. "
    },{
      timeSpan: "Currently working here",
    }
  ]
};

export const WorkDetails = [
  {
    companyName: "ValueLabs",
    designation: "Software Engineer - Intern",
    duration: "Jab, 2020 - Mar, 2022",
    description: `They are the trailblazers in Reputation Experience Management. And over the past decade, they have been building the leading platform to enhance the customer experience, improve a brand’s online presence and connect with the communities that matter.
                        Their superpower is not just collecting sentiment data, but in giving the businesses actionable insights to anticipate the needs of their customers and communities. They are a business's eyes and ears in every space a customer talks, posts, reviews and recommends. Translating all they gather into insights a business can actually use.
                        Insights that make customers feel heard. Insights that transform the best customers into advocates.
                        Insights that leave nothing in the dark. Empowering a business with all of that information to learn, grow and even anticipate the needs of those around it.`
    , projects: [
      {
        projectName: "Business Listing ",
        timeLine: "November, 2022 - May, 2023",
        techStackUsed: [{
          techStack: "JavaScript",
          iconName: IconName.JAVASCRIPT
        }, {
          techStack: "HTML5",
          iconName: IconName.HTML5
        }, {
          techStack: "CSS3",
          iconName: IconName.CSS3
        }, {
          techStack: "TypeScript",
          iconName: IconName.TYPESCRIPT
        }, {
          techStack: "React",
          iconName: IconName.REACT
        }, {
          techStack: "Redux",
          iconName: IconName.REDUX
        }],
        projectSynopsis: "BlackJack 3.0 is a part of the company's effort to recreate all of their existing games which are designed in various tech stacks to a uniform one tech stack platform for easy usage, maintainability and increased overall efficiency.",
        description: `I have developed a reusable React component called the "Decision Panel" for the BlackJack game.
                                The purpose of this component is to provide a interface that allows the player to decide between Hit, Stand, Double or Split
                                after respective cards have been dealt. The scope of this component isn't just for BlackJack game and will be a part of the CORE COMPONENTS,
                                which will be used in various gaming products throughout the company. 
                                This component is designed to be flexible and easily reusable in different games, and also it supports all screen sizes throughout the spectrum of resizing.`,
        projectLink: ""
      }]
  },{
    companyName: "ValueLabs",
    designation: "Software Engineer",
    duration: "June, 2020 - September, 2022",
    description: `They are the trailblazers in Reputation Experience Management. And over the past decade, they have been building the leading platform to enhance the customer experience, improve a brand’s online presence and connect with the communities that matter.
                        Their superpower is not just collecting sentiment data, but in giving the businesses actionable insights to anticipate the needs of their customers and communities. They are a business's eyes and ears in every space a customer talks, posts, reviews and recommends. Translating all they gather into insights a business can actually use.
                        Insights that make customers feel heard. Insights that transform the best customers into advocates.
                        Insights that leave nothing in the dark. Empowering a business with all of that information to learn, grow and even anticipate the needs of those around it.`
    , projects: [
      {
        projectName: "Business Listing ",
        timeLine: "November, 2022 - May, 2023",
        techStackUsed: [{
          techStack: "JavaScript",
          iconName: IconName.JAVASCRIPT
        }, {
          techStack: "HTML5",
          iconName: IconName.HTML5
        }, {
          techStack: "CSS3",
          iconName: IconName.CSS3
        }, {
          techStack: "TypeScript",
          iconName: IconName.TYPESCRIPT
        }, {
          techStack: "React",
          iconName: IconName.REACT
        }, {
          techStack: "Redux",
          iconName: IconName.REDUX
        }],
        projectSynopsis: "BlackJack 3.0 is a part of the company's effort to recreate all of their existing games which are designed in various tech stacks to a uniform one tech stack platform for easy usage, maintainability and increased overall efficiency.",
        description: `I have developed a reusable React component called the "Decision Panel" for the BlackJack game.
                                The purpose of this component is to provide a interface that allows the player to decide between Hit, Stand, Double or Split
                                after respective cards have been dealt. The scope of this component isn't just for BlackJack game and will be a part of the CORE COMPONENTS,
                                which will be used in various gaming products throughout the company. 
                                This component is designed to be flexible and easily reusable in different games, and also it supports all screen sizes throughout the spectrum of resizing.`,
        projectLink: ""
      }]
  }, {
    companyName: "Reputation",
    designation: "Frontend Engineer",
    duration: "October, 2022 - June, 2023",
    description: `They are the trailblazers in Reputation Experience Management. And over the past decade, they have been building the leading platform to enhance the customer experience, improve a brand’s online presence and connect with the communities that matter.
                        Their superpower is not just collecting sentiment data, but in giving the businesses actionable insights to anticipate the needs of their customers and communities. They are a business's eyes and ears in every space a customer talks, posts, reviews and recommends. Translating all they gather into insights a business can actually use.
                        Insights that make customers feel heard. Insights that transform the best customers into advocates.
                        Insights that leave nothing in the dark. Empowering a business with all of that information to learn, grow and even anticipate the needs of those around it.`
    , projects: [
      {
        projectName: "Business Listing ",
        timeLine: "November, 2022 - May, 2023",
        techStackUsed: [{
          techStack: "JavaScript",
          iconName: IconName.JAVASCRIPT
        }, {
          techStack: "HTML5",
          iconName: IconName.HTML5
        }, {
          techStack: "CSS3",
          iconName: IconName.CSS3
        }, {
          techStack: "TypeScript",
          iconName: IconName.TYPESCRIPT
        }, {
          techStack: "React",
          iconName: IconName.REACT
        }, {
          techStack: "Redux",
          iconName: IconName.REDUX
        }],
        projectSynopsis: "BlackJack 3.0 is a part of the company's effort to recreate all of their existing games which are designed in various tech stacks to a uniform one tech stack platform for easy usage, maintainability and increased overall efficiency.",
        description: `I have developed a reusable React component called the "Decision Panel" for the BlackJack game.
                                The purpose of this component is to provide a interface that allows the player to decide between Hit, Stand, Double or Split
                                after respective cards have been dealt. The scope of this component isn't just for BlackJack game and will be a part of the CORE COMPONENTS,
                                which will be used in various gaming products throughout the company. 
                                This component is designed to be flexible and easily reusable in different games, and also it supports all screen sizes throughout the spectrum of resizing.`,
        projectLink: ""
      }]
  }, {
    companyName: "PragmaticPlay (Arrise Solutions Pvt. Ltd.)",
    designation: "Software Development Engineer - I, Frontend",
    duration: "12th July, 2023 - Ongoing Employment",
    description: `PragmaticPlay is a leading gaming company focused on creating innovative solutions for businesses across various the gaming industry and providing relaible and consistent solutions.
                        My role involved developing new features and game components.
                        I have also improved existing features in the frontend of our product.
                        I used React, TypeScript, and Tailwind CSS to build the UI and developed various UI components.
                        I also collaborated with the backend team to implement the necessary API endpoints and data fetching logic.
                        I am proud of the work I have been doing in the frontend and believe that my skills and experience make me a valuable asset to PragmaticPlay.`,
    projects: [
      {
        projectName: "BlackJack 3.0",
        timeLine: "July, 2024 - Development continuing",
        techStackUsed:  [{
          techStack: "JavaScript",
          iconName: IconName.JAVASCRIPT
        }, {
          techStack: "HTML5",
          iconName: IconName.HTML5
        }, {
          techStack: "CSS3",
          iconName: IconName.CSS3
        }, {
          techStack: "TypeScript",
          iconName: IconName.TYPESCRIPT
        }, {
          techStack: "React",
          iconName: IconName.REACT
        }, {
          techStack: "Redux",
          iconName: IconName.REDUX
        }],
        projectSynopsis: "BlackJack 3.0 is a part of the company's effort to recreate all of their existing games which are designed in various tech stacks to a uniform one tech stack platform for easy usage, maintainability and increased overall efficiency.",
        description: `I have developed a reusable React component called the "Decision Panel" for the BlackJack game.
                                The purpose of this component is to provide a interface that allows the player to decide between Hit, Stand, Double or Split
                                after respective cards have been dealt. The scope of this component isn't just for BlackJack game and will be a part of the CORE COMPONENTS,
                                which will be used in various gaming products throughout the company. 
                                This component is designed to be flexible and easily reusable in different games, and also it supports all screen sizes throughout the spectrum of resizing.`,
        projectLink: ""
      },{
        projectName: "BlackJack 2.0 - Double After Split",
        timeLine: "May, 2024 - July,2024",
        techStackUsed:  [{
          techStack: "JavaScript",
          iconName: IconName.JAVASCRIPT
        }, {
          techStack: "HTML5",
          iconName: IconName.HTML5
        }, {
          techStack: "CSS3",
          iconName: IconName.CSS3
        }, {
          techStack: "TypeScript",
          iconName: IconName.TYPESCRIPT
        }],
        projectSynopsis: "This is a a new feature to be added to all the BlackJack varient games that we provide. ",
        description: `I have developed a reusable JS component called the "Basic Strategy" for the Bet Behind Pro game.
                                The purpose of this component is to provide a interface that allows the player to predict to a certain extent between Hit, Stand, Double or Split that will be taken by then Bots.
                                after respective cards have been dealt.`,
        projectLink: ""
      },{
        projectName: "Bet Behind Pro",
        timeLine: "Jan, 2024 - April, 2024",
        techStackUsed: [{
          techStack: "JavaScript",
          iconName: IconName.JAVASCRIPT
        }, {
          techStack: "HTML5",
          iconName: IconName.HTML5
        }, {
          techStack: "CSS3",
          iconName: IconName.CSS3
        }, {
          techStack: "TypeScript",
          iconName: IconName.TYPESCRIPT
        }],
        projectSynopsis: "During the development of BetBehind Pro, the requirement was to build a component that acts as a basic strategy to check the dealings of the cards that lead to certain decision such as Hit, Stand, Double or Split. So a user can predict to certain extent what decision the bots will choose.",
        description: `I have developed a reusable JS component called the "Basic Strategy" for the Bet Behind Pro game.
                                The purpose of this component is to provide a interface that allows the player to predict to a certain extent between Hit, Stand, Double or Split that will be taken by then Bots.
                                after respective cards have been dealt.`,
        projectLink: ""
      }
    ]
  }
]

export const CertificationList = [
  {
    certificateName: "React & Hooks Course",
    institution: "Udemy",
    date: "Dec 7th, 2024",
    duration: "4 weeks",
    certLink: "https://udemy-certificate.s3.amazonaws.com/image/UC-f7fe6c2d-7608-49a3-b22b-698a1872f3e7.jpg",
    courseLink: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/?couponCode=JUST4U02223',
    coachName: "Stephen Grider",
    skills: [
      {
        skillName: "React",
        skillIcon: IconName.REACT
      },{
        skillName: "Redux",
        skillIcon: IconName.REDUX
      },{
        skillName: "JavaScript",
        skillIcon: IconName.JAVASCRIPT
      },{
        skillName: "TypeScript",
        skillIcon: IconName.TYPESCRIPT
      }
    ]
  },{
    certificateName: "Namaste React",
    institution: "NamasteDev",
    date: "Ongoing",
    duration: "4 weeks",
    courseLink: 'https://namastedev.com/learn/namaste-react',
    coachName: "Akshay Saini",
    skills: [
      {
        skillName: "React",
        skillIcon: IconName.REACT
      },{
        skillName: "Redux",
        skillIcon: IconName.REDUX
      },{
        skillName: "JavaScript",
        skillIcon: IconName.JAVASCRIPT
      },{
        skillName: "TypeScript",
        skillIcon: IconName.TYPESCRIPT
      }
    ]
  },{
    certificateName: "Namaste Frontend Design",
    institution: "NamasteDev",
    date: "Ongoing",
    duration: "4 weeks",
    courseLink: "https://namastedev.com/learn/namaste-frontend-system-design",
    coachName: "Akshay Saini",
    skills: [
      {
        skillName: "React",
        skillIcon: IconName.REACT
      },{
        skillName: "Redux",
        skillIcon: IconName.REDUX
      },{
        skillName: "JavaScript",
        skillIcon: IconName.JAVASCRIPT
      },{
        skillName: "TypeScript",
        skillIcon: IconName.TYPESCRIPT
      }
    ]
  },{
    certificateName: "Web Development Certification",
    institution: "Udemy",
    date: "Dec 7th, 2024",
    duration: "4 weeks",
    certLink: "https://udemy-certificate.s3.amazonaws.com/image/UC-8f7e5fc7-2786-413c-8deb-f1661451a7b3.jpg",
    courseLink: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    coachName: "Colt Steele",
    skills: [
      {
        skillName: "React",
        skillIcon: IconName.REACT
      },{
        skillName: "Redux",
        skillIcon: IconName.REDUX
      },{
        skillName: "JavaScript",
        skillIcon: IconName.JAVASCRIPT
      },{
        skillName: "TypeScript",
        skillIcon: IconName.TYPESCRIPT
      }
    ]
  }, {
    certificateName: "System Design Certification",
    institution: "GeeksForGeeks",
    date: "",
    duration: "4 weeks",
    certLink: "https://firebasestorage.googleapis.com/v0/b/tasker-task-manager.appspot.com/o/today.png?alt=media&token=f504308f-3581-430b-9b75-a85923f07b57",
    courseLink: "https://www.coursera.org/learn/software-engineering",
    coachName: "Sandeep Jain",
    skills: [
      {
        skillName: "React",
        skillIcon: IconName.REACT
      },{
        skillName: "Redux",
        skillIcon: IconName.REDUX
      },{
        skillName: "JavaScript",
        skillIcon: IconName.JAVASCRIPT
      },{
        skillName: "TypeScript",
        skillIcon: IconName.TYPESCRIPT
      }
    ]
  },{
    certificateName: "JavaScript (Basic) Certificate",
    institution: "HackerRank",
    date: "June 28th, 2020",
    duration: "4 weeks",
    isIframe: true,
    certLink: "https://firebasestorage.googleapis.com/v0/b/tasker-task-manager.appspot.com/o/Screenshot%202024-12-29%20112919.png?alt=media&token=8911a3ac-a336-46e2-b33f-54a097c0e210",
    courseLink: "https://www.coursera.org/learn/software-engineering",
    coachName: "HackerRank",
    skills: [
      {
        skillName: "JavaScript",
        skillIcon: IconName.JAVASCRIPT
      },{
        skillName: "TypeScript",
        skillIcon: IconName.TYPESCRIPT
      }
    ]
  }
]

export const AboutMeDescription = `Hey there! 👋 I’m a passionate software developer with 4 years of experience, specializing in web development. Over the years, I’ve had the opportunity to work with three amazing companies, where I honed my skills and developed a variety of web applications. Whether it’s crafting sleek UIs or solving complex coding challenges, I love bringing ideas to life on the web.

Outside of work, I’m a gamer who’s always up for a good match and a coder who loves exploring new tech just for fun. I like to keep things lighthearted and believe that a mix of hard work, creativity, and a good sense of humor is the perfect recipe for success.

If you’re here to connect, collaborate, or just check out my work, welcome to my portfolio! 😊`;