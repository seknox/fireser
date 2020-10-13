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

import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Layout,
  Text,
} from '@ui-kitten/components';
import React from 'react';

import {WebView} from 'react-native-webview';
import {Dimensions} from 'react-native';
import cio from 'cheerio-without-node-native';

const runFirst = `
    window.ReactNativeWebView.postMessage("URL: "+document.URL);
    setInterval(function(){
        if(document.URL.startsWith('https://myactivity.google.com/myactivity'))
            window.ReactNativeWebView.postMessage(document.body.innerHTML);
          
    },1000)
    true;
    `;

const BottomTabBar = () => (
  <BottomNavigation
  //   selectedIndex={state.index}
  //    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="My Activity" />
    <BottomNavigationTab title="Login" />
  </BottomNavigation>
);

const extractConnectedDevices =  (htmlContent) => {

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='activitycontrols?settings=']");

    //  console.log( selected.html())
    //return
    console.log('____________________________________');

    selected.each(function (i, el) {
      const elem = $(el);
      const text = elem.html();
      //   console.log(elem.html())


};
//#yDmH0d > c-wiz:nth-child(9) > div > div:nth-child(3) > c-wiz > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div > div > div.GXPO6c > div.FVYsnd


  export default {
    name: 'Security ',
    pageURL: 'https://myaccount.google.com/security-checkup',
    tasks: [
      {
        extractFunc: extractConnectedDevices,
        name: 'Security Checkup Status',
        expectedValue: 'No issues found',
        fixURL: 'https://myaccount.google.com/security-checkup',
      },
    ],
  };
