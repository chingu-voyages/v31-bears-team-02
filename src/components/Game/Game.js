
import {useEffect, useState} from "react"
import Art from './Art'
import "./Game.css"
import GameUI from "./GameUI";

const Game = () => {
    const [art, setArt] = useState(null);
    
    useEffect(() => {
      fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=gogh"
      )
        .then((res) => res.json())
        // .then(setArt);
        .then((data) => {
          console.log("artwork object ids:", data);
          const randomImg =
            data.objectIDs[[Math.floor(Math.random() * data.objectIDs.length)]];
          return fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomImg}`
          );
        })
        .then((res) => res.json())
        .then(setArt);
    }, []);
  
    return <div className="game-screen">
    {art && <Art art={art} />}
    <GameUI></GameUI>
    </div>;
};


export default Game;
