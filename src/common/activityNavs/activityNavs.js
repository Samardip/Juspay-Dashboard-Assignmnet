import React from 'react'

export const ActivityNavs = (
    { activityDetails, profileDash, time,notifications,index }
) => {
    return (
        <>
            <div className='flex justify-start gap-2 mx-[20px] mt-[10px] font-normal'>
                <div className='flex flex-col justify-center items-center mt-[2px]'>
                    <div className={`border-[2px] dark:text-black ${notifications?`rounded-[6px] ${index%2===1?'bg-gray-100 border-gray-100':'bg-blue-50 border-blue-50'}`:'rounded-[50%]'} h-[25px] w-[25px] flex flex-col justify-center items-center`}>
                        {activityDetails.icon}
                    </div>
                    {
                        profileDash &&
                        <div className='h-[14px] w-[1px] bg-gray-200 mt-[6px]'></div>
                    }
                </div>
                <div>
                    <div className='text-sm'>{activityDetails.title.length > 35 ? activityDetails.title.slice(0, 32) + '...' : activityDetails.title}</div>
                    {
                        time &&
                        <div className='text-gray-400 text-sm'>{activityDetails.time}</div>
                    }
                </div>
            </div>
        </>
    )
}
