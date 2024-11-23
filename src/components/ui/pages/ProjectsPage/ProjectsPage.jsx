import {FaGithub} from "react-icons/fa";
import CodingCard from "../../uicomponents/CodingCard/CodingCard.jsx";
import {getFromDB, getGFGProfileData, getLeetCodeProfileData, saveToDB} from "../../../data/api.js";
import {useState, useEffect} from "react";
import {GeeksForGeeksIcon, LeetCodeIcon} from "../../../data/Icons.jsx";
import {GFG_Link, LeetCode_Link, Projects} from "../../../data/PersonalData.js";
import TabLayout from "../../uicomponents/ProjectTabs/TabLayout.jsx";
import ProjectItem from "../../uicomponents/ProjectItem/ProjectItem.jsx";

const ProjectsPage = () => {
  const [gfgCodingProfileInfo, setGFGCodingProfileInfo] = useState({});
  const [leetcodeCodingProfileInfo, setLeetCodeCodingProfileInfo] = useState({});
  const [currentProjectTopic, setCurerentProjectTopic] = useState(0);
  useEffect(() => {
    (async() => {
      const response = await getGFGProfileData();
      console.log(response);
      if(Object.values(response).length > 0) {
        const data = {
          totalSolved: response?.totalProblemsSolved,
          easySolved: response?.School + response?.Basic + response?.Easy,
          mediumSolved: response?.Medium,
          hardSolved: response?.Hard,
          profile: "GeeksForGeeks"
        };
        setGFGCodingProfileInfo(data);
        saveToDB(data);
      } else {
        const dbInstance = getFromDB("GeeksForGeeks");
        if(Object.values(dbInstance)[0] === 0) {
          saveToDB({
            totalSolved: 543,
            easySolved: 284,
            mediumSolved: 232,
            hardSolved: 27,
            profile: "GeeksForGeeks"
          });
        }
        setGFGCodingProfileInfo(getFromDB("GeeksForGeeks"));
      }
    })()
  }, []);

  useEffect(() => {
    (async() => {
      const response = await getLeetCodeProfileData();
      if(Object.values(response).length > 0) {
        const data = {
          totalSolved: response?.totalSolved,
          easySolved: response?.easySolved,
          mediumSolved: response?.mediumSolved,
          hardSolved: response?.hardSolved,
          profile: "LeetCode"
        }
        setLeetCodeCodingProfileInfo(data);
        saveToDB(data);
      } else {
        const dbInstance = getFromDB("LeetCode");
        if(Object.values(dbInstance)[0] !== 0) {
          setLeetCodeCodingProfileInfo(dbInstance);
        } else {
          setLeetCodeCodingProfileInfo({
            totalSolved: 233,
            easySolved: 93,
            mediumSolved: 125,
            hardSolved: 15,
            profile: "LeetCode"
          })
        }
      }
    })()
  }, []);

  return (
    <div className={`w-full h-[calc(100vh_-_95px)] lg:h-[calc(100vh_-_112px)] flex flex-col items-center mt-8`}>
      <div className={`w-4/5`}>
        <div className={`flex flex-row w-full justify-between items-center`}>
          <h1 className={"font-extrabold text-6xl"}>Coding</h1>
          <span title={"GitHub"}
                className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
          >
          <FaGithub size={20}/>
        </span>
        </div>
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-5`}>
          <CodingCard link={LeetCode_Link} profile={"LeetCode"} codingData={leetcodeCodingProfileInfo}>
            {LeetCodeIcon}
          </CodingCard>
          <CodingCard link={GFG_Link} profile={"GeeksForGeeks"} codingData={gfgCodingProfileInfo}>
            {GeeksForGeeksIcon}
          </CodingCard>
        </div>
      </div>
      <div className={`w-4/5 mb-4`}>
        <h1 className={"font-extrabold py-4 text-6xl"}>Projects</h1>
        <div className={"w-full flex flex-col gap-4 p-4 h-[calc(100vh_-_600px)] overflow-hidden shadow-xl rounded-xl linearGradientReverse"}>
          <TabLayout handleClick={(index) => setCurerentProjectTopic(index)} currentTopic={currentProjectTopic} tabList={["Frontend", "Backend", "Design"]} />
          <div className={"grid h-full overflow-y-auto  overflow-x-hidden grid-cols-1 lg:grid-cols-2 gap-5"}>
            {
              Projects.map((projectItem, index) => {
                return <ProjectItem key={index} prop={projectItem} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};


export default ProjectsPage