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
import { Job } from '../../types/types';

const extractRecentActivity = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $("a[href^='notifications/eid']");

    let activity: string[] = [];
    selected.toArray().forEach((elem) => {
      const innerText = $(elem).text();
      activity = activity.concat(innerText);
    });

    resolve(activity.join(','));
  });
};

const job: Job = {
  name: 'Security',
  pageURL: 'https://myaccount.google.com/notifications',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractRecentActivity,
      description: 'Security activity and alerts from the last 28 days',
      name: 'Recent Activity',
      type: 'PRIVACY',
      fixURL: 'https://myaccount.google.com/notifications',
    },
  ],
};

export default job;
