import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@/screens/Home.screen';
import Login from '@/screens/Login.screen';
import Splash from '@/screens/Splash.screen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
