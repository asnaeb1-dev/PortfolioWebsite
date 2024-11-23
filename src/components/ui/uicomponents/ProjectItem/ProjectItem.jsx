import { FaGithub, FaLink } from "react-icons/fa";
import ProjectIcons from "../../../data/ProjectIcons.jsx";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ prop }) => {
  // eslint-disable-next-line react/prop-types
  const { title, githubLink, link, projectImage, description, techStack } = prop;
  return (
    <div
      className={"w-full gap-4 flex flex-row bg-indigo-400/30 hover:scale-[102%] duration-500 cursor-pointer transition-transform rounded-2xl p-4 min-h-60"}>
      <div className={"w-1/3"}>
        <img className={"w-full h-full object-fill rounded-xl"} src={projectImage} alt={title}/>
      </div>
      <div className={"w-2/3 flex flex-col gap-3"}>
        <span className={"flex flex-row justify-between items-center"}>
          <h1 className={"font-bold text-2xl text-indigo-600"}>{title}</h1>
          <div className={"flex flex-row gap-2"}>
            {
              link &&
                <a target="_blank" rel="noopener noreferrer" href={link} title={"Project Link"}
                      className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
                >
                  <FaLink size={20}/>
                </a>
            }
            <a target="_blank" rel="noopener noreferrer" href={githubLink} title={"GitHub"}
                  className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
            >
              <FaGithub size={20}/>
            </a>
          </div>
        </span>
        <p className={"text-sm "}>
          {description}
        </p>
        <div className={"flex flex-row gap-2 flex-wrap"}>
          {
            // eslint-disable-next-line react/prop-types
            techStack?.map((skill, index) => {
              return (
                <span key={index} className={"flex flex-row items-center border-2 rounded-xl bg-white/20 py-1 px-2 gap-1 hover:bg-white/40 transition-colors"}>
                  <ProjectIcons iconName={skill.skillName} width={30} height={30} />
                  <p className={"font-semibold"}>{skill.skillName}</p>
                </span>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;