import { useState, useEffect } from "react";

import styles from "./MemeMaker.module.css";

const MemeMaker = () => {
  const [memes, setMemes] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const randomNumber = Math.floor(Math.random() * (memes.length + 1));

  const [isVisible, setIsVisible] = useState(false);
  const [topTxt, setTopTxt] = useState("");
  const [bottomTxt, setBottomTxt] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        setMemes(response.data.memes);
      });
  }, []);

  const generateMeme = () => {
    setImgUrl(memes[randomNumber]?.url);

    setIsVisible(true);
  };

  return (
    <>
      <form className={styles.inputArea} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Top text"
          onChange={(e) => setTopTxt(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom text"
          onChange={(e) => setBottomTxt(e.target.value)}
        />
        <button
          className={styles.generateButton}
          onClick={() => generateMeme()}
        >
          Generate
        </button>
      </form>
      {isVisible ? (
        <div className={styles.memeArea}>
          <img src={imgUrl} alt="aa" />

          <div className={styles.memeTxt}>
            <h1 className={styles.topText}>{topTxt}</h1>
            <h1 className={styles.bottomText}>{bottomTxt}</h1>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MemeMaker;
