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

export default () => {
  const webViewref = React.useRef(null);
  const [webActivityStatus, setWebActivityStatus] = React.useState(false);
  const [locationStatus, setLocationStatus] = React.useState(false);
  const [youtubeStatus, setYoutubeStatus] = React.useState(false);

  const handleWebViewNavigationStateChange = (state) => {
    //  console.log(state.url);
    // if (state.url.includes('https://myaccount.google.com/security-checkup')) {
    //     const $ = cherrio.load()
    // }
  };

  const onLogin = (event) => {
    // console.log(event.nativeEvent.data);
    const htmlContent = event.nativeEvent.data;
    // const c = cio.load(htmlContent);

    const $ = cio.load(htmlContent);

    const selected = $("a[href^='activitycontrols?settings=']");

    //  console.log( selected.html())
    //return
    console.log('____________________________________');

    selected.each(function (i, el) {
      const elem = $(el);
      const text = elem.html();
      //   console.log(elem.html())

      if (text.includes('activity')) {
        if (text.includes('On')) {
          console.log('web activity ', true);
          setWebActivityStatus(true);
        } else if (text.includes('Off')) {
          console.log('web activity ', false);
          setWebActivityStatus(false);
        }
      }

      if (text.includes('Location')) {
        if (text.includes('On')) {
          console.log('location ', true);
          setLocationStatus(true);
        } else if (text.includes('Off')) {
          console.log('location ', false);
          setLocationStatus(false);
        }
      }

      if (text.includes('YouTube')) {
        if (text.includes('On')) {
          console.log('youtube', true);
          setYoutubeStatus(true);
        } else if (text.includes('Off')) {
          console.log('youtube ', false);
          setYoutubeStatus(false);
        }
      }
    });
  };

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //  overflow: 'hidden',
      }}>
      <WebView
        // accessibilityTraits={'adjustable'}
        style={{
          width: Dimensions.get('window').width - 20,
          height: Dimensions.get('window').height - 20,
        }}
        autoManageStatusBarEnabled={true}
        contentInset={{top: 5, left: 5, bottom: 5, right: 5}}
        ref={webViewref}
        source={{
          uri: 'https://myactivity.google.com/myactivity',
        }}
        // originWhitelist={['*']}
        // source={{html: '<h1>This is a static HTML source!</h1>'}}
        onMessage={onLogin}
        // domStorageEnabled={false}
        //incognito={true}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        injectedJavaScript={runFirst}
        // injectedJavaScriptBeforeContentLoaded={runFirst}
      />
      <Text>Hello Google</Text>
      <Button>HOME</Button>
    </Layout>
  );
};
