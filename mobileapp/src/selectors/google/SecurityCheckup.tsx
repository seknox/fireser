/*
 *
 *   Copyright (C) 2020-2021 Seknox Pte Ltd.
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

const extractSecurityCheckupStatus = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      'c-wiz > div > c-wiz > div > div > div > div > div:nth-child(1) > div > div.eqiJQ > div',
    );

    resolve(selected.text());
  });
};

const job: Job = {
  name: 'Security Checkup',
  pageURL: 'https://myaccount.google.com/security-checkup',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractSecurityCheckupStatus,
      name: 'Security Checkup Status',
      description: 'Result from Google Security Check-up',
      type: 'SECURITY',
      expectedValue: 'No issues found',
      fixURL: 'https://myaccount.google.com/security-checkup',
    },
  ],
};

export default job;
