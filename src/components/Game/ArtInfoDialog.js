const ArtInfoDialog = ({
  setRoundCounter,
  setAnswerChosen,
  artInfo,
  setArt,
  setCorrectArt,
  hasGeneratedRound,
}) => {
  function handleClick(e) {
    setRoundCounter((round) => round + 1);
    setAnswerChosen(false);
    setCorrectArt(null);
    hasGeneratedRound.current = false;
  }
  return (
    <>
      Art info Dialog
      <ul>
        <li>Title: {artInfo.title}</li>

        <li>
          Artist: {artInfo.artistDisplayName} ({artInfo.artistBeginDate} -
          {artInfo.artistEndDate})
        </li>

        {artInfo.objectDate && <li>Date: {artInfo.objectDate}</li>}

        <li>
          <a href={artInfo.objectURL} rel="noreferrer" target="_blank">
            More info
          </a>
        </li>
      </ul>
      <button onClick={handleClick}>next</button>
    </>
  );
};

export default ArtInfoDialog;
