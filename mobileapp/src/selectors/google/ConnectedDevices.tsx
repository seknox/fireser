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
import { Device, Job } from '../../types/types';

const extractConnectedDevices = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('div[role="listitem"]');
    let devices: Device[] = [];
    selected.each(function (i, elem) {
      const ele = $(elem);
      // console.log(ele.html())
      const deviceID = ele.children('div').attr('data-device-id');
      const title = ele.find($("div[role='heading']"));

      const deviceTypeElement = ele.find($(`div[data-device-id="${deviceID}"] > div > div > div`));
      const dataOS = deviceTypeElement.attr('data-os');
      const imageURL = ele
        .find($(`div[data-device-id="${deviceID}"] > div > div > img`))
        .attr('src');
      const dataFormFactor = deviceTypeElement.attr('data-form-factor');
      const detail = title.siblings('div');

      let os: string;
      let deviceType: string;

      switch (dataOS + ':' + dataFormFactor) {
        case '5:2':
          os = 'IPHONE';
          deviceType = 'MOBILE';
          break;
        case '5:5':
          os = 'IPAD';
          deviceType = 'TABLET';
          break;
        case '2:1':
          os = 'MAC';
          deviceType = 'WORKSTATION';
          break;
        case '1:1':
          os = 'WINDOWS';
          deviceType = 'WORKSTATION';
          break;
        case '3:1':
          os = 'LINUX';
          deviceType = 'WORKSTATION';
          break;
        case '6:':
          os = 'CHROME_OS';
          deviceType = 'WORKSTATION';
          break;
        case '4:3':
          os = 'ANDROID';
          deviceType = 'TABLET';
          break;

        case ':3':
          os = 'ANDROID';
          deviceType = 'TABLET';
          break;

        case ':6':
          os = 'TV';
          deviceType = 'TV';
          break;
        case ':8':
          os = 'TV';
          deviceType = 'TV';
          break;
        case ':7':
          os = 'CAR';
          deviceType = 'CAR';
          break;

        default:
          os = 'GENERIC';
          deviceType = 'GENERIC';
      }
      if (imageURL) {
        os = 'ANDROID';
        deviceType = 'MOBILE';
      }

      devices.push({
        name: title.text(),
        detail: detail.text(),
        deviceID: deviceID,
        os,
        deviceType,
        imageURL,
      });
    });
    // console.log(devices);
    resolve(devices);
  });
};

const job: Job = {
  name: 'Connected Devices',
  pageURL: 'https://myaccount.google.com/device-activity',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractConnectedDevices,
      description: 'You’re currently signed in to your Google Account on these devices.',
      name: 'Connected Devices',
      type: 'CONNECTED_DEVICES',
      fixURL: 'https://myaccount.google.com/device-activity',
    },
  ],
};

export default job;
