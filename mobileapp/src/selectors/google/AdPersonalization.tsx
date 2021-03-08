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
import { isLoggedIn } from './CheckLoggedInFunc';

const extractAdPersonalization = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      'body > div:nth-child(5) > c-wiz > c-wiz > div > div > div > c-wiz > div > span > div > div:nth-child(4) > div:nth-child(2) > span > div ',
    );

    // console.info(selected.html(), 'prop');
    resolve(selected.prop('aria-checked'));
  });
};

export default {
  name: 'Personalised Ads',
  pageURL: 'https://adssettings.google.com/authenticated',
  isLoggedIn: isLoggedIn,
  tasks: [
    {
      extractFunc: extractAdPersonalization,
      name: 'Personalised Ads',
      type: 'PRIVACY',
      expectedValue: 'false',
      fixURL: 'https://adssettings.google.com/authenticated',
    },
  ],
};
