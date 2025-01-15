import { useEffect, useState } from "react";
import "./workexpath.css";
import WorkExpCard from "./WorkExpCard";

const WorkExPath = ({ workExperience = [], onclick }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  return (
    <div className="w-full md:w-56 flex justify-center">
      <div className="w-full h-full flex flex-col items-start">
        {workExperience?.map((company, index) => {
          return (
            <IndividualWorkExPath
              index={index}
              begin={currentPosition === index}
              end={index === workExperience.length - 1}
              isDone={() => setCurrentPosition(currentPosition + 1)}
              details={company}
              onclick={(index) => onclick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

const IndividualWorkExPath = ({
  begin = false,
  isDone,
  onclick,
  index = 0,
  end = false,
  details,
}) => {
  const [start, setStart] = useState(false);
  const [isTransitionCompleted, setTransitionCompleted] = useState(false);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!begin) return;
    setStart(begin);
  }, [begin]);

  return (
    <div
      style={{ transform: `translateY(-${20 * index}px)` }}
      className={`flex flex-col relative items-center`}
    >
      <span
        className={`w-4 h-4 hover:cursor-pointer hover:outline-2 hover:outline-indigo-500 relative top-3 shadow-xl ${
          start && "opacity-100"
        } opacity-0 rounded-full bg-indigo-500 ${
          clicked ||
          (!isTransitionCompleted &&
            begin &&
            "animateOffset outline outline-indigo-500")
        }`}
      ></span>
      {!end && (
        <div
          onTransitionEnd={() => (setTransitionCompleted(true), isDone())}
          className={`w-1 ${
            start ? "h-40 md:h-44 lg:h-52 xl:h-56" : "h-0"
          } bg-indigo-500 rounded-full duration-[1500ms] transition-all`}
        ></div>
      )}
      {details?.companyName && (
        <WorkExpCard
          onclick={() => (onclick(index), setClicked(true))}
          start={start}
          workDetails={details}
          index={index}
        />
      )}
      <span
        className={`absolute w-[100dvh] text-sm lg:text-lg h-0 font-bold opacity-0 top-2.5 lg:top-1.5 left-[200%] ${
          start && "opacity-100"
        } `}
      >
        {details?.timeSpan}
      </span>
    </div>
  );
};

export default WorkExPath;
