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
import {Fixer} from "../../webviews/fixer";

export default () => {
  const [data, setData] = React.useState<Job[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [fixURL, setFixURL] = React.useState<string | null>(null);


  const fixIssue=(pageURL:string)=>{
      setFixURL(pageURL)
      setVisible(true)
  }

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
                {task.expectedValue == task.gotValue ? null : (
                  <Button onPress={()=>{fixIssue(task.fixURL)}}>Fix</Button>
                )}
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
          jobs={[GoogleActivityHistory, GoogleSecurityStatus]}
          setData={setData}
        />

        <Fixer
            pageURL={fixURL}
            onDone={null}
            isVisible={visible}
        />

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
