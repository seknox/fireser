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

// StoreData stores given data in async storage
export async function StoreData(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // we should crash report here
      console.error(e)
    }
}

// GetData returns data from async storage
export async function GetData(key: string){
    try {
      const value = await AsyncStorage.getItem(key)
    if(value !== null) {
        return 'NO_DATA'
        } else {
          return value
    }
    } catch(e) {
        // we should crash report here
        console.error(e)
    }
}
  