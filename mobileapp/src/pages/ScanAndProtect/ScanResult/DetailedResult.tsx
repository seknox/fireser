/**
 * Copyright (C) 2021 Seknox Pte Ltd.
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

import { Divider, StyleService, Text, useStyleSheet, Icon, Button } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View, StyleSheet, Image } from 'react-native';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallCard: {
    flex: 1,
    minHeight: 120,
    minWidth: 100,
    maxHeight: 120,
    marginHorizontal: 7,
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
  issueBold: {
    color: 'red',
    flex: 4,
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  title: {
    flex: 10,
    marginVertical: 5,
    paddingLeft: 3,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 15,
  },

  connectedAccBoldText: {
    color: 'gold',
    flex: 2,
    fontSize: 30,
    alignSelf: 'flex-start',
  },
  // /////////////
  issueCard: {
    flex: 1,
    // flexDirection: 'row',
    padding: 5,
    marginHorizontal: 20,
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
  issueTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  issueListContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  issueList: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    marginTop: 7,
    marginHorizontal: 10,
  },
  deviceLogo: {
    margin: 5,
    width: 30,
    height: 30,
  },
});

type accountProps = {
  navigation: any;
};

const iconstyles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    color: 'blue',
    alignSelf: 'center',
  },
});

const iconColor = 'red';

const IssueIcon = (props: any) => (
  <Icon {...props} style={iconstyles.icon} fill={iconColor} name="alert-circle-outline" />
);

export default function ScanResultSummary(props: any) {
  const styles = useStyleSheet(themedStyles);

  const {
    connectedDevices,
    connectedApps,
    privacyIssuesCount,
    securityIssuesCount,
    securityIssues,
    privacyIssues,
  } = props.result;

  // formatNumber adds 0 to single digit number
  function formatNumber(num: number) {
    if (num?.toString().length === 1) {
      return '0' + num.toString();
    } else {
      return num;
    }
  }

  function getDevices(dType: string, imgURL: string) {
    switch (dType) {
      case 'android':
        return imgURL;
      case 'Linux':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/linuxlaptop.png';
      case 'iphone':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/iphone-x-icon.png';
      case 'Mac':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/mac.png';
      case 'Windows':
        return 'https://storage.googleapis.com/fireser-app-public-assets/icons/devices/winlaptop.png';
      default:
        return 'https://www.gstatic.com/identity/boq/accountsettingssecuritycommon/images/sprites/devices_realistic_72-ef7d73f742f5343ba1bd3c1e6b13ffba.png';
    }
  }

  return (
    <View>
      <View style={styles.issueCard}>
        <View style={styles.issueTitle}>
          <Text style={styles.connectedAccBoldText} category="h1">
            {formatNumber(securityIssuesCount)}
          </Text>

          <View style={styles.title}>
            <Text category="h6">Security issues found</Text>
            <Divider />
          </View>
        </View>

        <View style={styles.issueListContainer}>
          {securityIssues.map((i: any, k: number) => (
            <View style={styles.issueList}>
              <IssueIcon />
              <Text category="s1" style={styles.text}>
                {i.name}
              </Text>
              <Button size="small" appearance="outline">
                View
              </Button>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.issueCard}>
        <View style={styles.issueTitle}>
          <Text style={styles.connectedAccBoldText} category="h1">
            {formatNumber(privacyIssuesCount)}
          </Text>

          <View style={styles.title}>
            <Text category="h6">Privacy issues found</Text>
            <Divider />
          </View>
        </View>

        <View style={styles.issueListContainer}>
          {privacyIssues.map((i: any, k: number) => (
            <View style={styles.issueList}>
              <IssueIcon />
              <Text category="s1" style={styles.text}>
                {i.name}
              </Text>
              <Button size="small" appearance="outline">
                View
              </Button>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.issueCard}>
        <View style={styles.issueTitle}>
          <Text style={styles.connectedAccBoldText} category="h1">
            {formatNumber(connectedDevices?.length)}
          </Text>

          <View style={styles.title}>
            <Text category="h6">Devices are connected to your account </Text>
            <Divider />
          </View>
        </View>

        <View style={styles.issueListContainer}>
          {connectedDevices.map((i: any, k: number) => (
            <View style={styles.issueList}>
              <Image
                style={styles.deviceLogo}
                source={{
                  uri: i.imgURL ? i.imgURL : getDevices(i.title, i.imgURL),
                }}
                // height={20}
                // width={20}
              />

              <Text category="s1" style={styles.text}>
                {i.title}
              </Text>
              <Button size="small" appearance="outline">
                View
              </Button>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.issueCard}>
        <View style={styles.issueTitle}>
          <Text style={styles.connectedAccBoldText} category="h1">
            {formatNumber(connectedApps?.thirdPartyApps?.length)}
          </Text>

          <View style={styles.title}>
            <Text category="h6">Third party apps have access to your data </Text>
            <Divider />
          </View>
        </View>

        <View style={styles.issueListContainer}>
          {connectedApps?.thirdPartyApps?.map((i: any, k: number) => (
            <View style={styles.issueList}>
              <Image
                style={styles.deviceLogo}
                source={{
                  uri: i.imgURL,
                }}
                // height={20}
                // width={20}
              />
              <Text category="s1" style={styles.text}>
                {i.name}
              </Text>
              <Button size="small" appearance="outline">
                View
              </Button>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.issueCard}>
        <View style={styles.issueTitle}>
          <Text style={styles.connectedAccBoldText} category="h1">
            {formatNumber(connectedApps?.signInApps?.length)}
          </Text>

          <View style={styles.title}>
            <Text category="h6">Apps use your google identity</Text>
            <Divider />
          </View>
        </View>

        <View style={styles.issueListContainer}>
          {connectedApps?.signInApps?.map((i: any, k: number) => (
            <View style={styles.issueList}>
              <Image
                style={styles.deviceLogo}
                source={{
                  uri: i.imgURL,
                }}
                // height={20}
                // width={20}
              />
              <Text category="s1" style={styles.text}>
                {i.name}
              </Text>
              <Button size="small" appearance="outline">
                View
              </Button>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
