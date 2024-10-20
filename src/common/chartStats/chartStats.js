import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CircleIcon from '@mui/icons-material/Circle';

export const ChartStats = ({stats,type}) => {
    return (
        <div className={`flex flex-col justify-center gap-1 items-center w-[80%] ${type==='location'?'text-sm py-3':'text-[15px] font-normal py-2'}`}>
            <div className='flex justify-between w-[100%]'>
                <div className='flex gap-1 justify-center items-center'>
                    <CircleIcon style={{ fontSize: '8px', marginTop: '2px', display: type==='location'?'none':'' }} />
                    {stats.title}</div>
                <div>{stats.value}</div>
            </div>
            <div className='w-[100%]'>
                <LinearProgress
                    sx={{
                        display: type==='location'?'':'none',
                        background: 'lightgrey',
                        '& .MuiLinearProgress-bar': {
                            background: 'var(--Secondary-Cyan, rgba(168, 197, 218, 1))'
                        },
                    }} variant='determinate' value={stats.progress} />
            </div>
        </div>
    )
}
