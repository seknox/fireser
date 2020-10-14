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

import { StyleService, useStyleSheet, Button } from '@ui-kitten/components';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';

import Google from '../../assets/brands/google';
import Gmail from '../../assets/brands/gmail';
import Youtube from '../../assets/brands/youtube';
import Linkdin from '../../assets/brands/linkdin';
import Facebook from '../../assets/brands/facebook';

export default ({ navigation }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout navigation={navigation}>
        <View style={styles.margin}>
          <SummaryCard title="Protect Accounts" subtitle="Protect Accounts" />
          <AccountIcons />
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  margin: {
    marginVertical: -100,
    flex: 1,
  },
  brandgroup: {
    marginVertical: 50,
    marginHorizontal: 40,
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    flex: 1,
    padding: 1,
    minHeight: 50,
    minWidth: 50,
    maxHeight: 50,
    maxWidth: 50,
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
    marginHorizontal: 4,
    marginVertical: 4,
    height: 40,
    width: 40,
  },
});

export const AccountIcons = (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  function getIcon(name: string) {
    return name;
  }
  return (
    <View style={styles.brandgroup}>
      <View style={styles.iconButton}>
        <Google style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <Gmail style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <Youtube style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <Linkdin style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <Facebook style={styles.icon} />
      </View>
    </View>
  );
};

const supportedAccounts = [
  'google',
  'gmail',
  'youtube',
  'maps',
  'chrome',
  'hotmail',
  'linkdin',
  'twitter',
  'facebook',
  'messenger',
  'instagram',
  'suggest',
];
