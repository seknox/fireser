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

import React from 'react';

import cio from 'cheerio-without-node-native';

const extracAdPersonalization = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      'body > div:nth-child(5) > c-wiz > c-wiz > div > div > div > c-wiz > div > span > div > div:nth-child(4) > div:nth-child(2) > span > div ',
    );

    // console.info(selected.html());
    resolve(selected.prop('data-toggles'));

  });
};

//   document.querySelector("body > div:nth-child(5) > c-wiz > c-wiz > div > div > div > c-wiz > div > span > div > div:nth-child(4) > div:nth-child(2) > span > div")

//    body > div:nth-child(5) > c-wiz > c-wiz > div > div > div > c-wiz > div > span > div > div:nth-child(5) > div:nth-child(3) > span > div


// /html/body/div[4]/c-wiz/c-wiz/div/div/div/c-wiz/div/span/div/div[4]/div[2]/span/div
export default {
  name: 'Ads',
  pageURL: 'https://adssettings.google.com/authenticated',
  tasks: [
    {
      extractFunc: extracAdPersonalization,
      name: 'Personalised Ads',
      expectedValue: 'false',
      fixURL: 'https://adssettings.google.com/authenticated',
    },
  ],
};
