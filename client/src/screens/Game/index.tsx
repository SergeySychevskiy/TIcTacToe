import { useRecoilState } from 'recoil';
import Board from '../../components/Board';
import { currentScreenState, AppScreen } from '../../recoil/atoms';
import './styles.css';
import GameEndModal from '../../components/Modals/GameEndModal';
import { useGameLogic } from '../../hooks/game';

const GameScreen = () => {
  const {
    board,
    isXNext,
    winner,
    isEndGame,
    isComputerThinking,
    winningCells,
    makeMove,
    resetGame,
  } = useGameLogic();

  const [, setCurrentScreen] = useRecoilState(currentScreenState);

  const handleBackHome = () => {
    setCurrentScreen(AppScreen.Intro);
  };

  const gameStatus = winner
    ? ''
    : isComputerThinking
      ? 'Computer is thinking...'
      : isXNext
        ? 'Your turn'
        : '';

  return (
    <div className="game-screen">
      <Board board={board} onCellClick={makeMove} winningCells={winningCells} />
      <div className="game-info">
        <p>{gameStatus}</p>
      </div>
      <GameEndModal
        isModalVisible={isEndGame}
        winner={winner}
        onReset={resetGame}
        onBack={handleBackHome}
      />
    </div>
  );
};

export default GameScreen;
