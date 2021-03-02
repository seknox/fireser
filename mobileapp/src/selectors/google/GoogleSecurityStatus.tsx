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
import { isLoggedIn } from './CheckLoggedInFunc';

const extractLastPassordChange = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='signinoptions/password']");

    let arr = selected.toArray();

    arr.forEach((elem, i) => {
      const innerText = $(elem).text();
      //console.log(111,i,innerText)
      if (innerText.includes('Last changed')) {
        //console.log('found ', innerText);
        resolve(innerText);
      } else if (i == arr.length - 1) {
        ////console.log(i,arr.length)
        reject('Last Changed not found');
      }
    });
  });
};

const extractTfaStatus = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='signinoptions/two-step-verification']");

    let arr = selected.toArray();

    arr.forEach((elem, i) => {
      const innerText = $(elem).text();
      if (innerText.includes('2-Step Verification')) {
        if (innerText.includes('On')) {
          resolve('On');
        } else if (innerText.includes('Off')) {
          resolve(innerText.includes('Off'));
        } else {
          reject('2-Step Verification status not found');
        }
      } else {
        reject('2-Step Verification not found');
      }
    });
  });
};

const extractLessSecureApps = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      'c-wiz > div > div:nth-child(2) > c-wiz > c-wiz > div > div:nth-child(3) > div > div > c-wiz > section > div:nth-child(7) > article > div > div > div.ugt2L.iDdZmf > div > div > div > div > div > div > div > div:nth-child(2)',
    );

    resolve(selected.text());
  });
};

export default {
  name: 'Security',
  pageURL: 'https://myaccount.google.com/security',
  isLoggedIn: isLoggedIn,
  tasks: [
    {
      extractFunc: extractLastPassordChange,
      name: 'Password Last Changed',
      expectedValue: '',
      fixURL: 'https://myaccount.google.com/security/signinoptions/password',
    },
    {
      extractFunc: extractTfaStatus,
      name: 'Two factor authentication',
      expectedValue: 'On',
      fixURL: 'https://myaccount.google.com/security/signinoptions/two-step-verification',
    },
    {
      extractFunc: extractLessSecureApps,
      name: 'Less secure app access',
      expectedValue: 'Off',
      fixURL: 'https://myaccount.google.com/lesssecureapps',
    },
  ],
};
