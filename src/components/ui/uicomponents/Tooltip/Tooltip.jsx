import React from 'react'
import "./tooltip.css";

const Tooltip = ({ tooltipTitle = "", toolTipMessage = "" }) => {
  return (
    <div className='absolute z-30 tooltip bg-red-300/50 text-sm font-normal rounded-full p-2 px-4 top-10'>
        <h1>{toolTipMessage}</h1>
    </div>
  )
}

export default Tooltip