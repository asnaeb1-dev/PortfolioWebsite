import React, { useState } from 'react'
import { HiOutlineMenu as HamburgerMenuIcon } from "react-icons/hi";
import { Links, NavBarStrings } from '../../../data/strings';

import { Link, useLocation } from 'react-router-dom';

import ProfilePicture from "../../../assets/me.jpg";
import DayNightSwitch from '../DayNightSwitch/DayNightSwitch';

const Navbar = () => {
    const location = useLocation();
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

    return (
        <div className=' bg-white shadow-xl rounded-b-md px-8 h-16 lg:h-20 w-full flex flex-row justify-between lg:justify-around items-center'>
            <div className=' font-extrabold flex flex-row items-center text-indigo-500 gap-3'>
                <img src={ProfilePicture} width={40} height={40} className=' object-cover aspect-square rounded-full cursor-pointer' />
                <p className='hidden md:block md:text-xl xl:text-2xl'>Abhigyan Raha</p>
            </div>
            <div>
                <ul className='hidden relative lg:flex flex-row gap-7 font-bold'>
                    <Link to={Links.INTRO} className={`cursor-pointer transition-all border-b-2 ${location.pathname !== Links.INTRO ? "border-transparent": "border-indigo-400 scale-110"} hover:border-indigo-400`}>{NavBarStrings.INTRO}</Link>
                    <Link to={Links.SKILLS} className={`cursor-pointer transition-all border-b-2 ${location.pathname !== Links.SKILLS ? "border-transparent": "border-indigo-400 scale-110"} hover:border-indigo-400`}>{NavBarStrings.SKILLS}</Link>
                    <Link to={Links.PROJECTS} className={`cursor-pointer transition-all border-b-2 ${location.pathname !== Links.PROJECTS ? "border-transparent": "border-indigo-400 scale-110"} hover:border-indigo-400`}>{NavBarStrings.PROJECTS}</Link>
                    <Link to={Links.EDUCATION} className={`cursor-pointer transition-all border-b-2 ${location.pathname !== Links.EDUCATION ? "border-transparent": "border-indigo-400 scale-110"} hover:border-indigo-400`}>{NavBarStrings.EDUCATION}</Link>
                    <Link to={Links.WORK_EXPERIENCE} className={`cursor-pointer transition-all border-b-2 ${location.pathname !== Links.WORK_EXPERIENCE ? "border-transparent": "border-indigo-400 scale-110"} hover:border-indigo-400`}>{NavBarStrings.WORK_EXPERIENCE}</Link>
                    <Link to={Links.CONTACT} className={`cursor-pointer transition-all border-b-2 ${location.pathname !== Links.CONTACT ? "border-transparent": "border-indigo-400 scale-110"} hover:border-indigo-400`}>{NavBarStrings.CONTACT}</Link>
                    <DayNightSwitch
                        isEnabled={isDarkModeEnabled}
                        toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)}
                    />
                </ul>
                <div className='cursor-pointer lg:hidden border-2 border-transparent p-1 rounded-full hover:bg-indigo-500/20 '>
                    <HamburgerMenuIcon size={25} />
                </div>
            </div>
        </div>
    )
}

export default Navbar