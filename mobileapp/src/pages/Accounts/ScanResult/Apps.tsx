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

import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    // marginVertical: 50,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  imageContainer: {
    flex: 2,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    // resizeMode: 'contain',
  },

  connectedAccCard: {
    flex: 1,
    padding: 10,
  },
  tinyBox: {
    flex: 1,
    flexDirection: 'column',
    minHeight: 120,
    minWidth: 100,
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  headerText: {
    flex: 2,
    marginHorizontal: 15,
    fontSize: 19,
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  appLogo: {
    flex: 2,
    width: 50,
    height: 50,
  },
  tinyText: {
    flex: 1,
  },
});

type accountProps = {
  navigation: any;
};

export default function Apps(props: any) {
  const styles = useStyleSheet(themedStyles);

  const { thirdPartyApps } = props.result;

  return (
    <View>
      <View style={styles.connectedAccCard}>
        <Text category="s1" style={styles.headerText}>
          {thirdPartyApps?.length} 3rd party apps have access to your data{' '}
        </Text>

        {thirdPartyApps?.map((d: any, i: number) => (
          <View style={styles.tinyBox} key={i}>
            <Pressable>
              <Image
                style={styles.appLogo}
                source={{
                  uri: d.imgURL,
                }}
              />

              <Text category="s1" style={styles.tinyText}>
                {d.name}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
