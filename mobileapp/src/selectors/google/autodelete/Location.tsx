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

const extracAutoDelete = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    // console.warn(htmlContent.length)
    // const selected = $('body');
    const selected = $(
      'body > c-wiz > div > div:nth-child(3) > div:nth-child(2) > c-wiz > div:nth-child(4) > div > div > :nth-child(2)',
    );

    const text = selected.text();
    const splotted = text.split('older than');

    if (splotted.length == 2) {
      resolve(splotted[1]);
    } else {
      resolve("off");
     // reject('Could not find auto delete duration');
    }
    // console.info(selected.html(), 'prop');
    // resolve(selected.prop('aria-checked'));
  });
};

const fixFunc = `
document.querySelector('body > c-wiz > div > div:nth-child(3) > div:nth-child(2) > c-wiz > div:nth-child(4) > div').click();
   setTimeout(function(){
document.querySelector('html > body > div:nth-last-child(1) > div > div:nth-child(2) > span > div:nth-child(2) >div > c-wiz > div > div:nth-child(3) > c-wiz > div:nth-child(2) > div >div:nth-child(1)').click();
setTimeout(function(){
var allButtons = document.querySelectorAll('button');
var lastButton = allButtons[allButtons.length-1];
lastButton.click() ;

setTimeout(function(){
var confirmBtn = document.querySelector('html > body > div:nth-last-child(1) > div  > div:nth-child(2) > span > div:nth-child(2) > div:nth-child(1) > c-wiz > div > div:nth-last-child(1) > div > div:nth-child(2) > button')
confirmBtn.disabled=false;
confirmBtn.click();
    
},1000)
    
},200)

        }, 500);
            

`;

export default {
  name: 'Auto delete ',
  pageURL: 'https://myactivity.google.com/activitycontrols?settings=location',
  tasks: [
    {
      extractFunc: extracAutoDelete,
      name: 'Auto delete location history',
      expectedValue: '3 months',
      fixFunc:fixFunc,
      fixURL: 'https://myactivity.google.com/activitycontrols?settings=location',
    },
  ],
};

//   /html/body/c-wiz/div/div[2]/div[2]/c-wiz/div[4]/div/div/div[2]
