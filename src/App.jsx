import React, { useEffect, useState } from 'react'
import Navbar from './components/ui/uicomponents/Navbar/Navbar'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { MdNavigateNext as NextIcon, MdNavigateBefore as PreviousIcon } from "react-icons/md";
import { Links } from './components/data/strings';

const App = () => {
  const location = useLocation();
  const pagesList = Object.values(Links)
  const [pageIndex, setPageIndex] = useState(pagesList.findIndex(str => str === String(location.pathname)) + 1);
  
  useEffect(() => {
    console.log(pageIndex);
  }, [pageIndex]);

  return (
    <div className='w-full h-full linearGradient'>
      <Navbar />
      {/* {
        pageIndex < pagesList.length &&
        <Link to={pagesList[pageIndex]} onClick={() => setPageIndex(() => pageIndex <= pagesList.length ? pageIndex + 1 : 0)} title={"Move to next page"} className='fixed text-white hidden md:block  rounded-full p-2 bg-indigo-500 border-indigo-500 right-11 top-1/2 border-2 transition-all hover:translate-x-2'>
          <NextIcon size={40} />
        </Link>
      } */}
      <Outlet />
    </div>
  )
};

export default App;