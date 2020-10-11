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

import {WebView} from 'react-native-webview';
import {Dimensions, View} from 'react-native';
import {
  extractFunc as googleExtractFunc,
  pageURL as googlePageURL,
} from '../pages/google/GoogleActivityHistory';
import {err} from 'react-native-svg/lib/typescript/xml';
import {Text} from '@ui-kitten/components';
import {Job, Task} from '../utils/types';

const getCodeToInject = (pageURL) =>
  `
    
   
    var refreshId = setInterval(function(){
    
    
     const msgDebug = {"type":"DEBUG","content":document.URL};
        window.ReactNativeWebView.postMessage(JSON.stringify(msgDebug));
        
    
    
        if(document.URL.startsWith('` +
  pageURL +
  `')){
        const msg = {"type":"HTML","content":document.body.innerHTML}
        clearInterval(refreshId);
        window.ReactNativeWebView.postMessage(JSON.stringify(msg));
        }
        else{
        
        const msg = {"type":"LOGIN"};
        window.ReactNativeWebView.postMessage(JSON.stringify(msg));
        }
        
         
    },1000);
    
    
    true;
    `;

/*
{
url:
extractFunc:

}
*/
export const Fixer = (props: {
  pageURL: string;
  isVisible: boolean;
  onDone: any;
}) => {
  // const webViewref = React.useRef(null);

  const onMessage = async (event) => {
    var msg;
    try {
      msg = JSON.parse(event.nativeEvent.data);

      if (msg.type === 'DEBUG') {
        console.log('debug', msg.content);
      }
    } catch (e) {
      console.error(e);
    }

    console.log(msg.type);
  };

  return (
    <View style={{display: props.isVisible ? 'flex' : 'none'}}>
      {/*<Text category={"h1"}>{pageURL}</Text>*/}
      <WebView
        // accessibilityTraits={'adjustable'}
        style={{
          width: Dimensions.get('window').width - 20,
          height: Dimensions.get('window').height - 20,
        }}
        autoManageStatusBarEnabled={true}
        contentInset={{top: 5, left: 5, bottom: 5, right: 5}}
        source={{
          uri: props.pageURL,
        }}
        // originWhitelist={['*']}
        // source={{html: '<h1>This is a static HTML source!</h1>'}}
        onMessage={onMessage}
        // domStorageEnabled={false}
        // incognito={true}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        injectedJavaScript={getCodeToInject(props.pageURL)}
        // injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    </View>
  );
};
