import React from "react";
import memesData from "./memesData";

export default function Meme() {
  function fetchMeme() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    console.log(url);
  }

  return (
    <div className="meme">
      <div className="form">
        <input type="text" className="input-one" placeholder="Top Text"></input>
        <input
          type="text"
          className="input-two"
          placeholder="Bottom Text"
        ></input>
        <button className="image-button" onClick={fetchMeme}>
          New Image
        </button>
      </div>
    </div>
  );
}
