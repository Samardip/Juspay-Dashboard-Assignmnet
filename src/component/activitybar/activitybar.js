import React from 'react'
import { ActivityNavs } from '../../common/activityNavs/activityNavs';
import { activities, contacts, notifications } from '../../useHooks/useActivityBar/useActivityBar';

export const Activitybar = () => {
    return (
        <div className='h-[99.4vh] overflow-y-scroll scrollbar-hide'>
            <div className='flex justify-start gap-10 mx-[20px] my-[25px]'>
                <div className='font-bold'>{notifications.heading}</div>
            </div>
            {
                notifications.details.map((NotificationItem) => {
                    return <ActivityNavs activityDetails={NotificationItem} profileDash={false} time={true}/>
                })
            }
            <div className='flex justify-start gap-10 mx-[20px] my-[25px]'>
                <div className='font-bold'>{activities.heading}</div>
            </div>
            {
                activities.details.map((activityDetails) => {
                    return <ActivityNavs activityDetails={activityDetails} profileDash={true} time={true}/>
                })
            }
            <div className='flex justify-start gap-10 mx-[20px] my-[25px]'>
                <div className='font-bold'>{contacts.heading}</div>
            </div>
            {
                contacts.details.map((contactDetails) => {
                    return <ActivityNavs activityDetails={contactDetails} profileDash={false} time={false}/>
                })
            }
        </div>
    )
}
