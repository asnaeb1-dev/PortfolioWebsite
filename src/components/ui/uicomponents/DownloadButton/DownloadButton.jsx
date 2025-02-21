import { FaCloudDownloadAlt as DownloadIcon } from "react-icons/fa";

const DownloadButton = ({ downloadLink = "" }) => {
  return (
    <a
      href={downloadLink}
      className="relative transition-transform backdrop-blur-lg dark:border dark:border-indigo-500 cursor-pointer active:scale-95 hover:scale-105 rounded-full p-2 lg:py-3 lg:px-5 hover:bg-indigo-500/20  flex flex-row justify-between items-start gap-5"
    >
      <p className={`text-sm text-indigo-500 font-bold hidden lg:block`}>
        Download
      </p>
      <DownloadIcon size={20} color="rgb(99 102 241)" />
      <div className="absolute z-[-1] bg-indigo-500/20 w-full h-full inset-0 rounded-full"></div>
    </a>
  );
};

export default DownloadButton;
