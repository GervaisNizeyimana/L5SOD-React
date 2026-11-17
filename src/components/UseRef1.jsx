import { useRef,useState } from "react";

function UseRef1(){
    const inputRef = useRef(null)
    const[text,setText] = useState("")
    return <div>
        <h3>Typed text: {text}</h3>
        <input ref={inputRef} type="text" placeholder="Type in text"/><br/>
        <button onClick={()=>setText(inputRef.current.value)}>Show text</button>
    </div>
}

export default UseRef1