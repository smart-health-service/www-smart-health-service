// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm your Personal medical assitant`),
    createChatBotMessage(`how can i help you?`),
  ],
  botName: "Med-Bot (Beta)",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#9c27b0",
    },
    chatButton: {
      backgroundColor: "#ff9f00",
    },
  },
};

export default config;
