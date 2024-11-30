import React, {useEffect, useRef, useState} from 'react'
import Typed from "typed.js";
import { PersonalityList, WelcomeMessages } from '../../../data/strings';
import BackgroundParticles from '../../uicomponents/BackgroundParticles/BackgroundParticles';

import MyPhoto from "./../../../assets/mypic.png";
import { MdOutlineArrowCircleRight as RightArrow } from "react-icons/md";
import { FaLinkedin as LinkedInIcon, FaGithubSquare as GithubIcon } from "react-icons/fa";

import "./intro.css";
import NameComponent from "../../uicomponents/NameComponent/NameComponent.jsx";

const IntroductionPage = () => {
  const typedElementRef = useRef(null);
  const talkingElementRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [isMouseHover, setMouseHover] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: PersonalityList,
      typeSpeed: 50,
      backSpeed: 30,
      smartBackspace: true,
      backDelay: 1000,
      loop: true
      
    });

    return () => {
      typed.destroy();
    };
  }, [])

  useEffect(() => {
    const typed = new Typed(talkingElementRef.current, {
      strings: WelcomeMessages,
      typeSpeed: 50,
      backSpeed: 30,
      smartBackspace: false,
      backDelay: 1000,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updatePosition)
    return () => {
      window.removeEventListener("resize", updatePosition)
    }
  }, [])

  const updatePosition = () =>{
    if (imgRef.current && textRef.current) {
      const imgRect = imgRef.current.getBoundingClientRect();
      // Adjust the second div based on the main div's position
      textRef.current.style.left = `${imgRect.right - 260}px`; // Move 10px to the right
      textRef.current.style.top = `${imgRect.top * 1.35}px`; // Align tops
    }
  }

  return (
    <>
      <div className='h-[calc(100vh_-_77px)] md:h-[calc(100vh_-_60pxpx)] lg:h-[calc(100vh_-_80px)] flex flex-col-reverse lg:flex-row overflow-hidden'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h1 className='text-[25px] text-center md:text-[35px] lg:text-start lg:text-[50px] xl:text-[80px] font-extrabold w-3/5'>Hey! there,</h1>
          <span className=' justify-center lg:justify-start text-[22px] md:text-[30px] lg:text-[32px] xl:text-[40px] font-extrabold flex flex-row gap-2 w-3/5'>
            <h1>I'm</h1>
            <NameComponent nameText={"Abhigyan"} />
            <h1>Raha</h1>
          </span>
          <span className='w-full justify-center lg:justify-start text-[16px] md:w-3/5 md:text-[20px] lg:text-[22px] mt-4 font-extrabold flex flex-row gap-2'>
            <h1>I'm a</h1>
            <h1 ref={typedElementRef} className=' text-indigo-500'></h1>
          </span>
          <div className='w-full md:w-3/5 mt-5 flex justify-center lg:justify-start'>
            <button onMouseOver={() => setMouseHover(true)} onMouseOut={() => setMouseHover(false)} className='p-2 font-bold outline-none transition-all pl-4 gap-4 shadow-indigo-400 rounded-full flex flex-row justify-between items-center shadow-lg hover:shadow-xl hover:px-6 hover:shadow-indigo-500/40 border-2 border-indigo-500 text-white bg-indigo-500'>
              <p>About Me</p>
              <span className=' animate-pulse'>
                <RightArrow color='white' size={20} />
              </span>
            </button>
          </div>
          <div className='w-full md:w-3/5 mt-5 flex justify-center lg:justify-start flex-row gap-3'>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href='https://github.com/asnaeb1-dev'
              className='border-2 rounded-full p-2 sm:px-5 hover:px-7 flex flex-row gap-3 justify-between items-center github'
            >
              <GithubIcon size={20} />
              <p className={'hidden sm:block'}>GitHub</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href='https://www.linkedin.com/in/abhigyan-raha/' 
              className='border-2 bg-white/20 backdrop-blur-lg backdrop-saturate-150  rounded-full hover:px-5 p-2 sm:px-3 flex flex-row gap-3 justify-between items-center linkedin'
            >
              <LinkedInIcon size={20} />
              <p className={'hidden sm:block'}>LinkedIn</p>
            </a>
          </div>
        </div>
        <div className='flex-1 flex md:justify-center items-center'>
          <div className={`relative flex justify-center transition-transform origin-center items-center`}>
            <img alt={"my picture"} src={MyPhoto} className='w-full md:w-4/5 lg:w-3/4 xl:w-3/5 moving'/>
            <span ref={textRef}
              className='text-[12px] sm:text-sm text-ellipsis absolute top-[10%] lg:font-bold left-[65%] sm:left-[60%] text-white p-2 bg-indigo-400 rounded-xl max-w-96 tooltip min-w-7'>
                <h1 ref={talkingElementRef}></h1>
              </span>
          </div>
        </div>
      </div>
      <BackgroundParticles/>
    </>
  )
}

export default IntroductionPage;