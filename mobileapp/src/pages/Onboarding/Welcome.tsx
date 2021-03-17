/**
 * Copyright (C) 2021 Seknox Pte Ltd.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundatin, either version 3 of the
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
import FireserLogo from '../../assets/icons/fireser';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  icon: {
    // marginHorizontal: 4,
    // marginVertical: 4,
    height: 100,
    width: 500,
    alignSelf: 'center',
    // maxWidth: '100%',
  },
});

export default (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  // const { navigation } = props;

  return (
    <View style={styles.root}>
      <Text category="h5">Welcome</Text>
      <FireserLogo style={styles.icon} />
      <Text>
        Welcome to the Fireser app. Since you choose to use this app, we can tell that you care
        about security and privacy, and so do we. Fireser lets you automatically manage and control
        the security and privacy of your online accounts. Next, We will explain security and privacy
        and guide you to start protecting your account. You can skip this.
      </Text>
    </View>
  );
};
