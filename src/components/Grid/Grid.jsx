import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../../helpers/checkWinner";
import './Grid.css';


function Grid({ numberOfCards }) {
    const [turn, setTurn] = useState(true); // false -> X, true => 0
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); // ["", "", "", "", "", ""]
    const [winner, setWinner] = useState(null);
    const [finish, setFinish]= useState(false)
    
    function play(index) {
       
        if(turn == true) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }
        const draw = board.every((tile) => tile !== "");
        const win = isWinner(board, turn ? "O" : "X");
        if(draw)   {
          setFinish(true);
        }
        if(win){
          setWinner(win);
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
        setFinish(false);
    }


    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">Congratulations! Winner is {winner} </h1>
                    <button className="reset" onClick={reset}>Reset game</button>
                </>
            )}
            {finish && !winner && (
               <>
                    <h1 className="turn-highlight"> No Winner Try Again! </h1>
                    <button className="reset" onClick={reset}>Reset game</button>
                </>
            )}
            {!winner && !finish && (
              <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'} </h1>
            )}
           
            
            <div className="grid">
                {board.map((value, idx) => {
                    return <Card gameEnd={winner ? true : false} onPlay={play} player={value} key={idx} index={idx} />
                })}
            </div>
        </div>
    )
}

export default Grid;