/**
 * Copyright (C) 2020 Seknox Pte Ltd.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';
import Selectors from '../../selectors';
import { Fixable, ScanResult } from '../../types/types';
import { Fixer } from '../../webviews/fixer';
import Scanner from '../../webviews/scanner';
import ScanResultComponent from './ScanResult';
import DetailedScanResult from './ScanResult/DetailedResult';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  progress: {
    margin: 10,
    marginVertical: 100,
    alignSelf: 'center',
  },
  button: {
    width: 300,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

type accountProps = {
  navigation: any;
};

export const Scan = (props: any) => {
  const [scanResult, setScanResult] = React.useState<ScanResult>({
    connectedApps: { signInApps: [], thirdPartyApps: [] },
    privacyIssues: [],
    privacyIssuesCount: 0,
    securityIssues: [],
    securityIssuesCount: 0,
    connectedDevices: [],
  });
  const [isFixerVisible, setFixerVisible] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number | null>(null);
  const [showProgress, changeShowProgress] = React.useState(false);
  const [fixable, setFixable] = React.useState<Fixable>({ fixUrl: '', fixFunc: '', name: '' });
  const scannerRef = React.useRef(null);
  const account = props.route.params.name;
  const accountDetail = Selectors[account] || [];

  const fixIssue = (pageURL: string, fixFunc: string, name: string) => {
    setFixable({ fixUrl: pageURL, fixFunc: fixFunc, name: name });
    setFixerVisible(true);
    //scannerRef.current?.injectJavaScript(fixFunc);
  };

  const onFixed = () => {
    const updatedSecurityIssues = scanResult.securityIssues.map((a) => {
      if (a.name === fixable?.name) {
        a.gotValue = a.expectedValue;
      }
      return a;
    });
    const updatedPrivacyIssues = scanResult.privacyIssues.map((a) => {
      if (a.name === fixable?.name) {
        a.gotValue = a.expectedValue;
      }
      return a;
    });

    let updatedScanResult = Object.assign({}, scanResult);
    updatedScanResult.privacyIssues = updatedPrivacyIssues;
    updatedScanResult.securityIssues = updatedSecurityIssues;

    setScanResult(updatedScanResult);
    setFixerVisible(false);
  };

  const styles = useStyleSheet(themedStyles);
  return (
    <Layout navigation={props.navigation}>
      <View style={styles.container}>
        {showProgress ? (
          <ProgressBar
            style={styles.progress}
            progress={progress}
            width={300}
            indeterminate={progress === null}
          />
        ) : null}

        {scanResult.connectedDevices.length === 0 ? null : (
          <View>
            <SummaryCard
              title="John Doe"
              subtitle="john.doe@earth.com "
              showProAcc={false}
              showLogo={true}
              logoName="GOOGLE"
              primaryColor={true}
            />
            <DetailedScanResult result={scanResult} fixIssue={fixIssue} />
            <Button
              appearance="outline"
              status="basic"
              style={styles.button}
              onPress={() => {
                scannerRef.current?.injectJavaScript(
                  'document.querySelector(\'a[href^="https://accounts.google.com/Logout"]\').click();true',
                );
              }}
            >
              Sign out from this account
            </Button>
          </View>
        )}
      </View>

      <Scanner
        setScanResult={setScanResult}
        accountDetail={accountDetail}
        ref={scannerRef}
        onProgress={setProgress}
        changeShowProgress={changeShowProgress}
      />

      <Fixer
        pageURL={fixable.fixUrl}
        fixFunc={fixable.fixFunc}
        isVisible={isFixerVisible}
        onFixed={onFixed}
      />
    </Layout>
  );
};
