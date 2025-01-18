import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  MdNavigateBefore as PreviousIcon,
  MdNavigateNext as NextIcon,
} from "react-icons/md";
import { RxCross1 as CrossIcon } from "react-icons/rx";
import ProjectCard from "./ProjectCard.jsx";
import SmallSkillItem from "../SmallSkillItem/SmallSkillItem.jsx";

// eslint-disable-next-line react/prop-types
const CompanyDetails = ({ companyDetails = {}, handleClose }) => {
  const [currentProject, setCurrentProject] = useState(0);
  useLayoutEffect(() => {
    setCurrentProject(0);
  }, [companyDetails]);

  return (
    <div
      className={`w-full h-full rounded-t-lg bg-white overflow-hidden`}
    >
      <div className="flex w-full h-full flex-col overflow-hidden linearGradientReverse gap-3 xl:gap-5 md:rounded-lg rounded-t-lg p-4">
        <div className="w-full flex-row flex items-center justify-between gap-5">
          <p className="font-extrabold text-3xl xl:text-4xl text-indigo-500 overflow-hidden whitespace-nowrap text-ellipsis">
            {companyDetails.companyName}
          </p>
          <span
            onPointerUp={() => {}}
            className="p-[7px] border-[1.5px] rounded-full border-indigo-500 hover:scale-105 active:scale-95 transition-transform lg:hidden"
          >
            <CrossIcon color=" rgb(99 102 241)" />
          </span>
        </div>
        <div className="flex flex-col w-full xl:gap-1 ">
          <p
            title={companyDetails.designation}
            className="font-semibold xl:text-xl overflow-hidden whitespace-nowrap text-ellipsis w-[80%]"
          >
            {companyDetails.designation}
          </p>
          <span className="flex xl:text-xl flex-row gap-4 font-semibold">
            <p
              title={companyDetails.duration}
              className="overflow-hidden whitespace-nowrap text-ellipsis w-[80%]"
            >
              {companyDetails.duration}
            </p>
          </span>
          <p
            title={companyDetails.location}
            className="font-semibold xl:text-xl overflow-hidden whitespace-nowrap text-ellipsis w-[80%]"
          >
            {companyDetails.location}
          </p>
          <p className="text-sm py-2 mt-2 max-h-28 overflow-y-scroll  xl:text-lg">
            {companyDetails.description}
          </p>
        </div>
        <div className="w-full h-full bg-indigo-400/50 rounded-lg p-2 flex gap-2 flex-col">
          <h1 className="font-bold text-2xl">Projects</h1>
          <div className="w-full h-full bg-red-300">

          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
