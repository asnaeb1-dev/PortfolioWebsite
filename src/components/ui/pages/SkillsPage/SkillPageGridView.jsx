import React from 'react'
import { HTML5Icon, JavaIcon, JavaScriptIcon, TypeScriptIcon } from '../../../data/Icons'
import SkillItem from '../../uicomponents/SkillItem/SkillItem'

const SkillPageGridView = ({ skills = [] }) => {
  return (
    <div className='w-full overflow-y-auto overflow-x-hidden flex flex-col gap-6 xl:gap-10 lg:w-4/5 lg:self-center xl:w-3/5 2xl:w-3/5 overflow-y-auto`'>
    {
        skills?.skillList?.map((skillCategory, index) => {
            return (
                <div className='gap-3 flex flex-col'>
                    <h1 className=' font-bold text-lg xl:text-2xl text-start overflow-hidden text-ellipsis whitespace-nowrap'>{skillCategory?.skillType}</h1>
                    <div className=' flex flex-col gap-3 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-5'>
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