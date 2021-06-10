function Art({ art }) {
    console.log(art);
    return (
      <div className="art-container">
        <img src={art.primaryImageSmall} alt="art file" />
        <p>{art.artistDisplayName}</p>
      </div>
    );
  }
  
  export default Art;
  