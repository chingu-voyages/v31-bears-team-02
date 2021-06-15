import { useEffect, useState, useRef } from "react";
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
  const hasGeneratedRound = useRef(false);

  useEffect(() => {
    const url =
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=painting";
    const artFetch = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const objectIds = [];

      for (let i = 0; i < 40; i++) {
        // makes sure all object ids are unique
        const objectID = data.objectIDs.splice(
          Math.floor(Math.random() * data.objectIDs.length),
          1
        )[0];
        objectIds.push(objectID);
      }
      console.log("objectIds:", objectIds);

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
          randomArt[Math.floor(Math.random() * randomArt.length)]
        );
      }

      setCorrectArt(firstRoundArt[Math.floor(Math.random() * 4)]);
      setArt(randomArt);
      setRoundArt(firstRoundArt);
    };
    artFetch();
  }, []);

  useEffect(() => {
    if (!hasGeneratedRound.current) {
      const newRound = [];
      for (let i = 0; i < 4; i++) {
        art && newRound.push(art[[Math.floor(Math.random() * art.length)]]);
      }
      setRoundArt(newRound);
      setCorrectArt(newRound[Math.floor(Math.random() * 4)]);
      hasGeneratedRound.current = true;
    }
  }, [roundCounter, art]);

  return (
    <div className="game-screen">
      {roundArt && correctArt && <Art correctArt={correctArt} art={art} />}
      {roundArt &&
        art &&
        (answerChosen ? (
          <ArtInfoDialog
            setAnswerChosen={setAnswerChosen}
            setRoundCounter={setRoundCounter}
            artInfo={correctArt}
            setCorrectArt={setCorrectArt}
            hasGeneratedRound={hasGeneratedRound}
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
