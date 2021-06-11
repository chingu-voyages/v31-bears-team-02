import Timer from "./Timer";
import RoundCounter from "./RoundCounter";
import ChoiceButton from "./ChoiceButton";

const GameUI = ({ art, correctArt }) => {
  const handleClick = (e) => {
    if (e.target.value === correctArt.artistDisplayName) {
      console.log("correct!", e.target.value);
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
      <Timer></Timer>
      <div className="multiple-choice">{artButtons}</div>
      <RoundCounter></RoundCounter>
    </div>
  );
};

export default GameUI;
