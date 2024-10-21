import React, { useEffect, useState } from 'react';
import "./skillitem.css";

const SkillItem = ({ children, progress = 0, skillTitle ="" }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < progress) {
          const timer = setTimeout(() => {
            setCount(count + 1);
          }, progress / 10);
          return () => clearTimeout(timer); // Cleanup on unmount
        }
      }, [count]);
    return (
        <div className='flex flex-row bg-indigo-500/20 items-center p-3 gap-3 rounded-lg'>
            <div>
                {children}
            </div>
            <div className='flex flex-col w-full gap-1'>
                <div className='flex flex-row w-full justify-between text-sm'>
                    <p className='font-semibold'>{skillTitle}</p>
                    <p className='scale-up font-semibold text-indigo-500'>{count}%</p>
                </div>
                <div className='w-full h-2 bg-slate-300 rounded-full'>
                    <div  
                        style={{
                            width: `${count}%`,
                            transition: "width 0.3s linear"
                        }} 
                        className='h-full w-0 bg-indigo-500 rounded-full'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillItem