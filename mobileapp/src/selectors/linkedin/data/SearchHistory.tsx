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

function extractDisabled(htmlContent: string) {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('button.clear-search-history-button');

    // console.log('selected.prop("disabled")', selected.prop('disabled'));
    resolve(selected.prop('disabled') ? 'TRUE' : 'FALSE');
  });
}

const fixFunction = `
document.querySelector("button.clear-search-history-button").click();
document.querySelector("button.clear-button").click();

`;

export default {
  name: 'Search History',
  pageURL: 'https://www.linkedin.com/psettings/clear-search-history',
  tasks: [
    {
      extractFunc: extractDisabled,
      type: 'PRIVACY',
      name: 'Clean search history',
      expectedValue: 'TRUE',
      fixFunc: fixFunction,
      fixURL: 'https://www.linkedin.com/psettings/clear-search-history',
    },
  ],
};
