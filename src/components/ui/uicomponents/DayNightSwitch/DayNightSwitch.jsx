import React from 'react'
import { FaMoon as MoonIcon, FaSun as SunIcon  } from "react-icons/fa";
const DayNightSwitch = ({ toggleSwitch, isEnabled = false }) => {

    return (
        <span onClick={toggleSwitch} className={`w-11 h-6 ${isEnabled && "bg-indigo-500"} cursor-pointer  transition-colors border-indigo-500 border-2 rounded-full p-1 flex items-center`}>
            <div
                // onClick={toggleSwitch}
                className={`w-[16px] flex items-center justify-center ${!isEnabled ? "bg-indigo-500" : "bg-white"} transition-transform ${isEnabled && "translate-x-[18px]"} h-[16px] cursor-pointer rounded-full `}
            >
                {
                    isEnabled?
                        <MoonIcon size={11} color='rgb(99 102 241)' />
                    :
                        <SunIcon size={11} color='white' />
                }
            </div>
        </span>
    )
}

export default DayNightSwitch