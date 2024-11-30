import { useEffect, useState } from 'react'
import "./workexpath.css";
import WorkExpCard from './WorkExpCard';

const WorkExPath = ({ workExperience = [], onclick }) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    
    return (
        <div className=' w-[60vw] md:w-56 h-full flex justify-center py-5'>
            <div className='w-full h-full flex flex-col items-start md:items-center'>
                {
                    workExperience?.map((company, index) => {
                        return (
                            <IndividualWorkExPath
                                index={index}
                                begin={currentPosition === index}
                                end={index === workExperience.length - 1}
                                isDone={() => setCurrentPosition(currentPosition + 1)}
                                details={company}
                                onclick={(index) => onclick(index)}
                            />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

const IndividualWorkExPath = ({ begin = false, isDone, onclick, index = 0, end = false, details }) => {
    const [start, setStart] = useState(false);
    const [isTransitionCompleted, setTransitionCompleted] = useState(false);

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if(!begin) return;
        setStart(begin)
    }, [begin]);

    return (
        <div style={{ transform: `translateY(-${20 * index}px)` }} className={`flex flex-col relative items-center`}>
            <span className={`w-4 h-4 hover:cursor-pointer hover:outline-2 hover:outline-indigo-500 relative top-3 shadow-xl ${start && "opacity-100"} opacity-0 rounded-full bg-indigo-500 ${clicked || (!isTransitionCompleted && begin) && "animateOffset outline outline-indigo-500" }`}></span>
            { !end && <div onTransitionEnd={() => (setTransitionCompleted(true), isDone())} className={`w-1 ${start ? "h-40 md:h-52" : "h-0"} bg-indigo-500 rounded-full duration-[3000ms] transition-all`}></div>}
            <WorkExpCard
                onclick={() => (onclick(index), setClicked(true))}
                start={start}
                workDetails={details}
                index={index}
            />
            <span className={`fixed font-bold opacity-0 top-1/2 ${start && "opacity-100"} ${index % 2 === 0 ? "left-[40px] text-start": "right-[40px] text-right"}`}>
                {details?.timeSpan}
            </span>
        </div>
    )
}

export default WorkExPath