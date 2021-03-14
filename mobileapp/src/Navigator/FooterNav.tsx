import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import Accounts from '../pages/ScanAndProtect/PrimaryAccounts';
import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import { ScanAndProtect } from '../pages/ScanAndProtect/PrimaryAccounts';
import Setting from './KittenDrawer';
import { useNavigation } from '@react-navigation/native';
import { PropsService } from '@ui-kitten/components/devsupport';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = (props: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function onSelect(index: number) {
    setSelectedIndex(index);
    props.navigation.navigate(routes[index]);
  }
  const routes = ['Setting', 'Vault', 'Alert', 'Home'];
  //   const navigation = useNavigation();
  return (
    <BottomNavigation selectedIndex={selectedIndex} onSelect={onSelect}>
      <BottomNavigationTab title="Setting" icon={SettingIcon} />
      <BottomNavigationTab title="Vault" icon={LockIcon} />
      <BottomNavigationTab title="Alert" icon={StatusIcon} />
      <BottomNavigationTab title="Home" icon={HomeIcon} />
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Onboarding" component={Onboarding} />
    <Screen name="AccountsPage" component={Accounts} />
    <Screen name="ScanAndProtect" component={ScanAndProtect} />
    <Screen name="Setting" component={Setting} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const iconColor = '#0000FF';

export const SettingIcon = () => (
  <Icon style={iconstyles.icon} fill={iconColor} name="settings-2" />
);

export const HomeIcon = () => <Icon style={iconstyles.icon} fill={iconColor} name="home" />;

export const SearchIcon = () => (
  <Icon style={iconstyles.icon} fill={iconColor} name="search-outline" />
);

export const StatusIcon = () => <Icon style={iconstyles.icon} fill={iconColor} name="shield" />;

export const LockIcon = () => <Icon style={iconstyles.icon} fill={iconColor} name="lock" />;

export const Utilities = () => <Icon style={iconstyles.icon} fill={iconColor} name="cube" />;

const iconstyles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    color: 'blue',
    alignSelf: 'center',
  },
});
