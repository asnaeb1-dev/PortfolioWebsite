import { useEffect, useState } from "react";
import SkillsAccordian from "../../uicomponents/SkillsAccordian/SkillsAccordian";
import { Skills } from "../../../data/PersonalData";
import GridSwitch from "../../uicomponents/GridSwitch/GridSwitch";
import SkillPageGridView from "./SkillPageGridView";

const SkillsPage = () => {
  const [isGridView, setGridView] = useState(true);

  useEffect(() => {
    console.log(isGridView);
  }, [isGridView]);

  return (
    <div className="w-full flex flex-col h-[calc(100dvh_-_60px)] lg:h-[calc(100dvh_-_80px)] overflow-hidden">
      <div className="w-full h-full lg:pt-6 flex flex-col items-center">
        <div className="xsm:text-[30px] p-4 lg:px-4 w-full lg:w-4/5 sm:text-[40px] font-extrabold flex flex-row justify-between items-center">
          <p className="w-full text-md">Skills</p>
          <GridSwitch
            isGridView={isGridView}
            handleGridClick={() => setGridView(true)}
            handleListClick={() => setGridView(false)}
          />
        </div>
        {!isGridView ? (
          <SkillsAccordian skills={Skills} />
        ) : (
          <SkillPageGridView skills={Skills} />
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
