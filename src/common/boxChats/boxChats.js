import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TrendingDown } from '@mui/icons-material';

export const BoxChats = ({stats}) => {
    return (
        <div className={`flex flex-col justify-center items-start ${stats.className} gap-2 p-[25px] rounded-[20px] h-[120px]`}>
            <div className='font-bold'>{stats.title}</div>
            <div className='flex justify-between items-center w-[100%]'>
                <div className='text-[25px] font-semibold'>
                    {stats.reach}
                </div>
                <div className='flex justify-between text-[15px] font-normal'>
                    <div>{stats.growth}</div>
                    <div>{stats.growthRate==='possitive'?<TrendingUpIcon />:<TrendingDown />}</div>
                </div>
            </div>
        </div>
    )
}
