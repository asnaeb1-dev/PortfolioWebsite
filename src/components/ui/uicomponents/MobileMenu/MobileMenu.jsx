import DayNightSwitch from "../DayNightSwitch/DayNightSwitch.jsx";
import {Link, useLocation} from "react-router-dom";
import {Links, NavBarStrings} from "../../../data/strings.js";
import "./mobilemenu.css";

function MobileMenu({ isDarkModeEnabled = false, toggleSwitch, isMenuOpen = true }) {
  const location = useLocation();

  return (
    <div className={`absolute animateMobileMenuOpen transition-all overflow-hidden bg-white z-10 right-0 top-10 rounded-lg h-[280px]`}>
      <div className={`w-full flex flex-col gap-5 h-full linearGradientReverse p-2 rounded-lg border-2 border-indigo-500/40`}>
        <span className={`flex flex-row justify-between items-center text-sm`}>
          <p className={`text-indigo-500 font-bold`}>Dark Mode</p>
          <DayNightSwitch
            isEnabled={isDarkModeEnabled}
            toggleSwitch={toggleSwitch}
          />
        </span>
        <ul className={`flex flex-col gap-2 text-md font-semibold`}>
          <Link to={Links.INTRO} className={`cursor-pointer transition-transform ${location.pathname === Links.INTRO ? 'translate-x-3 text-indigo-500 font-bold' : 'translate-x-0'}`}>{NavBarStrings.INTRO}</Link>
          <Link to={Links.SKILLS} className={`cursor-pointer transition-transform ${location.pathname === Links.SKILLS ? 'translate-x-3 text-indigo-500 font-bold' : 'translate-x-0'} `}>{NavBarStrings.SKILLS}</Link>
          <Link to={Links.PROJECTS} className={`cursor-pointer transition-transform ${location.pathname === Links.PROJECTS ? 'translate-x-3 text-indigo-500 font-bold' : 'translate-x-0'} `}>{NavBarStrings.PROJECTS}</Link>
          <Link to={Links.EDUCATION} className={`cursor-pointer transition-transform ${location.pathname === Links.EDUCATION ? 'translate-x-3 text-indigo-500 font-bold' : 'translate-x-0'} `}>{NavBarStrings.EDUCATION}</Link>
          <Link to={Links.WORK_EXPERIENCE} className={`cursor-pointer transition-transform ${location.pathname === Links.WORK_EXPERIENCE ? 'translate-x-3 text-indigo-500 font-bold' : 'translate-x-0'} `}>{NavBarStrings.WORK_EXPERIENCE}</Link>
          <Link to={Links.CONTACT} className={`cursor-pointer transition-transform ${location.pathname === Links.CONTACT ? 'translate-x-3 text-indigo-500 font-bold' : 'translate-x-0'} `}>{NavBarStrings.CONTACT}</Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;