import React, { useEffect, useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TrendingDown } from '@mui/icons-material';

const AnimatedNumber = ({ value, type }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 1500; // Total animation time in milliseconds
        const frameRate = 30; // Frames per second for the animation
        const totalFrames = Math.round(duration / (1000 / frameRate));
        const increment = (end - start) / totalFrames;

        const timer = setInterval(() => {
            start += increment;
            setDisplayValue(Math.floor(start));
            if (start >= end) {
                clearInterval(timer);
                setDisplayValue(end); // Ensure final value is exact
            }
        }, 1000 / frameRate); // Update every frame

        return () => clearInterval(timer);
    }, [value]);

    return <span>
        {
            type === '$' ?
                type + displayValue : type === '%' ? displayValue + type : displayValue

        }
    </span>;
};

export const BoxChats = ({ stats }) => {
    return (
        <div className={`flex flex-col justify-center items-start ${stats.className} gap-2 p-[25px] rounded-[20px] h-[120px] transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 hover:shadow-lg`}>
            <div className='font-bold'>{stats.title}</div>
            <div className='flex justify-between items-center w-[100%]'>
                <div className='text-[25px] font-semibold'>
                    <AnimatedNumber value={stats.reach} type={stats.reachType} />
                </div>
                <div className='flex justify-between text-[15px] font-normal items-center gap-2'>
                    <div>{stats.growth}</div>
                    <div className='transition-all duration-300 ease-in-out transform'>
                        {stats.growthRate === 'possitive' ? (
                            <TrendingUpIcon className="text-green-500" />
                        ) : (
                            <TrendingDown className="text-red-500" />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}
