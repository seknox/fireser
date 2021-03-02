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
import { clickChecked } from '../ExtractChecked';

const extractStoryVisibility = (htmlContent: string) => {
  //:nth-child(2

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
  name: 'Story Visibility',
  pageURL: 'https://www.linkedin.com/psettings/story-visibility',
  tasks: [
    {
      extractFunc: extractStoryVisibility,
      name: 'Story visibility',
      expectedValue: 'HIDE',
      fixFunc: clickChecked,
      fixURL: 'https://www.linkedin.com/psettings/story-visibility',
    },
  ],
};
