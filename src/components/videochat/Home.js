import { useEffect } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";
import Options from "./components/options/Options";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";
const SmartChat = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);

  return (
    <VideoState>
      <div style={{ height: "100%", width: "100%", paddingTop: 50 }}>
        <Video />
        <Options />
        <Footer />
      </div>
    </VideoState>
  );
};

export default SmartChat;
