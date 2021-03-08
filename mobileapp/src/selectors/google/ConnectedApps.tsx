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

const extractConnectedApps = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('#third-party').parent().siblings();
    var apps = [];
    selected.each(function (i, elem) {
      const ele = $(this);
      const imgNode = ele.find($('img[data-atf="true"]'));
      const imgURL = imgNode.attr('src');
      const name = imgNode.parent().next().text();
      const permissions = imgNode.parent().next().next().text();
      apps.push({ name, imgURL, permissions });
    });
    resolve(apps);
  });
};

export default {
  name: 'Security ',
  pageURL: 'https://myaccount.google.com/permissions',
  isLoggedIn: isLoggedIn,
  tasks: [
    {
      extractFunc: extractConnectedApps,
      name: 'Connected third party apps',
      type: 'CONNECTED_APPS',
      expectedValue: 'No issues found',
      fixURL: 'https://myaccount.google.com/permissions',
    },
  ],
};
