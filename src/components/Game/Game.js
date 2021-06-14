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
  const [roundArt, setRoundArt] = useState(null);

  useEffect(() => {
    const url =
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=painting";
    const artFetch = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const objectIds = [];
      for (let i = 0; i < 40; i++) {
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

      let firstRoundArt = [];
      for (let i = 0; i < 4; i++) {
        firstRoundArt.push(
          randomArt[[Math.floor(Math.random() * randomArt.length)]]
        );
      }

      setCorrectArt(firstRoundArt[Math.floor(Math.random() * 4)]);
      setArt(randomArt);
      setRoundArt(firstRoundArt);
    };
    artFetch();
  }, []);

  useEffect(() => {
    roundArt && setCorrectArt(roundArt[Math.floor(Math.random() * 4)]);
    console.log("round:", roundArt);
  }, [roundCounter, roundArt]);

  return (
    <div className="game-screen">
      {roundArt && correctArt && <Art correctArt={correctArt} art={art} />}
      {roundArt &&
        (answerChosen ? (
          <ArtInfoDialog
            setAnswerChosen={setAnswerChosen}
            setRoundCounter={setRoundCounter}
            artInfo={correctArt}
            setCorrectArt={setCorrectArt}
          />
        ) : (
          <GameUI
            correctArt={correctArt}
            roundArt={roundArt}
            roundCounter={roundCounter}
            setRoundCounter={setRoundCounter}
            setAnswerChosen={setAnswerChosen}
            answerChosen={answerChosen}
          />
        ))}
    </div>
  );
};

export default Game;
