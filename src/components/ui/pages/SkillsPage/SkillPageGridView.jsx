import { IconFc } from "../../../data/Icons";
import SkillItem from "../../uicomponents/SkillItem/SkillItem";

const SkillPageGridView = ({ skills = [] }) => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col gap-6 xl:gap-10 lg:w-4/5 lg:self-center xl:w-3/5 2xl:w-3/5 overflow-y-auto px-2">
      {skills?.skillList?.map((skillCategory, index) => {
        return (
          <div className="gap-3 flex flex-col" key={index}>
            <h1 className=" font-bold text-lg xl:text-2xl text-start overflow-hidden text-ellipsis whitespace-nowrap">
              {skillCategory?.skillType}
            </h1>
            <div className=" flex flex-col gap-3 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-5">
              {skillCategory?.skills?.map((skill) => (
                <SkillItem
                  key={skill.skillName}
                  skillTitle={skill.skillName}
                  progress={skill.progress}
                >
                  <IconFc name={skill.iconName} />
                </SkillItem>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillPageGridView;
