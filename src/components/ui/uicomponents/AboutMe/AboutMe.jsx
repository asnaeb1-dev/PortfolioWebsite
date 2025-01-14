import { useEffect, useRef } from "react";
import useClickedOutside from "../../../data/CustomHooks/useClickedOutside/useClickedOutside";
import { IconFc } from "../../../data/Icons";
import "./aboutme.css";

const AboutMe = ({ aboutMeText = "", closeAboutMe, isOpen = false }) => {
  const boxRef = useRef();
  const isClickedOutside = useClickedOutside(boxRef, true);
  useEffect(() => {
    if (isClickedOutside) {
      closeAboutMe();
    }
  }, [isClickedOutside]);

  return (
    <div
      ref={boxRef}
      className={`my-container appear shadow-xl w-full  bg-indigo-500/10 backdrop-blur-md backdrop-saturate-200  overflow-hidden flex flex-col p-4 xl:p-8 rounded-3xl gap-2 md:gap-4 lg:gap-5`}
    >
      <div className="flex flex-col gap-1 md:gap-3 lg:gap-5 ">
        <p className="font-extrabold text-2xl md:text-4xl xl:text-6xl text-indigo-600">
          About me.
        </p>
        <span className="text-md h-[100px] 3xl:h-[200px] 3xl:text-lg text-justify overflow-y-auto font-semibold pr-2">
          {aboutMeText}
        </span>
      </div>
      <span className=" h-full flex-col w-full lg:gap-3 flex flex-1 md:flex-[0] gap-2">
        <p className="text-sm md:text-xl 2xl:text-3xl font-bold">
          What do I do?
        </p>
        <div className="flex my-container border-2 border-white items-center overflow-hidden flex-row overflow-y-auto w-full h-full rounded-[2rem] gap-5 p-2 lg:p-4">
          <SkillBlock
            index={0}
            type={"react"}
            text={"Web Developer"}
            dimension={90}
          />
          <SkillBlock
            index={1}
            type={"nodejs"}
            text={"Backend Dev"}
            dimension={90}
          />
          <SkillBlock
            index={2}
            type={"gaming"}
            text={"Gaming & Play"}
            dimension={90}
          />
        </div>
      </span>
    </div>
  );
};

const SkillBlock = ({ type = "", text, dimension = 48, index = 0 }) => {
  const divRef = useRef();
  const hasClickedOutside = useClickedOutside(divRef);
  if (hasClickedOutside) return null;
  return (
    <div
      className={`
				w-full
				h-full
				flex-col
				p-2
				linearGradient
				md:hover:scale-95 gap-1  transition-transform shadow-xl md:hover:outline outline-2 outline-offset-2 outline-indigo-500/40 cursor-pointer flex justify-center items-center  rounded-3xl`}
    >
      <IconFc name={type} width={dimension} height={dimension} />
      <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-center hidden md:block">
        {text}
      </p>
    </div>
  );
};

export default AboutMe;
