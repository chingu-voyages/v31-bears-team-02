import Timer from "./Timer";
import RoundCounter from "./RoundCounter";
import ChoiceButton from "./ChoiceButton";
import { useEffect, useState } from "react";
const GameUI = ({
  art,
  correctArt,
  roundCounter,
  setRoundCounter,
  setAnswerChosen,
  answerChosen,
  setArt,
}) => {
  const [timer, setTimer] = useState(10);

  // useEffect(() => {
  //   if (!answerChosen) {
  //     timer > 0 && setTimeout(() => setTimer((timer) => timer - 1), 1000);
  //   }

  //   if (timer === 0) {
  //     setAnswerChosen(true);
  //   }
  // }, [timer]);
  // let timerInterval = setInterval(() => setTimer((timer) => timer - 1), 1000);

  // useEffect(() => {
  //   timerInterval();
  // }, [timerInterval]);

  let timerInterval;
  useEffect(() => {
    function startTimer() {
      timerInterval = setInterval(incrementTimer, 1000);
    }

    function incrementTimer() {
      setTimer((timer) => timer - 1);
    }

    startTimer();
  }, []);

  useEffect(() => {
    function endTimer() {
      clearInterval(timerInterval);
      setTimer(0);
    }
    if (timer === 0) {
      endTimer();
      setAnswerChosen(true);
    }
  }, [timer]);

  const handleClick = (e) => {
    if (e.target.value === correctArt.artistDisplayName) {
      console.log("correct!", e.target.value);
      setAnswerChosen((answer) => !answer);
    }
  };

  const artButtons = art.map((art) => {
    return (
      <ChoiceButton
        key={art.artistDisplayName}
        artistName={art.artistDisplayName}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="gameui-container">
      <Timer timer={timer}></Timer>
      <div className="multiple-choice">{artButtons}</div>
      <RoundCounter roundCounter={roundCounter}></RoundCounter>
    </div>
  );
};

export default GameUI;
