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
import {isLoggedIn} from "./CheckLoggedInFunc";


const extractConnectedDevices =  (htmlContent) => {

    const $ = cio.load(htmlContent);

    const selected = $("div[role=listitem] > div > div > div:nth-child(3) > div ");

    //  console.log( selected.html())
    //return
    //console.log('____________________________________');

    selected.each(function (i, el) {
      const elem = $(el);
      const text = elem.html();
      //   console.log(elem.html())


};


  export default {
    name: 'Security ',
    pageURL: 'https://myaccount.google.com/security-checkup',
    isLoggedIn:isLoggedIn,
    tasks: [
      {
        extractFunc: extractConnectedDevices,
        name: 'Security Checkup Status',
        expectedValue: 'No issues found',
        fixURL: 'https://myaccount.google.com/security-checkup',
      },
    ],
  };
