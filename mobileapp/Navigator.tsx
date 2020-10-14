import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import Accounts from './src/pages/Accounts';
import Google from './src/pages/Accounts/google';
import Facebook from './src/pages/Accounts/facebook';
import Microsoft from './src/pages/Accounts/microsoft';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
    <Screen name="Accounts" component={Accounts} />
    <Screen name="Google" component={Google} />
    <Screen name="Facebook" component={Facebook} />
    <Screen name="Microsoft" component={Microsoft} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
