import React from 'react';
import "./companydetails.css";

const ProjectCard = ({project}) => {
  return (
    <div>
      <div className={"bg-indigo-800/30 py-2 px-3 rounded-lg projectCard"}>
        <p className={"text-indigo-600 font-bold text-[30px]"}>{project.projectName}</p>
        <p className={"font-bold"}>{project.timeLine}</p>
        <p className={"my-2 font-[500]"}>{project.projectSynopsis}</p>
        <div className={"py-2"}>
          <p className={"font-bold text-xl underline underline-offset-2"}>Contribution:</p>
          <p className={"my-2 font-[500]"}>{project.description}</p>
        </div>
        <div className={"flex flex-row gap-3"}>
          {
            project.techStackUsed.map(({techStack, icon}, index) => {
              return (
                <button key={index} className={"bg-white/50 items-center flex flex-row transition-colors font-semibold duration-500 hover:border-indigo-800 hover:text-indigo-800 border-2 rounded-lg"}>
                  <span>{icon}</span>
                  <p>{techStack}</p>
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;