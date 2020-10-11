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

import {Job, Task} from '../types/types';
import {Button, Popover} from '@ui-kitten/components';

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
export const Runner = (props: {jobs: Job[]; setData: any}) => {
  // const webViewref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const [pageURL, setPageURL] = React.useState('');
  const {setData} = props;
  const index = React.useRef(0);
  const jobs = React.useRef<Job[]>(props.jobs);
  //  const results = React.useRef([]);

  React.useEffect(() => {
    setPageURL(jobs.current[0].pageURL);
  }, []);

  const loadNext = () => {
    // console.log(index.current + 1 , tasks.length)

    if (index.current + 1 < jobs.current.length) {
      index.current = index.current + 1;
      const currentTask = jobs.current[index.current];
      // console.log(currentTask.pageURL)
      setPageURL(currentTask.pageURL);
    } else {
      console.log('finished ', jobs.current[0].tasks[0].name);
      //Finished
      setData(jobs.current);
    }
  };

  const runTasks = async (job: Job, htmlContent: string) => {
    for (let i = 0; i < job.tasks.length; i++) {
      console.log('TASK NAME:', job.tasks[i].name);
      const gotValue = await job.tasks[i].extractFunc(htmlContent);
      job.tasks[i].gotValue = gotValue;
      console.log('GOT VALUE:', job.tasks[i].name, ':-', gotValue);
    }

    return job;
  };

  const onMessage = async (event) => {
    var msg;
    try {
      msg = JSON.parse(event.nativeEvent.data);
    } catch (e) {
      console.error(e);
    }

    console.log(msg.type);

    if (msg.type === 'HTML' && msg.content) {
      setIsVisible(false);
      let res;
      try {
        res = await runTasks(jobs.current[index.current], msg.content);
      } catch (e) {
        console.error(e);
      }

      jobs.current[index.current] = res;

      // results.current = results.current.concat({res});
      loadNext();
    } else if (msg.type === 'LOGIN') {
      setIsVisible(true);
    } else {
      //DEBUG
      // console.log("debug",msg.content);
    }
  };

  const renderToggleButton = () => (
    <Button style={{hidden:isVisible}} onPress={() => setIsVisible(false)}>Close</Button>
  );

  return (
      <View style={{display: props.isVisible ? 'flex' : 'none'}}>
    {/*<Popover visible={isVisible} anchor={renderToggleButton}>*/}
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
          uri: pageURL,
        }}
        // originWhitelist={['*']}
        // source={{html: '<h1>This is a static HTML source!</h1>'}}
        onMessage={onMessage}
        // domStorageEnabled={false}
        // incognito={true}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        injectedJavaScript={getCodeToInject(pageURL)}
        // injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    {/*</Popover>*/}
      </View>
  );
};
