import React from 'react'
import { HiOutlineMenu as HamburgerMenuIcon } from "react-icons/hi";
import { Links, NavBarStrings } from '../../../data/strings';

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    console.log(location);
    
    return (
        <div className=' shadow-xl rounded-b-md px-8 h-20 w-full flex flex-row justify-between lg:justify-around items-center'>
            <div className=' font-extrabold text-2xl text-indigo-500'>
                <img src='' />
                <p>Abhigyan Raha</p>
            </div>
            <div>
                <ul className='hidden lg:flex flex-row gap-7 font-bold'>
                    <Link to={Links.INTRO} className={`cursor-pointer border-b-2 ${location.pathname !== Links.INTRO ? "border-transparent": "border-indigo-400"} hover:border-indigo-400`}>{NavBarStrings.INTRO}</Link>
                    <Link to={Links.SKILLS} className={`cursor-pointer border-b-2 ${location.pathname !== Links.SKILLS ? "border-transparent": "border-indigo-400"} hover:border-indigo-400`}>{NavBarStrings.SKILLS}</Link>
                    <Link to={Links.PROJECTS} className={`cursor-pointer border-b-2 ${location.pathname !== Links.PROJECTS ? "border-transparent": "border-indigo-400"} hover:border-indigo-400`}>{NavBarStrings.PROJECTS}</Link>
                    <Link to={Links.EDUCATION} className={`cursor-pointer border-b-2 ${location.pathname !== Links.EDUCATION ? "border-transparent": "border-indigo-400"} hover:border-indigo-400`}>{NavBarStrings.EDUCATION}</Link>
                    <Link to={Links.WORK_EXPERIENCE} className={`cursor-pointer border-b-2 ${location.pathname !== Links.WORK_EXPERIENCE ? "border-transparent": "border-indigo-400"} hover:border-indigo-400`}>{NavBarStrings.WORK_EXPERIENCE}</Link>
                    <Link to={Links.CONTACT} className={`cursor-pointer border-b-2 ${location.pathname !== Links.CONTACT ? "border-transparent": "border-indigo-400"} hover:border-indigo-400`}>{NavBarStrings.CONTACT}</Link>
                </ul>
                <div className='cursor-pointer lg:hidden border-2 border-transparent p-1 rounded-full hover:bg-indigo-500/20 '>
                    <HamburgerMenuIcon size={25} />
                </div>
            </div>
        </div>
    )
}

export default Navbar