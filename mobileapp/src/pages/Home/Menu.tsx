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

import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import AccountSec from '../../assets/icons/account-security';
import DeviceSec from '../../assets/icons/device-security';
import MsgSec from '../../assets/icons/messaging-security';

export default (props: any): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable onPress={props.navigateToAccounts} style={styles.touch}>
          <View style={styles.desc}>
            <Text category="h5">Accounts</Text>
            <Text category="s1">Protect your online accounts</Text>
          </View>

          <View style={styles.imageContainer}>
            <AccountSec style={styles.image} />
          </View>
        </Pressable>
      </View>

      <View style={styles.card}>
        <View style={styles.desc}>
          <Text category="h5">Devices</Text>
          <Text category="s1">Protect your mobile and pc</Text>
        </View>

        <View style={styles.imageContainer}>
          <DeviceSec style={styles.image} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.desc}>
          <Text category="h5">Email and Messages</Text>
          <Text category="s1">Protect your email and chats</Text>
        </View>

        <View style={styles.imageContainer}>
          <MsgSec style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    minHeight: 100,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    // borderColor: 'white',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ebebeb',
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  desc: {
    flex: 4,
    padding: 24,
  },

  imageContainer: {
    flex: 2,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    // resizeMode: 'contain',
  },
});
