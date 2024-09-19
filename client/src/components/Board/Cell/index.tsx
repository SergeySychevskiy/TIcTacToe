import './styles.css';
import { fieldValues } from '../../../constants';

interface CellProps {
  value: string;
  onClick: () => void;
  highlighted?: boolean;
}

const XSymbol = () => (
  <svg className="x-symbol" viewBox="0 0 100 100" width="100%" height="100%">
    <line
      x1="15"
      y1="15"
      x2="85"
      y2="85"
      stroke="#b036d0"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <line
      x1="85"
      y1="15"
      x2="15"
      y2="85"
      stroke="#b036d0"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);

const OSymbol = () => (
  <svg className="o-symbol" viewBox="0 0 100 100" width="100%" height="100%">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#ee46af"
      strokeWidth="10"
      fill="none"
    />
  </svg>
);

const Cell: React.FC<CellProps> = ({ value, onClick, highlighted }) => {
  return (
    <div
      className={`cell ${highlighted ? 'highlighted' : ''}`}
      onClick={onClick}
    >
      {value === fieldValues.player ? (
        <XSymbol />
      ) : value === fieldValues.computer ? (
        <OSymbol />
      ) : null}
    </div>
  );
};

export default Cell;
