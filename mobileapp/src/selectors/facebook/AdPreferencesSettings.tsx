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

const extractAdsBasedonPartners = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      'a[href^="/control_center/checkup/third_party/"] > div > div > div:nth-child(3)',
    );

    resolve(selected.text());
  });
};
const extractAdsBasedonFBproducts = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('a[href^="/ads/settings/fpd"] > div > div > div:nth-child(3)');

    resolve(selected.text());
  });
};

export default {
  name: 'Ad Preferences Settings',
  pageURL: 'https://m.facebook.com/ads/preferences/settings',
  tasks: [
    {
      extractFunc: extractAdsBasedonPartners,
      name: 'Ads based on  data from partners',
      expectedValue: 'Not Allowed',
      fixURL: 'https://m.facebook.com/control_center/checkup/third_party/',
    },
    {
      extractFunc: extractAdsBasedonFBproducts,
      name: 'Ads based on  fb company products',
      expectedValue: 'Not Allowed',
      fixURL: 'https://m.facebook.com/ads/settings/fpd/',
    },
  ],
};
