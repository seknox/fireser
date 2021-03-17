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
import { Job, Apps } from '../../types/types';

const extractThirdPartyApps = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('#third-party').parent().siblings();
    let apps: Apps[] = [];
    selected.each(function (i, elem) {
      const ele = $(elem);
      const imgNode = ele.find($('img[data-atf="true"]'));
      const imgURL = imgNode.attr('src');
      const name = imgNode.parent().next().text();
      const permissions = imgNode.parent().next().next().text();
      apps.push({ name, imgURL, permissions });
    });
    resolve(apps);
  });
};
const extractSignedInApps = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('#sign-in').parent().next().nextAll();
    let apps: Apps[] = [];
    selected.each(function (i, elem) {
      const ele = $(elem);

      const nameNode = ele.find($('h2'));
      const imgURL = nameNode.parent().parent().prev().children('img').attr('src');
      const detailsNodes = nameNode
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .children()
        .first()
        .next()
        .find('div[role="row"]');

      const name = nameNode.text();
      const permissions = detailsNodes.first().find('div[role="gridcell"]').text();
      const homepage = detailsNodes.first().next().find('div[role="gridcell"]').text();
      const accessGivenTo = detailsNodes.first().next().next().find('div[role="gridcell"]').text();
      const accessGivenIn = detailsNodes
        .first()
        .next()
        .next()
        .next()
        .find('div[role="gridcell"]')
        .text();

      apps.push({ name, imgURL, permissions, homepage, accessGivenTo, accessGivenIn });
    });
    resolve(apps);
  });
};

const job: Job = {
  name: 'Connected Apps ',
  pageURL: 'https://myaccount.google.com/permissions',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractThirdPartyApps,
      name: 'Connected third party apps',
      description:
        'Sites and apps that have access to some of your Google Account data, including info that may be sensitive. Remove access for those you no longer trust or use',
      type: 'THIRD_PARTY_APPS',
      fixURL: 'https://myaccount.google.com/permissions',
    },
    {
      extractFunc: extractSignedInApps,
      name: 'Connected signed in apps',
      description:
        'You use your Google Account to sign in to these sites and apps. They can view your name, email address, and profile picture',
      type: 'SIGNED_IN_APPS',
      fixURL: 'https://myaccount.google.com/permissions',
    },
  ],
};

export default job;
