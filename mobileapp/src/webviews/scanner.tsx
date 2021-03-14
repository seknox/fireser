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

import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { Dimensions, View } from 'react-native';
import { StyleService, useStyleSheet, Text } from '@ui-kitten/components';
import { Job, Result, Account } from '../types/types';
import { aggregateResult } from './AggregrateResult';
import passwordInjection from './passwordInjection';
//This piece of js code will be injected into webview.
//It will check if the page is redirected. If the page is redirected, it means login is needed. It sends "LOGIN" type message.
// If page does not gets redirected, it will send "HTML" type message with whole html content.

const getCodeToInject = (pageURL: string, isLoggedIn: string) => {
  if (!isLoggedIn) {
    isLoggedIn = `var isLoggedIn=window.location.href.startsWith("${pageURL}");`;
  }

  //console.log(isLoggedIn);

  return (
    isLoggedIn +
    `
   
   
   
    var refreshId = setInterval(function(){
    console.log(document.URL)
    
    const msgDebug = {"type":"DEBUG","content":document.URL+"${pageURL}" };
   window.ReactNativeWebView.postMessage(JSON.stringify(msgDebug));
    
    if(!isLoggedIn){
     const msg = {"type":"LOGIN_NEEDED","content":""}
        window.ReactNativeWebView.postMessage(JSON.stringify(msg));
       return
    }
    
    
        const msg = {"type":"HTML","content":document.body.parentNode.innerHTML}
        clearInterval(refreshId);
        window.ReactNativeWebView.postMessage(JSON.stringify(msg));
       
         
    },1000);
    
    
    true;
    `
  );
};
/*
{
url:
extractFunc:

}
*/

type runnerProps = {
  setScanResult: Dispatch<SetStateAction<Result>>;
  accountDetail: Account;
  onDone: Dispatch<SetStateAction<Result>>;
  onProgress: (progress: number) => void;
  changeShowProgress: React.Dispatch<React.SetStateAction<boolean>>;
};

const Scanner = (props: runnerProps, ref: any) => {
  // const webViewref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const [runnable, setRunnable] = React.useState({ pageURL: '', injectCode: '' });
  const index = React.useRef(0);
  const jobs = React.useRef<Job[]>(props.accountDetail.jobList);
  //  const results = React.useRef([]);

  React.useEffect(() => {
    //Load the first job
    loadFirstJob();
  }, []);

  const loadFirstJob = () => {
    const injectCode = getCodeToInject(jobs.current[0].pageURL, jobs.current[0].isLoggedInFunc);
    setRunnable({ injectCode, pageURL: jobs.current[0].pageURL });
  };

  //Load next job
  const loadNext = () => {
    if (index.current + 1 < jobs.current.length) {
      index.current = index.current + 1;
      const currentTask = jobs.current[index.current];
      // console.log(currentTask.pageURL)
      const injectCode = getCodeToInject(currentTask.pageURL, currentTask.isLoggedInFunc);
      setRunnable({ injectCode, pageURL: currentTask.pageURL });

      // setPageURL(currentTask.pageURL);
      // setLoggedInFunc(currentTask.isLoggedIn);
    } else {
      // console.log('finished ', jobs.current[0].tasks[0].name);
      //Finished
      const res = aggregateResult(jobs.current);
      // console.debug(JSON.stringify(res));
      props.setScanResult(res);
      props.changeShowProgress(false);
      props.onProgress(1);
    }
  };

  //Extract different data from a single web page
  const runTasks = async (job: Job, htmlContent: string): Promise<Job> => {
    for (let i = 0; i < job.tasks.length; i++) {
      // console.log('TASK NAME:', job.tasks[i].name);
      job.tasks[i].gotValue = await job.tasks[i].extractFunc(htmlContent);
      // console.log('GOT VALUE:', job.tasks[i].name, ':-', gotValue);
    }

    return job;
  };

  /*
  On message from webview.
  Message types:
  "LOGIN_NEEDED": login is required. In this case, web view should be displayed. (It is hidden by default)
  "LOGIN_SUCCESS": login is successful. Jobs can be loaded into webview now
  "HTML": If the page is loaded as normal, "HTML" type message contains whole htmlContent of the page.
  "DEBUG": debug messages.

  */
  const onMessage = async (event: WebViewMessageEvent) => {
    var msg;
    try {
      msg = JSON.parse(event.nativeEvent.data);
    } catch (e) {
      console.error(e);
    }

    console.log(msg.type);

    if (msg.type === 'HTML' && msg.content) {
      setIsVisible(false);
      props.changeShowProgress(true);
      const progress = index.current / jobs.current.length;
      props.onProgress(progress);
      let res;
      try {
        res = await runTasks(jobs.current[index.current], msg.content);
      } catch (e) {
        res = jobs.current[index.current];
        console.error(e);
        console.info('error in ', jobs.current[index.current].name);
      }

      jobs.current[index.current] = res;

      // results.current = results.current.concat({res});
      loadNext();
    } else if (msg.type === 'LOGIN_NEEDED') {
      console.info('login needed');
      setRunnable({
        pageURL: props.accountDetail.loginURL,
        // injectCode: props.accountDetail.loginFunc,
        injectCode: props.accountDetail.loginFunc,
      });
      // console.log(props.accountDetail.loginFunc);
      //make the login page visible if it requires login.
      props.changeShowProgress(false);
      setIsVisible(true);
    } else if (msg.type === 'LOGIN_SUCCESS') {
      console.debug('creds: ', msg.content);
      loadFirstJob();
    } else {
      //DEBUG
      console.log('debug', msg.content);
    }
  };

  const themedStyles = StyleService.create({
    root: {
      display: isVisible ? 'flex' : 'none',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingTop: 100,
    },
    container: {
      width: Dimensions.get('window').width - 20,
      height: Dimensions.get('window').height - 20,
      marginTop: 20,
    },
  });

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.root}>
      <WebView
        ref={ref}
        // accessibilityTraits={'adjustable'}
        style={styles.container}
        autoManageStatusBarEnabled={true}
        //    contentInset={{ top: 5, left: 5, bottom: 5, right: 5 }}
        source={{
          uri: runnable.pageURL,
        }}
        onMessage={onMessage}
        // incognito={true}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        injectedJavaScript={runnable.injectCode}
        // renderLoading={<ActivityIndicator />}
        // injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    </View>
  );
};

export default React.forwardRef(Scanner);
