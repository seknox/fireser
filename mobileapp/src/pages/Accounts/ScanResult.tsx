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

import {Button, Divider, List, ListItem, Text} from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { Pressable, View, ScrollView } from 'react-native';
import Layout from '../../components/Layout';

import { StyleService, useStyleSheet } from '@ui-kitten/components';

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

  card2: {
    flex: 1,
    minHeight: 130,
    marginVertical: 5,
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
});

type accountProps = {
  navigation: any;
};

export default function ScanResults(props: any) {
  const styles = useStyleSheet(themedStyles);
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

      <View style={styles.card2}>
        <Text category="h5">Your Devices </Text>
        {/*{props.result.connectedDevices.map((d, i) => (*/}
        {/*    //TODO @sshahcodes create list from props.result.connectedDevices*/}
        {/*  // <List key={i}>*/}
        {/*  //   <ListItem>{d.title}</ListItem>*/}
        {/*  //   <ListItem>{d.name}</ListItem>*/}
        {/*  //   <ListItem>{d.os}</ListItem>*/}
        {/*  // </List>*/}
        {/*))}*/}
      </View>

      <View style={styles.card2}>
        <Text category="h5">Connected Apps</Text>
        {/*TODO @sshahcodes create list from props.result.connectedApps */}
      </View>

      <View style={styles.card}>
        <Pressable onPress={props.navigateToAccounts} style={styles.touch}>
          <View style={styles.desc}>
            <Text category="h5">Your Public Profile</Text>
            <Text category="s1">See how your private data represents you</Text>
            <Button
              style={styles.button}
              appearance="ghost"
              status="primary"
              onPress={props.navigateToAccounts}
            >
              Check it now
            </Button>
          </View>

          <View style={styles.imageContainer}>{/* <AccountSec style={styles.image} /> */}</View>
        </Pressable>
      </View>
    </View>
  );
}
