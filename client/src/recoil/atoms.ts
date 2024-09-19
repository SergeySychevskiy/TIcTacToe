import { atom } from 'recoil';

export enum AppScreen {
  Game = 'game',
  Intro = 'intro',
}

export const currentScreenState = atom<AppScreen>({
  key: 'currentScreenState',
  default: AppScreen.Intro,
});

interface WinStats {
  player: number;
  computer: number;
  games: number;
}

export const winStatsState = atom<WinStats>({
  key: 'winStatsState',
  default: {
    player: 0,
    computer: 0,
    games: 0,
  },
});
