import {useEffect, useState} from 'react';
import WorkExPath from '../../uicomponents/WorkExPath/WorkExPath';
import { WorkExperience} from '../../../data/PersonalData';
const WorkExperiencePage = () => {
  const [clickedWorkExperience, setClickedWorkExperience] = useState(0);

  useEffect(() => {
    console.log(clickedWorkExperience);
  }, [clickedWorkExperience]);

  return (
    <div className='h-[calc(100vh_-_60px)] overflow-hidden p-4 pl-0 flex flex-col justify-center'>
      <h1 className='font-extrabold text-3xl pb-2 pl-4'>Work Experience</h1>
      <div className='w-full h-full pl-4 overflow-y-auto overflow-x-hidden'>
        <WorkExPath workExperience={WorkExperience.workList} onclick={index => setClickedWorkExperience(index)} />
      </div>
    </div>
  );
};

export default WorkExperiencePage