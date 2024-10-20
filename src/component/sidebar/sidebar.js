import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ActionNavs } from '../../common/actionNavs/actionNavs';
import { SidebarHooks } from '../../useHooks/useSidebar/useSidebar';

export const Sidebar = () => {
 const {bulletArray,dashboardArray,setDashboardData,setPagesData,pagesArray} = SidebarHooks();
  return (
    <div className='h-[99.4vh] text-[20px] flex flex-col gap-[30px] overflow-y-scroll scrollbar-hide '>
      <div className='flex justify-start gap-2 mx-[30px] mt-[30px]'>
        <div className='border-[2px] border-gray-200  rounded-[50%] bg-gray-200 dark:text-black'>
          <PermIdentityIcon fontSize='large' />
        </div>
        <div className=''>ByeWind</div>
      </div>
      <div className=''>
        <div className='flex justify-start gap-10 mx-[30px]'>
          <div className='text-gray-500'>Favorites</div>
          <div className='text-gray-300'>Recently</div>
        </div>
        <div className=' ml-[20px] mr-[20px]'>
          {
            bulletArray.map((item) => {
              return <ActionNavs type={'bullet'} item={item} />
            })
          }
        </div>
        <div>
          <div className='flex justify-start gap-10 mt-[30px] mx-[30px]'>
            <div className='text-gray-500'>Dashboards</div>
          </div>
          {
            dashboardArray.map((item) => {
              return <ActionNavs type={'expand'} item={item} setDashboardData={setDashboardData}/>
            })
          }
        </div>
        <div>
          <div className='flex justify-start gap-10 mt-[30px] mx-[30px]'>
            <div className='text-gray-500'>Pages</div>
          </div>
          {
            pagesArray.map((item) => {
              return <ActionNavs type={'expand'} item={item} setPagesData={setPagesData}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
