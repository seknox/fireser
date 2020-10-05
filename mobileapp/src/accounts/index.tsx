import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {Runner} from '../../utils/runner';
import {View} from 'react-native';

import GoogleActivityHistory from './google/GoogleActivityHistory';
import GoogleSecurityStatus from './google/GoogleSecurityStatus';
import {Job, Task} from '../types/types';

export default () => {
  const [data, setData] = React.useState<Job[]>([]);

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        {data.map((job: Job) => (
          <View>
            <Text category="h1">{job.name}</Text>
            {job?.tasks?.map((task: Task) => (
              <View>
                <Text category="h5">
                  {task.name}:{task.gotValue}
                </Text>
                <Text>Expected:{task.expectedValue}</Text>
                {task.expectedValue == task.gotValue ? null : (
                  <Button onPress={console.log}>Fix</Button>
                )}
              </View>
            ))}
          </View>
        ))}
      </View>

      {/*<View style={{display: isLoggedIn ? 'none' : 'flex'}}>*/}
      <View>
        <Runner
          jobs={[GoogleActivityHistory, GoogleSecurityStatus]}
          setData={setData}
        />
      </View>
    </Layout>
  );
};
