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

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';
import Accounts from '../Accounts';

export default (props: { navigation: any }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Divider /> */}
      <Layout navigation={props.navigation}>
        <View style={styles.margin}>
          <SummaryCard
            title="Hi John,"
            subtitle="Enhance security and privacy of your account and devices. "
            showFirebot={true}
            showLogo={true}
            logoName='Fireser'
            primaryColor={true}
          />
          <Accounts />
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
  },
});
