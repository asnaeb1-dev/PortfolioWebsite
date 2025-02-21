import { useState } from "react";
import { IconFc } from "../../../data/Icons";
import SkillItem from "../../uicomponents/SkillItem/SkillItem";
import { IoIosArrowDown as DownArrow } from "react-icons/io";
const SkillPageGridView = ({ skills = [] }) => {
  return (
    <div className="w-full lg:w-4/5 p-4 pt-2 lg:pb-7 overflow-x-hidden flex flex-col gap-6 xl:gap-10 lg:self-center">
      {skills?.skillList?.map(({ skillType, skills }, index) => {
        return (
          <SkillCategory key={index} skillType={skillType} skills={skills} />
        );
      })}
    </div>
  );
};

const SkillCategory = ({ skillType = "", skills = [] }) => {
  const [isSkillCategoryOpen, setIsSkillCategoryOpen] = useState(true);
  return (
    <div className="gap-3 flex flex-col">
      <span className="flex flex-row justify-between items-center">
        <h1 className=" font-bold text-lg xl:text-2xl text-start overflow-hidden text-ellipsis whitespace-nowrap dark:text-indigo-500">
          {skillType}
        </h1>
        <span
          onPointerUp={() => setIsSkillCategoryOpen(!isSkillCategoryOpen)}
          className={`block lg:hidden p-1 border-2 border-indigo-500 ${
            isSkillCategoryOpen ? "rotate-180" : "rotate-0"
          } rounded-full hover:scale-105 active:scale-90 transition-transform`}
        >
          <DownArrow color="rgb(99 102 241)" />
        </span>
      </span>
      {isSkillCategoryOpen && (
        <div className=" flex flex-col gap-3 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-5">
          {skills?.map((skill) => {
            return (
              <SkillItem
                key={skill.skillName}
                skillTitle={skill.skillName}
                progress={skill.progress}
              >
                <IconFc name={skill.iconName} />
              </SkillItem>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SkillPageGridView;
