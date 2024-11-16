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
}

export {};
