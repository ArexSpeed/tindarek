import { Layout } from "../components/Layout";
import { ChatList } from "../components/ChatList";
import { TopBar } from "../components/TopBar";
import { useAppSelector } from "../context/store";
import { useNavigate } from "react-router-dom";
import { selectedMyUserData } from "../context/slices/userSlice";
import { useEffect } from "react";

const Chat = () => {
  const myUser = useAppSelector(selectedMyUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!myUser.user.id) {
      navigate("/");
    }
  }, []);

  return (
    <Layout>
      <TopBar title="Chats" />
      <ChatList />
    </Layout>
  );
};

export default Chat;
