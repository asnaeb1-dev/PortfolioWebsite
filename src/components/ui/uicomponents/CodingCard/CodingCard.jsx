import {useEffect, useState} from "react";

const CodingCard = ({ codingData = {}, children, profile = "Coding Profile", link ="/" }) => {
  const easyQuestionSolved = Math.round((codingData?.easySolved * 100) / codingData.totalSolved);
  const mediumQuestionSolved = Math.round((codingData?.mediumSolved * 100) / codingData.totalSolved);
  const hardQuestionSolved = Math.round((codingData?.hardSolved * 100) / codingData.totalSolved);

  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer;
    if(!codingData?.totalSolved) return;
    if (count < codingData?.totalSolved) {
      timer = setTimeout(() => {
        setCount(count => count+1)
      }, 5)
    }
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [count, codingData?.totalSolved]);

  return (
    <div className={`w-full shadow-xl h-[250px] flex flex-row bg-indigo-600/10 cursor-pointer rounded-3xl p-4 duration-500 transition-transform ${profile === "LeetCode" ? "origin-left" : "origin-right"} hover:scale-[102%]`}>
      <div className={`flex-1 flex flex-col gap-2`}>
        <div className={"flex flex-row items-center gap-3"}>
          <span className={"w-5 h-5 mb-1"}>
            {children}
          </span>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl font-bold text-ellipsis transition-all hover:text-indigo-500 hover:underline hover:underline-offset-4 overflow-hidden whitespace-nowrap"
          >
            {profile}
          </a>
        </div>
        <p className={"text-4xl text-indigo-500 font-semibold"}>{count ?? 0}</p>
        <div className={"flex flex-col gap-2 text-sm mt-3"}>
          <span className="flex flex-row gap-3 items-center font-semibold">
            <div className={"h-[20px] w-[20px] bg-emerald-400 rounded-md"}></div>
            <p>Easy: {codingData?.easySolved}</p>
          </span>
          <span className="flex flex-row gap-3 items-center font-semibold">
            <div className={"h-[20px] w-[20px] bg-orange-400 rounded-md"}></div>
            <p>Medium: {codingData?.mediumSolved}</p>
          </span>
          <span className="flex flex-row gap-3 items-center font-semibold">
            <div className={"h-[20px] w-[20px] bg-red-500 rounded-md"}></div>
            <p>Hard: {codingData?.hardSolved}</p>
          </span>
        </div>
      </div>
      <div className={`flex-[2] border-black p-3`}>
        <div
          className={`w-full text-indigo-500 font-semibold h-full relative flex flex-col gap-2 border-l-[1px] border-b-[1px] border-black/30`}
        >
          <p className={"absolute bottom-[-24px] text-sm"}>0</p>
          <p className={"absolute bottom-[-24px] text-sm right-1/2 translate-x-1/2"}>50</p>
          <p className={"absolute bottom-[-24px] text-sm right-0"}>100</p>
          <div title={`Easy: ${easyQuestionSolved}%`} style={{width: `${easyQuestionSolved}%`}}
               className={`mt-auto duration-500 transition-all w-0 rounded-r-lg h-8 bg-emerald-400`}></div>
          <div title={`Medium: ${mediumQuestionSolved}%`} style={{width: `${mediumQuestionSolved}%`}}
               className={`duration-500 my-auto transition-all w-0 rounded-r-lg h-8 bg-orange-400`}></div>
          <div title={`Hard: ${hardQuestionSolved}%`} style={{width: `${hardQuestionSolved}%`}}
               className={`duration-500 mb-auto transition-all w-0 rounded-r-lg h-8 bg-red-500`}></div>
        </div>
      </div>
    </div>
  );
};

export default CodingCard;