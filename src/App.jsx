import Board from "./components/Board";
import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import ResetBoard from "./components/ResetBoard";
const App = () => {
  const winCondition = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left col
    [1, 4, 7], // middle col
    [2, 5, 8], // right col
    [0, 4, 8], // left diagonal
    [2, 4, 6], // right diagonal
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 })
  const [gameOver, setGameOver] = useState(false)

  const handleClick = (index) => {
    const updateBoard = board.map((val, idx) => {
      if (idx === index) {
        return xPlaying ? "X" : "O";
      }
      return val
    }
    )
    const winner = checkWinner(updateBoard)
    if (winner) {
      setScores({ ...scores, [winner]: scores[winner] + 1 })
      setBoard(Array(9).fill(null))
      return;
    }

    setBoard(updateBoard)
    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a] + " is the winner");

        return board[a]
      }
    }
    return null
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setGameOver(false)
  }

  return (
    <div className="flex flex-col mx-auto h-screen w-full items-center justify-center">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
      <ResetBoard resetBoard={resetBoard} />
    </div>
  )
};

export default App;
