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

import cio from 'cheerio';
import { Job } from '../../types/types';
import { isLoggedIn } from './CheckLoggedInFunc';

const extractLastPasswordChange = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='signinoptions/password'] > div> div> div> div> div> div");

    let arr = selected.toArray();

    arr.forEach((elem, i) => {
      const innerText = $(elem).text();
      if (innerText.includes('Last changed')) {
        console.debug(innerText);
        resolve(innerText.split('Last changed')[1]);
      } else if (i === arr.length - 1) {
        reject('Last Changed not found');
      }
    });
  });
};

const extractTfaStatus = (htmlContent: string) => {
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

const job: Job = {
  name: 'Security',
  pageURL: 'https://myaccount.google.com/security',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractLastPasswordChange,
      name: 'Password Last Changed',
      description: 'Last time you changed your password',
      type: 'SECURITY',
      expectedValue: '',
      checkFunc: (expectedValue, gotValue) => {
        const lastChanged = new Date(gotValue);
        const now = new Date();
        const needToChange = (now - lastChanged) > 12 * 30 * 24 * 60 * 60 * 1000;
        return !needToChange;
      },
      fixURL: 'https://myaccount.google.com/security/signinoptions/password',
    },
    {
      extractFunc: extractTfaStatus,
      name: 'Two factor authentication',
      type: 'SECURITY',
      expectedValue: 'On',
      fixURL: 'https://myaccount.google.com/security/signinoptions/two-step-verification',
    },
    {
      extractFunc: extractLessSecureApps,
      name: 'Less secure app access',
      type: 'SECURITY',
      expectedValue: 'Off',
      fixURL: 'https://myaccount.google.com/lesssecureapps',
    },
  ],
};

export default job;
