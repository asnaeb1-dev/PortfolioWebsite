import React from 'react'
import WorkExPath from '../../uicomponents/WorkExPath/WorkExPath'
import { WorkExperience } from '../../../data/personalData'

const WorkExperiencePage = () => {
  return (
    <div className='h-[calc(100vh_-_80px)] overflow-y-auto p-4 flex justify-center'>
      <WorkExPath workExperience={WorkExperience.workList} />
    </div>
  )
}

export default WorkExperiencePage