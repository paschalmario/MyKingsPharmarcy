import { useState } from "react"

function Todo(){
    const [item, setitem] = useState("")
    item = ["go to the market", "go to school"]

    function handlechange(e){
        setitem(e.target.value)
    }

    return(
        <>
        <h1>TO_DO</h1>
        <input type="text" name="" id="" />
        <button>add</button>
        <ul>
            <li>{item}</li>
        </ul>
        </>
        
    )
}

export default todo;