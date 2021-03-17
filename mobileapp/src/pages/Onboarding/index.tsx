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

import {
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  ViewPager,
  Button,
} from '@ui-kitten/components';
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
    height: '85%',
    width: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  footerRoot: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },

  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    // marginHorizontal: 10,
    padding: 4,
  },
  touch: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skip: {
    flexDirection: 'column',
    flex: 2,
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
          <Button style={styles.touch} status="basic" onPress={() => handleChange('prev')}>
            Previous
          </Button>

          <View style={styles.skip}>
            <Button appearance="ghost" size="medium">
              Skip
            </Button>
            <Text>Step {selectedIndex + 1} of 3</Text>
          </View>

          <Button style={styles.touch} status="primary" onPress={() => handleChange('next')}>
            Next
          </Button>
        </View>
      </View>
    </Layout>
  );
};
