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

import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { renderActions, renderComposer, renderInputToolbar, renderSend } from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderMessage,
  renderMessageText,
  renderSystemMessage,
} from './MessageContainer';
import initialMessages from './messages';

const Chats = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      listViewProps={{
        style: {
          backgroundColor: 'white',
        },
      }}
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      // user={{
      //   _id: 2,
      //   name: 'Aaron',
      //   avatar:
      //     'https://storage.googleapis.com/seknox-website-static/branding/firebot-face-fire.png',
      // }}
      // alignTop
      alwaysShowSend
      scrollToBottom
      // showUserAvatar
      showAvatarForEveryMessage={false}
      renderAvatarOnTop
      renderUsernameOnMessage
      bottomOffset={26}
      onPressAvatar={console.log}
      renderInputToolbar={renderInputToolbar}
      renderActions={renderActions}
      renderComposer={renderComposer}
      renderSend={renderSend}
      renderAvatar={renderAvatar}
      renderBubble={renderBubble}
      renderSystemMessage={renderSystemMessage}
      renderMessage={renderMessage}
      renderMessageText={renderMessageText}
      // renderMessageImage
      // renderCustomView={renderCustomView}
      isCustomViewBottom
      //   messagesContainerStyle={{ backgroundColor: 'indigo' }}
      parsePatterns={(linkStyle) => [
        {
          pattern: /#(\w+)/,
          style: linkStyle,
          onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
      ]}
    />
  );
};

export default Chats;
