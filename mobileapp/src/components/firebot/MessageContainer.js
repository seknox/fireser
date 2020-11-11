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

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Bubble, Message, MessageText, SystemMessage } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    // containerStyle={{ left: { borderWidth: 3, borderColor: 'red' }, right: {} }}
    // imageStyle={{ left: { borderWidth: 3, borderColor: 'blue' }, right: {} }}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    // containerStyle={{
    //   left: { borderWidth: 3, borderColor: '#0ce981', borderRadius: 16, backgroundColor: 'white' },
    //   right: { borderWidth: 3, borderColor: '#0c6ae9', borderRadius: 16, backgroundColor: 'white' },
    // }}
    wrapperStyle={{
      left: { borderWidth: 3, borderColor: '#0ce981', backgroundColor: 'white', borderRadius: 16 },
      right: { borderWidth: 3, borderColor: '#0c6ae9', backgroundColor: 'white', borderRadius: 16 },
    }}
    bottomContainerStyle={
      {
        // left: { borderColor: 'white' },
        // right: { borderColor: 'white' },
      }
    }
    tickStyle={{}}
    usernameStyle={{ color: 'tomato', fontWeight: '100' }}
    containerToNextStyle={{
      left: { borderColor: 'navy', borderWidth: 4 },
      right: {},
    }}
    containerToPreviousStyle={{
      left: { borderColor: 'mediumorchid', borderWidth: 4 },
      right: {},
    }}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    containerStyle={{ backgroundColor: 'white' }}
    wrapperStyle={{ backgroundColor: 'white' }}
    // textStyle={{ color: 'crimson', fontWeight: '900' }}
  />
);

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{ left: { backgroundColor: 'white' }, right: { backgroundColor: 'white' } }}
    wrapperStyle={{ backgroundColor: 'white' }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: '#0ce981' },
      right: { backgroundColor: '#0c6ae9' },
    }}
    textStyle={{
      left: { color: 'black' },
      right: { color: 'white' },
    }}
    linkStyle={{
      left: { color: 'green' },
      right: { color: 'green' },
    }}
    customTextStyle={{ fontSize: 18, lineHeight: 24 }}
  />
);

export const renderCustomView = ({ user }) => (
  <View style={{ minHeight: 20, alignItems: 'center' }}>
    <Text>From CustomView</Text>
  </View>
);
