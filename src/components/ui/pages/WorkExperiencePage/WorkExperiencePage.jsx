import {useEffect, useState} from 'react';
import WorkExPath from '../../uicomponents/WorkExPath/WorkExPath';
import {WorkDetails, WorkExperience} from '../../../data/personalData';
import CompanyDetails from "../../uicomponents/WorkExPath/CompanyDetails.jsx";
const WorkExperiencePage = () => {
  const [clickedWorkExperience, setClickedWorkExperience] = useState(0);

  useEffect(() => {
    console.log(clickedWorkExperience);
  }, [clickedWorkExperience]);

  return (
    <div className='h-[calc(100vh_-_80px)] overflow-hidden px-4 pt-10 pb-4 flex flex-row justify-center'>
      <div className='flex flex-row flex-1 justify-center'>
        <WorkExPath workExperience={WorkExperience.workList} onclick={index => setClickedWorkExperience(index)} />
      </div>
      <CompanyDetails companyDetails={WorkDetails[clickedWorkExperience]} /> :
    </div>
  );
};

export default WorkExperiencePage