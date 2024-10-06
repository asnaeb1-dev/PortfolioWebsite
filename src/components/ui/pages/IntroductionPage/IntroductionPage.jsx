import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import { PersonalityList } from '../../../data/strings';
import BackgroundParticles from '../../uicomponents/BackgroundParticles/BackgroundParticles';

import MyPhoto from "./../../../assets/mypic.png";

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
          <h1 className='text-[35px] font-extrabold w-3/5'>Hey! there,</h1>
          <span className='text-[35px] font-extrabold flex flex-row gap-2 w-3/5'>
            <h1>I'm Abhigyan</h1>
            <h1 className=' text-indigo-500'>Raha</h1>
          </span>
          <span className='text-[25px] mt-4 font-extrabold flex flex-row gap-2 w-3/5'>
            <h1>I'm a</h1>
            <h1 ref={typedElementRef} className=' text-indigo-500'>Raha</h1>
          </span>
          <div className='w-full'>

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