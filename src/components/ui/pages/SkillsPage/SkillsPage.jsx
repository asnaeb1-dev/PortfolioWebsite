import { useEffect, useState } from 'react'
import SkillsAccordian from '../../uicomponents/SkillsAccordian/SkillsAccordian'
import { Skills } from '../../../data/PersonalData';
import GridSwitch from '../../uicomponents/GridSwitch/GridSwitch';
import SkillPageGridView from './SkillPageGridView';

const SkillsPage = () => {
  const [isGridView, setGridView] = useState(true);

  useEffect(() => {
    console.log(isGridView);
  }, [isGridView])

  return (
    <div className='h-[calc(100vh_-_80px)] overflow-hidden p-4 flex flex-col gap-2 '>
      <h1 className='text-center xsm:text-[30px] sm:text-[40px] font-extrabold'>Skills and Abilities</h1>
      <GridSwitch
        isGridView={isGridView}
        handleGridClick={() => setGridView(true)}
        handleListClick={() => setGridView(false)}
      />
      {
        !isGridView ?
          <SkillsAccordian skills={Skills} /> :
          <SkillPageGridView skills={Skills} />
      }
    </div>
  )
}

export default SkillsPage