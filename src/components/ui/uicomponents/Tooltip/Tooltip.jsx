import React, { useContext } from 'react'
import "./tooltip.css";
import { TooltipContextRef } from '../../context/TooltipContext';

const Tooltip = ({ location = {}, children }) => {
  const { } = useContext(TooltipContextRef);
  return (
    <div className='fixed z-30 tooltip bg-red-300/50 text-sm font-normal rounded-full p-2 px-4 top-10'>
        {children}
    </div>
  )
}

export default Tooltip