import * as React from "react";
import Chatbot from "react-chatbot-kit";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { IconButton, makeStyles } from "@material-ui/core";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import "react-chatbot-kit/build/main.css";

const useStyles = makeStyles((theme) => ({
  chatBotRoot: {
    position: "absolute",
    background: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    bottom: 14,
    right: 14,
    "&>span": {
      "&>svg": {
        height: 40,
        width: 40,
      },
    },
  },
  chatBotContainer: {
    "&>div": {
      "&>div": {
        maxWidth: "90%",
      },
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ChatBot() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        className={classes.chatBotRoot}
        color="primary"
        variant="outlined"
        onClick={handleClickOpen}
      >
        <MarkUnreadChatAltIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className={classes.chatBotContainer}
      >
        {/* <DialogContent> */}
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        {/* </DialogContent> */}
      </Dialog>
    </div>
  );
}
