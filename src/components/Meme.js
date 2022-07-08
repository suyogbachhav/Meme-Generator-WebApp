import React from "react";
import "../style.css"
import data from "../memesData"

export default function Meme(){
const [memeImage, setMemeImage] = React.useState("");

    function handleOnClick(){
        const array = data.data.memes;
        let randomNumber = Math.round(Math.random()*array.length);
        // since I dont need previous meme images, i am not passing the parameter.
        setMemeImage(array[randomNumber].url)
        
    }
    return(
        <main className="main">
            <div className="form">
                <input type="text" 
                    placeholder="Top Text"
                    className="form--input"
                />
                <input type="text" 
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={handleOnClick}
                    >Get a new meme image 🖼</button>
                <div className="form--image--div">
                <img src={memeImage} className="form--image"/>
                </div>
                
            </div>
        </main>
        
    )
}