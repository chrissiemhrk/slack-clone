import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatInput from "../../components/ChatInput/ChatInput";
import Message from "../../components/Message/Message";
import db from "../../firebase";
import Layout from "../../Layout/Layout";
import "./Chat.css";
function Chat() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState([]);
  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannelDetails(snapshot.data());
        });
    }
    db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setChannelMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [channelId]);

  return (
    <Layout>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__headerLeft">
            <h4 className="chat__channelName">
              <strong>#{channelDetails?.name}</strong>
              <StarBorderOutlined />
            </h4>
          </div>
          <div className="chat__headerRight">
            <p>
              <InfoOutlined /> Details
            </p>
          </div>
        </div>
        <div className="chat__messages">
          {channelMessages.map(({ message, user, userImage, timestamp }) => (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          ))}
        </div>
        <div className="chat__input">
          <ChatInput channelName={channelDetails?.name} channelId={channelId} />
        </div>
      </div>
    </Layout>
  );
}

export default Chat;
