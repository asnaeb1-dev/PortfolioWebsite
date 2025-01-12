import { IconFc } from "../../../data/Icons";

const SmallSkillItem = ({ skillName = "" }) => {
  return (
    <div className="h-10 w-fit flex flex-row items-center border-2 rounded-2xl px-2 text-white gap-1">
      <span>
        <IconFc name={skillName} width={22} height={22} />
      </span>
      <span>{skillName}</span>
    </div>
  );
};

export default SmallSkillItem;
