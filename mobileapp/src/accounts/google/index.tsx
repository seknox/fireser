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
import {
  Button,
  Layout,
  Text,
  Card,
  Divider,
  ListItem,
} from '@ui-kitten/components';
import {Runner} from '../../webviews/runner';
import {StyleSheet, View} from 'react-native';

import GoogleActivityHistory from './GoogleActivityHistory';
import GoogleSecurityStatus from './GoogleSecurityStatus';
import {Job, Task} from '../../types/types';
import {Fixer} from '../../webviews/fixer';
import SecurityCheckup from './SecurityCheckup';
import RecentActivity from "./RecentActivity";

export default () => {
  const [data, setData] = React.useState<Job[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [fixURL, setFixURL] = React.useState<string | null>(null);
  const [fixFunc, setFixFunc] = React.useState<string | null>(null);

  const fixIssue = (pageURL: string,fixFunc: string) => {
    setFixURL(pageURL);
    setFixFunc(fixFunc);
    setVisible(true);
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        {data.map((job: Job) => (
          <Card style={styles.card} key={job.name}>
            <Text category="h1">{job.name}</Text>
            {job?.tasks?.map((task: Task) => (
              <View key={task.name}>
                <Text category="h5">
                  {task.name}:{task.gotValue}
                </Text>
                <Text>Expected:{task.expectedValue}</Text>
                <Button
                  disabled={task.expectedValue == task.gotValue}
                  onPress={() => {
                    fixIssue(task.fixURL,task.fixFunc);
                  }}>
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

      {/*<View style={{display: isLoggedIn ? 'none' : 'flex'}}>*/}
      <View>
        <Runner
          jobs={[GoogleActivityHistory, GoogleSecurityStatus, SecurityCheckup]}
          // jobs={[ SecurityCheckup]}
          setData={setData}
        />

        <Fixer pageURL={fixURL} fixFunc={fixFunc} isVisible={visible} onDone={console.info}/>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
