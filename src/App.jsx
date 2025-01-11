import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );

}

function Board() {

  // Array Simpan Value (Lifting State Up)
  const [squares, setSquares] = useState(Array(9).fill(null));
  // State untuk menentukan giliran pemain 
  const [xIsNext, setXIsNext] = useState(true);

  // Function untuk menghandle click pada square
  function handelClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Membuat array baru untuk menyimpan value square
    const newSquares = squares.slice();
    if (xIsNext === true) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = '';
  if (winner) {
    status = 'Winner : ' + winner;
  } else {
    status = 'Next Player : ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handelClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handelClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handelClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handelClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handelClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handelClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handelClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handelClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handelClick(8)} />
      </div>
    </>
  );
}

// Function mencari pemenang
function calculateWinner(squares) {
  // Array untuk menyimpan kombinasi pemenang (kombinasi index)
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikal
    [0, 4, 8], [2, 4, 6] // Diagonal
  ];

  // Looping untuk mengecek kombinasi pemenang
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

export default Board
