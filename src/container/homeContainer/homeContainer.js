import React from 'react'
import { Navbar } from '../../component/navbar/navbar'
import { Sidebar } from '../../component/sidebar/sidebar';
import { Activitybar } from '../../component/activitybar/activitybar';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';
import { HomeContainerHooks } from '../../useHooks/useHomeContainer/useHomeContainer';
import { Outlet } from 'react-router-dom';

export const HomeContainer = () => {
  const {dark,setDark} = HomeContainerHooks();
  return (
    <UserContext.Provider value={dark}>
      <div className={`flex w-100% ${dark ? 'bg-black text-white' : ''}`}>
        <div className='border-l-2 border-y-2 dark:border-gray-600 w-1/6 '><Sidebar /></div>
        <div className='border-[2px] w-4/6 h-[99.4vh] dark:border-gray-600 overflow-y-scroll'>
          <Navbar dark={dark} setDark={setDark} />
          <Outlet/>
        </div>
        <div className='border-r-2 border-y-2 dark:border-gray-600 w-1/6'><Activitybar /></div>
      </div>
    </UserContext.Provider>
  )
}
