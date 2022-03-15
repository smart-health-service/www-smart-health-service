import React from "react";
import ChatBot from "./components/chatbot/ChantBotmain";
import Routers from "./Routes/Routers";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <div>
      <Routers />
      <ChatBot />
    </div>
  );
};

export default App;
