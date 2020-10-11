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

const extractAdsBasedonRelationshipStatus = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      '#root > div:nth-child(1) > div > article > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > div > div',
    );

    // resolve('ok');
    resolve(selected.prop('aria-checked'));
  });
};
const extractAdsBasedonEmployer = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      '#root > div:nth-child(1) > div > article > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > div > div',
    );

    // resolve('ok');
    resolve(selected.prop('aria-checked'));
  });
};
const extractAdsBasedonJobTitle = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      '#root > div:nth-child(1) > div > article > div:nth-child(2) > div:nth-child(3) > div > div > div:nth-child(2) > div > div',
    );

    // resolve('ok');
    resolve(selected.prop('aria-checked'));
  });
};

const extractAdsBasedonEducation = (htmlContent: string) => {
  //:nth-child(2

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $(
      '#root > div:nth-child(1) > div > article > div:nth-child(2) > div:nth-child(4) > div > div > div:nth-child(2) > div > div',
    );

    // resolve('ok');
    resolve(selected.prop('aria-checked'));
  });
};

export default {
  name: 'Ad Preferences',
  pageURL: 'https://m.facebook.com/ads/preferences/demographics',
  tasks: [
    {
      extractFunc: extractAdsBasedonRelationshipStatus,
      name: 'Ads based on  relationship status',
      expectedValue: 'False',
      fixURL: 'https://m.facebook.com/ads/preferences/demographics',
    },
    {
      extractFunc: extractAdsBasedonEmployer,
      name: 'Ads based on  employer',
      expectedValue: 'False',
      fixURL: 'https://m.facebook.com/ads/preferences/demographics',
    },
    {
      extractFunc: extractAdsBasedonJobTitle,
      name: 'Ads based on  job title',
      expectedValue: 'False',
      fixURL: 'https://m.facebook.com/ads/preferences/demographics',
    },
    {
      extractFunc: extractAdsBasedonEducation,
      name: 'Ads based on  education',
      expectedValue: 'False',
      fixURL: 'https://m.facebook.com/ads/preferences/demographics',
    },
  ],
};
