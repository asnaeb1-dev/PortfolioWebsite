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
  const [triggerCloseAnimation, setTrigerCloseAnimation] = useState(false);
  useLayoutEffect(() => {
    setCurrentProject(0);
  }, [companyDetails]);

  const handleAnimation = (e) => {
    if (e.animationName === "animateClose") {
      handleClose();
    }
  };

  useEffect(() => {
    console.log("hjef", companyDetails.projects[currentProject]);
  }, [companyDetails]);

  return (
    <div
      onAnimationEnd={handleAnimation}
      className={`${
        triggerCloseAnimation ? "animateCloseMobile" : "animateOpenMobile"
      } w-full absolute z-10 bottom-0 rounded-t-lg bg-white overflow-hidden lg:top-10 lg:right-0 md:h-[90%] lg:w-1/2`}
    >
      <div className="flex w-full h-full flex-col overflow-hidden linearGradientReverse gap-3 xl:gap-5 md:rounded-lg border-indigo-400 border-2 rounded-t-lg p-4">
        <div className="w-full flex-row flex items-center justify-between gap-5">
          <p className="font-extrabold text-3xl xl:text-4xl text-indigo-500 overflow-hidden whitespace-nowrap text-ellipsis">
            {companyDetails.companyName}
          </p>
          <span
            onPointerUp={() => setTrigerCloseAnimation(true)}
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
        <div className="w-full h-full flex flex-col gap-3">
          <span className="flex flex-row items-center justify-between">
            <p className="text-2xl font-bold xl:text-3xl">Projects</p>
            <div className="flex flex-row gap-2">
              <span
                onPointerUp={() =>
                  setCurrentProject(
                    currentProject === 0 ? 0 : currentProject - 1
                  )
                }
                title="Previous Project"
                className="border-2 border-indigo-500 rounded-full p-1 items-center transition-transform hover:scale-105 active:scale-95"
              >
                <PreviousIcon color="rgb(99 102 241)" />
              </span>
              <span
                title="Next Project"
                onPointerUp={() =>
                  setCurrentProject(
                    (currentProject + 1) % companyDetails.projects.length
                  )
                }
                className="border-2 border-indigo-500 rounded-full p-1 items-center transition-transform hover:scale-105 active:scale-95"
              >
                <NextIcon color="rgb(99 102 241)" />
              </span>
            </div>
          </span>
          <div className="w-full h-[40dvh] sm:h-[52dvh] rounded-xl bg-indigo-400/50 overflow-hidden p-4 flex flex-col gap-2">
            <div className="w-full h-full relative">
              <img
                className="w-full h-full min-h-50 max-h-50 rounded-lg"
                src={companyDetails.projects[currentProject].projectImageLink}
              />
              <div className="w-full h-full absolute flex justify-center items-center inset-0 rounded-xl bg-black/0 hover:bg-black/70">
                <div className="h-1/2 sm:hidden flex flex-row flex-wrap justify-center items-center gap-2 overflow-y-auto ">
                  {companyDetails.projects[currentProject].techStackUsed.map(
                    ({ iconName }, index) => {
                      return (
                        <SmallSkillItem key={index} skillName={iconName} />
                      );
                    }
                  )}
                </div>
              </div>
            </div>
            <p className="text-lg font-bold">
              {companyDetails.projects[currentProject].projectName}
            </p>
            <p className="text-sm max-h-[100px] hidden sm:block overflow-y-scroll">
              {companyDetails.projects[currentProject].projectSynopsis}
            </p>
            <div className="flex-row gap-2 hidden sm:flex flex-wrap overflow-y-auto">
              {companyDetails.projects[currentProject].techStackUsed.map(
                ({ iconName }, index) => {
                  return <SmallSkillItem key={index} skillName={iconName} />;
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
