import React from 'react';
import './styles.css';
import Cell from './Cell';

interface BoardProps {
  board: string[];
  onCellClick: (index: number) => void;
  winningCells: number[] | null;
}

const Board: React.FC<BoardProps> = ({ board, onCellClick, winningCells }) => {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          highlighted={winningCells?.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;
