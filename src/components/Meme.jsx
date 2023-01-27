function Meme() {
  return (
    <main className="main">
      <form className="form">
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
        <button className="form--button">Get a new meme image</button>
      </form>
    </main>
  );
}

export default Meme;
