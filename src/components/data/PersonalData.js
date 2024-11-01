import {
    BootstapIcon,
    CSS3Icon,
    GitHubIcon,
    GitIcon,
    GitLabIcon,
    HTML5Icon,
    IntelliJIcon,
    JavaIcon,
    JavaScriptIcon,
    MaterialUIIcon,
    NodeJSIcon,
    NPMIcon,
    ReactIcon,
    ReactQueryIcon,
    ReactRouterDOMIcon,
    ReduxIcon,
    SublimeTextIcon,
    TailwindCSSIcon,
    TypeScriptIcon,
    ViteIcon,
    VSCodeIcon,
    WebpackIcon,
    WebStormIcon
} from "./Icons";

export const Skills = {
    title: "Skills",
    skillList: [
        {
            skillType: "Programming Languages",
            skills: [
                {
                    skillName: "JavaScript",
                    icon: JavaScriptIcon,
                    progress: 80
                },
                {
                    skillName: "Java",
                    icon: JavaIcon,
                    progress: 85
                },
                {
                    skillName: "HTML5",
                    icon: HTML5Icon,
                    progress: 90
                },
                {
                    skillName: "TypeScript",
                    icon: TypeScriptIcon,
                    progress: 75
                }
            ]
        }, {
            skillType: "Libraries",
            skills: [
                {
                    skillName: "React",
                    icon: ReactIcon,
                    progress: 90
                },
                {
                    skillName: "Redux",
                    icon: ReduxIcon,
                    progress: 80
                },
                {
                    skillName: "React Router DOM",
                    icon: ReactRouterDOMIcon,
                    progress: 85
                },
                {
                    skillName: "React Query",
                    icon: ReactQueryIcon,
                    progress: 80
                },
            ]
        }, {
            skillType: "IDE",
            skills: [
                {
                    skillName: "VS Code",
                    icon: VSCodeIcon,
                    progress: 80
                },
                {
                    skillName: "Sublime Text",
                    icon: SublimeTextIcon,
                    progress: 75
                },
                {
                    skillName: "IntelliJ IDEA",
                    icon: IntelliJIcon,
                    progress: 65
                },
                {
                    skillName: "WebStorm",
                    icon: WebStormIcon,
                    progress: 70
                }
            ]
        }, {
            skillType: "Styling",
            skills: [
                {
                    skillName: "CSS3",
                    icon: CSS3Icon,
                    progress: 80
                },
                {
                    skillName: "Material UI",
                    icon: MaterialUIIcon,
                    progress: 70
                },
                {
                    skillName: "Tailwind CSS",
                    icon: TailwindCSSIcon,
                    progress: 75
                },
                {
                    skillName: "Bootstrap",
                    icon: BootstapIcon,
                    progress: 85
                },
            ]
        }, {
            skillType: "VCS",
            skills: [
                {
                    skillName: "Git",
                    icon: GitIcon,
                    progress: 85
                },
                {
                    skillName: "GitHub",
                    icon: GitHubIcon,
                    progress: 83
                },
                {
                    skillName: "GitLab",
                    icon: GitLabIcon,
                    progress: 70
                },
            ]
        }, {
            skillType: "Packaging Tools",
            skills: [
                {
                    skillName: "NodeJS",
                    icon: NodeJSIcon,
                    progress: 80
                },
                {
                    skillName: "Webpack",
                    icon: WebpackIcon,
                    progress: 85
                },
                {
                    skillName: "NPM",
                    icon: NPMIcon,
                    progress: 80
                },
                {
                    skillName: "Vite",
                    icon: ViteIcon,
                    progress: 75
                }
            ]
        }
    ]
};

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
        },
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
                    icon: JavaScriptIcon
                }, {
                    techStack: "HTML5",
                    icon: HTML5Icon
                }, {
                    techStack: "CSS3",
                    icon: CSS3Icon
                }, {
                    techStack: "TypeScript",
                    icon: TypeScriptIcon
                }, {
                    techStack: "React",
                    icon: ReactIcon
                }, {
                    techStack: "Redux",
                    icon: ReduxIcon
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
                    icon: JavaScriptIcon
                }, {
                    techStack: "HTML5",
                    icon: HTML5Icon
                }, {
                    techStack: "CSS3",
                    icon: CSS3Icon
                }, {
                    techStack: "TypeScript",
                    icon: TypeScriptIcon
                }, {
                    techStack: "React",
                    icon: ReactIcon
                }, {
                    techStack: "Redux",
                    icon: ReduxIcon
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
                    icon: JavaScriptIcon
                }, {
                    techStack: "HTML5",
                    icon: HTML5Icon
                }, {
                    techStack: "CSS3",
                    icon: CSS3Icon
                }, {
                    techStack: "TypeScript",
                    icon: TypeScriptIcon
                }, {
                    techStack: "React",
                    icon: ReactIcon
                }, {
                    techStack: "Redux",
                    icon: ReduxIcon
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
                    icon: JavaScriptIcon
                }, {
                    techStack: "HTML5",
                    icon: HTML5Icon
                }, {
                    techStack: "CSS3",
                    icon: CSS3Icon
                }, {
                    techStack: "TypeScript",
                    icon: TypeScriptIcon
                }, {
                    techStack: "React",
                    icon: ReactIcon
                }, {
                    techStack: "Redux",
                    icon: ReduxIcon
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
                    icon: JavaScriptIcon
                }, {
                    techStack: "HTML5",
                    icon: HTML5Icon
                }, {
                    techStack: "CSS3",
                    icon: CSS3Icon
                }, {
                    techStack: "TypeScript",
                    icon: TypeScriptIcon
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
                    icon: JavaScriptIcon
                }, {
                    techStack: "HTML5",
                    icon: HTML5Icon
                }, {
                    techStack: "CSS3",
                    icon: CSS3Icon
                }, {
                    techStack: "TypeScript",
                    icon: TypeScriptIcon
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