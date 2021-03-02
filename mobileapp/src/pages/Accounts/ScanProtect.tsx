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

import { Button, Card, Divider, Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import Selectors from '../../selectors';
import { Job, Task } from '../../types/types';
import { Fixer } from '../../webviews/fixer';
import { Runner } from '../../webviews/runner';

const supportedAccounts = [
  'google',
  'gmail',
  'youtube',
  'maps',
  'chrome',
  'hotmail',
  'linkdin',
  'twitter',
  'facebook',
  'messenger',
  'instagram',
  'suggest',
];

type accountProps = {
  navigation: any;
};

export const ScanAndProtect = (props: any) => {
  const [data, setData] = React.useState<Job[]>([]);
  const [isFixerVisible, setFixerVisible] = React.useState<boolean>(false);
  // const [fixURL, setFixURL] = React.useState<string | null>(null);
  // const [fixFunc, setFixFunc] = React.useState<string | null>(null);
  const [fixable, setFixable] = React.useState<{} | null>({ fixUrl: '', fixFunc: '', name: '' });

  const account = props.route.params.name;
  const jobs = Selectors[account] || [];
  const isLoggedIn = Selectors[account].isLoggedIn;
  const loginURL = Selectors[account].loginURL;

  const fixIssue = (pageURL: string, fixFunc: string, name: string) => {
    //console.log(pageURL);
    // setFixURL(pageURL);
    // setFixFunc(fixFunc);
    setFixable({ fixUrl: pageURL, fixFunc: fixFunc, name: name });
    setFixerVisible(true);
  };

  const onFixed = () => {
   // console.log(data)
    const jobtemp = data.map((a) => {
      a.tasks= a.tasks.map((b) => {
        if (b.name === fixable.name) {
          b.gotValue = b.expectedValue;
        }
        return b;
      });
      return a;
    });
    //console.debug(jobtemp)
    setData(jobtemp);
    setFixerVisible(false);
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {data.map((job: Job, index: number) => (
          <Card key={index}>
            <Text category="h1">{job?.name}</Text>
            {job?.tasks?.map((task: Task) => (
              <View key={task.name}>
                <Text category="h5">
                  {task.name}:{task.gotValue}
                </Text>
                <Text>Expected:{task.expectedValue}</Text>
                <Button
                  disabled={task.expectedValue === task.gotValue}
                  onPress={() => {
                    fixIssue(task.fixURL, task.fixFunc,task.name);
                  }}
                >
                  Fix
                </Button>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
              </View>
            ))}
          </Card>
        ))}
      </View>

      {/*<View>*/}
      <Runner jobs={jobs} setData={setData} isLoggedIn={isLoggedIn} />

      <Fixer
        pageURL={fixable.fixUrl}
        fixFunc={fixable.fixFunc}
        isVisible={isFixerVisible}
        onDone={onFixed}
      />
    </Layout>
  );
};
