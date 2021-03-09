/**
 * Copyright (C) 2021 Seknox Pte Ltd.
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

import { Button, Divider, List, ListItem, Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { Pressable, View, ScrollView, Image } from 'react-native';
import Layout from '../../components/Layout';

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import ConnectedApps from '../../selectors/google/ConnectedApps';

const themedStyles = StyleService.create({
  card: {
    flex: 1,
    minHeight: 130,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  root: {
    flex: 1,
    // marginVertical: 50,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    flex: 1,
    minHeight: 120,
    minWidth: 100,
    maxHeight: 120,
    // maxWidth: 100,
    marginHorizontal: 7,
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
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
  },
  issueBold: {
    color: 'red',
    flex: 2,
    fontSize: 80,
    alignSelf: 'flex-start',
  },
  text: {
    flex: 2,
    fontSize: 19,
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  headerText: {
    flex: 2,
    marginHorizontal: 15,
    fontSize: 19,
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 0,
    alignSelf: 'flex-start',
  },

  desc: {
    flex: 4,
    padding: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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

  connectedAccCard: {
    flex: 1,
    padding: 10,
  },
  tinyBox: {
    flex: 1,
    flexDirection: 'column',
    minHeight: 120,
    minWidth: 100,
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  deviceLogo: {
    flex: 2,
    width: 80,
    height: 50,
  },
  tinyText: {
    flex: 1,
  },
  appLogo: {
    flex: 2,
    width: 50,
    height: 50,
  },
});

type accountProps = {
  navigation: any;
};

export default function ScanResults(props: any) {
  const styles = useStyleSheet(themedStyles);

  const { connectedDevices, thirdPartyApps } = props.result;

  function getDevices(dType: string, imgURL: string) {
    switch (dType) {
      case 'android':
        return imgURL;
      case 'Linux':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/linuxlaptop.png';
      case 'iphone':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/iphone-x-icon.png';
      case 'Mac':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/mac.png';
      case 'Windows':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/winlaptop.png';
      default:
        return 'https://www.gstatic.com/identity/boq/accountsettingssecuritycommon/images/sprites/devices_realistic_72-ef7d73f742f5343ba1bd3c1e6b13ffba.png';
    }
  }

  return (
    <View>
      <View style={styles.root}>
        <View style={styles.iconButton}>
          <Pressable
            // onPress={() => navigation.navigate('ScanAndProtect', { name: 'Google' })}
            style={styles.touch}
          >
            <Text style={styles.issueBold} category="h1">
              4
            </Text>

            <Text category="s1" style={styles.text}>
              Security issues found.
            </Text>
          </Pressable>
        </View>
        <Divider />
        <View style={styles.iconButton}>
          <Pressable
            // onPress={() => navigation.navigate('ScanAndProtect', { name: 'Google' })}
            style={styles.touch}
          >
            <Text style={styles.issueBold} category="h1">
              3
            </Text>

            <Text category="s1" style={styles.text}>
              Privacy issues found.
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.connectedAccCard}>
        <Text category="s1" style={styles.headerText}>
          {connectedDevices?.length} devices connected to this account{' '}
        </Text>

        <ScrollView horizontal={true}>
          {connectedDevices.map((d: any, i: number) => (
            <View key={i} style={styles.tinyBox}>
              <Pressable
              // onPress={() => navigation.navigate('ScanAndProtect', { name: 'Google' })}
              // style={styles.touch}
              >
                <Image
                  style={styles.deviceLogo}
                  source={{
                    uri: d.imgURL ? d.imgURL : getDevices(d.title, d.imgURL),
                  }}
                />

                <Text category="s1" style={styles.tinyText}>
                  {d.title}
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.connectedAccCard}>
        <Text category="s1" style={styles.headerText}>
          {thirdPartyApps?.length} 3rd party apps have access to your data{' '}
        </Text>
        <ScrollView horizontal={true}>
          {thirdPartyApps?.map((d: any, i: number) => (
            <View style={styles.tinyBox} key={i}>
              <Pressable>
                <Image
                  style={styles.appLogo}
                  source={{
                    uri: d.imgURL,
                  }}
                />

                <Text category="s1" style={styles.tinyText}>
                  {d.name}
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
