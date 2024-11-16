import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-reanimated';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <RecoilRoot>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </RecoilRoot>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
export default App;
