import "../Styles/Header.css"

import PinUpload from "./PinUpload";

export default function Header({showModal, modalToggle}){
  return(
    <>
    <div className="header">
      <div className="Logo" >Pintertest</div>
      <div onClick={modalToggle} className="add__btn center">Add</div>
    </div>
    </>
    )
}