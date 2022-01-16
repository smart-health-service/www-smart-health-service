import React from "react";
import ChatBot from "./components/chatbot/ChantBotmain";
import Routers from "./Routes/Routers";
const App = () => {
  return (
    <div>
      <Routers />
      <ChatBot />
    </div>
  );
};

export default App;
