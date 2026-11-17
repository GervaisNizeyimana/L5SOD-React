import { useContext,useRef, useState } from "react";
import CountContext from "./contexts/CountContext"

function Count(){
    const {count,increment,decrement}= useContext(CountContext)
    let  divRef = useRef(null)
    const [name,setName]= useState("")
    let inputRef= useRef(null)
    const inc = ()=>{

        divRef.current.style.backgroundColor="blue";
        inputRef.current.focus()

      
    
    }

    return<div ref={divRef}>
        <h1>Count: {count}</h1>
        <h4>Name: {name}</h4>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={inc}>Inc</button>
        <input type="text" ref={inputRef} />
        <br/>
        <button onClick={()=>{
            setName(inputRef.current.value)

        }}>Show Name</button>

    </div>
}
export default Count