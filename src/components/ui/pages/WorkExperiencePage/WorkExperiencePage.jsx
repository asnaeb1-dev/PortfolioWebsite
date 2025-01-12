import { useEffect, useState } from "react";
import WorkExPath from "../../uicomponents/WorkExPath/WorkExPath";
import { WorkDetails, WorkExperience } from "../../../data/PersonalData";

import MobileWorkExpCard from "../../uicomponents/WorkExPath/MobileWorkExpCard";
import CompanyDetails from "../../uicomponents/WorkExPath/CompanyDetails";

const WorkExperiencePage = () => {
  const [clickedWorkExperience, setClickedWorkExperience] = useState(-1);

  useEffect(() => {
    if (clickedWorkExperience === -1) return;
    console.log(
      "iwre",
      clickedWorkExperience,
      WorkDetails[clickedWorkExperience]
    );
  }, [clickedWorkExperience]);

  return (
    <div className="h-[calc(100vh_-_60px)] overflow-hidden relative p-4 pl-0 flex flex-row lg:w-4/5 lg:mx-auto lg:pt-8">
      <div className="flex flex-col justify-center flex-1">
        <h1 className="font-extrabold text-3xl pb-2 pl-4 lg:text-4xl">
          Work Experience
        </h1>
        <div className="w-full h-full pl-4 overflow-y-auto overflow-x-hidden">
          <WorkExPath
            workExperience={WorkExperience.workList}
            onclick={(index) => setClickedWorkExperience(index)}
          />
        </div>
      </div>
      <div className="flex-0 md:flex-1 bg-gradient-to-tr bg-grad h-[calc(100vh_-_140px)] rounded-xl"></div>
      {clickedWorkExperience !== -1 && (
        <CompanyDetails
          handleClose={() => setClickedWorkExperience((val) => -1)}
          companyDetails={WorkDetails[clickedWorkExperience]}
        />
      )}
    </div>
  );
};

export default WorkExperiencePage;
