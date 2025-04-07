import React from 'react';
import ChatItem from './ChatItem';
import { useEffect,useRef } from 'react';

const ChatList = ({ messages }) => {
    const msgEnd = useRef(null);
    useEffect(() => {
      msgEnd.current.scrollIntoView();
    }, [messages]);
  return (
    <div className="chats">
      {messages.map((message, index) => (
        <ChatItem key={index} message={message} />
      ))}
      <div ref={msgEnd} />
    </div>
  );
};

export default ChatList;
