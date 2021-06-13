import { useEffect, useState } from "react";
import Art from "./Art";
import "./Game.css";
import GameUI from "./GameUI";
import ArtInfoDialog from "./ArtInfoDialog";

const Game = () => {
  const [art, setArt] = useState(null);
  const [correctArt, setCorrectArt] = useState(null);
  const [roundCounter, setRoundCounter] = useState(1);
  const [answerChosen, setAnswerChosen] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const url =
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=painting";
    const artFetch = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const objectIds = [];
      for (let i = 0; i < 4; i++) {
        objectIds.push(
          data.objectIDs[[Math.floor(Math.random() * data.objectIDs.length)]]
        );
      }
      const randomArt = await Promise.all(
        objectIds.map(async (id) => {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          const data = await res.json();
          return data;
        })
      );

      setCorrectArt(randomArt[Math.floor(Math.random() * 4)]);
      setArt(randomArt);
      setTimer(10);
    };
    artFetch();
  }, [roundCounter]);

  useEffect(() => {
    if (!answerChosen) {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }

    if (timer === 0) {
      setAnswerChosen(true);
    }
  }, [timer]);

  return (
    <div className="game-screen">
      {art && correctArt && <Art correctArt={correctArt} art={art} />}
      {art &&
        correctArt &&
        (answerChosen ? (
          <ArtInfoDialog
            setAnswerChosen={setAnswerChosen}
            setRoundCounter={setRoundCounter}
            artInfo={correctArt}
          />
        ) : (
          <GameUI
            correctArt={correctArt}
            art={art}
            roundCounter={roundCounter}
            setRoundCounter={setRoundCounter}
            setAnswerChosen={setAnswerChosen}
            timer={timer}
          />
        ))}
    </div>
  );
};

export default Game;
