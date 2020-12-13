import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AccountsSelect from './src/pages/Accounts';
import Home from './src/pages/Home';
import { ScanAndProtect } from './src/pages/Accounts/ScanProtect';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator headerMode="none" initialRouteName={'Home'}>
      <Screen name="Home" component={Home} />
      <Screen name="AccountsPage" component={AccountsSelect} />
      <Screen name="ScanAndProtect" component={ScanAndProtect} />
    </Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
