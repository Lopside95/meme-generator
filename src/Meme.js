import React, { useEffect } from "react";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  // last bit of the lesson/module was to get the meme data
  // from the API instead of the memesData file but that gave an err
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function fetchMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

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
