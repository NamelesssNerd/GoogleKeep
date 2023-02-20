import React, { useState } from 'react'
import { MdOutlineDoneOutline } from "react-icons/md"
import { BsBrush, BsCardImage } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { MdOutlineAddAlert, MdOutlinePersonAddAlt1, MdOutlineColorLens, MdMoreVert } from "react-icons/md"
import { BiImage } from "react-icons/bi"
import { RiInboxArchiveLine } from "react-icons/ri"
import { BiUndo, BiRedo } from "react-icons/bi"

const Notes = () => {
  const [showInp, setshowInp] = useState(false)
  const viewValue = useSelector((state) => {
    return state.view[0]
  })
  return (
    <div className="common" >
      <div className="content">
        <div className="notes" >
          {showInp != true ? <div className="inputlinkdiv" onClick={() => setshowInp(!showInp)}>
            <div className="innerinpu">
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
              <textarea className='textarea' placeholder='Title'></textarea>
              <textarea className='textarea' placeholder='Take a note...'></textarea>
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
                  <p onClick={() => setshowInp(!showInp)}>Close</p>
                </div>
              </div>
            </div>
          </div>}
          <div className={viewValue != true ? "connn" : "connnn"} onClick={() => setshowInp(false)}>
            <div className={viewValue != true ? "note" : "notee"}>
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolornisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className={viewValue != true ? "note" : "notee"}>
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className={viewValue != true ? "note" : "notee"}>
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className={viewValue != true ? "note" : "notee"}>
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className={viewValue != true ? "note" : "notee"}>
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className={viewValue != true ? "note" : "notee"}>
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes