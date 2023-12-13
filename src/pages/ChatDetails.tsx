import { ChatBubble } from "../components/ChatBubble";
import { ChatInput } from "../components/ChatInput";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import chats from "../data/chats.json";

const ChatDetails = () => {
  const { id } = useParams();
  const userId = "42352346356";
  const messages = chats.find((chat) => chat.chatId === id)?.messages;
  return (
    <Layout>
      <div className="flex flex-col w-full h-full p-2">
        <div className="flex flex-col gap-2 pb-32">
          {messages?.map((message, index) => (
            <ChatBubble
              key={index}
              ownMsg={message.userId === userId}
              message={message.message}
              imageSrc={message.userImageSrc}
            />
          ))}
        </div>
        <div className="fixed w-full bottom-16">
          <ChatInput />
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetails;
