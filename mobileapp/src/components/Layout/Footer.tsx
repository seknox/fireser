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

import { Button, Icon, Input, StyleService, useStyleSheet, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Firebot from '../../assets/icons/firebot';

// const SettingIcon = (style: ImageStyle): IconElement => (
//   <Icon {...style} name="settings-2-outline" />
// );

export const SettingIcon = () => (
  <Icon
    style={iconstyles.icon}
    //   fill='#8F9BB3'
    name="settings-2-outline"
  />
);

export const HomeIcon = () => (
  <Icon
    style={iconstyles.icon}
    //   fill='#8F9BB3'
    name="home-outline"
  />
);

export const SearchIcon = () => (
  <Icon
    style={iconstyles.icon}
    //   fill='#8F9BB3'
    name="search-outline"
  />
);

export const StatusIcon = () => (
  <Icon
    style={iconstyles.icon}
    //   fill='#8F9BB3'
    name="flash-outline"
  />
);

export const LockIcon = () => (
  <Icon
    style={iconstyles.icon}
    //   fill='#8F9BB3'
    name="lock-outline"
  />
);

const iconstyles = StyleSheet.create({
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

  const navigateFirebotChatroom = () => {
    props.navigation.navigate('FirebotChatroom');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.touch} onPress={() => console.log('footer clickkkkkkkked')}>
        <View styles={styles.nav}>
          <SettingIcon style={styles.settingIcon} />

          <Text styles={styles.navText} status="basic">
            Setting
          </Text>
        </View>
      </Pressable>

      <Pressable style={styles.touch} onPress={navigateHome}>
        <View styles={styles.nav}>
          <HomeIcon />
          <Text styles={styles.navText} status="basic">
            Home
          </Text>
        </View>
      </Pressable>

      <Pressable style={styles.touch}>
        <View styles={styles.nav}>
          <StatusIcon />
          <Text styles={styles.navText} status="basic">
            Status
          </Text>
        </View>
      </Pressable>

      <Pressable style={styles.touch}>
        <View styles={styles.nav}>
          <LockIcon />
          <Text styles={styles.navText} status="basic">
            Auth
          </Text>
        </View>
      </Pressable>

      {/* <Input
        style={styles.searchBox}
        placeholder="Search..."
        value={searchQuery}
        icon={SearchIcon}
      /> */}

      <Pressable style={styles.touch} onPress={navigateFirebotChatroom}>
        <View style={styles.firebotWrap}>
          <Firebot style={styles.firebot} />
        </View>
      </Pressable>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // marginVertical: -10,
    marginHorizontal: 10,
    // paddingHorizontal: 8,
    // paddingVertical: 16,
    padding: 4,
  },

  touch: {
    flex: 1,
    flexDirection: 'row',
  },
  nav: {
    flex: 1,
    flexDirection: 'column',
    // marginHorizontal: 10,
  },
  settingIcon: {},
  navText: {},
  searchBox: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: 'background-basic-color-1',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  firebotWrap: { marginHorizontal: 0, flex: 2, flexDirection: 'column' },
  firebot: {
    flex: 1,
    width: 55,
    height: 55,
    // alignSelf: 'flex-end',
    // bottom: 0,
    // marginHorizontal: 5,
  },
});
