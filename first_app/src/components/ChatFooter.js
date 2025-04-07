import React from 'react';
import sendBtn from '../assets/send.svg';
import '../App.css';

const ChatFooter = ({ input, setInput, handleEnter, handleSend }) => {
  return (
    <div className="chatFooter">
      <div className="inp">
        <input 
          type="text" 
          placeholder='Send a Message ...' 
          value={input} 
          onKeyDown={handleEnter} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button className="send" onClick={handleSend}>
          <img src={sendBtn} alt="Send" className="sendImg" />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
