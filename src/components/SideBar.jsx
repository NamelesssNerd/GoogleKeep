import React from 'react'
import { NavigationStrings } from '../NavigationStrings/NavigatioStrings'
import { AiOutlineBulb } from "react-icons/ai"
import { VscEdit } from "react-icons/vsc"
import { RxBell } from "react-icons/rx"
import { RiInboxArchiveLine, RiDeleteBin6Line } from "react-icons/ri"
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to={NavigationStrings.Notes} >
                <div className="usersection">
                    <AiOutlineBulb className='ico acc' />
                    <h4 className='accc'>Notes</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Reminder}>
                <div className="usersection">
                    <RxBell className='ico acc' />
                    <h4 className='accc'>Reminders</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Edit}>
                <div className="usersection">
                    <VscEdit className='ico acc' />
                    <h4 className='accc'>Edit labels</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Archive}>
                <div className="usersection">
                    <RiInboxArchiveLine className='ico acc' />
                    <h4 className='accc'>Archive</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Bin}>
                <div className="usersection">
                    <RiDeleteBin6Line className='ico acc' />
                    <h4 className='accc'>Bin</h4>
                </div>
            </Link>
        </div>
    )
}

export default SideBar