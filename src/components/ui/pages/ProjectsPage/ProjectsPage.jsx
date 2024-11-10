import {FaGithub} from "react-icons/fa";
import CodingCard from "../../uicomponents/CodingCard/CodingCard.jsx";
import {getFromDB, getGFGProfileData, getLeetCodeProfileData, saveToDB} from "../../../data/api.js";
import {useState, useEffect, useLayoutEffect} from "react";
import {GeeksForGeeksIcon, LeetCodeIcon} from "../../../data/Icons.jsx";
import {GFG_Link, LeetCode_Link} from "../../../data/PersonalData.js";

const ProjectsPage = () => {
  const [gfgCodingProfileInfo, setGFGCodingProfileInfo] = useState({});
  const [leetcodeCodingProfileInfo, setLeetCodeCodingProfileInfo] = useState({});

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
        setLeetCodeCodingProfileInfo(getFromDB("LeetCode"))
      }
    })()
  }, []);

  return (
    <div className={`w-full h-[calc(100vh_-_112px)] flex flex-col items-center mt-8 overflow-hidden`}>
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

    </div>
  )
};


export default ProjectsPage