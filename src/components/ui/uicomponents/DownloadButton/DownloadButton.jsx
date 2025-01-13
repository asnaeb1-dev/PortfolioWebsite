import { FaCloudDownloadAlt as DownloadIcon } from "react-icons/fa";

const DownloadButton = ({ downloadLink = '' }) => {
  return (
    <a href={downloadLink} className='border-2 relative transition-transform cursor-pointer active:scale-100 hover:scale-[102%] rounded-full p-3 border-indigo-400 flex flex-row justify-between items-start gap-5'>
			<p className={`text-sm text-indigo-500 font-bold hidden lg:block`}>Download Resume</p>
      <DownloadIcon size={20} color="rgb(99 102 241)" />
			<div className="absolute z-[-1] bg-indigo-500/20 w-full h-full inset-0 rounded-full">
			</div>
    </a>
  )
}

export default DownloadButton