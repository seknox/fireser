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
import FireserLogo from '../../assets/icons/fireser'
import FirebotSpider from '../../assets/icons/firebot-spider';
import GoogleIcon from '../../assets/brands/google';

type cardProps = {
  title: string;
  subtitle: string;
  showFirebot: boolean;
  showLogo: boolean;
  logoName: string;
  primaryColor: boolean;
};

export default (props: cardProps): React.ReactElement => {

  const themedStyles = StyleService.create({
    root: {
      // marginVertical: -150,
      marginHorizontal: 20,
      height: 160,
      padding: 24,
      borderRadius: 24,
      backgroundColor: props.primaryColor? 'color-primary-default' : 'white',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    description: {
      flex: 2,
      padding: 1,
      marginHorizontal: 5,
      marginVertical: 10,
    },
    title: {
      color: props.primaryColor? 'white': 'color-primary-default',
    },
    subtitle: {
      color: props.primaryColor? 'white': 'color-primary-default',
    },

    fireser: {
      height: 70,
      width: 70,
      alignSelf: 'flex-start',
    },
    firebot: {
      display: props.showFirebot ? 'flex' : 'none',
      height: 70,
      width: 70,
      marginVertical: -12,
      //  marginHorizontal: -100,
      position: 'absolute',
      alignSelf: 'flex-end',
      bottom: 0,
    },
    iconWrapper: {
      flex: 1,
      padding: 1,
      minHeight: 100,
      minWidth: 100,
      maxHeight: 100,
      maxWidth: 100,
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
      justifyContent: 'center',
    },
    icon: {
      // marginHorizontal: 4,
      // marginVertical: 4,
      alignSelf: 'center',
      height: 55,
      width: 55,
    },
  });

  const styles = useStyleSheet(themedStyles);

  function returnIcon(icon: any) {
    switch(icon){
      case 'GOOGLE':
        return <GoogleIcon style={styles.icon} />;
      default: 
       return  <FireserLogo style={styles.fireser} />
    }
  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
      <View style={styles.iconWrapper}>
         {returnIcon(props.logoName)}
      </View>
      
      <View style={styles.description}>
      <Text style={styles.title} category="h4">
        {props.title}
      </Text>
      <Text style={styles.subtitle} category="s1">
        {props.subtitle}
      </Text>
      </View>
     
      
      </View>
      <FirebotSpider style={styles.firebot} />
    </View>
  );
};


