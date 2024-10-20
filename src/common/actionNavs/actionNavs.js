import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown } from '@mui/icons-material';

export const ActionNavs = ({ type, item, setDashboardData, setPagesData }) => {
    return (
        <Link to={`${item.path}`}>
            <div className={`flex justify-start gap-2 my-2 cursor-pointer mx-[20px] ${type === 'expand' && item.active && 'bg-gray-100 dark:bg-custom-black-5 rounded-[15px] py-1'}`}
                onClick={() => {
                    if (typeof (setDashboardData) === 'function') {
                        setDashboardData(item);
                    }
                    if (typeof (setPagesData) === 'function') {
                        setPagesData(item);
                    }
                }}
            >
                <div className='text-gray-300 flex justify-center items-center' onClick={(e) => { }}>
                    {type === 'expand' ?
                        <>
                            {item.active &&
                                <>
                                    <div className='h-[20px] w-[5px] bg-black dark:bg-custom-purple rounded-[10px]'></div>
                                </>
                            }
                            {
                                !item.isExpand ?
                                    <ChevronRightIcon sx={{ cursor: 'pointer', marginLeft: '10px' }} visibility={item.active ? 'hidden' : ''} />
                                    :
                                    <KeyboardArrowDown sx={{ cursor: 'pointer', marginLeft: '10px' }} visibility={item.active ? 'hidden' : ''} />

                            }
                        </>
                        :
                        <CircleIcon style={{ fontSize: '10px' }} visibility={false} />

                    }
                </div>
                {
                    item.icon &&
                    <div className={`text-gray-300 flex justify-center items-center ${item.active && 'ml-[-6px]'}`}>{item.icon}</div>
                }
                <div className='text-[20px] flex justify-center items-center text-sm'>{item.title}</div>
            </div>
            <div
                className={`my-2 transition-all duration-1000 ease-in-out ${item.isExpand ? 'max-h-[500px] min-h-[2px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {item.isExpand &&
                    item.expandItems &&
                    item.expandItems.map((subItems, index) => {
                        return (
                            <div
                                key={index}
                                className="text-[20px] flex justify-start items-center ml-[100px] mr-[20px] my-2 text-sm"
                            >
                                {subItems.title}
                            </div>
                        );
                    })}
            </div>
        </Link>
    )
}
