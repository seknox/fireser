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

import { Divider, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallCard: {
    flex: 1,
    minHeight: 120,
    minWidth: 100,
    maxHeight: 120,
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
  issueBold: {
    color: 'red',
    flex: 4,
    fontSize: 60,
    alignSelf: 'flex-start',
  },
  text: {
    flex: 4,
    fontSize: 20,
    marginVertical: 10,
    paddingLeft: 3,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 15,
  },

  connectedAccCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 20,
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
  connectedAccBoldText: {
    color: 'gold',
    flex: 2,
    fontSize: 70,
    alignSelf: 'flex-start',
  },
});

type accountProps = {
  navigation: any;
};

export default function ScanResultSummary(props: any) {
  const styles = useStyleSheet(themedStyles);

  const { connectedDevices, connectedApps, privacyIssuesCount, securityIssuesCount } = props.result;

  // formatNumber adds 0 to single digit number
  function formatNumber(num: number) {
    if (num?.toString().length === 1) {
      return '0' + num.toString();
    } else {
      return num;
    }
  }
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.smallCard}>
          <Pressable
            // onPress={() => navigation.navigate('ScanAndProtect', { name: 'Google' })}
            style={styles.touch}
          >
            <Text style={styles.issueBold} category="h1">
              {formatNumber(securityIssuesCount)}
            </Text>

            <Text category="s1" style={styles.text}>
              Security issues found.
            </Text>
          </Pressable>
        </View>
        <Divider />
        <View style={styles.smallCard}>
          <Pressable
            // onPress={() => navigation.navigate('ScanAndProtect', { name: 'Google' })}
            style={styles.touch}
          >
            <Text style={styles.issueBold} category="h1">
              {formatNumber(privacyIssuesCount)}
            </Text>

            <Text category="s1" style={styles.text}>
              Privacy issues found.
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.connectedAccCard}>
        <Text style={styles.connectedAccBoldText} category="h1">
          {formatNumber(connectedDevices?.length)}
        </Text>

        <Text category="s1" style={styles.text}>
          Devices are connected to your account{' '}
        </Text>
      </View>

      <View style={styles.connectedAccCard}>
        <Text style={styles.connectedAccBoldText} category="h1">
          {formatNumber(connectedApps?.thirdPartyApps?.length)}
        </Text>
        <Text category="s1" style={styles.text}>
          Third party apps have access to your data{' '}
        </Text>
      </View>
    </View>
  );
}
