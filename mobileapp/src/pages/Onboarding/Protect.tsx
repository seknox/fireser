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
import { ProtectGoogleAcc, ProtectMicrosoftAcc } from '../ScanAndProtect/ProtectNewAccount';

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
});

export default (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  // const { navigation } = props;

  return (
    <View style={styles.root}>
      <Text category="h5">Let's start</Text>
      <Text category="h6">Select account below to start protecting your account.</Text>
      <ProtectGoogleAcc />
      <ProtectMicrosoftAcc />
    </View>
  );
};
