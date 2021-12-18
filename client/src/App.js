import React, { useState } from "react";
import './App.css';

import Header from "./Components/Header";
import PinUpload from "./Components/PinUpload";
import PinBoard from "./Components/PinBoard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const modalToggle = () =>{
    setShowModal(!showModal)
  }
  
  return (
    <>
    <Header showModal={showModal} modalToggle={modalToggle} />
    <PinBoard />
    {
      showModal ?
        <PinUpload modalToggle={modalToggle} /> : null
    }
    </>
  );
}

export default App;
