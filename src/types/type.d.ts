import {ParamListBase} from '@react-navigation/native';

declare global {
  interface RootStackParamList extends ParamListBase {
    Login: undefined;
    Home: undefined;
    Splash: undefined;
  }
  declare module '*.svg' {
    import React from 'react';
    import {SvgProps} from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }
  type ScreenType = '' | 'Home' | 'Splash';

  interface IUser {
    name: string | null;
    role: string | null;
    resume: number | null;
  }

  type TagProps = {
    type: '' | '모집중' | '스터디' | '멘토';
  };
}
