import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import Layout from "../../Layout/Layout";
import "./Chat.css";
function Chat() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannelDetails(snapshot.data());
        });
    }
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
      </div>
    </Layout>
  );
}

export default Chat;
