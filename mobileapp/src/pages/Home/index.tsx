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

import { Icon, StyleService, useStyleSheet, Text, Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';
import Accounts from '../ScanAndProtect';
import ProtectedAcc from '../../components/Accounts/ProtectedAccounts';

const iconColor = '#0000FF';

export const GoTo = () => (
  <Icon style={iconstyles.icon} fill={iconColor} name="corner-down-right" />
);

const iconstyles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    color: 'white',
    alignSelf: 'center',
  },
});

export default (props: { navigation: any }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout navigation={props.navigation}>
      <View style={styles.root}>
        <SummaryCard
          title="Hi John,"
          subtitle="Enhance security and privacy of your account and devices. "
          showProAcc={true}
          showLogo={true}
          logoName="Fireser"
          primaryColor={false}
        />
      </View>
      <View style={styles.protectAcc}>
        <ProtectedAcc navigateToAccounts={props.navigation} />
      </View>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  root: {
    flex: 1,
  },
  container: {
    marginVertical: 50,
    marginHorizontal: 30,
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  addNewCard: {
    flex: 2,
    padding: 1,
    minHeight: 120,
    minWidth: 100,
    maxHeight: 120,
    // maxWidth: 100,
    marginHorizontal: 20,
    marginVertical: 50,
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

  touch: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 15,
  },

  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  protectAcc: {
    marginTop: 50,
  },
});
