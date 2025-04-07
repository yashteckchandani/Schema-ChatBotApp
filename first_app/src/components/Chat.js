import React, { useEffect, useRef, useState } from 'react';
import ChatList from './ChatList';
import ChatFooter from './ChatFooter';
import axios from 'axios';
import '../App.css';
import { useLocation } from 'react-router-dom'; // Import useLocation to detect location changes

const Chat = () => {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const location = useLocation(); // Use this to detect location changes

  const [messages, setMessages] = useState([
    {
      text: "Hi, I am AI",
      isBot: true
    }
  ]);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('hasReloaded');
    
    if (!hasReloaded) {
      sessionStorage.setItem('hasReloaded', 'true');
      window.location.reload();  // Reload the page once on the first load
    }
  }, []);

  useEffect(() => {
    // Reset messages whenever the location changes to "/"
    if (location.pathname === '/') {
      setMessages([
        {
          text: "Hi, I am AI",
          isBot: true
        }
      ]);
    }
  }, [location]); 

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);



  const handleSend = async () => {
    if (input.trim() === "") return; // Prevent sending empty messages

    try {
      const text = input;
      setInput("");
      setMessages([...messages, { text: text, isBot: false }]); // Add user message
      const response = await axios.post('http://localhost:8080/api/chat', {
        prompt: text, // Send the value from the input field as 'prompt'
      });

      setMessages([...messages, { text: text, isBot: false }, { text: response.data, isBot: true }]); // Add bot response
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      await handleSend();
    }
  };

  return (
    <div className="main">
      <ChatList messages={messages} />
      <div ref={msgEnd} />
      <ChatFooter input={input} setInput={setInput} handleEnter={handleEnter} handleSend={handleSend} />
    </div>
  );
};

export default Chat;
