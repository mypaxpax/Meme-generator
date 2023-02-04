import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function eventHandle(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  function getMemeImage() {
    let randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
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
