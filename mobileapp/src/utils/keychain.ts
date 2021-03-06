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

import * as Keychain from 'react-native-keychain';
import { GenKey } from './crypto';

// StoreEncryptionKey stores global encryption key in keychain
export async function StoreEncryptionKey(key: string, value: string) {
  await Keychain.setGenericPassword(key, value);
}

// GetEncryptionKey retrieves global encryption key
export async function GetEncryptionKey() {
  try {
    // get from keychain
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      // return key
      return credentials.password;
    } else {
      console.log('cannot find key generating new one.');
      // this might be first time app usage so we generate and store new global key
      let key = GenKey();
      // store this key in keychain
      await StoreEncryptionKey('GLOBAL_ENC_KEY', key);
      return key;
    }
  } catch (error) {
    console.error(error);
    // error report here
    return 'ERROR';
  }
}

// StoreAccountPassword stores account password in keychain
export async function StoreAccountPassword(server: string, key: string, value: string) {
  await Keychain.setInternetCredentials(server, key, value);
}

// GetAccountPassword retrieves account password form keychain
export async function GetAccountPassword(server: string) {
  try {
    const credentials = await Keychain.getInternetCredentials(server);
    if (credentials) {
      return credentials;
    } else {
      return 'NO_KEY';
    }
  } catch (error) {
    // error report here
    return 'NO_KEY';
  }
}
