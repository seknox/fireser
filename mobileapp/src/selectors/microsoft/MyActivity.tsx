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

const extractMyActivity = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('base-card > div ');

    let activity: string[] = [];

    selected.toArray().forEach((e) => {
      activity = activity.concat(e.attribs['aria-label']);
    });
    resolve(activity.join(','));
  });
};

export const ActivityHistory = {
  name: 'My Activity',
  pageURL: 'https://account.microsoft.com/privacy/activity-history',
  tasks: [
    {
      extractFunc: extractMyActivity,
      name: 'My Activity',
      type: 'PRIVACY',
      expectedValue: ' ',
      fixFunc: "document.querySelectorAll('button.delete-button').forEach(b=>b.click());",
      fixURL: 'https://account.microsoft.com/privacy/activity-history',
    },
  ],
};

export const SearchHistory = {
  name: 'My Activity',
  pageURL: 'https://account.microsoft.com/privacy/activity-history?view=search',
  tasks: [
    {
      extractFunc: extractMyActivity,
      name: 'Search History',
      type: 'PRIVACY',
      expectedValue: ' ',
      fixFunc: "document.querySelectorAll('button.delete-button').forEach(b=>b.click());",
      fixURL: 'https://account.microsoft.com/privacy/activity-history?view=search',
    },
  ],
};

export const BrowserHistory = {
  name: 'My Activity',
  pageURL: 'https://account.microsoft.com/privacy/activity-history?view=browse',
  tasks: [
    {
      extractFunc: extractMyActivity,
      name: 'Browser History',
      type: 'PRIVACY',
      expectedValue: ' ',
      fixFunc:
        "setTimeout(function(document.querySelectorAll('button.delete-button').forEach(b=>b.click());){},500);",
      fixURL: 'https://account.microsoft.com/privacy/activity-history?view=browse',
    },
  ],
};
