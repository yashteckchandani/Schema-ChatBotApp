import React from 'react';
import logo from '../assets/logo1.png';
import userIcon from '../assets/user-icon.png';
import './ChatItem.css';
import '../App.css';

const ChatItem = ({ message }) => {
  return (
    <div className={message.isBot ? "chat bot" : "chat"}>
    <img src={message.isBot ? logo : userIcon} alt="" className="chatImg" />
    {message.isBot ? (
      // If the message is from the bot (i.e., code), use pre for formatting
      <pre className="chattextpre">{message.text}</pre>
    ) : (
      // Otherwise, just display the text normally
      <p className="chattext">{message.text}</p>
    )}
  </div>
  
  );
};

export default ChatItem;
