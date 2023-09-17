"use client"
import React, {useState} from 'react'
import { useEffect } from 'react'

export const page = () => {

  //handle side effect of any components in react 
  //when UI is updated useEffect will be triggered 
  // useEffect(()=>{
  //   console.log("UI randering done")
  // },[text])// dependency -first: empty array 
  //                       //-second: text array : it will triggered if value of text will change 

  useEffect(()=>{
    console.log("UI randering done");//then this line will be executed

    return(
      console.log("UI changed") //execute this line first 
    )
  },[text])

  var [text, settext] = useState("");

  const changeHandler=(event)=>{
    settext(event.target.value);
    console.log(text);
  }

  return (
    <div>
      <input type="text" onChange={changeHandler}></input>
    </div>
  )
}

export default page;