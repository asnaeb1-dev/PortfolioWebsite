import {useEffect, useState} from "react";
import './codingcard.css';

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
    <div className={`w-full shadow-xl h-[250px] flex flex-row bg-indigo-600/10 cursor-pointer rounded-3xl pb-4 pt-2 px-3 duration-500 transition-transform ${profile === "LeetCode" ? "origin-left" : "origin-right"} hover:scale-[102%]`}>
      {
        !codingData || !codingData.totalSolved || codingData.totalSolved === 0 ? <NoDataAvailable codingProfile={profile} icon={children} /> :
          (<>
            {/*  This is the left side. this will be hidden in smaller layouts*/}
            <div className={`hidden flex-1 lg:flex flex-col gap-2`}>
              <div className={"flex flex-row items-center gap-3"}>
                <span className={"w-5 h-5 mb-1"}>
                  {children}
                </span>
                <a
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hidden md:block text-xl font-bold text-ellipsis transition-all hover:text-indigo-500 hover:underline hover:underline-offset-4 overflow-hidden whitespace-nowrap"
                >
                  {profile}
                </a>
              </div>
              <p className={"hidden lg:block text-4xl text-indigo-500 font-semibold"}>{count ?? 0}</p>
              <div className={"hidden lg:flex flex-col gap-2 text-sm mt-3"}>
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
            {/* graph layout.*/}
            <div className={`flex-[2] border-black p-3 flex flex-col gap-2`}>
              <div className={"w-full lg:hidden flex flex-row justify-between items-center"}>
                <div className={"flex flex-row items-center gap-3"}>
                  <span className={"w-5 h-5 mb-1"}>
                    {children}
                  </span>
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" text-md font-bold text-ellipsis transition-all hover:text-indigo-500 hover:underline hover:underline-offset-4 overflow-hidden whitespace-nowrap"
                  >
                    {profile}
                  </a>
                </div>
                <p className={"font-bold text-indigo-500"}>
                  {count}
                </p>
              </div>
              <div
                className={`w-full text-indigo-500 h-full font-semibold relative flex flex-col gap-2 border-l-[1px] border-b-[1px] border-black/30`}
              >
                <p className={"absolute bottom-[-24px] text-sm"}>0</p>
                <p className={"absolute bottom-[-24px] text-sm right-1/2 translate-x-1/2"}>50</p>
                <p className={"absolute bottom-[-24px] text-sm right-0"}>100</p>
                <div title={`Easy: ${easyQuestionSolved}%`} style={{'--bar-width': `${easyQuestionSolved}%`}}
                     className={`mt-auto rounded-r-lg h-8 flex items-center justify-center bg-emerald-400 animateProjectStats`}>
                  <p className={`text-sm text-black  relative lg:hidden`}>{codingData.easySolved}</p>

                </div>
                <div title={`Medium: ${mediumQuestionSolved}%`} style={{'--bar-width': `${mediumQuestionSolved}%` }}
                     className={`duration-500 flex justify-center items-center my-auto animateProjectStats transition-all w-0 delay-1000 rounded-r-lg h-8 bg-orange-400`}>
                  <p className={`text-sm text-black relative lg:hidden`}>{codingData.mediumSolved}</p>
                </div>
                <div title={`Hard: ${hardQuestionSolved}%`} style={{'--bar-width': `${hardQuestionSolved}%`}}
                     className={`duration-500 flex items-center justify-center mb-auto animateProjectStats transition-all w-0 delay-1000 rounded-r-lg h-8 bg-red-500`}>
                  <p className={`text-sm text-black relative left-[150%] lg:hidden`}>{codingData.easySolved}</p>
                </div>
              </div>
            </div>
            </>
          )
      }
    </div>
  );
};

const NoDataAvailable = ({ icon, codingProfile = "" }) => {
  return (
    <div className="flex flex-col gap-8 text-center items-center w-full justify-center">
      <h1 className="text-[30px] font-bold text-indigo-600">{codingProfile} Data Available</h1>
      <span className="w-20 h-20 font-semibold">
        {icon}
      </span>
    </div>
  )
}

export default CodingCard;