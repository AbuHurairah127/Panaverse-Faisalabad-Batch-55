"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewTodo } from "@/store/slices/todoSlice"


export default function CreateTodo() {
  const dispatch = useDispatch()
  const [title, setTitle ]= useState("");
  const [description, setDesription ]= useState("");


const onClickHandler =() =>{
    let newTodo = {
        title, 
        description, 
        id: parseInt(Math.random() * 100),
        isComplete: false,
    }
    console.log("onClickHandler run")
    dispatch(createNewTodo(newTodo))
}
  return (
    <div>

        <input type="text" placeholder="enter title" onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder="enter description" onChange={(e)=> setDesription(e.target.value)} />

         <button onClick={onClickHandler}>Create Todo</button>
    </div>
  )
}
