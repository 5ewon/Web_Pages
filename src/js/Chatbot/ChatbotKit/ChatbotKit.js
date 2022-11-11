import React from "react";
import Chatbot from "react-chatbot-kit";
// import 'react-chatbot-kit/build/main.css';
import './ChatbotKit.scss';

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { createClientMessage } from 'react-chatbot-kit';

const message = createClientMessage('Hello world!');
const ChatbotKit = () => {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotKit;