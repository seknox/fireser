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
import { clickChecked } from './ExtractChecked';

const extractDataSharing = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(':checked');

    if (selected.length === 0) {
      resolve('FALSE');
    } else if (selected.length === 1) {
      resolve('TRUE');
    } else {
      reject('invalid ');
    }
  });
};

export default {
  name: 'Data sharing',
  pageURL: 'https://www.linkedin.com/psettings/data-sharing',
  tasks: [
    {
      extractFunc: extractDataSharing,
      name: 'Data sharing',
      type: 'PRIVACY',
      expectedValue: 'FALSE',
      fixFunc: clickChecked,
      fixURL: 'https://www.linkedin.com/psettings/data-sharing',
    },
  ],
};
