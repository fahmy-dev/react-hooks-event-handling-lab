// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handlePass(event) {
        console.log("Entering password...")
    }
    return (
        <div>
            <input 
            type="password"
            onChange={handlePass}
            />
        </div>
    )
}

export default Keypad;