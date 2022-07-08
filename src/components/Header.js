import React from "react";
import "../style.css"

export default function header(){
    return(
        <div className="header">
            <img 
            src = "./images/troll-face.png"
            className="headerImage"/>
            <h2 className="headerTitle">Meme Generator</h2>
            <h4 className="headerProject">React Course - Project</h4>
        </div>
        
    )
}