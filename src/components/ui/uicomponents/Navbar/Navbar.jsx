import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu as HamburgerMenuIcon } from "react-icons/hi";
import { Links, NavBarStrings } from "../../../data/strings";

import { Link, useLocation } from "react-router-dom";

import ProfilePicture from "../../../assets/me.jpg";
import DayNightSwitch from "../DayNightSwitch/DayNightSwitch";

import "./navbar.css";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import ColorSwitch from "../ColorSwitch/ColorSwitch.jsx";
import useClickedOutside from "../../../data/CustomHooks/useClickedOutside/useClickedOutside.jsx";

const Navbar = () => {
  const location = useLocation();
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" relative z-10 bg-transparent lg:bg-white/30 lg:backdrop-blur-sm lg:backdrop-saturate-200 lg:shadow-xl px-4 py-2 lg:px-0 lg:rounded-full lg:translate-y-[20px] lg:m-auto h-16 lg:h-20 lg:w-4/5 flex flex-row justify-between lg:justify-around items-center">
      <div className=" font-extrabold flex flex-row items-center text-indigo-500 gap-3">
        <ProfilePictureImage />
        <p className="hidden md:block lg:hidden xl:block">Abhigyan Raha</p>
      </div>
      <div>
        <ul className="hidden relative lg:text-md xl:text-lg lg:flex flex-row gap-7 font-bold">
          <Link
            to={Links.INTRO}
            className={`cursor-pointer transition-all underline_anim ${
              location.pathname !== Links.INTRO
                ? "border-transparent"
                : " bg-indigo-600/50  px-4 rounded-full text-white"
            }`}
          >
            {NavBarStrings.INTRO}
          </Link>
          <Link
            to={Links.SKILLS}
            className={`cursor-pointer transition-all underline_anim ${
              location.pathname !== Links.SKILLS
                ? "border-transparent"
                : "bg-indigo-600/50 px-4 rounded-full text-white"
            }`}
          >
            {NavBarStrings.SKILLS}
          </Link>
          <Link
            to={Links.PROJECTS}
            className={`cursor-pointer transition-all underline_anim  ${
              location.pathname !== Links.PROJECTS
                ? "border-transparent"
                : "bg-indigo-600/50 px-4 rounded-full text-white"
            }`}
          >
            {NavBarStrings.PROJECTS}
          </Link>
          <Link
            to={Links.EDUCATION}
            className={`cursor-pointer transition-all underline_anim ${
              location.pathname !== Links.EDUCATION
                ? "border-transparent"
                : " bg-indigo-600/50 px-4 rounded-full text-white"
            }`}
          >
            {NavBarStrings.EDUCATION}
          </Link>
          <Link
            to={Links.WORK_EXPERIENCE}
            className={`cursor-pointer transition-all  underline_anim ${
              location.pathname !== Links.WORK_EXPERIENCE
                ? "border-transparent"
                : " bg-indigo-600/50 px-4 rounded-full text-white"
            }`}
          >
            {NavBarStrings.WORK_EXPERIENCE}
          </Link>
          <Link
            to={Links.RESUME}
            className={`cursor-pointer transition-all underline_anim ${
              location.pathname !== Links.RESUME
                ? "border-transparent"
                : "bg-indigo-600/50 px-4 rounded-full text-white"
            }`}
          >
            {NavBarStrings.RESUME}
          </Link>
        </ul>
        <div className="cursor-pointer relative lg:hidden border-2 border-transparent p-1 rounded-full hover:bg-indigo-500/20 ">
          <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerMenuIcon size={25} />
          </span>
          {isMenuOpen && (
            <MobileMenu
              isDarkModeEnabled={isDarkModeEnabled}
              isMenuOpen={isMenuOpen}
              toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)}
              clickedOutside={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
      <div className={"hidden lg:flex flex-row items-center gap-2"}>
        <DayNightSwitch
          isEnabled={isDarkModeEnabled}
          toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)}
        />
        {/* <ColorSwitch /> */}
      </div>
    </div>
  );
};

const ProfilePictureImage = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileImageRef = useRef();
  const isClickedOutside = useClickedOutside(profileImageRef, isProfileOpen);

  useEffect(() => {
    if (isClickedOutside) {
      setProfileOpen(false);
    }
  }, [isClickedOutside]);

  return (
    <div className="relative z-20">
      <img
        ref={profileImageRef}
        alt={"My Avatar"}
        src={ProfilePicture}
        width={40}
        height={40}
        onPointerUp={() => setProfileOpen(!isProfileOpen)}
        className={` object-cover bg-white p-0.5 lg:p-0 ${
          isProfileOpen && "rounded-bl-none"
        } aspect-square rounded-full cursor-pointer hover:scale-110 transition-transform`}
      />
      {isProfileOpen && (
        <div className="absolute w-36 h-36 xl:w-52 xl:h-52 bg-black/40 z-20 top-12 rounded-full rounded-tl-none p-2">
          <img
            alt={"My Avatar"}
            src={ProfilePicture}
            className="object-cover bg-white aspect-square rounded-full w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
