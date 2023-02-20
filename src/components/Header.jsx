import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
const imageLink = "../../public/googleKeep.png"
import { IoMdRefresh } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineViewAgenda, MdGridView } from "react-icons/md"
import { MdOutlineViewComfy } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { setCon } from '../store/ViewSlices'
import { addHomeNotes } from '../store/homeSlices'
const Header = () => {
    const dispatch = useDispatch()
    const [view, setview] = useState(true)
    const changeCon = () => {
        setview(!view)
        dispatch(setCon(view))
    }
    useEffect(() => {
        if (localStorage.getItem("view") == null) {
            localStorage.setItem("view", view)
        } else {
            localStorage.setItem("view", view)
        }
    }, [view])
    return (
        <div className="header">
            <div className="leftheader">
                <div className="iconsdiv">
                    <FaBars className='bar' />
                    <img src={imageLink} alt="problem with image" />
                    <h2>Keep</h2>
                </div>
                <div className="inputdiv">
                    <BiSearch className='searchicon' />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="rightheader">
                <div className="one">
                    <IoMdRefresh className='userintt' />
                    {view ? <MdOutlineViewAgenda className='userintt' onClick={changeCon} /> : <MdGridView className='userintt' onClick={changeCon} />}
                    <IoSettingsOutline className='userintt' />
                </div>
                <div className="two">
                    <MdOutlineViewComfy className='more' />
                    <p>S</p>

                </div>
            </div>
        </div>
    )
}
export default Header