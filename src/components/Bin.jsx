import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { RiInboxArchiveLine } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { addHomeNotes } from '../store/homeSlices'
import { RiDeleteBin6Line } from "react-icons/ri"
import { removeBinNotes } from '../store/BinSlices';
const Bin = () => {
  const dispatch = useDispatch()
  const viewValue = useSelector((state) => {
    return state.view[0]
  })
  const binData = useSelector((state) => {
    return state.bin
  })
  useEffect(() => {
    let finalOne = JSON.stringify(binData)
    localStorage.setItem("bin", finalOne)
  }, [binData])
  const deleteBin = (position) => {
    dispatch(removeBinNotes(position))
  }
  const archiveBin = (binData) => {
    dispatch(addHomeNotes(binData))
    dispatch(removeBinNotes(binData))
  }
  return (
    <div className="common" >
      <div className="content">
        <div className="notes" >
          <div className={viewValue != true ? "connn" : "connnn"}>
            {binData.map((currenElem, index) => {
              const { title, note } = currenElem;
              return (
                <div className={viewValue != true ? "note" : "notee"} key={index}>
                  <h5 className='head'>{title}</h5>
                  <div className="con">
                    <p>{note}</p>
                  </div>
                  <div style={{ height: "2rem", width: "100%", display: "flex", alignItems: "center", justifyContent: "end", paddingRight: "2rem" }}>
                    <RiInboxArchiveLine style={{ fontSize: "1.3rem", color: "red", cursor: "pointer", marginRight: "2rem" }} onClick={() => archiveBin(currenElem)} />
                    <RiDeleteBin6Line style={{ fontSize: "1.3rem", color: "red", cursor: "pointer" }} onClick={() => deleteBin(index)} />
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
export default Bin