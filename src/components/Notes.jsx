import React from 'react'
import { MdOutlineDoneOutline } from "react-icons/md"
import { BsBrush, BsCardImage } from "react-icons/bs"
const Notes = () => {
  return (
    <div className="common">
      <div className="content">
        <div className="notes">
          <div className="inputlinkdiv">
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
          </div>
          <div className="connn" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            <div className="note">
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className="note">
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className="note">
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className="note">
              <h5 className='head'>Heading Here</h5>
              <div className="con">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam. Recusandae distinctio aliquam, eaque numquam corrupti possimus repudiandae. Minus dolor maxime ea possimus doloribus omnis nemo provident harum esse quo.
                  Voluptates dolorum a distinctio voluptatibus minus dolores tenetur iusto, nisi ullam architecto ratione? In, fugit sunt. Blanditiis id natus, necessitatibus ea, aut quibusdam mollitia consequatur architecto et explicabo sed dignissimos?</p>
              </div>
            </div>
            <div className="note">
              <h5 className='head'>Heading Here</h5>
              <div className="con">
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