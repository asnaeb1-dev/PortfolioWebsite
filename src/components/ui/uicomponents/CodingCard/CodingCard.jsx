import SemiCircularProgressBar from "./SemiCircularProgressBar.jsx";
import {useEffect, useState} from "react";
import { IoIosArrowDown as DownArrow } from "react-icons/io";

const CodingCard = ({ codingData = {}, children }) => {
  const [isCardOpen, setCardOpen] = useState(false);
  return (
    <div className={`w-full shadow-xl transition ${!isCardOpen ? "h-[230px]" : "h-[430px]"} flex flex-col bg-indigo-600/10 cursor-pointer transition-transform rounded-3xl p-4 transition-shadow hover:scale-[101%]`}>
      <div className={"w-full flex items-center justify-between"}>
        <SemiCircularProgressBar
          easyCount={codingData?.easySolved}
          mediumCount={codingData?.mediumSolved}
          hardCount={codingData?.hardSolved}
        >
          {
            <h1>{codingData?.totalSolved}</h1>
          }
        </SemiCircularProgressBar>
        <span className={"h-full w-[40px] flex items-center mb-5"}>
          {children}
        </span>
      </div>

      <div className={"flex flex-col gap-2 font-bold text-sm"}>
        <Progress
            solvedQues={codingData?.easySolved}
            totalQues={codingData?.totalSolved}
            title={"Easy"}
            progressColor={"#00ff00"}
        />
        <Progress
          solvedQues={codingData?.mediumSolved}
          totalQues={codingData?.totalSolved}
          title={"Med"}
          progressColor={"#fdba74"}
        />
        <Progress
          solvedQues={codingData?.hardSolved}
          totalQues={codingData?.totalSolved}
          title={"Hard"}
          progressColor={"#ff0000"}
        />
      </div>
      <div className={"h-full flex items-end justify-center"}>
        <span onClick={() => setCardOpen(!isCardOpen)} className={`hover:bg-white/20 transition hover:scale-[101%] ${isCardOpen ? "rotate-180" : "rotate-0"} p-1 rounded-full`}>
          <DownArrow size={20} />
        </span>
      </div>
    </div>
  );
};

const Progress = ({title = "easy", progressColor = "", solvedQues = 0, totalQues = 0 }) => {
  const [start, setStart] = useState(false);
  const percentFill = Math.floor((Number(solvedQues) * 100) / Number(totalQues));

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 300)
  }, []);

  return (
    <span className={"flex flex-row items-center gap-3 justify-between"}>
      <p className={"flex-1"}>{title}</p>
      <div className={"w-full h-2 bg-white/20 rounded-full"}>
        <div
          title={solvedQues}
          className={`transition-all duration-700 bg-indigo-400 h-full rounded-full`}
          style={start ? {width: `${percentFill}%`} : {width: `0px`}}
        >
        </div>
      </div>
      <p className={"flex-1 text-[12px]"}>{percentFill}%</p>
      </span>
  )
}

export default CodingCard;