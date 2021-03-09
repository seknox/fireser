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

import { Button, Divider, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

const themedStyles = StyleService.create({
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
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  issueBold: {
    color: 'red',
    flex: 3,
    fontSize: 70,
    alignSelf: 'flex-start',
  },
  issueDesc: {
    flex: 4,
    fontSize: 20,
    marginTop: 40,
  },

  //   ////////////////////////

  root: {
    flex: 1,
    // marginVertical: 50,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    flex: 4,
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 0,
    alignSelf: 'flex-start',
  },
});

type accountProps = {
  navigation: any;
};

export default function Privacy(props: any) {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.issueBold} category="h1">
          4
        </Text>

        <Text category="s1" style={styles.issueDesc}>
          Privacy issues found.
        </Text>
      </View>

      <Divider />

      <View>
        <Text category="s1" style={styles.issueDesc}>
          Search history is on
        </Text>
        <Text category="s1" style={styles.issueDesc}>
          This should be off
        </Text>
        <Button
          style={styles.button}
          appearance="ghost"
          status="primary"
          onPress={props.navigateToAccounts}
        >
          Check it now
        </Button>
      </View>
    </View>
  );
}
