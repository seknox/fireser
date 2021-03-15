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

import { StyleService, Text, useStyleSheet, Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import AccountSec from '../../assets/icons/account-security';
import MsgSec from '../../assets/icons/messaging-security';
import { useNavigation } from '@react-navigation/native';
import Layout from '../../components/Layout';

import GoogleIcon from '../../assets/brands/google';
import MicrosoftIcon from '../../assets/brands/microsoft';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    padding: 10,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    minHeight: 130,
    marginVertical: 10,
    // marginHorizontal: 20,
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

    elevation: 3,
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
    height: '80%',
    width: '80%',
    // resizeMode: 'contain',
  },
  button: {
    // margin: 2,
    // marginTop: 50,
    alignSelf: 'flex-end',
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
    marginLeft: 10,
    color: 'gold',
    flex: 2,
    fontSize: 70,
    alignSelf: 'flex-start',
  },
  viewBox: {
    flex: 7,
    flexDirection: 'column',
  },
  text: {
    flex: 4,
    fontSize: 20,
    marginVertical: 10,
    // paddingLeft: 3,
  },
});

const RightIcon = (props: any) => <Icon {...props} name="arrow-forward-outline" />;

export const ProtectedAcSummary = (props: { navigateToAccounts: () => {} }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.connectedAccCard}>
        <Text style={styles.connectedAccBoldText} category="h1">
          4
        </Text>

        <View style={styles.viewBox}>
          <Text category="s1" style={styles.text}>
            Accounts currently monitored
          </Text>

          <Button
            style={styles.button}
            appearance="ghost"
            status="primary"
            size="small"
            onPress={() => navigation.navigate('ProtectedAccounts')}
            accessoryRight={RightIcon}
          >
            View
          </Button>
        </View>
      </View>
    </View>
  );
};

export default (props: { navigation: any }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  return (
    <Layout navigation={props.navigation}>
      <View style={styles.container}>
        <Text category="h5">Accounts monitored by Fireser</Text>
        <Text category="s1">Click on card to view fix the issues</Text>
        {/* TODO @bhrg3se loop here on scan results to show all enrolled accounts */}
        <View style={styles.card}>
          <Pressable style={styles.touch}>
            <View style={styles.desc}>
              <Text category="h5">Google Accounts</Text>
              <Text category="s1">John@doe.com</Text>
              <Text category="s1">Last scanned: </Text>
              <Button
                style={styles.button}
                appearance="ghost"
                status="primary"
                accessoryRight={RightIcon}
              >
                View now
              </Button>
            </View>

            <View style={styles.imageContainer}>
              <GoogleIcon style={styles.image} />
            </View>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable style={styles.touch}>
            <View style={styles.desc}>
              <Text category="h5">Microsoft Accounts</Text>
              <Text category="s1">John@doe.com</Text>
              <Text category="s1">Last scanned: </Text>
              <Button
                style={styles.button}
                appearance="ghost"
                status="primary"
                accessoryRight={RightIcon}
              >
                View now
              </Button>
            </View>

            <View style={styles.imageContainer}>
              <MicrosoftIcon style={styles.image} />
            </View>
          </Pressable>
        </View>
      </View>
    </Layout>
  );
};
