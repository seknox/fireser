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
import { clickChecked } from '../ExtractChecked';

const extractProfileVisibility = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(':checked');

    resolve(selected.prop('value'));
  });
};

export default {
  name: 'Public Profile Visibility',
  pageURL: 'https://www.linkedin.com/public-profile/settings',
  tasks: [
    {
      extractFunc: extractProfileVisibility,
      name: 'Public Profile visibility',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: clickChecked,
      fixURL: 'https://www.linkedin.com/public-profile/settings',
    },
  ],
};
