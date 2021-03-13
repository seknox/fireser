/**
 * Copyright (C) 2020-2021 Seknox Pte Ltd.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Accounts from '../pages/ScanAndProtect';
import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import { ScanAndProtect } from '../pages/ScanAndProtect/ScanProtect';
import Setting from './KittenDrawer';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator headerMode="none" initialRouteName={'Home'}>
      <Screen name="Home" component={Home} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="AccountsPage" component={Accounts} />
      <Screen name="ScanAndProtect" component={ScanAndProtect} />
      {/* <Screen name="Setting" component={Setting} /> */}
    </Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
