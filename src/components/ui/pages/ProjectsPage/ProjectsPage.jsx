import { FaGithub } from "react-icons/fa";
import CodingCard from "../../uicomponents/CodingCard/CodingCard.jsx";
import {
  getFromDB,
  getGFGProfileData,
  getLeetCodeProfileData,
  saveToDB,
} from "../../../data/api.js";
import { useState, useEffect } from "react";
import {
  CodingProfileGithub,
  GFG_Link,
  LeetCode_Link,
  Projects,
} from "../../../data/PersonalData.js";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout.jsx";
import ProjectItem from "../../uicomponents/ProjectItem/ProjectItem.jsx";

import { RxReset as ResetIcon } from "react-icons/rx";
import { IconFc, IconName } from "../../../data/Icons.jsx";

const ProjectsPage = () => {
  const [gfgCodingProfileInfo, setGFGCodingProfileInfo] = useState({});
  const [leetcodeCodingProfileInfo, setLeetCodeCodingProfileInfo] = useState(
    {}
  );
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await getGFGProfileData();
      console.log(response);
      if (Object.values(response).length > 0) {
        const data = {
          totalSolved: response?.totalProblemsSolved,
          easySolved: response?.School + response?.Basic + response?.Easy,
          mediumSolved: response?.Medium,
          hardSolved: response?.Hard,
          profile: "GeeksForGeeks",
        };
        setGFGCodingProfileInfo(data);
        saveToDB(data);
      } else {
        const dbInstance = getFromDB("GeeksForGeeks");
        if (Object.values(dbInstance)[0] === 0) {
          saveToDB({
            totalSolved: 543,
            easySolved: 284,
            mediumSolved: 232,
            hardSolved: 27,
            profile: "GeeksForGeeks",
          });
        }
        setGFGCodingProfileInfo(getFromDB("GeeksForGeeks"));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getLeetCodeProfileData();
      if (Object.values(response).length > 0) {
        const data = {
          totalSolved: response?.totalSolved,
          easySolved: response?.easySolved,
          mediumSolved: response?.mediumSolved,
          hardSolved: response?.hardSolved,
          profile: "LeetCode",
        };
        setLeetCodeCodingProfileInfo(data);
        saveToDB(data);
      } else {
        const dbInstance = getFromDB("LeetCode");
        if (Object.values(dbInstance)[0] !== 0) {
          setLeetCodeCodingProfileInfo(dbInstance);
        } else {
          setLeetCodeCodingProfileInfo({
            totalSolved: 233,
            easySolved: 93,
            mediumSolved: 125,
            hardSolved: 15,
            profile: "LeetCode",
          });
        }
      }
    })();
  }, []);

  return (
    <div
      className={
        "w-full flex flex-col items-center justify-center h-[calc(100vh_-_60px)] lg:h-[calc(100vh_-_100px)] mt-4 lg:mt-8 overflow-hidden"
      }
    >
      <div className="w-full lg:w-4/5 h-full lg:mb-6  lg:bg-white/30 backdrop-blur-sm shadow-xl lg:rounded-2xl">
        <div className="w-full lg:hidden px-4">
          <TabLayout
            currentTopic={currentTab}
            handleClick={(index) => setCurrentTab(index)}
            tabList={["Coding", "Projects"]}
          />
        </div>
        <div className="md:flex flex-col bg-white/30 mt-3 lg:mt-0 shadow-lg w-full h-full p-4 rounded-xl ">
          {/* Mobile layout */}
          <span
            className={`${currentTab === 0 ? "block lg:hidden" : "hidden"}`}
          >
            <CodingLayout
              leetCodeProfile={leetcodeCodingProfileInfo}
              gfgProfile={gfgCodingProfileInfo}
            />
          </span>
          <span
            className={`${currentTab === 1 ? "block lg:hidden" : "hidden"}`}
          >
            <ProjectLayout projectList={Projects} />
          </span>
          {/* Desktop layout */}
          <div className="hidden lg:flex flex-col h-full w-full">
            <div className="w-full">
              <CodingLayout
                leetCodeProfile={leetcodeCodingProfileInfo}
                gfgProfile={gfgCodingProfileInfo}
              />
            </div>
            <div className="w-full h-full">
              <ProjectLayout projectList={Projects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodingLayout = ({ leetCodeProfile, gfgProfile }) => {
  const [difficulty, setDifficulty] = useState(-1);
  return (
    <div className={`w-full overflow-hidden`}>
      <div
        className={`hidden lg:flex flex-row w-full justify-between pr-2 items-center`}
      >
        <h1
          className={
            "hidden lg:block font-extrabold p-2 pb-4 text-4xl lg:text-6xl"
          }
        >
          Coding.
        </h1>
        <a
          href={CodingProfileGithub}
          title={"GitHub"}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
        >
          <FaGithub size={20} />
        </a>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <DifficultySelector
          onSelect={(difficulty) => setDifficulty(difficulty)}
        />
        <div
          className={`w-full h-[62dvh] lg:h-full pb-5 flex flex-col lg:flex-row gap-5 overflow-y-auto`}
        >
          <CodingCard
            link={LeetCode_Link}
            profile={"LeetCode"}
            difficulty={difficulty}
            codingData={leetCodeProfile}
          >
            <IconFc name={IconName.LEETCODE} width={20} height={20} />
          </CodingCard>
          <CodingCard
            link={GFG_Link}
            profile={"GeeksForGeeks"}
            codingData={gfgProfile}
            difficulty={difficulty}
          >
            <IconFc name={IconName.GFG} width={24} height={24} />
          </CodingCard>
        </div>
      </div>
    </div>
  );
};

const DifficultySelector = ({ onSelect }) => {
  return (
    <div className="w-full lg:w-1/2 3xl:w-1/3 h-10 rounded-xl bg-white/30 shadow-xl text-sm font-semibold justify-between flex items-center flex-row">
      <span
        onPointerUp={() => onSelect(2)}
        className="w-full flex justify-center flex-1 h-full flex-row gap-2 items-center cursor-pointer hover:bg-indigo-500/20 hover:rounded-l-xl"
      >
        <span className="bg-red-500 rounded-md w-5 h-5"></span>
        <p>Hard</p>
      </span>
      <span
        onPointerUp={() => onSelect(1)}
        className="w-full flex justify-center flex-1 h-full flex-row gap-2 items-center cursor-pointer hover:bg-indigo-500/20"
      >
        <span className=" bg-orange-500 rounded-md w-5 h-5"></span>
        <p>Medium</p>
      </span>
      <span
        onPointerUp={() => onSelect(0)}
        className="w-full flex justify-center flex-1 h-full flex-row gap-2 items-center cursor-pointer hover:bg-indigo-500/20"
      >
        <span className="bg-emerald-500 rounded-md w-5 h-5"></span>
        <p>Easy</p>
      </span>
      <span
        onPointerUp={() => onSelect(-1)}
        className="mx-3 border-2 p-1 rounded-full cursor-pointer border-indigo-400"
      >
        <ResetIcon />
      </span>
    </div>
  );
};

const ProjectLayout = ({ projectList = [] }) => {
  const [currentProjectTopic, setCurrentProjectTopic] = useState(0);
  return (
    <div className={`w-full lg:flex flex-col h-full`}>
      <h1 className={"font-extrabold py-2 hidden lg:block md:text-6xl"}>
        Projects.
      </h1>
      <div className="w-full h-[calc(100dvh_-_180px)] lg:h-[calc(100dvh_-_700px)] 3xl:h-[45dvh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 linearGradientReverse shadow-xl rounded-xl p-4 my-container overflow-y-auto">
        {projectList.map((project, index) => {
          return <ProjectItem key={index} prop={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
