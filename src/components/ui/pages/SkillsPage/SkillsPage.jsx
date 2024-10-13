import React from 'react'
import SkillsAccordian from '../../uicomponents/SkillsAccordian/SkillsAccordian'

const SkillsPage = () => {
  return (
    <div className='h-[calc(100vh_-_80px)] overflow-y-auto'>
      <h1 className='font-extrabold text-[40px]'>Skills and Abilities</h1>
      <div className=''>
        <SkillsAccordian />
      </div>
    </div>
  )
}

export default SkillsPage