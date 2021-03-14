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

const extractWebAppActivityHistory = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $("a[href^='activitycontrols?settings=search'] > div:nth-child(2) > div ");

    const innerText = selected.text();

    if (innerText.includes('On')) {
      resolve('On');
    } else if (innerText.includes('Off')) {
      resolve('Off');
    } else {
      reject('Web Activity history status not found');
    }
  });
};

const extractYotubeHistory = (htmlContent: string) => {
  // console.log("HTML content ",htmlContent)

  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $("a[href^='activitycontrols?settings=youtube'] > div:nth-child(2) > div ");

    const innerText = selected.text();

    if (innerText.includes('On')) {
      resolve('On');
    } else if (innerText.includes('Off')) {
      resolve('Off');
    } else {
      reject('Youtube Activity history status not found');
    }
  });
};

const extractLocationHistory = (htmlContent: string) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);
    const selected = $("a[href^='activitycontrols?settings=location'] > div:nth-child(2) > div ");

    const innerText = selected.text();

    if (innerText.includes('On')) {
      resolve('On');
    } else if (innerText.includes('Off')) {
      resolve('Off');
    } else {
      reject('Location Activity history status not found');
    }
  });
};

const fixFunc = `

      sendDebugLog("fix btn->>>>>"+document.querySelector("input[role=switch]"));

        document.querySelector("input[role=switch]").click();
               console.log( 1);
        
        setTimeout(function(){

       var allButtons=document.querySelectorAll("button");
       var confirmBtn = allButtons[allButtons.length-1];
       confirmBtn.disabled = false;
       confirmBtn.click();
      sendDebugLog("confirm btn->>>>>"+ allButtons[allButtons.length-1].innerText);

      content="OKKKKKK";
        
        }, 1000);
            
      `;

export default {
  name: 'Activity Controls',
  pageURL: 'https://myactivity.google.com/myactivity',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractWebAppActivityHistory,
      name: 'Web Activity History',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixURL: 'https://myactivity.google.com/activitycontrols?settings=search',
      fixFunc: fixFunc,
    },
    {
      extractFunc: extractLocationHistory,
      name: 'Location History',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: fixFunc,
      fixURL:
        'https://myactivity.google.com/activitycontrols?settings=location&utm_source=my-activity',
    },

    {
      extractFunc: extractYotubeHistory,
      name: 'YouTube Activity History',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: fixFunc,
      fixURL:
        'https://myactivity.google.com/activitycontrols?settings=youtube&utm_source=my-activity&facs=1',
    },
  ],
};
