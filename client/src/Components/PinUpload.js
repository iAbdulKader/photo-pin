import React, { useState, useContext } from "react";
import axios from "axios";
import Compressor from 'compressorjs';

import { GlobalContext } from "../Contexts/GlobalState"

import "../Styles/PinUpload.css"

export default function PinUpload({modalToggle, showModal}) {
  const { addPin } = useContext(GlobalContext);
  
  let [file, setFile] = useState(null);
  let [fileBlob, setFileBlob] = useState(null);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [destination, setDestination] = useState("");
  let [size, setSize] = useState("lg");
  let [loading, setLoading] = useState(false);

  const upload = async (e) => {
    if (e.target.files && e.target.files[0]) {
        if (/image\/*/.test(e.target.files[0].type)) {
            const reader = new FileReader();
            reader.onload = function () {
              setFileBlob(reader.result)
            }
            reader.readAsDataURL(e.target.files[0]);
           
           // imgage Compressing
            new Compressor(e.target.files[0], {
              quality: 0.3,
              success(result) {
                setFile(result)
              },
              error(err) {
                console.log(err.message);
              },
            });
        }
    }
  }
  const submit = async (e) => {
     e.preventDefault();
     setLoading(true)
     if(title.trim() == "" || description.trim() =="" || destination.trim() == "" || file == null) {
       setLoading(false)
       alert("All Fields Are Required.")
       return;
     } else {
       let clickedDate = new Date();
       const data = new FormData();
       data.append("pin", file)
       data.append("title", title)
       data.append("description", description)
       data.append("destination", destination)
       data.append("size", size)
       
       //let res = await axios.post("http://192.168.43.181:5000/upload", data);
       try {
         let res = await axios.post("https://photopin-serverv1.herokuapp.com/upload", data)
        // let res = await axios.post("http://localhost:5000/upload", data)
         addPin({
          ...res.data,
          url: fileBlob
         })
         setLoading(false)
         modalToggle();
       } catch (e) {
         setLoading(false)
         alert("Failed, Try Again")
       }
     }
  }
  
  return(
    <>
    <div style={{ display: `${showModal? "block" : "none"}` }} className="overlay center"></div>
      <div className="modal__container" style={{ transform: `translate(-50%,-50%) scale(${showModal ? 1 : 0})` }}>
        <div className="section1">
          <div onClick={modalToggle} className="close__btn center">
            &times;
          </div>
        </div>
        
        <div className="section2 center">
          <div className="img__box center" style={{ display: `${!file? "block" : "none"}`}}>
           <label htmlFor="pin_upload" id="upload_label">
            <div className="dotted__img__container center">
              <div className="upload__box__content">
                <h3>Click or Drag to upload Photos</h3>
                <h4>Upload Photos, Gifs or Videos less than 20MB</h4>
              </div>
            </div>
            <input onChange={upload} type="file" name="pin" id="pin_upload" />
            </label>
          </div>
          
          <div style={{ display: `${file? "block" : "none"}`}} className="pin__image__container">
            <div className="pin__image">
              <img src={fileBlob} alt="pin" />
            </div>
          </div>
          
        </div>
        
        <div className="section3">
          <div className="input__form">
            <input onChange={e=> setTitle(e.target.value)} type="text" value={title} name="title" placeholder="Add Your Title"/>
            <input onChange={e=> setDescription(e.target.value)} type="text" value={description} name="description" placeholder="Your Pin description"/>
            <input onChange={e=> setDestination(e.target.value)} type="text" value={destination} name="destination" placeholder="Describe destination"/>
          </div>
          <div className="save__btn__container">
            <select onChange={(e)=>setSize(e.target.value)}>
              <option value="select">Select</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large (Orginal)</option>
            </select>
            <div className="upload_btn_container center">
              {!loading ? (<span onClick={submit} className="save__btn center"><p>Save</p></span>)
              : (<svg className="loader" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#fff" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
                </svg>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
    )
}