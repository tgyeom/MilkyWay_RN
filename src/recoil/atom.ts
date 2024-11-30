import {atom} from 'recoil';

const ScreenTypeAtom = atom<ScreenType>({
  key: 'ScreenTypeAtom',
  default: 'Splash',
});

export {ScreenTypeAtom};
