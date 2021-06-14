const ArtInfoDialog = ({
  setRoundCounter,
  setAnswerChosen,
  artInfo,
  setArt,
}) => {
  function handleClick(e) {
    setRoundCounter((round) => round + 1);
    setAnswerChosen(false);
    setArt(null);
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
          <a href="https://www.metmuseum.org/art/collection/search/436648">
            More info
          </a>
        </li>
      </ul>
      <button onClick={handleClick}>next</button>
    </>
  );
};

export default ArtInfoDialog;
