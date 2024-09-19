import { ConfigProvider } from 'antd';
import { useRecoilState } from 'recoil';
import {
  currentScreenState,
  AppScreen,
} from '../../recoil/atoms';
import GameScreen from '../../screens/Game';
import IntroScreen from '../../screens/Intro';
import './App.css';
import { theme } from '../../theme';
import Header from '../Header';
import Stats from '../Stats';

const App = () => {
  const [currentScreen, setCurrentScreen] = useRecoilState(currentScreenState);

  const startGame = () => {
    setCurrentScreen(AppScreen.Game);
  };

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Header />
        {currentScreen === AppScreen.Game ? (
          <GameScreen />
        ) : (
          <IntroScreen onStartGame={startGame} />
        )}
        <Stats />
      </div>
    </ConfigProvider>
  );
};

export default App;
