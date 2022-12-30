// Code Keypad Component Here
import React from "react"

function Keypad (){
    function enteringPw(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={enteringPw} type="password" />
        </div>
    )
}

export default Keypad;