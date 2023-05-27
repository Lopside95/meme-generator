import React, { useEffect } from "react";
import { useState } from "react";

export default function Meme() {
  // State in which meme data is saved
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  // Fetches data from API
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // Assigns a url/index to meme images and, upon clicking the 'get new image button
  // returns a meme image from the array which is different to the previous image
  function fetchMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Handles form inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          className="input-one"
          placeholder="Top text ..."
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>

        <input
          type="text"
          className="input-two"
          placeholder="Bottom text ..."
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="image-button" onClick={fetchMeme}>
          Get a new image
        </button>
      </div>
      <div className="meme">
        <img className="the-image" src={meme.randomImage} alt=""></img>
        <h2 className="meme-text top">{meme.topText} </h2>
        <h2 className="meme-text bottom">{meme.bottomText} </h2>
      </div>
    </div>
  );
}
