import React, { useState } from 'react'
import PieChartIcon from '@mui/icons-material/PieChart';
import RedeemIcon from '@mui/icons-material/Redeem';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import GroupsIcon from '@mui/icons-material/Groups';
import BookIcon from '@mui/icons-material/Book';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export const SidebarHooks = () => {
    const [dashboardArray, setDashboardArray] = useState([
        {
            icon: <PieChartIcon />,
            title: 'Default',
            path:'/default',
            active: true,
        },
        {
            icon: <RedeemIcon />,
            title: 'eCommerce',
            path:'/eCommerce',
            active: false,
        },
        {
            icon: <DriveFileMoveIcon />,
            title: 'Project',
            path:'/project',
            active: false,
        },
        {
            icon: <AutoStoriesIcon />,
            title: 'Online Courses',
            path:'/onlineCourses',
            active: false,
        },
    ]);
    const bulletArray = [
        {
            icon: null,
            title: 'Overview',
            path:'overview'
        },
        {
            icon: null,
            title: 'Projects',
            path:'projects'
        },
    ];
    const [pagesArray,setPagesArray] = useState([
        {
            icon: <ContactPageIcon />,
            title: 'User Profile',
            path:'userProfile',
            active: false,
            isExpand: false,
            expandItems: [
                {
                    icon: null,
                    title: 'Overview',
                },
                {
                    icon: null,
                    title: 'Projects',
                },
                {
                    icon: null,
                    title: 'Campaigns',
                },
                {
                    icon: null,
                    title: 'Documents',
                },
                {
                    icon: null,
                    title: 'Followers',
                },
            ]
        },
        {
            icon: <ContactEmergencyIcon />,
            title: 'Account',
            path:'account',
            active: false,
            isExpand: false,
            expandItems: []
        },
        {
            icon: <GroupsIcon />,
            title: 'Corporate',
            path:'corporate',
            active: false,
            isExpand: false,
            expandItems: []
        },
        {
            icon: <BookIcon />,
            title: 'Blog',
            path:'blog',
            active: false,
            isExpand: false,
            expandItems: []
        },
        {
            icon: <QuestionAnswerIcon />,
            title: 'Social',
            path:'social',
            active: false,
            isExpand: false,
            expandItems: []
        },
    ])
    const setDashboardData = (item) => {
        let newDashArray = dashboardArray.map((dashItem) => {
            if (dashItem.title === item.title) {
                return {
                    ...item,
                    active: true
                }
            }
            else {
                return {
                    ...dashItem,
                    active: false
                }
            }
        })
        setDashboardArray(newDashArray);
    }
    const setPagesData = (item) => {
        let newPagesArray = pagesArray.map((pageItem) => {
            if (pageItem.title === item.title) {
                return {
                    ...item,
                    isExpand: !item.isExpand
                }
            }
            else {
                return {
                    ...pageItem,
                    isExpand: false
                }
            }
        })
        let newDashArray = dashboardArray.map((dashItem) => {
                return {
                    ...dashItem,
                    active: false
                }
        })
        setDashboardArray(newDashArray);
        setPagesArray(newPagesArray);
    }
    return {
        bulletArray,
        dashboardArray,
        setDashboardArray,
        pagesArray,
        setPagesData,
        setDashboardData
    }
}
