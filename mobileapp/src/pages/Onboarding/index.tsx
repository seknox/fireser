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

import { Layout, StyleService, Text, useStyleSheet, ViewPager } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import Privacy from './Privacy';
import Security from './Security';
import Welcome from './Welcome';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    height: '90%',
    width: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  footerRoot: {
    flex: 1,
    // marginHorizontal: 16,
    backgroundColor: 'white',
  },

  footerContainer: {
    flexDirection: 'row',
    // marginHorizontal: 10,
    padding: 4,
  },
  touch: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    // height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (props: { navigation: any; children: any }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // const { navigation } = props;

  React.useEffect(() => {
    console.log('state change: ', selectedIndex);
  });

  const handleChange = (pos: string) => {
    if (pos === 'next') {
      if (selectedIndex !== 2) {
        setSelectedIndex(selectedIndex + 1);
      }
    } else {
      if (selectedIndex !== 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  };

  return (
    <Layout style={styles.root}>
      <ViewPager
        //   style={styles.content}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Layout style={styles.tab} level="2">
          <Text category="h5">Welcome</Text>
          <View style={styles.content}>
            <Welcome />
          </View>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h5">Security</Text>
          <View style={styles.content}>
            <Security />
          </View>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h5">Privacy</Text>
          <View style={styles.content}>
            <Privacy />
          </View>
        </Layout>
      </ViewPager>

      <View style={styles.footerRoot}>
        <View style={styles.footerContainer}>
          <Pressable style={styles.touch} onPress={() => handleChange('prev')}>
            <View>
              <Text status="basic">Previous</Text>
            </View>
          </Pressable>

          <Pressable style={styles.touch}>
            <View>
              <Text status="basic">{selectedIndex + 1} of 3</Text>
            </View>
          </Pressable>

          <Pressable style={styles.touch} onPress={() => handleChange('next')}>
            <View>
              <Text status="basic">Next</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Layout>
  );
};
