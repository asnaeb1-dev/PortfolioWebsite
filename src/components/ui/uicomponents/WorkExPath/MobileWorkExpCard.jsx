import "../../uicomponents/WorkExPath/workexpath.css";

const MobileWorkExpCard = ({ cardData = {} }) => {
  return (
    <div className='absolute w-full h-[600px]  bottom-0 border-t-2 border-indigo-400 z-10 bg-white/30 backdrop-blur-lg backdrop-saturate-150 rounded-t-lg p-4'>
      <h1 className="w-full font-semibold text-xl">{cardData.companyName}</h1>
    </div>
  )
}

export default MobileWorkExpCard;