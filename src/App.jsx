import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );

}

function Board() {

  // Array Simpan Value (Uplifting State)
  const [squares, setSquares] = useState(Array(9).fill(null));
  // State untuk menentukan giliran pemain 
  const [xIsNext, setXIsNext] = useState(true);

  // Function untuk menghandle click pada square
  function handelClick(i) {
    if(squares[i]){
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

  return (
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
  )
}

export default Board
