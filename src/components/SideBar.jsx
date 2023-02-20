import React, { useState } from 'react'
import { NavigationStrings } from '../NavigationStrings/NavigatioStrings'
import { AiOutlineBulb } from "react-icons/ai"
import { VscEdit } from "react-icons/vsc"
import { RxBell } from "react-icons/rx"
import { RiInboxArchiveLine, RiDeleteBin6Line } from "react-icons/ri"
import { Link } from 'react-router-dom'
const SideBar = () => {
    const [active, setactive] = useState(0)
    const wow = () => {
        alert()
    }
    return (
        <div className="sidebar">
            <Link to={NavigationStrings.Notes}  >
                <div className={active == 0 ? "usersection usersectionactive" : "usersection"} onClick={() => setactive(0)}>
                    <AiOutlineBulb className='ico acc' />
                    <h4 className='accc'>Notes</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Reminder}>
                <div className={active == 1 ? "usersection usersectionactive" : "usersection"} onClick={() => setactive(1)}>
                    <RxBell className='ico acc' />
                    <h4 className='accc'>Reminders</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Edit}>
                <div className={active == 2 ? "usersection usersectionactive" : "usersection"} onClick={() => setactive(2)}>
                    <VscEdit className='ico acc' />
                    <h4 className='accc'>Edit labels</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Archive}>
                <div className={active == 3 ? "usersection usersectionactive" : "usersection"} onClick={() => setactive(3)}>
                    <RiInboxArchiveLine className='ico acc' />
                    <h4 className='accc'>Archive</h4>
                </div>
            </Link>
            <Link to={NavigationStrings.Bin}>
                <div className={active == 4 ? "usersection usersectionactive" : "usersection"} onClick={() => setactive(4)}>
                    <RiDeleteBin6Line className='ico acc' />
                    <h4 className='accc'>Bin</h4>
                </div>
            </Link>
        </div>
    )
}

export default SideBar