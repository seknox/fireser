/*
 *
 *   Copyright (C) 2020 Seknox Pte Ltd.
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as
 *   published by the Free Software Foundation, either version 3 of the
 *   License, or (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
import cio from 'cheerio-without-node-native';
import React from "react";

export default function checkLoggedIn(htmlContent: string) {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('button[name="login"]');

    if (selected.length===0) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}
// export default {
//   name: 'Login Ckeck',
//   pageURL: 'https://m.facebook.com/',
//   tasks: [
//     {
//       extractFunc: checkLoggedIn,
//       name: 'Login Check',
//       expectedValue: 'TRUE',
//       fixURL: 'https://m.facebook.com/',
//     },
//   ],
// };
