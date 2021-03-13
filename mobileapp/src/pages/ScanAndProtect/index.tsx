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

import { useNavigation } from '@react-navigation/native';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import FacebookIcon from '../../assets/brands/facebook';
import GmailIcon from '../../assets/brands/gmail';
import GoogleIcon from '../../assets/brands/google';
import LinkedinIcon from '../../assets/brands/linkdin';
import YoutubeIcon from '../../assets/brands/youtube';

const AccountsSelect = (): React.ReactElement => {
  const navigation = useNavigation();
  return <Accounts navigation={navigation} />;
};

export default AccountsSelect;

const Accounts = (props: any): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const { navigation } = props;

  return (
    <View style={styles.brandgroup}>
      <View style={styles.iconButton}>
        <Pressable
          onPress={() => navigation.navigate('ScanAndProtect', { name: 'Google' })}
          style={styles.touch}
        >
          <Text style={styles.text}>Google</Text>
          <GoogleIcon style={styles.icon} />
        </Pressable>
      </View>

      <View style={styles.iconButton}>
        <Pressable
          onPress={() => navigation.navigate('ScanAndProtect', { name: 'LinkedIn' })}
          style={styles.touch}
        >
          <Text style={styles.text}>LinkedIn</Text>
          <LinkedinIcon style={styles.icon} />
        </Pressable>
      </View>

      <View style={styles.iconButton}>
        <Text style={styles.text}>Gmail</Text>
        <GmailIcon style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <Text style={styles.text}>Youtube</Text>
        <YoutubeIcon style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <Pressable
          onPress={() => navigation.navigate('ScanAndProtect', { name: 'Microsoft' })}
          style={styles.touch}
        >
          <Text style={styles.text}>Microsoft</Text>
          <GoogleIcon style={styles.icon} />
        </Pressable>
      </View>

      <View style={styles.iconButton}>
        <Pressable
          onPress={() => navigation.navigate('ScanAndProtect', { name: 'Facebook' })}
          style={styles.touch}
        >
          <Text style={styles.text}>Facebook</Text>
          <FacebookIcon style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  brandgroup: {
    marginVertical: 50,
    marginHorizontal: 30,
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    flex: 2,
    padding: 1,
    minHeight: 120,
    minWidth: 100,
    maxHeight: 120,
    maxWidth: 100,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
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
  icon: {
    // marginHorizontal: 4,
    // marginVertical: 4,
    alignSelf: 'center',
    height: 55,
    width: 55,
  },
  touch: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 15,
  },
});
