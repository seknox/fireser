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

import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import Footer from './Footer';
import Header from './Header';

export default (props): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  // const { navigation } = props;

  return (
    <Layout style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <Header style={styles.header} />
      <View style={styles.content}>{props.children}</View>
      {/* </ScrollView> */}

      <Footer style={styles.footer} navigation={props.navigation} />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  scrollView: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 5,
    // paddingTop: 32,
    // paddingHorizontal: 16,
  },
  footer: {
    flex: 1,
    marginHorizontal: 16,
    alignSelf: 'flex-end',
  },
});
