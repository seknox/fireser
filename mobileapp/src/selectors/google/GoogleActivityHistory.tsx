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

import cio from 'cheerio-without-node-native';

//    a.jslcw:nth-child(1)
const extractWebAppActivityHistory = (htmlContent: string) => {
  // console.log("HTML content ",htmlContent)

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    // console.log(htmlContent);
    const $ = cio.load(htmlContent);
    const selected = $("a[href^='activitycontrols?settings=search']");

    selected.toArray().forEach((elem, i) => {
      const innerText = $(elem).text();
      if (innerText.includes('activity')) {
        if (innerText.includes('On')) {
          resolve('On');
        } else if (innerText.includes('Off')) {
          resolve(innerText.includes('Off'));
        } else {
          reject('Web Activity history status not found');
        }
      } else {
        reject('Web Activity history not found');
      }
    });
  });
};

const extractYotubeHistory = (htmlContent) => {
  // console.log("HTML content ",htmlContent)

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $("a[href^='activitycontrols?settings=youtube']");

    selected.toArray().forEach((elem, i) => {
      const innerText = $(elem).text();

      if (innerText.includes('YouTube')) {
        if (innerText.includes('On')) {
          resolve('On');
        } else if (innerText.includes('Off')) {
          resolve(innerText.includes('Off'));
        } else {
          reject('YouTube history status not found');
        }
      } else {
        reject('Youtube history not found');
      }
    });
  });
};

const extractLocationHistory = (htmlContent) => {
  // console.log("HTML content ",htmlContent)

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $("a[href^='activitycontrols?settings=location']");

    selected.toArray().forEach((elem, i) => {
      const innerText = $(elem).text();

      if (innerText.includes('Location')) {
        if (innerText.includes('On')) {
          resolve('On');
        } else if (innerText.includes('Off')) {
          resolve(innerText.includes('Off'));
        } else {
          reject('Location Activity history status not found');
        }
      } else {
        reject('Location history not found');
      }
    });
  });
};

export default {
  name: 'Privacy',
  pageURL: 'https://myactivity.google.com/myactivity',
  tasks: [
    {
      extractFunc: extractWebAppActivityHistory,
      name: 'Web Activity History',
      expectedValue: 'Off',
      fixURL: 'https://myactivity.google.com/activitycontrols?settings=search',
      // fixFunc: `
      // sendDebugLog("");
      //
      //
      // sendDebugLog("fix btn->>>>>"+document.querySelector("body > c-wiz > div > div:nth-child(3) > div:nth-child(2) > c-wiz > div:nth-child(2) > div > div > div:nth-child(2) > div > div:nth-child(2) > input"));
      //
      //   document.querySelector("body > c-wiz > div > div:nth-child(3) > div:nth-child(2) > c-wiz > div:nth-child(2) > div > div > div:nth-child(2) > div > div:nth-child(2) > input").click();
      //  // await new Promise(function(resolve) {setTimeout(resolve, 1000)});
      //  document.querySelector("button:nth-last-child(1)").click();
      // sendDebugLog("confirm btn->>>>>"+document.querySelector("button:nth-last-child(1)"));
      //
      // content="OKKKKKK";
      // `,
    },
    //document.querySelector("body > div.llhEMd.iWO5td > div > div.g3VIld.HbiE4d.Up8vH.Whe8ub.hFEqNb.J9Nfi.iWO5td > span > div.Df8Did > div > c-wiz > div > div.F3FQK > div > div > div:nth-child(2) > button")
    {
      extractFunc: extractLocationHistory,
      name: 'Location History',
      expectedValue: 'Off',
      fixURL:
        'https://myactivity.google.com/activitycontrols?settings=location&utm_source=my-activity',
    },

    {
      extractFunc: extractYotubeHistory,
      name: 'YouTube Activity History',
      expectedValue: 'Off',
      fixURL:
        'https://myactivity.google.com/activitycontrols/youtube?utm_source=myactivity&facs=1',
    },
  ],
};
