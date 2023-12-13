import { Layout } from "../components/Layout";
import { ChatList } from "../components/ChatList";
import { TopBar } from "../components/TopBar";

const Chat = () => {
  return (
    <Layout>
      <TopBar title="Chats" />
      <ChatList />
    </Layout>
  );
};

export default Chat;
