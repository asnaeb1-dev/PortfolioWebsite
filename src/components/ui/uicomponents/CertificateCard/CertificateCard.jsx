import CertificateImage from "../../../assets/test.jpg";
import { IconFc } from "../../../data/Icons";
import { FaLink as LinkIcon, FaClock as DurationIcon } from "react-icons/fa";
import { BsCalendarDateFill as Date } from "react-icons/bs";
const CertificateCard = () => {
  return (
    <div className="flex flex-col rounded-xl transition-transform duration-300 overflow-y-hidden relative w-full h-[calc(100dvh_-_160px)] overflow-x-hidden gap-4 bg-indigo-400/30 py-2 px-4 shadow-md">
      <span
        title={"Course Link"}
        className="w-12 h-12 bg-indigo-500 absolute rounded-full hover:scale-[102%] active:scale-[98%] bottom-4 shadow-2xl right-4 flex items-center justify-center"
      >
        <LinkIcon color="white" />
      </span>
      <span className="flex flex-row w-full items-center font-bold text-xl gap-2">
        <IconFc name="udemy" width={40} height={40} />
        <p>Udemy Certification</p>
      </span>
      <img className="max-h-64 rounded-lg" src={CertificateImage} />
      <div className="flex flex-col gap-1">
        <p className="font-bold text-xl">Web Developer Course</p>
        <span className="flex flex-row items-center gap-2 text-sm font-semibold">
          <Date color="rgb(99 102 241)" />
          <p>22/10/2022</p>
        </span>
        <span className="flex flex-row items-center gap-2 text-sm font-semibold">
          <DurationIcon color="rgb(99 102 241)" />
          <p>4 weeks</p>
        </span>
      </div>
      <div className="flex flex-row flex-wrap gap-2 overflow-y-auto">
        <span className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1">
          <IconFc name={"react"} width={24} height={24} />
          <p>React</p>
        </span>
        <span className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1">
          <IconFc name="redux" width={24} height={24} />
          <p>Redux</p>
        </span>
        <span className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1">
          <IconFc name="html" width={24} height={24} />
          <p>HTML5</p>
        </span>
        <span className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1">
          <IconFc name="css" width={24} height={24} />
          <p>CSS3</p>
        </span>
        <span className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1">
          <IconFc name="vscode" width={24} height={24} />
          <p>VSCode</p>
        </span>
        <span className="flex flex-row border-2 border-white/50 py-1 px-2 rounded-lg gap-1">
          <IconFc name="reactrouter" width={24} height={24} />
          <p>React Router DOM</p>
        </span>
      </div>
    </div>
  );
};

export default CertificateCard;
