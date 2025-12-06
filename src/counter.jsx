import { useState } from "react";

// function MyForm(){
//     const [name, setName] = useState("ford")

//     const handlechange = (event) => {
//         setName(event.target.value)
//     }

//     return(
//         <select value={name} onChange={handlechange}>
//             <option value="ford">ford</option>
//             <option value="BMW">BMW</option>
//             <option value="nissan">nissan</option>
//             <option value="tesla">tesla</option>
//         </select>
//     )
   
// }
function Counter(){
    var [num, Setnum] = useState(0);

    function add() {
       Setnum(num +1)
    }
    function minus(){
        Setnum(num -1)
    }
    function handlechange(e){
        Setnum(e.target.value)
    }
    return(
        <>
        <button onClick={add}>+</button>
        <p>{num}</p>
        <button onClick={minus}>-</button>
        </>
        
    )
}
 export default Counter;