import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Saptak Bose",
      userImage:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone2-b8b7b.appspot.com/o/images%2FCleverSap%20Profile.jpg?alt=media&token=d5741b81-46ee-4fb2-8db7-941e2c3e3907",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
