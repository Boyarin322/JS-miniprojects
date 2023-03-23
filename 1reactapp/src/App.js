import './App.css';
import {useState} from "react";
function Square({value,onSquareClick}){
   return(
       <button
           className={'square'}
           onClick={onSquareClick}
            >{value}
       </button>
   )
}
function Board({isLastWasX, squares, onPlay}) {

    const winner = calculateWinner(squares);
    let status;

    if(winner){
        status = `Winner : ${winner}`;
    } else {
        status = `Next move : ${(isLastWasX ? 'O' : 'X')}`;
    }

    function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const newSquares = squares.slice();

        if (isLastWasX){
            newSquares[i] = 'O';
        }
        else if (isLastWasX === false) {
            newSquares[i] = 'X';
        }
        onPlay(newSquares);
    }

  return (
      <div className={"board-container"}>
          <div className={"status"}>{status}</div>
          <div className="board-row">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
              <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          </div>
          <div className="board-row">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
              <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
              <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          </div>
          <div className="board-row">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
              <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
              <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
          </div>
      </div>
  );
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default function Game(){
    const[isLastWasX, setIsLastWasX] = useState(true);
    const[history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    const moves = history.map((squares, move) =>{
        let description;
        move === 0
            ? description = 'Go to game start'
            : description =`Go to move #${move}`;

        return(
            <li key={move}>
                <button onClick={() => jumpToMove(move)}>{description}</button>
            </li>
        )
    })
    function jumpToMove(nextMove){
        setCurrentMove(nextMove);
        setIsLastWasX(nextMove % 2 === 0);
    }
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setIsLastWasX(!isLastWasX);
    }

    return(
    <div className={'game'}>
        <div className={'game-board'}>
            <Board isLastWasX={isLastWasX} onPlay={handlePlay} squares={currentSquares}></Board>
        </div>
        <div className={'game-info'}>
            <ol>{moves}</ol>
        </div>
    </div>
    )
}
