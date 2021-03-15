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

import CryptoJS from 'crypto-js';

// GenKey returns random key with 32 char length.
// This key is to be used as input to encryption function as a password.
export function GenKey() {
  let length = 32;
  let charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.|~?';
  let key = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    key += charset.charAt(Math.floor(Math.random() * n));
  }

  let salt = CryptoJS.lib.WordArray.random(128 / 8);
  let key256Bits = CryptoJS.PBKDF2(key, salt, { keySize: 256 / 32 });

  let ekey = CryptoJS.enc.Base64.stringify(key256Bits);
  return ekey;
}

// AESEncrypt encrypts plaintext pt with given key and returns ciphertext
export function AESEncrypt(key: string, pt: string) {
  try {
    let ekey = CryptoJS.enc.Base64.parse(key);
    let eiv = CryptoJS.enc.Base64.parse(key.slice(0, 16));
    let ct = CryptoJS.AES.encrypt(pt, ekey, { iv: eiv }).toString();
    return ct;
  } catch (e) {
    console.error(e);
  }
}

// AESDecrypt decrypts ciphertext ct with given key and returns plaintext
export function AESDecrypt(key: string, ct: string) {
  try {
    let ekey = CryptoJS.enc.Base64.parse(key);
    let eiv = CryptoJS.enc.Base64.parse(key.slice(0, 16));
    let pt = CryptoJS.AES.decrypt(ct, ekey, { iv: eiv });
    return CryptoJS.enc.Utf8.stringify(pt);
  } catch (e) {
    console.error(e);
  }
}
