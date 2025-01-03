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
  GFG_Link,
  LeetCode_Link,
  Projects,
} from "../../../data/PersonalData.js";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout.jsx";
import ProjectItem from "../../uicomponents/ProjectItem/ProjectItem.jsx";

import { MdNavigateNext as NextProjectIcon } from "react-icons/md";
import { IconFc, IconName } from "../../../data/Icons.jsx";

const ProjectsPage = () => {
  const [gfgCodingProfileInfo, setGFGCodingProfileInfo] = useState({});
  const [leetcodeCodingProfileInfo, setLeetCodeCodingProfileInfo] = useState(
    {}
  );
  const [currentProjectTopic, setCurerentProjectTopic] = useState(0);
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
      className={`w-full h-[calc(100dvh_-_95px)] px-4 lg:px-0 overflow-hidden lg:h-[calc(100dvh_-_112px)] flex flex-col items-center mt-8`}
    >
      <span className={`md:hidden w-full flex items-center justify-between`}>
        <TabLayout
          currentTopic={currentTab}
          handleClick={(index) => setCurrentTab(index)}
          tabList={["Coding", ["Projects"]]}
        />
        <span
          title={"GitHub"}
          className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
        >
          <FaGithub size={20} />
        </span>
      </span>
      <>
        {/* coding tab */}
        <div
          className={`w-full ${
            currentTab === 0 ? "block" : "hidden"
          } lg:block lg:w-4/5 mt-2 overflow-hidden`}
        >
          <div
            className={` hidden lg:flex flex-row w-full justify-between items-center`}
          >
            <h1 className={"font-extrabold text-4xl lg:text-4xl"}>Coding</h1>
            <span
              title={"GitHub"}
              className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
            >
              <FaGithub size={20} />
            </span>
          </div>
          <div className="w-full h-10 rounded-xl mt-2 bg-white/50 text-sm font-semibold backdrop-saturate-200 px-4 justify-between flex items-center flex-row">
            <span className="flex flex-row gap-2 items-center">
              <span className="bg-red-500 rounded-md w-5 h-5"></span>
              <p>Hard</p>
            </span>
            <span className="flex flex-row gap-2 items-center">
              <span className=" bg-orange-500 rounded-md w-5 h-5"></span>
              <p>Medium</p>
            </span>
            <span className="flex flex-row gap-2 items-center">
              <span className="bg-emerald-500 rounded-md w-5 h-5"></span>
              <p>Easy</p>
            </span>
          </div>
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-5 overflow-y-auto`}
          >
            <CodingCard
              link={LeetCode_Link}
              profile={"LeetCode"}
              codingData={leetcodeCodingProfileInfo}
            >
              <IconFc name={IconName.LEETCODE} width={20} height={20} />
            </CodingCard>
            <CodingCard
              link={GFG_Link}
              profile={"GeeksForGeeks"}
              codingData={gfgCodingProfileInfo}
            >
              <IconFc name={IconName.GFG} width={24} height={24} />
            </CodingCard>
          </div>
        </div>
        {/* projects tab */}
        <div
          className={`mb-4 w-full ${
            currentTab === 1 ? "block" : "hidden"
          } lg:block`}
        >
          <h1 className={"font-extrabold py-4 hidden lg:block lg:text-4xl"}>
            Projects
          </h1>
          <div
            className={
              "w-full flex flex-col gap-4 p-4 mt-4 h-[calc(100dvh_-_180px)] overflow-hidden backdrop-blur-sm backdrop-saturate-150 shadow-xl rounded-xl linearGradientReverse"
            }
          >
            <span className={`flex flex-row justify-between items-center`}>
              <TabLayout
                handleClick={(index) => setCurerentProjectTopic(index)}
                currentTopic={currentProjectTopic}
                tabList={["Frontend", "Backend", "Design"]}
              />
            </span>
            <div
              className={
                "grid h-full overflow-y-auto  overflow-x-hidden grid-cols-2 gap-1"
              }
            >
              {Projects.map((project, index) => (
                <ProjectItem key={index} prop={project} />
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectsPage;
