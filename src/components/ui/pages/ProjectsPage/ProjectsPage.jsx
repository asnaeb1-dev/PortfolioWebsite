import {FaGithub} from "react-icons/fa";
import CodingCard from "../../uicomponents/CodingCard/CodingCard.jsx";
import {getFromDB, getGFGProfileData, getLeetCodeProfileData, saveToDB} from "../../../data/api.js";
import {useState, useEffect, useLayoutEffect} from "react";
import {GeeksForGeeksIcon, LeetCodeIcon} from "../../../data/Icons.jsx";

const ProjectsPage = () => {
  const [codingProfileInfo, setCodingProfileInfo] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await getGFGProfileData();
      setCodingProfileInfo(data => {
        const tempData = [...codingProfileInfo];
        tempData.push({
          totalSolved: response?.totalProblemsSolved,
          easySolved: response?.School + response?.Basic + response?.Easy,
          mediumSolved: response?.Medium,
          hardSolved: response?.Hard,
          profile: "GFG"
        })
        return tempData;
      });
    })()
  }, []);

  useEffect(() => {
    (async() => {
      const response = await getLeetCodeProfileData();
      setCodingProfileInfo(data => {
        const tempData = [...codingProfileInfo];
        tempData.push({
          totalSolved: response?.totalSolved,
          easySolved: response?.easySolved,
          mediumSolved: response?.mediumSolved,
          hardSolved: response?.hardSolved,
          profile: "LeetCode"
        });
        return tempData;
      });
    })()
  }, []);

  return (
    <div className={`w-full h-[calc(100vh_-_112px)] mt-8 overflow-hidden flex items-center justify-center`}>
      <div className={"w-3/4 h-full"}>
        <CodingInformation codingInformation={codingProfileInfo}  />
      </div>
    </div>
  )
};

const CodingInformation = ({ codingInformation = [] }) => {

  return (
    <>
      <div className={`flex flex-row w-full justify-between items-center`}>
        <h1 className={"font-extrabold text-6xl"}>Coding</h1>
        <span title={"GitHub"}
          className={`p-2 rounded-full transition-all border-2 hover:scale-110 hover:text-white hover:bg-indigo-500 text-indigo-500 border-indigo-500 cursor-pointer `}
        >
          <FaGithub size={20}/>
        </span>
      </div>
      <div className={`w-full grid grid-cols-3 gap-10 my-5`}>
        <CodingCard codingData={codingInformation[0]}>
          {LeetCodeIcon}
        </CodingCard>
        <CodingCard codingData={codingInformation[1]}>
          {GeeksForGeeksIcon}
        </CodingCard>
      </div>
    </>
  )
}

export default ProjectsPage