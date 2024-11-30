import { FaGithub, FaLink } from "react-icons/fa";
import ProjectIcons from "../../../data/ProjectIcons.jsx";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ prop }) => {
  // eslint-disable-next-line react/prop-types
  const { title, githubLink, link, projectImage, description, techStack } = prop;
  return (
    <div
      className={"w-full h-full bg-red-400/20 rounded-lg relative bg-cover bg-center p-[0.7px]"}
    >
      <span className=" absolute left-5 top-1/2 z-10">
        <GrFormPrevious />
      </span>
      <span className=" absolute right-5 top-1/2 z-10">
        <GrFormNext />
      </span>

      <img src={projectImage} className={`rounded-t-lg h-fit`} />
    </div>
  );
};

export default ProjectItem;