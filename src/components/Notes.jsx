import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineDoneOutline } from "react-icons/md"
import { BsBrush, BsCardImage } from "react-icons/bs"
import { MdOutlineAddAlert, MdOutlinePersonAddAlt1, MdOutlineColorLens, MdMoreVert } from "react-icons/md"
import { BiImage } from "react-icons/bi"
import { RiInboxArchiveLine } from "react-icons/ri"
import { BiUndo, BiRedo } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { addHomeNotes, removeHomeNotes } from '../store/homeSlices'
import { RiDeleteBin6Line } from "react-icons/ri"
import { addBinNotes } from '../store/BinSlices';
const Notes = () => {
  const dispatch = useDispatch()
  const [saveValue, setsaveValue] = useState({
    title: "",
    note: ""
  })
  const [showInp, setshowInp] = useState(false)
  const viewValue = useSelector((state) => {
    return state.view[0]
  })
  const notedata = useSelector((state) => {
    return state.home
  })
  const saveData = () => {
    if (showInp == true) {
      setshowInp(false)
      if (saveValue.title != "") {
        if (saveValue.note != "") {
          dispatch(addHomeNotes(saveValue))
          setsaveValue({
            title: "",
            note: ""
          })
        } else {
          toast.error('Empty note!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error('Empty title!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }
  useEffect(() => {
    let finalOne = JSON.stringify(notedata)
    localStorage.setItem("note", finalOne)
  }, [notedata])
  const deleteData = (position, binData) => {
    dispatch(removeHomeNotes(position))
    dispatch(addBinNotes(binData))
  }
  return (
    <div className="common" >
      <div className="content">
        <div className="notes" >
          {showInp != true ? <div className="inputlinkdiv">
            <div className="innerinpu" onClick={() => setshowInp(!showInp)}>
              <div className="text">
                <p>Take a note...</p>
              </div>
              <div className="iccon">
                <MdOutlineDoneOutline className='wow' />
                <BsBrush className='wow' />
                <BsCardImage className='wow' />
              </div>
            </div>
          </div> : <div className="inputlinkdivv">
            <div className="innerinpu">
              <textarea className='textarea' placeholder='Title' onChange={(event) => setsaveValue((prev) => ({ ...prev, title: event.target.value }))} />
              <textarea className='textarea' placeholder='Take a note...' onChange={(event) => setsaveValue((prev) => ({ ...prev, note: event.target.value }))} />
              <div className="tabs">
                <div className="ii">
                  < MdOutlineAddAlert className='opt' />
                  < MdOutlinePersonAddAlt1 className='opt' />
                  < MdOutlineColorLens className='opt' />
                  < BiImage className='opt' />
                  < RiInboxArchiveLine className='opt' />
                  < MdMoreVert className='opt' />
                  < BiUndo className='opt' />
                  < BiRedo className='opt' />
                </div>
                <div className="close">
                  <p onClick={saveData}>Close</p>
                </div>
              </div>
            </div>
          </div>}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className={viewValue != true ? "connn" : "connnn"} onClick={saveData}>
            {notedata.map((currenElem, index) => {
              const { title, note } = currenElem;
              return (
                <div className={viewValue != true ? "note" : "notee"} key={index}>
                  <h5 className='head'>{title}</h5>
                  <div className="con">
                    <p>{note}</p>
                  </div>
                  <div style={{ height: "2rem", width: "100%", display: "flex", alignItems: "center", justifyContent: "end", paddingRight: "2rem" }}>
                    <RiDeleteBin6Line style={{ fontSize: "1.3rem", color: "red", cursor: "pointer" }} onClick={() => deleteData(index, currenElem)} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Notes