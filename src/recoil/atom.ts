import {atom} from 'recoil';

const ScreenTypeAtom = atom<ScreenType>({
  key: 'ScreenTypeAtom',
  default: 'Splash',
});

const userAtom = atom<IUser>({
  key: 'userAtom',
  default: {
    name: '',
    role: '',
    resume: null,
  },
});

export {ScreenTypeAtom, userAtom};
