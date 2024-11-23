import { useState } from 'react'
import { HiOutlineMenu as HamburgerMenuIcon } from "react-icons/hi";
import { Links, NavBarStrings } from '../../../data/strings';

import { Link, useLocation } from 'react-router-dom';

import ProfilePicture from "../../../assets/me.jpg";
import DayNightSwitch from '../DayNightSwitch/DayNightSwitch';

import "./navbar.css";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";

const Navbar = () => {
    const location = useLocation();
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const s = () => {
      document.querySelector('body').classList.toggle('dark');
      setDarkModeEnabled(!isDarkModeEnabled);
    }
    return (
        <div className=' bg-transparent bg-white lg:bg-white lg:shadow-xl px-8 py-2 lg:px-0 lg:rounded-full lg:translate-y-[20px] lg:m-auto h-16 lg:h-20 lg:w-4/5 flex flex-row justify-between lg:justify-around items-center'>
            <div className=' font-extrabold flex flex-row items-center text-indigo-500 gap-3'>
                <img alt={"My Avatar"} src={ProfilePicture} width={40} height={40} className=' object-cover bg-white p-0.5 lg:p-0 aspect-square rounded-full cursor-pointer' />
                <p className='hidden md:block md:text-xl xl:text-2xl'>Abhigyan Raha</p>
            </div>
            <div>
                <ul className='hidden relative md:text-sm lg:text-lg lg:flex flex-row gap-7 font-bold'>
                    <Link to={Links.INTRO} className={`cursor-pointer transition-all underline_anim ${location.pathname !== Links.INTRO ? "border-transparent": " bg-indigo-600/50 px-4 rounded-full text-white"}`}>{NavBarStrings.INTRO}</Link>
                    <Link to={Links.SKILLS} className={`cursor-pointer transition-all underline_anim ${location.pathname !== Links.SKILLS ? "border-transparent": "bg-indigo-600/50 px-4 rounded-full text-white"}`}>{NavBarStrings.SKILLS}</Link>
                    <Link to={Links.PROJECTS} className={`cursor-pointer transition-all underline_anim  ${location.pathname !== Links.PROJECTS ? "border-transparent": "bg-indigo-600/50 px-4 rounded-full text-white"}`}>{NavBarStrings.PROJECTS}</Link>
                    <Link to={Links.EDUCATION} className={`cursor-pointer transition-all underline_anim ${location.pathname !== Links.EDUCATION ? "border-transparent": " bg-indigo-600/50 px-4 rounded-full text-white"}`}>{NavBarStrings.EDUCATION}</Link>
                    <Link to={Links.WORK_EXPERIENCE} className={`cursor-pointer transition-all  underline_anim ${location.pathname !== Links.WORK_EXPERIENCE ? "border-transparent": " bg-indigo-600/50 px-4 rounded-full text-white"}`}>{NavBarStrings.WORK_EXPERIENCE}</Link>
                    <Link to={Links.CONTACT} className={`cursor-pointer transition-all underline_anim ${location.pathname !== Links.CONTACT ? "border-transparent": "bg-indigo-600/50 px-4 rounded-full text-white"}`}>{NavBarStrings.CONTACT}</Link>
                </ul>
                <div className='cursor-pointer relative lg:hidden border-2 border-transparent p-1 rounded-full hover:bg-indigo-500/20 '>
                  <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <HamburgerMenuIcon size={25} />
                  </span>
                  {isMenuOpen &&
                    <MobileMenu isDarkModeEnabled={isDarkModeEnabled} toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)} />
                  }
                </div>
            </div>
            <div className={"hidden lg:block"}>
                <DayNightSwitch
                  isEnabled={isDarkModeEnabled}
                  toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)}
                />
            </div>
        </div>
    );
};

export default Navbar