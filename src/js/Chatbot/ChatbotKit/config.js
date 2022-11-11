import { createChatBotMessage } from 'react-chatbot-kit';
import { redirect } from 'react-router-dom';

const botName = 'Proteen';

const config = {
  initialMessages: [
    createChatBotMessage(`프로틴에 오신 것을 환영합니다!`),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#F4F3F3',
      color:'#ccc',
    },
    chatButton: {
      backgroundColor: '#7ED2FF',
    },
  },
};

export default config;