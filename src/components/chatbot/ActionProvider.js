// in config.js
import axios from "axios";
import { createChatBotMessage } from "react-chatbot-kit";
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    // this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleResponse(messages) {
    const message = createChatBotMessage(messages);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // handleResponse = (message) => async (dispatch) => {
  //   console.log(message, "----------------->");
  //   try {
  //     const res = await axios.get(`http://localhost:5000/`, { message });
  //     console.log(res);
  //     this.setState((prev) => ({
  //       ...prev,
  //       messages: [...prev.messages, message],
  //     }));
  //   } catch (error) {}
  // };
}

export default ActionProvider;
