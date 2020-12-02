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

import { StyleService, useStyleSheet, Button, Text, Card, Divider } from '@ui-kitten/components';
import React from 'react';
import { View, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';

import Selectors from '../../selectors';

import GoogleIcon from '../../assets/brands/google';
import GmailIcon from '../../assets/brands/gmail';
import YoutubeIcon from '../../assets/brands/youtube';
import LinkedinIcon from '../../assets/brands/linkdin';
import FacebookIcon from '../../assets/brands/facebook';
import { Job, Task } from '../../types/types';
import { Runner } from '../../webviews/runner';
import { Fixer } from '../../webviews/fixer';

const AccountsSelect = ({ navigation }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout navigation={navigation}>
        <View style={styles.margin}>
          <SummaryCard title="Protect Accounts" subtitle="Protect Accounts" />
          <AccountIcons navigation={navigation} />
        </View>
      </Layout>
    </SafeAreaView>
  );
};


export default AccountsSelect;


const AccountIcons = (props): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const { navigation } = props;

  function getIcon(name: string) {
    return name;
  }
  return (
    <View style={styles.brandgroup}>
      <Pressable
        onPress={() => navigation.navigate('Account', { name: 'Google' })}
        style={styles.touch}
      >
        <View style={styles.iconButton}>
          <GoogleIcon style={styles.icon} />
        </View>
      </Pressable>

      <View style={styles.iconButton}>
        <GmailIcon style={styles.icon} />
      </View>

      <View style={styles.iconButton}>
        <YoutubeIcon style={styles.icon} />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Account', { name: 'LinkedIn' })}
        style={styles.touch}
      >
        <View style={styles.iconButton}>
          <LinkedinIcon style={styles.icon} />
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Account', { name: 'Microsoft' })}
        style={styles.touch}
      >
        <View style={styles.iconButton}>
          <Text>M</Text>
          {/*<Linkdin style={styles.icon} />*/}
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Account', { name: 'Facebook' })}
        style={styles.touch}
      >
        <View style={styles.iconButton}>
          <FacebookIcon style={styles.icon} />
        </View>
      </Pressable>
    </View>
  );
};

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

export const Account = (props: any) => {
  const [data, setData] = React.useState<Job[]>([]);
  const [isFixerVisible, setFixerVisible] = React.useState<boolean>(false);
  const [fixURL, setFixURL] = React.useState<string | null>(null);
  const [fixFunc, setFixFunc] = React.useState<string | null>(null);
  const account = props.route.params.name;
  const jobs = Selectors[account];

  const fixIssue = (pageURL: string, fixFunc: string) => {
    setFixURL(pageURL);
    setFixFunc(fixFunc);
    setFixerVisible(true);
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {data.map((job: Job,index:number) => (
          <Card /*style={themedStyles.card}*/ key={index}>
            <Text category="h1">{job.name}</Text>
            {job?.tasks?.map((task: Task) => (
              <View key={task.name}>
                <Text category="h5">
                  {task.name}:{task.gotValue}
                </Text>
                <Text>Expected:{task.expectedValue}</Text>
                <Button
                  disabled={task.expectedValue === task.gotValue}
                  onPress={() => {
                    fixIssue(task.fixURL, task.fixFunc);
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
        <Runner
          jobs={jobs}
          setData={setData}
        />

        <Fixer pageURL={fixURL} fixFunc={fixFunc} isVisible={isFixerVisible} onDone={console.info} />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  margin: {
    marginVertical: -100,
    flex: 1,
  },
  brandgroup: {
    marginVertical: 50,
    marginHorizontal: 40,
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    flex: 1,
    padding: 1,
    minHeight: 50,
    minWidth: 50,
    maxHeight: 50,
    maxWidth: 50,
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    marginHorizontal: 4,
    marginVertical: 4,
    height: 40,
    width: 40,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
  },

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
