import React, { useState } from "react";
import { useEffect } from "react";
import videoBg from "../assets/videoBg.mp4";
import sound from "../assets/sea.mp3";
import { getTime } from "./getTime";

const Main = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60);

  const minutes = getTime(Math.floor(timeLeft / 60));
  const seconds = getTime(timeLeft - minutes * 60);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
  }, []);
  return (
    <div className="main">
      <div className="overlay">
        <h1>2 мүнөт эч нерсе кылба!</h1>
      </div>
      <audio src={sound} autoPlay />
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Бейпилдик</h1>
        <p>Жөн гана ук жана эс ал!</p>
      </div>
      <div className="timer">
        <h1 className="g">{minutes}</h1>
        <h1>:</h1>
        <h1>{seconds}</h1>
      </div>
    </div>
  );
};

export default Main;
