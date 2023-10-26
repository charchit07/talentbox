import React from 'react'
import style from "../Styles/Middle.module.css"
import { BsApple } from 'react-icons/bs'
import { BsMicrosoft } from 'react-icons/bs'
import {FaSpotify} from "react-icons/fa"

const Middle = () => {
  return (
    <div className={style.Middle}>
       <div className={style.Middle_1}>
        <h1>Learn to code- for free.</h1>
        <h1> Build Projects.</h1>
        <h1> Earn Certifictions.</h1>
        <p> Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including: </p>
        </div>
        <div className={style.icon}>
   <div>
   <BsApple/>
   </div>
   <div>
    <h3>Google</h3>
   </div>
   <div className={style.micro}>
    <div><BsMicrosoft/>
<h3>Microsoft</h3></div>

   </div>
   <div className={style.spotify}>
     <div>
     <FaSpotify/>
    <h3>Spotify</h3>
     </div>
   </div>
   <div className={style.amazon}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsSH89C5B8fPaXHkrekQ75XZW0waebqe_VZq8RQbm&s" alt="" sizes="" srcset="" />
   </div>
        </div>
        <div className={style.button}>
        <button className={style.btn}> Get started (it's free) </button>   
        </div>
       
    </div>
  )
}

export default Middle;