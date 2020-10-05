
import React from 'react';


import cio from 'cheerio-without-node-native';

const extractLastPassordChange = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='signinoptions/password']");

    let arr = selected.toArray();


    arr.forEach((elem, i) => {
      const innerText = $(elem).text();
      //console.log(111,i,innerText)
      if (innerText.includes('Last changed')) {
        //console.log('found ', innerText);
        resolve(innerText);
      }else if(i==arr.length-1){
        ////console.log(i,arr.length)
        reject('Last Changed not found');

      }
    });

  });
};

const extractTfaStatus = (htmlContent) => {
  return new Promise((resolve, reject) => {
    if (!htmlContent) {
      reject('HTML content empty');
    }

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='signinoptions/two-step-verification']");

    let arr = selected.toArray();


    arr.forEach((elem, i) => {
      const innerText = $(elem).text();
      if (innerText.includes('2-Step Verification')) {
        if (innerText.includes('On')) {
          resolve('On');
        } else if (innerText.includes('Off')) {
          resolve(innerText.includes('Off'));
        } else {
          reject('2-Step Verification status not found');
        }
      } else {
        reject('2-Step Verification not found');
      }

    });


  });
};

export default {
  name: 'Security',
  pageURL: 'https://myaccount.google.com/security',
  tasks: [
    {
      extractFunc: extractLastPassordChange,
      name: 'Password Last Changed',
      expectedValue: '',
      fixURL: 'https://myaccount.google.com/security/signinoptions/password',
    },
    {
      extractFunc: extractTfaStatus,
      name: 'Two factor authentication',
      expectedValue: 'On',
      fixURL: 'https://myaccount.google.com/security/signinoptions/two-step-verification',
    },
  ],
};
