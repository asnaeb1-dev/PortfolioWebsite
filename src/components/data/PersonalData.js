import { BootstapIcon, CSS3Icon, GitHubIcon, GitIcon, GitLabIcon, HTML5Icon, IntelliJIcon, JavaIcon, JavaScriptIcon, MaterialUIIcon, NodeJSIcon, NPMIcon, ReactIcon, ReactQueryIcon, ReactRouterDOMIcon, ReduxIcon, SublimeTextIcon, TailwindCSSIcon, TypeScriptIcon, ViteIcon, VSCodeIcon, WebpackIcon } from "./Icons";

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