import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { winStatsState } from '../recoil/atoms';
import {
  checkWinner,
  isBoardFull,
  getWinningCombination,
} from '../utils/gameLogic';
import { makeComputerMove } from '../api/gameService';
import { fieldValues } from '../constants';

export const useGameLogic = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [isEndGame, setIsEndOfgame] = useState<boolean>(false);
  const [isComputerThinking, setIsComputerThinking] = useState<boolean>(false);
  const [winningCells, setWinningCells] = useState<number[] | null>(null);
  const [, setWinStats] = useRecoilState(winStatsState);

  useEffect(() => {
    const makeMove = async () => {
      if (!isXNext && !winner && !isBoardFull(board)) {
        setIsComputerThinking(true);
        const newBoard = await makeComputerMove(board);
        setBoard(newBoard);
        const newWinner = checkWinner(newBoard);

        if (newWinner) {
          setWinner(newWinner);
          setIsEndOfgame(true);

          if (newWinner === fieldValues.computer) {
            setWinStats((prev) => ({ ...prev, computer: prev.computer + 1 }));
          }
        }

        if (isBoardFull(newBoard)) {
          setIsEndOfgame(true);
        }
        if (!newWinner && !isBoardFull(newBoard)) {
          setIsXNext(true);
        }

        setIsComputerThinking(false);
      }
    };

    makeMove();
  }, [isXNext, winner, board, setWinStats]);

  useEffect(() => {
    if (winner) {
      const winningCombo = getWinningCombination(board);
      setWinningCells(winningCombo);

      const timer = setTimeout(() => {
        setIsEndOfgame(true);
        setWinningCells(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [winner, board]);

  const makeMove = (index: number) => {
    if (board[index] || winner || !isXNext || isComputerThinking) return;

    const newBoard = [...board];
    newBoard[index] = fieldValues.player;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
      if (newWinner === fieldValues.player) {
        setWinStats((prev) => ({ ...prev, player: prev.player + 1 }));
      }
      return;
    }

    if (isBoardFull(newBoard)) {
      setIsEndOfgame(true);
      return;
    }

    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXNext(true);
    setWinner(null);
    setIsEndOfgame(false);
    setIsComputerThinking(false);
  };

  return {
    board,
    isXNext,
    winner,
    isEndGame,
    isComputerThinking,
    winningCells,
    makeMove,
    resetGame,
  };
};
