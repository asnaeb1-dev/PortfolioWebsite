import React from 'react'

const WorkExpCard = ({ workDetails =  {}, index = 0, start }) => {
    return (
        <div className={`fixed border-2 border-indigo-500 p-3 w-[400px] h-48 overflow-auto transition-opacity duration-700 delay-200 ${start ? "opacity-100" : "opacity-0"} ${index !== 0 ? (index % 2 === 0 ? " right-11 top-1" : "left-11 top-[-5px]") : ` right-11 top-1`}`}>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <p className='font-bold text-md'>{workDetails.companyName}</p>
                    <p className='text-sm'>{workDetails.designation}</p>
                    <p className='text-[10px]'>{workDetails.duration}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-sm'>{workDetails.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkExpCard