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
import { Fixable, Result } from '../../types/types';
import { Fixer } from '../../webviews/fixer';
import Scanner from '../../webviews/scanner';
import ScanResult from './ScanResult';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },

  progress: {
    margin: 10,
    alignSelf: 'center',
  },
});

type accountProps = {
  navigation: any;
};

export const ScanAndProtect = (props: any) => {
  const [result, setResult] = React.useState<Result>({ connectedDevices: [] });
  const [isFixerVisible, setFixerVisible] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number | null>(null);
  const [fixable, setFixable] = React.useState<Fixable>({ fixUrl: '', fixFunc: '', name: '' });
  const scannerRef = React.useRef(null);
  const account = props.route.params.name;
  const jobs = Selectors[account] || [];

  const fixIssue = (pageURL: string, fixFunc: string, name: string) => {
    setFixable({ fixUrl: pageURL, fixFunc: fixFunc, name: name });
    setFixerVisible(true);
  };

  // const onFixed = () => {
  //   const jobtemp = data.map((a) => {
  //     a.tasks = a.tasks.map((b) => {
  //       if (b.name === fixable?.name) {
  //         b.gotValue = b.expectedValue;
  //       }
  //       return b;
  //     });
  //     return a;
  //   });
  //   setData(jobtemp);
  //   setFixerVisible(false);
  // };

  const styles = useStyleSheet(themedStyles);
  return (
    <Layout navigation={props.navigation}>
      <View style={styles.container}>
        <SummaryCard
          title="John Doe"
          subtitle="john.doe@earth.com "
          showFirebot={false}
          showLogo={true}
          logoName="GOOGLE"
          primaryColor={true}
        />
        <ProgressBar
          style={styles.progress}
          progress={progress}
          width={300}
          indeterminate={progress === null}
        />
        <View>
          <ScanResult result={result} />
        </View>

        <View>
          <Button
            onPress={() => {
              scannerRef.current?.injectJavaScript(
                'document.querySelector(\'a[href^="https://accounts.google.com/Logout"]\').click();true',
              );
            }}
          >
            Sign out from this account
          </Button>
        </View>
      </View>

      <Scanner jobs={jobs} onDone={setResult} ref={scannerRef} onProgress={setProgress} />

      <Fixer
        pageURL={fixable.fixUrl}
        fixFunc={fixable.fixFunc}
        isVisible={isFixerVisible}
        onDone={console.log}
      />
    </Layout>
  );
};
