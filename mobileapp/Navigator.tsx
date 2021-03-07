import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Accounts from './src/pages/Accounts';
import Home from './src/pages/Home';
import Onboarding from './src/pages/Onboarding';
import { ScanAndProtect } from './src/pages/Accounts/ScanProtect';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator headerMode="none" initialRouteName={'Onboarding'}>
      <Screen name="Home" component={Home} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="AccountsPage" component={Accounts} />
      <Screen name="ScanAndProtect" component={ScanAndProtect} />
    </Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
