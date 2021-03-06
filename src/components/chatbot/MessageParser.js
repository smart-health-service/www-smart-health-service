import axios from "axios";

async function handleMessageAction(msg) {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/get?msg=${msg}`);
    if (response.data.reply) {
      let reply = response.data.reply;
      return reply;
    }
  } catch (err) {
    throw err;
  }
}

export default class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  async parse(message) {
    let reply = await handleMessageAction(message);
    this.actionProvider.handleResponse(reply);
  }
}
