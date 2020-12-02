import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import AccountsSelect, { Account } from './src/pages/Accounts';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator headerMode="none" initialRouteName={'Home'}>
      <Screen name="Home" component={Home} />
      <Screen name="AccountsPage" component={AccountsSelect} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
