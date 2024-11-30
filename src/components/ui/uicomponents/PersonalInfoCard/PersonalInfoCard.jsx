import MyPhoto from "../../../assets/me.jpg";
import './personalcard.css';
import { AboutMeDescription } from '../../../data/personalData';

const PersonalInfoCard = () => {
  return (
    <div className='flex flex-col gap-4 animatePersonalCard rounded-2xl bg-white/30 border-2 border-indigo-400/20 backdrop-blur-sm backdrop-saturate-200 p-4'>
			<div className='flex justify-center w-full'>
				<span className='rounded-xl'>
					<img className='w-40 h-40 rounded-full object-cover' src={MyPhoto} alt='Abhigyan Raha' />
				</span>
			</div>
			<div className=' overflow-y-auto lg:text-xl '>
				{AboutMeDescription}
			</div>
    </div>
  )
}

export default PersonalInfoCard