import React, { useState } from "react";
import './App.css';

import Header from "./Components/Header";
import PinUpload from "./Components/PinUpload";
import PinBoard from "./Components/PinBoard";

import { GlobalProvider } from "./Contexts/GlobalState"

function App() {
  const [showModal, setShowModal] = useState(false);
  const modalToggle = () =>{
    setShowModal(!showModal)
  }
  
  return (
    <GlobalProvider>
      <Header showModal={showModal} modalToggle={modalToggle} />
      <PinUpload modalToggle={modalToggle} showModal={showModal} /> 
      <PinBoard />
    </GlobalProvider>
  );
}

export default App;
