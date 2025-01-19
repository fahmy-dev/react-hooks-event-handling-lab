// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function eyes(event) {
        console.log(event.type === "focus" ? "Good!" : "Hey! Eyes on me!")
    }
    
    return (
        <div>
            <button 
            onFocus={eyes}
            onBlur={eyes}>
                Eyes on me</button>
        </div>
    )
}

export default EyesOnMe
