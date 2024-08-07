import { useState } from "react"
function RandomNum(){
    var [num,setnum]=useState(0);
    function random(){
       setnum(Math.floor(Math.random()*10)+1)
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={random}>Random Number</button>
        </div>
    )
}
export default RandomNum