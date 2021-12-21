import PinModal from "./PinModal"
import React, { useState } from "react";

export default function Pin({pin}){
  let [showPinModal, setShowPinModal] = useState(false)
  
  const togglePinModal = () => {
    setShowPinModal(!showPinModal)
  }
  
  return(
    <>
      <div className="wrapper">
        <div onClick={togglePinModal} className="pin__box center">
          <img src={pin.url} alt="pin" />
        </div>
      </div>
     {
       showPinModal? 
       (<PinModal pin={pin} togglePinModal={togglePinModal} />):null
     }
    </>
    )
}