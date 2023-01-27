import React from "react";
import memesData from "../../memesData";

function Meme() {
  const [memeImage, setMeme] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    let randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme(url);
  }
  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme--image"></img>
    </main>
  );
}

export default Meme;
