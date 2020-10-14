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

import { StyleService, useStyleSheet, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import FirebotSpider from '../../assets/icons/firebot-spider';

type accountSummary = {
  title: string;
  subtitle: string;
};

export default (props: accountSummary): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.summaryCard}>
      <Text style={styles.title} category="h4">
        {props.title}
      </Text>
      <Text style={styles.subtitle} category="s1">
        {props.subtitle}
      </Text>
      <FirebotSpider style={styles.firebot} />
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },

  title: {
    color: 'white',
  },
  subtitle: {
    color: 'white',
  },
  summaryCard: {
    // marginVertical: -150,
    marginHorizontal: 20,
    height: 160,
    padding: 24,
    borderRadius: 24,
    backgroundColor: 'color-primary-default',
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
  },
  firebot: {
    height: 70,
    width: 70,
    marginVertical: -12,
    //  marginHorizontal: -100,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  },
});
