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

const extract = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('#banner > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)');

    //console.log(selected.text());

    const splitted = selected.text().split(":")
    if(splitted.length==2){
      resolve(splitted[1].trim());
      return;
    }

    resolve(selected.text().trim());
  });
};

export default {
  name: 'Password last changed',
  pageURL: 'https://account.live.com/proofs/Manage/additional',
  tasks: [
    {
      extractFunc: extract,
      name: 'Password last changed',
      expectedValue: '',
      fixURL: 'https://account.live.com/proofs/Manage/additional',
    },

  ],
};
