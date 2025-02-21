import { useEffect, useState } from "react";
import WorkExPath from "../../uicomponents/WorkExPath/WorkExPath";
import { WorkDetails, WorkExperience } from "../../../data/PersonalData";

import MobileWorkExpCard from "../../uicomponents/WorkExPath/MobileWorkExpCard";
import CompanyDetails from "../../uicomponents/WorkExPath/CompanyDetails";

import "../../../../index.css";

const WorkExperiencePage = () => {
  const [clickedWorkExperience, setClickedWorkExperience] = useState(-1);

  return (
    <div className="w-full flex flex-col items-center h-[calc(100vh_-_60px)] lg:h-[calc(100vh_-_100px)] lg:mt-8 overflow-hidden">
      <div className="w-full lg:w-4/5  h-full hidden-scrollbar flex flex-col lg:mb-6 overflow-y-auto p-4  lg:bg-white/30 backdrop-blur-sm shadow-xl lg:rounded-2xl ">
        <h1 className="font-extrabold text-3xl lg:text-4xl xl:text-5xl lg:px-2 dark:text-white">
          Work Experience
        </h1>
        <div className="overflow-y-hidden h-full justify-center flex flex-row sm:gap-4 lg:gap-2 lg:p-2 ">
          <div className="w-full md:w-1/2 pl-2 lg:pl-4 h-full overflow-y-auto hidden-scrollbar overflow-x-hidden">
            <WorkExPath
              workExperience={WorkExperience.workList}
              onclick={(index) => setClickedWorkExperience(index)}
            />
          </div>
          <div className="hidden md:block w-full h-full absolute md:static md:w-1/2 shadow-lg rounded-xl linearGradientReverse">
            {/* content */}
            {clickedWorkExperience !== -1 ? (
              <CompanyDetails
                companyDetails={WorkDetails[clickedWorkExperience]}
              />
            ) : (
              <p className="w-full text-xl font-bold text-indigo-500 h-full flex justify-center items-center">
                Click on a company to know more
              </p>
            )}
          </div>
          <div
            className={`${
              clickedWorkExperience !== -1 ? "block" : "hidden"
            } md:hidden absolute w-full animateOpenMobile bottom-0`}
          >
            {clickedWorkExperience !== -1 && (
              <CompanyDetails
                handleClose={() => setClickedWorkExperience(-1)}
                companyDetails={WorkDetails[clickedWorkExperience]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
