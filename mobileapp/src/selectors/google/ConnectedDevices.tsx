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

const extractConnectedDevices = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $('div[role="listitem"]');
    var devices = [];
    selected.each(function (i, elem) {
      const ele = $(this);
      // console.log(ele.html())
      const deviceID = ele.children('div').attr('data-device-id');
      const title = ele.find($("div[role='heading']"));

      const deviceTypeElement = ele.find($(`div[data-device-id="${deviceID}"] > div > div > div`));
      const dataOS = deviceTypeElement.attr('data-os');
      const imgURL = ele.find($(`div[data-device-id="${deviceID}"] > div > div > img`)).attr('src');
      const dataFormFactor = deviceTypeElement.attr('data-form-factor');
      const name = title.siblings('div');

      let os;

      // console.debug("dataos: ",dataos)
      // console.debug("data form factor: ",dataformfactor)
      switch (dataOS + ':' + dataFormFactor) {
        case '5:2':
          os = 'IPHONE';
          break;
        case '5:5':
          os = 'IPAD';
          break;
        case '2:1':
          os = 'Macbook';
        default:
          os = 'GENERIC';
      }
      console.log('imgurl:',imgURL)
      if (imgURL) {
        os = 'ANDROID';
      }

      // const text = elem.html();
      //console.log(title);
      // console.debug();
      devices.push({ title: title.text(), name: name.text(), deviceID: deviceID, os, imgURL });
    });
    // console.log(devices);
    resolve(devices);
  });
};

export default {
  name: 'Security ',
  pageURL: 'https://myaccount.google.com/device-activity',
  isLoggedIn: isLoggedIn,
  tasks: [
    {
      extractFunc: extractConnectedDevices,
      name: 'Security Checkup Status',
      type: 'CONNECTED_DEVICES',
      expectedValue: 'No issues found',
      fixURL: 'https://myaccount.google.com/device-activity',
    },
  ],
};
