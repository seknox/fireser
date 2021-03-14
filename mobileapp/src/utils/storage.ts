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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AESEncrypt, AESDecrypt } from './crypto';
import { GetEncryptionKey, StoreEncryptionKey } from './keychain';
import { ScanObject } from '../types/types';

type storageName = 'SCAN_RESULTS';

//  SetupAsyncStorage is called during init of app. This should perform all necessary steps of
//  decryption and setup async storage for scan results.
export async function SetupAsyncStorage(action: 'ENC' | 'DEC') {
  let data = await GetData('SCAN_RESULTS');
  //  if we get data, we encrypt or decrypt based on action else will setup and empty async storage
  if (data && data !== 'NO_DATA') {
    if (action === 'ENC') {
      // encrypt here
      await encryptAsyncStorage(data);
    } else {
      // decrypt here
      await decryptAsyncStorage(data);
    }
  } else {
    // this is first time app launch. we store empty object
    let scanResult: ScanObject[] = [];
    await StoreData('SCAN_RESULTS', JSON.stringify(scanResult));
  }
}

// encryptAsyncStorage encrypts data of scan results. This should be called when app is not in 'active' state
async function encryptAsyncStorage(plainText: string) {
  let encKey = await GetEncryptionKey();

  if (encKey) {
    let ct = AESEncrypt(encKey, plainText);

    // store it in async storage
    await StoreData('SCAN_RESULTS', ct as string);
  }
}

// decryptAsyncStorage decrypts data of scan result.
async function decryptAsyncStorage(cipherText: string) {
  let encKey = await GetEncryptionKey();

  if (encKey) {
    let pt = AESDecrypt(encKey, cipherText);

    // store it in async storage
    await StoreData('SCAN_RESULTS', pt as string);
  }
}

// StoreData stores given data in async storage
export async function StoreData(key: storageName, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // we should crash report here
    console.error(e);
  }
}

// GetData returns data from async storage
export async function GetData(key: storageName) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value && value !== null) {
      return value;
    } else {
      return 'NO_DATA';
    }
  } catch (e) {
    // we should crash report here
    console.error(e);
  }
}
