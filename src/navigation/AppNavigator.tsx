import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@/screens/Home.screen';
import Login from '@/screens/Login.screen';
import Splash from '@/screens/Splash.screen';
import Header from '@/components/Header';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
