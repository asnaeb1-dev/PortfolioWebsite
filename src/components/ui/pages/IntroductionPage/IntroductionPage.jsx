import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import { PersonalityList } from '../../../data/strings';
import BackgroundParticles from '../../uicomponents/BackgroundParticles/BackgroundParticles';

import MyPhoto from "./../../../assets/mypic.png";
import { MdOutlineArrowCircleRight as RightArrow } from "react-icons/md";
import { FaLinkedin as LinkedInIcon, FaGithubSquare as GithubIcon } from "react-icons/fa";


const IntroductionPage = () => {

  const typedElementRef = useRef(null);

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

  return (
    <>
      <div className='h-[calc(100vh_-_80px)] overflow-y-auto flex flex-row'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h1 className='text-[50px] font-extrabold w-3/5'>Hey! there,</h1>
          <span className='text-[50px] font-extrabold flex flex-row gap-2 w-3/5'>
            <h1>I'm Abhigyan</h1>
            <h1 className=' text-indigo-500'>Raha</h1>
          </span>
          <span className='text-[25px] mt-4 font-extrabold flex flex-row gap-2 w-3/5'>
            <h1>I'm a</h1>
            <h1 ref={typedElementRef} className=' text-indigo-500'>Raha</h1>
          </span>
          <div className='w-3/5 mt-5'>
            <button className='p-2 outline-none pl-4 gap-4 shadow-indigo-400 rounded-full flex flex-row justify-between items-center shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 border-2 border-indigo-500 text-white bg-indigo-500'>
              <p>About Me</p>
              <span className=' animate-pulse'>
                <RightArrow color='white' size={20} />
              </span>
            </button>
          </div>
          <div className='w-3/5 mt-5 flex flex-row gap-3'>
            <button className='border-2 rounded-full p-2 px-3 flex flex-row gap-3 justify-between items-center'>
              <GithubIcon size={20} />
              <p>GitHub</p>
            </button>
            <button className='border-2  rounded-full bg-white p-2 px-3 hover:border-[#0A66C2] flex flex-row gap-3 justify-between items-center'>
              <LinkedInIcon size={20} />
              <p className='hover:text-[#0A66C2] '>LinkedIn</p>
            </button>
          </div>
        </div>
        <div className=' flex-1 flex justify-center items-center'>
          <img src={MyPhoto} className='lg:w-3/5' />
        </div>
      </div>
      <BackgroundParticles />
    </>
  )
}

export default IntroductionPage;