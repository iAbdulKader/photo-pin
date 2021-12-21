import React, { useEffect, useState, useContext } from "react";
import Pin from "./Pin";
import axios from "axios";
import "../Styles/Pin.css";
import Masonry from 'react-masonry-css';

import { GlobalContext } from "../Contexts/GlobalState"



export default function PinBoard({result}){
 const { setPins, pins } = useContext(GlobalContext)

  useEffect(() => {
    const getData = async () => {
      //let result = await axios.post("http://192.168.43.181:5000/getpins");
      let result = await axios.post("https://photopin-serverv1.herokuapp.com/getpins");
      //let result = await axios.post("http://localhost:5000/getpins")
      await setPins(result.data)
    }
    getData();
    
  }, [])
  
  const breakpointColumnsObj = {
    default: 6,
    1600: 5,
    1200: 4,
    800: 3,
    400: 2,
    300: 1
  };
  
  
  return(
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          { pins.map(pin=>
           <Pin key={pin._id} pin={pin} />
          )}
      </Masonry>
    )
}