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

import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { Dimensions, View } from 'react-native';

//TODO find a better way of injecting fix function
const getCodeToInject = (pageURL: string, fixFunc: string) => {
  if (fixFunc) {
    //console.log(111);

    const injectCode =
      `
    function sendDebugLog(m){
      const msgDebug = {"type":"DEBUG","content":m};
        window.ReactNativeWebView.postMessage(JSON.stringify(msgDebug));

    };
    
   
    var refreshId = setInterval(function(){
    
   
    
    
        if(document.URL.startsWith('` +
      pageURL +
      `')){
  let content;
  
  
  
    ` +
      fixFunc +
      `
    
        const msg = {"type":"DONE","content":content}
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
    // console.log(injectCode);
    return injectCode;
  } else {
    return 'true;';
  }
};

/*
{
url:
extractFunc:

}
*/
export const Fixer = (props: {
  pageURL: string;
  fixFunc: string;
  isVisible: boolean;
  onFixed: any;
}) => {
  // const webViewref = React.useRef(null);

  const onMessage = async (event: WebViewMessageEvent) => {
    var msg;
    try {
      msg = JSON.parse(event.nativeEvent.data);

      if (msg.type === 'DEBUG') {
        console.log('debug', msg.content);
      } else if (msg.type === 'DONE') {
        props.onFixed(msg.content);
      }
    } catch (e) {
      console.error(e);
    }

    //console.log(msg.type);
  };

  return (
    <View
      style={{
        display: props.isVisible ? 'flex' : 'none',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/*<Text category={"h1"}>{pageURL}</Text>*/}
      <WebView
        // accessibilityTraits={'adjustable'}
        style={{
          width: Dimensions.get('window').width - 20,
          height: Dimensions.get('window').height - 20,
          marginTop: 20,
          maxHeight: 200,
          flex: 1,
        }}
        autoManageStatusBarEnabled={true}
        contentInset={{ top: 5, left: 5, bottom: 5, right: 5 }}
        source={{
          uri: props.pageURL,
        }}
        // originWhitelist={['*']}
        onMessage={onMessage}
        // domStorageEnabled={false}
        // incognito={true}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        injectedJavaScript={getCodeToInject(props.pageURL, props.fixFunc)}
        // injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    </View>
  );
};
