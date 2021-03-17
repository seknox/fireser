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

const extractYouTubeHistory = (htmlContent: string) => {
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


        document.querySelector("input[role=switch]").click();
        setTimeout(function(){
       var allButtons=document.querySelectorAll("button");
       var confirmBtn = allButtons[allButtons.length-1];
       confirmBtn.disabled = false;
       confirmBtn.click();
        
        }, 1000);
            
      `;

const job: Job = {
  name: 'Activity Controls',
  pageURL: 'https://myactivity.google.com/myactivity',
  isLoggedInFunc: isLoggedIn,
  tasks: [
    {
      extractFunc: extractWebAppActivityHistory,
      name: 'Web Activity History',
      description:
        'Your activity on Google sites and apps, including associated information like location',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixURL: 'https://myactivity.google.com/activitycontrols?settings=search',
      fixFunc: fixFunc,
    },
    {
      extractFunc: extractLocationHistory,
      name: 'Location History',
      description:
        "Data about where you go with your devices, even when you aren't using a specific Google service.",
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: fixFunc,
      fixURL: 'https://myactivity.google.com/activitycontrols?settings=location',
    },

    {
      extractFunc: extractYouTubeHistory,
      name: 'YouTube Activity History',
      description: 'YouTube videos that you watch and the things that you search',
      type: 'PRIVACY',
      expectedValue: 'Off',
      fixFunc: fixFunc,
      fixURL:
        'https://myactivity.google.com/activitycontrols?settings=youtube&utm_source=my-activity&facs=1',
    },
  ],
};

export default job;
