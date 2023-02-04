import React from "react";
import memesData from "../../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function eventHandle(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

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
          name="topText"
          value={meme.topText}
          onChange={eventHandle}
        ></input>

        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={eventHandle}
        ></input>

        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image"></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
