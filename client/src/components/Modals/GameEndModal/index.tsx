import { Button, Modal } from 'antd';
import './styles.css';
import { fieldValues } from '../../../constants';

interface GameEndModalProps {
  isModalVisible: boolean;
  winner: string | null;
  onReset: () => void;
  onBack: () => void;
}

const GameEndModal: React.FC<GameEndModalProps> = (props) => {
  const { isModalVisible, winner, onReset, onBack } = props;

  const getModalTitle = () => {
    if (winner === fieldValues.player) return 'You win!';
    if (winner === fieldValues.computer) return 'Computer wins!';
    return "It's a draw!";
  };

  return (
    <Modal
      title={getModalTitle()}
      open={isModalVisible}
      footer={[
        <Button key="playAgain" type="primary" onClick={onReset}>
          Play Again
        </Button>,
        <Button key="backHome" onClick={onBack} type="primary">
          Back Home
        </Button>,
      ]}
      closable={false}
      maskClosable={false}
      className="game-end-modal"
    >
      <p>The game has ended. Would you like to play again?</p>
    </Modal>
  );
};

export default GameEndModal;
