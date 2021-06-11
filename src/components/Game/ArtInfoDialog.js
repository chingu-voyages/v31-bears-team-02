const ArtInfoDialog = ({ setRoundCounter, setAnswerChosen }) => {
  function handleClick(e) {
    setRoundCounter((round) => round + 1);
    setAnswerChosen(false);
  }
  return (
    <>
      Art info Dialog
      <button onClick={handleClick}>next</button>
    </>
  );
};

export default ArtInfoDialog;
