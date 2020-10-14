/**
 * Copyright (C) 2020 Seknox Pte Ltd.
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

import { Button, Icon, Input, StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Firebot from '../../assets/icons/firebot';

// const SettingIcon = (style: ImageStyle): IconElement => (
//   <Icon {...style} name="settings-2-outline" />
// );

export const SettingIcon = () => (
  <Icon
    style={styles.icon}
    //   fill='#8F9BB3'
    name="settings-2-outline"
  />
);

export const HomeIcon = () => (
  <Icon
    style={styles.icon}
    //   fill='#8F9BB3'
    name="home-outline"
  />
);

export const SearchIcon = () => (
  <Icon
    style={styles.icon}
    //   fill='#8F9BB3'
    name="search-outline"
  />
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

export default (props): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [searchQuery, setSearchQuery] = React.useState<string>();

  const navigateHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.settingIcon}
        appearance="ghost"
        size="giant"
        accessoryLeft={SettingIcon}
        onPress={() => console.log('footer clickkkkkkkked')}
      />

      <Button
        style={styles.settingIcon}
        appearance="ghost"
        size="giant"
        onPress={navigateHome}
        accessoryLeft={HomeIcon}
      />

      <Input
        style={styles.searchBox}
        placeholder="Search..."
        value={searchQuery}
        icon={SearchIcon}
      />

      <Firebot style={styles.firebot} />
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    padding: 4,
    backgroundColor: 'background-basic-color-1',
  },

  settingIcon: {
    alignSelf: 'flex-end',
    bottom: 0,
  },
  searchBox: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: 'background-basic-color-1',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  firebot: {
    // flex: 1,
    height: 80,
    width: 70,
    alignSelf: 'flex-end',
    bottom: 0,
  },
});
