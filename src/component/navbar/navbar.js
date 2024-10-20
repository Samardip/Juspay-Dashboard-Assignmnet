import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Brightness2 } from '@mui/icons-material';
import { darkModeHandler } from '../../useHooks/useNavbar/useNavbar';
import { SearchBar } from '../../common/searchBar/searchBar';
import { useLocation } from 'react-router-dom';

export const Navbar = ({ dark, setDark }) => {
    const location = useLocation();
    return (
        <div className='flex flex-col gap-2 lg:gap-0 lg:flex-row lg:justify-between items-center py-[15px] px-[25px] border-b-[2px] border-b-gray-200 dark:border-gray-600 sticky top-0 z-10 bg-white dark:bg-black'>
            <div className='flex justify-center lg:justify-start lg:w-1/4 w-[100%] gap-6'>
                <div><EventNoteIcon /></div>
                <div><StarBorderIcon /></div>
                <div className='text-gray-500'>Dashboard</div>
                <div className='text-gray-500'>{location.pathname.slice(1) && '/'}</div>
                <div>{location.pathname.slice(1) && location.pathname[1]?.toUpperCase() + location.pathname.slice(2)}</div>
            </div>
            <div className='flex lg:w-2/4 w-[100%] justify-end items-center gap-6'>
                <SearchBar filter={true} />
                <div className='flex justify-between gap-6'>
                    <div className='cursor-pointer' onClick={() => darkModeHandler(dark, setDark)}>
                        {

                            !dark && <WbSunnyIcon />
                        }
                        {
                            dark && <Brightness2 />
                        }
                    </div>
                    <div><HistoryIcon /></div>
                    <div><NotificationsNoneIcon /></div>
                    <div><StickyNote2Icon /></div>
                </div>
            </div>
        </div>
    )
}
