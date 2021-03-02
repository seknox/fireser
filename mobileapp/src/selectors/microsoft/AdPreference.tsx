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

const extractPersonalisedAds = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('#MsaAds-toggle-button-state-label');

    resolve(selected.text());
  });
};

const extractPersonalisedAdsOnBrowser = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('#BrowserAds-toggle-button-state-label');

    resolve(selected.text());
  });
};

export default {
  name: 'Ad Preferences Settings',
  pageURL: 'https://account.microsoft.com/privacy/ad-settings',
  tasks: [
    {
      extractFunc: extractPersonalisedAds,
      name: 'Personalised Ads',
      expectedValue: 'Off',
      fixURL: 'https://account.microsoft.com/privacy/ad-settings',
    },
    {
      extractFunc: extractPersonalisedAdsOnBrowser,
      name: 'Personalised Ads on browser',
      expectedValue: 'Off',
      fixURL: 'https://account.microsoft.com/privacy/ad-settings',
    },
  ],
};
