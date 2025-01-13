import { FaMouse } from "react-icons/fa";
import "./workexpcard.css";
//desktop changes = ${start ? "opacity-100" : "opacity-0"} ${index !== 0 ? (index % 2 === 0 ? " right-11 top-1" : "left-11 top-[-5px]") : ` right-11 top-1`}
const WorkExpCard = ({ workDetails = {}, index = 0, start, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={`h-auto workexpcard hover:scale-[102%] origin-left shadow-lg hover:shadow-2xl bg-indigo-500/40 ${
        start ? "opacity-100" : "opacity-0"
      } p-3 w-[80dvw] max-w-[300px] md:max-w-[350px] xl:max-w-[450px] lg:h-[150px] top-10 left-[140%]`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className={"flex flex-row justify-between items-center"}>
            <p className="font-extrabold text-lg lg:text-xl overflow-hidden text-ellipsis text-nowrap text-indigo-500">
              {workDetails.companyName}
            </p>
            <span className={"animate-pulse"}>
              <FaMouse color={"white"} />
            </span>
          </span>
          <p className="text-[12px] lg:text-sm font-semibold">
            {workDetails.designation}
          </p>
          <p className="text-[10px] font-semibold">{workDetails.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExpCard;
