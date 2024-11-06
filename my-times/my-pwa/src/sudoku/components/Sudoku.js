import React, { useState } from "react";
import "./sudoku.css";

// Initial board setup
const initialBoard = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

const solutionBoard = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

const Sudoku = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [errors, setErrors] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  const handleTileClick = (r, c) => {
    if (board[r][c] !== "-" || !selectedNumber || isComplete) return;

    if (solutionBoard[r][c] === selectedNumber) {
      const newBoard = board.map((row, rowIndex) =>
        rowIndex === r
          ? row.substring(0, c) + selectedNumber + row.substring(c + 1)
          : row
      );
      setBoard(newBoard);
      checkCompletion(newBoard); // Check if board is complete
    } else {
      setErrors((prevErrors) => prevErrors + 1);
    }
  };

  const checkCompletion = (currentBoard) => {
    const isSolved = currentBoard.every(
      (row, rowIndex) => row === solutionBoard[rowIndex]
    );
    setIsComplete(isSolved);
    localStorage.setItem('sudokuComplete', 'true');
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setSelectedNumber(null);
    setErrors(0);
    setIsComplete(false);
  };


  return (
    <div className="sudoku-game">
      {isComplete && <h1 className="win-message">You Win! Look at you go megan so smart</h1>} {/* Win message */}
      
      <div className="board">
        {board.map((row, r) => (
          <div key={r} className="row">
            {Array.from(row).map((tile, c) => (
              <div
                key={`${r}-${c}`}
                onClick={() => handleTileClick(r, c)}
                className={`tile ${
                  tile !== "-" ? "tile-start" : ""
                } ${r === 2 || r === 5 ? "horizontal-line" : ""} ${
                  c === 2 || c === 5 ? "vertical-line" : ""
                }`}
              >
                {tile !== "-" ? tile : ""}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="digits">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className={`number ${
              selectedNumber === number.toString() ? "number-selected" : ""
            }`}
          >
            {number}
          </button>
        ))}
        <button className="number" onClick={() => setSelectedNumber(null)}>
          X
        </button>
      </div>

      <div className="errors">Errors: {errors}</div>
      
      <button onClick={handleReset} className="reset-button">Reset Game</button>
    </div>
  );
};

export default Sudoku;
