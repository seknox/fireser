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

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { AppNavigator } from './src/Navigator';
import { default as theme } from './src/assets/custom-theme.json';
import codePush from 'react-native-code-push';

export default () => {
  useEffect(() => {
    codePush.sync(
      { updateDialog: true },
      (status) => {
        switch (status) {
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            // Show "downloading" modal
            console.log('DOWNLOADING.....');
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            // Hide "downloading" modal
            console.log('UPDATING......');
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {
        /* Update download modal progress */
        console.log(receivedBytes / totalBytes);
      },
    );
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};
