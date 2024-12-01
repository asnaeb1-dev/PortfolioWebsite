import { FaGithub, FaLink } from "react-icons/fa";
import ProjectIcons from "../../../data/ProjectIcons.jsx";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ prop }) => {
  // eslint-disable-next-line react/prop-types
  const { title, githubLink, link, projectImage, description, techStack } = prop;
  return (
    <div className={"w-full h-full bg-red-400/20 rounded-lg relative bg-cover bg-center p-[0.7px]"}>
      <img src={projectImage} className="w-full h-full object-fill rounded-lg" />
    </div>
  );
};

export default ProjectItem;