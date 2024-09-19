import { winningLines } from '../constants';

export function checkWinner(board: string[]): string | null {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export const getWinningCombination = (board: string[]): number[] | null => {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return winningLines[i];
    }
  }

  return null;
};

export function isBoardFull(board: string[]): boolean {
  return board.every((square) => square !== '');
}
