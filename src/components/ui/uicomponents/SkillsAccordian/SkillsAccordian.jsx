import React, { useEffect, useState } from "react";
import { FaAngleDown as DownIcon, FaAngleUp as UpIcon } from "react-icons/fa";

import "./skillsaccordian.css";
import { IconFc } from "../../../data/Icons";

const SkillsAccordian = ({ skills = [] }) => {
  const [expandedItem, setExpandedItem] = useState(-1);

  return (
    <div className="w-full lg:w-4/5 px-4 pb-4 pt-2 lg:pb-7 overflow-x-hidden flex flex-col gap-3 lg:self-center">
      {skills?.skillList?.map((skillType, index) => {
        return (
          <AccordianItem
            key={skillType.skillType}
            skills={skillType}
            isExpanded={index === expandedItem}
            setIsExpanded={() => setExpandedItem(index)}
          />
        );
      })}
    </div>
  );
};

const AccordianItem = ({ skills = {}, isExpanded = false, setIsExpanded }) => {
  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`w-full select-none rounded-md cursor-pointer p-4 bg-indigo-500/30 border-2 $ transition-all border-transparent hover:border-indigo-500 hover:border-2`}
    >
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold">{skills.skillType}</h1>
        <span className={`transition-transform ${isExpanded && "rotate-180"}`}>
          <DownIcon />
        </span>
      </div>
      {
        <div className={`py-2 ${isExpanded ? "animateOpen" : "animateClose"}`}>
          <ul className="grid grid-cols-3 gap-2">
            {skills?.skills?.map((skill, index) => {
              return (
                <li
                  className=" cursor-pointer hover:bg-white/30 p-1 text-[12px] rounded-lg flex flex-col font-medium text-sm items-center"
                  key={index}
                >
                  <IconFc name={skill.iconName} />
                  {skill.skillName}
                </li>
              );
            })}
          </ul>
        </div>
      }
    </div>
  );
};

export default SkillsAccordian;
