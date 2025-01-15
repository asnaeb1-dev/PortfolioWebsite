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
    <div className="h-[calc(100dvh_-_64px)] lg:h-[calc(100dvh_-_80px)] overflow-hidden p-4 lg:pt-12 flex flex-col gap-2 w-full lg:w-4/5  mx-auto ">
      <div className="xsm:text-[30px] w-full sm:text-[40px] font-extrabold flex flex-row justify-between items-center">
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
  );
};

export default SkillsPage;
