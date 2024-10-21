import React from 'react'
import { HTML5Icon, JavaIcon, JavaScriptIcon, TypeScriptIcon } from '../../../data/Icons'
import SkillItem from '../../uicomponents/SkillItem/SkillItem'

const SkillPageGridView = ({ skills = [] }) => {
  return (
    <div className='w-full flex flex-col gap-6'>
    {
        skills?.skillList?.map((skillCategory, index) => {
            return (
                <div className='gap-3 flex flex-col'>
                    <h1 className=' font-bold text-center'>{skillCategory?.skillType}</h1>
                    <div className=' flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-5'>
                    {
                        skillCategory?.skills?.map((skill) => (
                            <SkillItem skillTitle={skill.skillName} progress={skill.progress}>
                                {skill.icon}
                            </SkillItem>
                        ))
                    }
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default SkillPageGridView;