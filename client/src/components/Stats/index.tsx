import { useRecoilValue } from 'recoil';
import { winStatsState } from '../../recoil/atoms';
import './styles.css';

const Stats: React.FC = () => {
  const winStats = useRecoilValue(winStatsState);

  return (
    <div className="stats">
      <p className="win-stats">Player vs Computer</p>
      <p className="win-stats">
        {winStats.player} - {winStats.computer}
      </p>
    </div>
  );
};

export default Stats;
