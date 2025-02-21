import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { PersonalityList } from "../../../data/strings";
import BackgroundParticles from "../../uicomponents/BackgroundParticles/BackgroundParticles";

import {
  FaLinkedin as LinkedInIcon,
  FaGithubSquare as GithubIcon,
} from "react-icons/fa";

import "./intro.css";
import NameComponent from "../../uicomponents/NameComponent/NameComponent.jsx";
import { AboutMeDescription } from "../../../data/PersonalData.js";
import AboutMe from "../../uicomponents/AboutMe/AboutMe.jsx";
import MyImage from "../../uicomponents/AboutMe/MyImage.jsx";

const IntroductionPage = () => {
  const typedElementRef = useRef(null);
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: PersonalityList,
      typeSpeed: 50,
      backSpeed: 30,
      smartBackspace: true,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-[calc(100dvh_-_77px)] md:h-[calc(100dvh_-_60px)] w-4/5 mx-auto lg:h-[calc(100dvh_-_80px)] flex flex-col-reverse lg:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-[25px] dark:text-indigo-500 text-center md:text-[35px] lg:text-start lg:text-[50px] xl:text-[80px] font-extrabold w-3/5">
          Hey! There,
        </h1>
        <span className="justify-center lg:justify-start text-[22px] md:text-[30px] lg:text-[32px] xl:text-[40px] font-extrabold flex flex-row gap-2 w-3/5">
          <h1 className="dark:text-indigo-500">I'm</h1>
          <NameComponent nameText={"Abhigyan"} />
          <h1 className="dark:text-indigo-500">Raha</h1>
        </span>
        <span className="w-full justify-center lg:justify-start text-[16px] md:w-3/5 md:text-[20px] lg:text-[22px] mt-4 font-extrabold flex flex-row gap-2">
          <h1 className="dark:text-white">I'm a</h1>
          <h1 ref={typedElementRef} className=" text-indigo-500"></h1>
        </span>
        <div className="w-full md:w-3/5 mt-5 flex justify-center lg:justify-start">
          <button
            onClick={() => setShowAboutMe(!showAboutMe)}
            className="p-2 font-bold relative outline-2 outline-offset-2 hover:outline outline-indigo-500 transition-all px-8 gap-4 shadow-indigo-400 rounded-full shadow-lg hover:shadow-xl hover:px-9 hover:shadow-indigo-500/40 border-2 border-indigo-500 text-white bg-indigo-500"
          >
            <p>About Me</p>
            <div className="w-1/2 h-full bg-white/30 blur-md rounded-3xl animate-move top-0 left-0 absolute"></div>
          </button>
        </div>
        <div className="w-full md:w-3/5 mt-5 flex justify-center lg:justify-start flex-row gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/asnaeb1-dev"
            className="border-2 rounded-full p-2 sm:px-5 hover:px-7 flex flex-row gap-3 justify-between items-center github"
          >
            <GithubIcon size={20} />
            <p className={"hidden sm:block"}>GitHub</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/abhigyan-raha/"
            className="border-2  backdrop-blur-lg backdrop-saturate-150  rounded-full hover:px-5 p-2 sm:px-3 flex flex-row gap-3 justify-between items-center linkedin"
          >
            <LinkedInIcon size={20} />
            <p className={"hidden sm:block"}>LinkedIn</p>
          </a>
        </div>
      </div>
      <div className="flex-1 flex md:justify-center items-center">
        <div
          className={`w-full h-full ${
            !showAboutMe && "moving"
          } lg:h-1/2 flex justify-center transition-transform origin-center items-center`}
        >
          {showAboutMe ? (
            <AboutMe
              isOpen={showAboutMe}
              aboutMeText={AboutMeDescription}
              closeAboutMe={() => setShowAboutMe(false)}
            />
          ) : (
            <MyImage />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
