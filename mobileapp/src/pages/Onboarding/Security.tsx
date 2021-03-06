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

import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import SecurityThreat from '../../assets/icons/securityThreat';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
  },
  content: {
    height: '95%',
    width: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  footerRoot: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },

  footerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 4,
  },
  touch: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // marginHorizontal: 4,
    // marginVertical: 4,
    height: 500,
    width: 400,
    alignSelf: 'center',
    // maxWidth: '100%',
  },
});

export default (props: { navigation: any; children: any }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  // const { navigation } = props;

  return (
    <View style={styles.content}>
      <SecurityThreat style={styles.icon} />
      <Text>
        Welcome to the Fireser app. Since you choose to use this app, we can tell that you care
        about security and privacy, and so do we. Fireser lets you automatically manage and control
        the security and privacy of your online accounts. Next, We will explain security and privacy
        and guide you to start protecting your account. You can skip this.
      </Text>
    </View>
  );
};
