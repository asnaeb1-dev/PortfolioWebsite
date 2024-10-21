import React from 'react'
import { BsFillGrid1X2Fill as GridViewIcon, BsListOl as ListViewIcon  } from "react-icons/bs";

const GridSwitch = ({ handleGridClick, handleListClick, isGridView = false }) => {
  return (
    <div className='w-full flex flex-row-reverse'>
        <div className='bg-indigo-500/40 border-transparent flex flex-row rounded-md'>
          <span title={"Grid View"} data-id="grid" onClick={handleGridClick} className={`cursor-pointer p-2 transition-colors w-full ${isGridView ? "text-white bg-indigo-500" : "text-black"} h-full rounded-md`}>
            <GridViewIcon size={14} />
          </span>
          <span title={"List View"} data-id="list" onClick={handleListClick} className={`cursor-pointer transition-colors p-2 ${!isGridView ? "text-white bg-indigo-500" : "text-black "} w-full h-full rounded-md`}>
            <ListViewIcon size={16} />
          </span>
        </div>
    </div>
  )
}

export default GridSwitch