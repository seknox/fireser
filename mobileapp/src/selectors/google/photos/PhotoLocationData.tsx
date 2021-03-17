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
import { isLoggedIn } from '../CheckLoggedInFunc';
import { Job } from '../../../types/types';

const extractPhotoLocationSetting = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $('#geoloccheckbox');

    const inputElement = selected
      .parent('div')
      .children('div:nth-child(2)')
      .children('div:nth-child(1)')
      .children('div')
      .children('div:nth-child(2)')
      .children('input:nth-child(2)');

    resolve(inputElement.prop('aria-checked'));
  });
};

const extractLabeledFaceSetting = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $('div[role="button"] > div');

    selected.each(function (i, elem) {
      const txt = $(elem).text();
      if (txt.includes('labeled as "Me"')) {
        if (txt.includes('No face labeled as "Me"')) {
          resolve('FALSE');
        } else {
          resolve('TRUE');
        }
      } else {
        resolve('FALSE');
      }
    });
  });
};

const job: Job = {
  name: 'Google Photos',
  pageURL: 'https://photos.google.com/settings',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractPhotoLocationSetting,
      name: 'Hide Location in Photos',
      description: 'Whether to let other people see where the photos were taken.',
      type: 'PRIVACY',
      expectedValue: 'true',
      fixFunc:
        'document.querySelector("#geoloccheckbox").parentNode.children[1].children[0].children[0].children[1].children[1].click();' +
        'setTimeout(function(){document.querySelectorAll("[autofocus]")[1].click();},1000)',
      fixURL: 'https://photos.google.com/settings',
    },
    {
      extractFunc: extractLabeledFaceSetting,
      name: 'Labeled face',
      description: 'Whether to label your face as you.',
      type: 'PRIVACY',
      expectedValue: 'FALSE',
      fixFunc:
        'document.querySelector("#geoloccheckbox").parentNode.children[1].children[0].children[0].children[1].children[1].click();' +
        'setTimeout(function(){document.querySelectorAll("[autofocus]")[1].click();},1000)',
      fixURL: 'https://photos.google.com/settings',
    },
  ],
};

export default job;
