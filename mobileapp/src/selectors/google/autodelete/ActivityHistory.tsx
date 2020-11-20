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

const extracAutoDelete = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    // console.warn(htmlContent.length)
    // const selected = $('body');
    const selected = $(
      'body > c-wiz > div > div:nth-child(3) > div:nth-child(2) > c-wiz > div:nth-child(4) > div > div > :nth-child(2)',
    );

    const text = selected.text();
    console.log(text)
    const splotted = text.split('older than');

    if (splotted.length == 2) {
      resolve(splotted[1]);
    } else {
      resolve("off");
      // reject('Could not find auto delete duration');
    }
    // console.info(selected.html(), 'prop');
    // resolve(selected.prop('aria-checked'));
  });
};

export default {
  name: 'Auto delete ',
  pageURL: 'https://myactivity.google.com/activitycontrols?settings=search',
  tasks: [
    {
      extractFunc: extracAutoDelete,
      name: 'Auto delete activity history',
      expectedValue: '3 months',
      fixURL: 'https://myactivity.google.com/activitycontrols?settings=search',
    },
  ],
};

//   /html/body/c-wiz/div/div[2]/div[2]/c-wiz/div[4]/div/div/div[2]
