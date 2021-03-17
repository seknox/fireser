/*
 *
 *   Copyright (C) 2021 Seknox Pte Ltd.
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
import { isLoggedIn } from './CheckLoggedInFunc';
import { Job } from '../../types/types';

const extractSharedEndorsements = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    //   document.querySelector('a[href="shared-endorsements"] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div').innerText
    const $ = cio.load(htmlContent);

    const selected = $(
      'a[href="shared-endorsements"] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div',
    );

    // console.info(selected.html(), 'prop');
    resolve(selected.text());
  });
};

const extractSaveContactFromInteractions = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    //   document.querySelector('a[href="shared-endorsements"] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div').innerText
    const $ = cio.load(htmlContent);

    const selected = $(
      'a[href="contacts"] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div',
    );

    // console.info(selected.html(), 'prop');
    resolve(selected.text());
  });
};
const extractSaveContactFromDevices = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    //   document.querySelector('a[href="shared-endorsements"] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div').innerText
    const $ = cio.load(htmlContent);

    const selected = $(
      'a[href="devicecontacts"] > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div',
    );

    // console.info(selected.html(), 'prop');
    resolve(selected.text());
  });
};

const job: Job = {
  name: 'People and sharing',
  pageURL: 'https://myaccount.google.com/people-and-sharing',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractSharedEndorsements,
      name: 'Shared Endorsements',
      description:
        'Based upon my activity, Google may show my profile name, profile photo, and activity in shared endorsements in ads.',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: 'document.querySelector(\'div[role="checkbox"]\').click();',
      fixURL: 'https://myaccount.google.com/shared-endorsements',
    },

    {
      extractFunc: extractSaveContactFromInteractions,
      name: 'Save contact info when you interact with people',
      description:
        'You can decide whether Google automatically saves contact info, like names and email addresses, of people you interact with in Google products',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: 'document.querySelector(\'div[role="checkbox"]\').click();',
      fixURL: 'https://myaccount.google.com/contacts',
    },
    {
      extractFunc: extractSaveContactFromDevices,
      name: 'Save contacts from your signed-in devices',
      description:
        'You can choose to save information about your contacts from your signed-in devices in your Google Account, including whether you contact them often',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: 'document.querySelector(\'div[role="checkbox"]\').click();',
      fixURL: 'https://myaccount.google.com/devicecontacts',
    },
  ],
};

export default job;
