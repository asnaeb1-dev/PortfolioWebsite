import React, {useEffect, useState} from 'react';
import {MdNavigateBefore as PreviousIcon, MdNavigateNext as NextIcon} from "react-icons/md";
import ProjectCard from "./ProjectCard.jsx";

// eslint-disable-next-line react/prop-types
const CompanyDetails = ({ companyDetails ={} }) => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    setCurrentProject(0)
  }, [companyDetails]);
  return (
    <div className='flex-1 flex-col gap-8 flex bg-indigo-500/40 shadow-lg rounded-lg py-4 px-6 linearGradientReverse'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col'>
          <h1 className='text-[40px] font-bold text-indigo-600'>{companyDetails.companyName}</h1>
          <h2 className='text-[25px] font-bold'>{companyDetails.designation}</h2>
          <p className='text-[20px] font-semibold'>{companyDetails.duration}</p>
          <p className='text-[18px] font-[500] pt-5'>{companyDetails.description}</p>
        </div>
      </div>
      <div className='w-full py-2 h-full rounded-lg flex flex-col gap-5'>
        <div className={"flex flex-row justify-between gap-5"}>
          <h1 className='font-bold underline underline-offset-8 text-3xl'>Projects</h1>
          <div className={"w-full h-full flex flex-row item gap-2 translate-y-1 "}>
            <button
              onClick={() => setCurrentProject(currentProject > 0 ? currentProject - 1 : currentProject)}
              title={"Previous Project"}
              className={"border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-500 duration-700 hover:text-white rounded-full hover:scale-110 transition-transform active:scale-95"}
            >
              <PreviousIcon size={30}/>
            </button>
            <button
              onClick={() => setCurrentProject(currentProject < companyDetails?.projects?.length - 1 ? currentProject + 1 : 0)}
              title={"Next Project"}
              className={"border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-500 duration-700 hover:text-white active:scale-95 rounded-full hover:scale-110 transition-transform"}
            >
              <NextIcon size={30} color={"rgb(129 140 248)"}/>
            </button>
          </div>
        </div>
        <ProjectCard project={companyDetails?.projects[currentProject]}/>
      </div>
    </div>
  );
};

export default CompanyDetails;
