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
import { ScrollView, View } from 'react-native';
import Privacy from './Privacy';
import Security from './Security';
import Welcome from './Welcome';
import StartProtection from './Protect';

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
    backgroundColor: 'white',
  },
  footerRoot: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 15,
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
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
  },
});

export default (props: { navigation: any; children: any }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (pos: 'next' | 'prev') => {
    if (pos === 'next') {
      if (selectedIndex !== 3) {
        setSelectedIndex(selectedIndex + 1);
      }
    } else {
      if (selectedIndex !== 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  };

  const disableNext = () => {
    if (selectedIndex === 3) {
      return true;
    }
  };

  const disablePrev = () => {
    if (selectedIndex === 0) {
      return true;
    }
  };

  return (
    <Layout style={styles.root}>
      <ScrollView style={styles.content}>
        <ViewPager
          //   style={styles.content}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Layout style={styles.tab} level="2">
            <Welcome />
          </Layout>
          <Layout style={styles.tab} level="2">
            <Security />
          </Layout>
          <Layout style={styles.tab} level="2">
            <Privacy />
          </Layout>
          <Layout style={styles.tab} level="2">
            <StartProtection />
          </Layout>
        </ViewPager>
      </ScrollView>

      <View style={styles.footerRoot}>
        <View style={styles.footerContainer}>
          <Button
            style={styles.touch}
            status="basic"
            disabled={disablePrev()}
            onPress={() => handleChange('prev')}
          >
            Previous
          </Button>

          <View style={styles.skip}>
            <Button appearance="ghost" size="medium">
              Skip
            </Button>
            <Text>Step {selectedIndex + 1} of 4</Text>
          </View>

          <Button
            style={styles.touch}
            status="primary"
            disabled={disableNext()}
            onPress={() => handleChange('next')}
          >
            Next
          </Button>
        </View>
      </View>
    </Layout>
  );
};
