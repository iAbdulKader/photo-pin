import React, { useEffect, useState } from "react";
import Pin from "./Pin";
import axios from "axios";
import "../Styles/Pin.css";
import Masonry from 'react-masonry-css';



export default function PinBoard({result}){
  let [pins, setPins] = useState([])
  let [count, setCount] = useState(1)
 
  useEffect(async () => {
    let result = await axios.post("http://localhost:5000/getpins");
    setPins(result.data)
    console.log(pins)
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
           <Pin key={pin._id} url={pin.url} />
          )}
      </Masonry>
    )
}