import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatIcon from '../assets/support/support1.png'; // Update this to your image path
import { Box } from '@mui/material';

// Sample sound for response
const responseSound = new Audio('../assets/support/livechat-129007.mp3'); // Replace with actual sound path

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatButtonStyled = styled.button`
  background-color: ${(props) => (props.isOpen ? '#007A4B' : '#007A4A')};
  border: none;
  border-radius: ${(props) => (props.isOpen ? '100%' : '50%')};
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isOpen ? '#002850' : '#0056b3')};
    transform: scale(1.1); /* Slight scale effect on hover */
  }

  img {
    width: 50%;
    height: 50%;
  }
`;

const ChatPopup = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 375px;
  height: 500px;
  background-color: #e8e5e5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  flex-direction: column;
  opacity: 0; /* Initially hidden */
  transform: translateY(100%); /* Initially off-screen */

  animation: ${(props) => (props.visible ? 'slideIn 0.5s ease-out forwards' : 'slideOut 0.5s ease-in forwards')};

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #007a4b;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
`;

const ChatHeader = styled.div`
  background-color: #007a4a;
  color: #fff;
  padding: 10px;
  height: 11%;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #e8e5e5;
  height: 75%;
  .message {
    display: flex;
    margin-bottom: 10px;
    align-items: flex-start;
  }

  .support {
    justify-content: flex-start;
  }

  .user {
    justify-content: flex-end;
  }

  .messageBubble {
    max-width: 60%;
    padding: 10px;
    border-radius: 20px;
    font-size: 18px;
    margin: 5px;
  }

  .supportBubble {
    background-color: white;
    color: #333;
    align-self: flex-start;
  }

  .userBubble {
    background-color: #dbf9d0;
    color: #007a4a;
    align-self: flex-end;
  }

  .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  .time {
    font-size: 12px;
    color: #aaa;
    margin-top: 5px;
  }

  /* Loading animation */
  .loading {
    width: 20px;
    height: 20px;
    border: 3px solid #ddd;
    border-top: 3px solid #007a4b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ChatFooter = styled.div`
  padding: 10px;
  border-top: 0px solid #ddd;
  display: flex;
  gap: 5px;
  background-color: #e8e5e5;
  height: 11%;

  input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
  }

  button {
    background-color: #007a4a;
    color: #e8e5e5;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  input[type="file"] {
    display: none; /* Hide the file input */
  }

  label {
    background-color: #007a4a;
    color: #fff;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    color: black;
  }
`;

const getCairoTime = () => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Africa/Cairo',
  };
  return new Date().toLocaleString('en-GB', options); // Formats as HH:mm:ss
};

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'support', text: 'مرحبا! كيف يمكنني مساعدتك اليوم؟', time: getCairoTime() },
    { sender: 'user', text: 'مرحبا، أحتاج مساعدة بشأن طلباتي.', time: getCairoTime() },
    { sender: 'support', text: 'بالطبع، ما هي المشكلة التي تواجهها؟', time: getCairoTime() },
  ]);
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [image, setImage] = useState(null); // For storing image to send

  const messagesEndRef = useRef(null); // Reference to the last message

  // Ensure the audio is loaded before playing
  const playResponseSound = () => {
    responseSound.load(); // Load the sound
    responseSound.play(); // Play after loading
  };

  const handleSendMessage = () => {
    const newMessage = { sender: 'user', text: 'أحتاج المساعدة في تعديل الطلب.', time: getCairoTime() };
    setMessages([...messages, newMessage]);

    // Simulate support reply and play sound
    setTimeout(() => {
      const supportReply = { sender: 'support', text: 'تم تعديل طلبك بنجاح.', time: getCairoTime() };
      setMessages((prevMessages) => [...prevMessages, supportReply]);
      playResponseSound(); // Play sound on reply
    }, 2000);
  };

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      setImage(URL.createObjectURL(file)); // Temporary URL for the image
      setTimeout(() => {
        // Simulate uploading
        setIsLoading(false);
        const newMessage = { sender: 'user', text: 'تم إرسال صورة.', time: getCairoTime(), image: image };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }, 3000); // Simulate upload time
    }
  };

  // Scroll to the last message when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ChatContainer>
      <ChatButtonStyled isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={ChatIcon} alt="Chat Icon" />
      </ChatButtonStyled>
      <ChatPopup visible={isOpen}>
        <ChatHeader>
          <span>دعم فني</span>
          <CloseButton onClick={() => setIsOpen(false)}>&#10005;</CloseButton>
        </ChatHeader>
        <ChatBody>
          {messages.map((message, index) => (
            <div className={`message ${message.sender}`} key={index}>
              {message.image && <img src={message.image} alt="uploaded" style={{ width: '100px', height: '100px' }} />}
              <div className={`messageBubble ${message.sender === 'support' ? 'supportBubble' : 'userBubble'}`}>
                {message.text}
                <div className="time">{message.time}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message user">
              <div className="loading"></div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </ChatBody>
        <ChatFooter>
          <input type="text" placeholder="اكتب رسالتك..." />
          <label htmlFor="file-upload">📷</label>
          <input type="file" id="file-upload" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleSendMessage}>إرسال</button>
        </ChatFooter>
      </ChatPopup>
    </ChatContainer>
  );
};

export default ChatButton;
