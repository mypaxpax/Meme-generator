import React from "react";
import memesData from "../../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemesImages.data.memes;
    let randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
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
      <img src={meme.randomImage} className="meme--image"></img>
    </main>
  );
}

export default Meme;
