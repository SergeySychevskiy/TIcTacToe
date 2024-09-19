import { useRef } from 'react';
import { Button } from 'antd';
import './styles.css';

interface IntroScreenProps {
  onStartGame: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStartGame }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="intro-screen">
      <p className="intro-text">
        Welcome to Tic Tac Toe! You'll be playing against the computer. Have fun
        and enjoy the game!
      </p>
      <br />
      <Button
        className="intro-button"
        ref={buttonRef}
        onClick={onStartGame}
        type="primary"
      >
        Play
      </Button>
    </div>
  );
};

export default IntroScreen;
