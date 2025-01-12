import { FaGithub, FaLink } from "react-icons/fa";
import ProjectIcons from "../../../data/ProjectIcons.jsx";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaLink as LinkIcon } from "react-icons/fa";
import SmallSkillItem from "../SmallSkillItem/SmallSkillItem.jsx";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ prop }) => {
  // eslint-disable-next-line react/prop-types
  const { title, githubLink, link, projectImage, description, techStack } =
    prop;
  return (
    <div
      className={
        "w-full h-[300px] md:h-[300px] xl:h-[400px] bg-cover rounded-2xl relative bg-center cursor-pointer"
      }
    >
      <img
        src={projectImage}
        className="w-full h-full object-fill rounded-lg absolute inset-0 z-10"
      />
      <div className="w-full absolute h-full rounded-lg duration-500 transition-opacity bg-black opacity-0 hover:opacity-80 inset-0 z-20 p-4">
        <span>
          <p className="text-white text-2xl font-bold">{title}</p>
          <ProjectLinkFAB projectLink={githubLink} />
        </span>
        <div className="w-2/3 max-h-[150px] absolute rounded-2xl overflow-auto left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-row gap-3 flex-wrap">
          {techStack.map(({ skillName }, index) => (
            <SmallSkillItem key={index} skillName={skillName} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectLinkFAB = ({ projectLink = "" }) => {
  return (
    <a
      href={projectLink}
      title={
        projectLink.length > 0 ? "Project Link" : "No Project Link available"
      }
      className="w-12 h-12 bg-white absolute rounded-full transition-transform hover:scale-110 active:scale-95 bottom-4 shadow-2xl right-4 flex items-center justify-center"
    >
      <LinkIcon color="black" />
    </a>
  );
};

export default ProjectItem;
