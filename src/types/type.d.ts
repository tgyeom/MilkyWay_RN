import {ParamListBase} from '@react-navigation/native';

declare global {
  interface RootStackParamList extends ParamListBase {
    Login: undefined;
    Home: undefined;
    Splash: undefined;
  }
}
export {};
