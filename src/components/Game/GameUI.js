import Timer from "./Timer";
import RoundCounter from "./RoundCounter"
const GameUI = () => {
    return (
        <div className="gameui-container">
            <Timer></Timer>
            <div className="multiple-choice">
                <button>option 1</button>
                <button>option 2</button>
                <button>option 3</button>
                <button>option 4</button>
            </div>
            <RoundCounter></RoundCounter>
        </div> 
    )
};

export default GameUI;
