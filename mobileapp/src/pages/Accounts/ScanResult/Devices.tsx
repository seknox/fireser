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

import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    // marginVertical: 50,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
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
  headerText: {
    flex: 2,
    marginHorizontal: 15,
    fontSize: 19,
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  deviceLogo: {
    flex: 2,
    width: 80,
    height: 50,
  },
  tinyText: {
    flex: 1,
  },
});

type accountProps = {
  navigation: any;
};

export default function Devices(props: any) {
  const styles = useStyleSheet(themedStyles);

  const { connectedDevices } = props.result;

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
      <View style={styles.connectedAccCard}>
        <Text category="s1" style={styles.headerText}>
          {connectedDevices?.length} devices connected to this account{' '}
        </Text>

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
      </View>
    </View>
  );
}
