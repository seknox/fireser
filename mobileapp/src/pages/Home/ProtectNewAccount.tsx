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
import MsgSec from '../../assets/icons/messaging-security';
import { useNavigation } from '@react-navigation/native';

const RightIcon = (props: any) => <Icon {...props} name="arrow-forward-outline" />;

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
    minHeight: 130,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'column',
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
  title: {
    padding: 10,
    flex: 1,
  },
  desc: {
    flex: 5,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  imageContainer: {
    flex: 2,
  },
  image: {
    // flex: 1,
    height: '80%',
    width: '80%',
    // resizeMode: 'contain',
  },
  button: {
    // margin: 2,
    padding: 0,
    alignSelf: 'flex-start',
  },
});

export default (props: { navigateToAccounts: () => {} }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text category="h5">Protect New Account</Text>
        </View>

        <Pressable onPress={() => navigation.navigate('ProtectNewAccount')} style={styles.touch}>
          <View style={styles.desc}>
            <Text category="s1">Google, Microsoft, Linkedin...</Text>
            <Text category="s1">Start by clicking this card</Text>
            <Button
              style={styles.button}
              appearance="ghost"
              status="primary"
              accessoryRight={RightIcon}
              onPress={() => navigation.navigate('ProtectNewAccount')}
            >
              Protect now
            </Button>
          </View>

          <View style={styles.imageContainer}>
            <MsgSec style={styles.image} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
