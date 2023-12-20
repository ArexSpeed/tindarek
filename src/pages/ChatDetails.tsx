import { useState, useEffect } from "react";
import { ChatBubble } from "../components/ChatBubble";
import { ChatInput } from "../components/ChatInput";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import chats from "../data/chats.json";
import { ChatTopBar } from "../components/ChatTopBar";
import { getChatById } from "../services/chats";
import { useAppSelector } from "../context/store";
import { selectedMyUserData } from "../context/slices/userSlice";
import { getUserDataById } from "../services/users";

type ChatUsers = {
  userId: string;
};

type Chats = {
  id: string;
  users: ChatUsers[];
};

type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  birth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
};

const ChatDetails = () => {
  const { id } = useParams();
  const userId = "42352346356";
  const messages = chats.find((chat) => chat.chatId === id)?.messages;
  const myUser = useAppSelector(selectedMyUserData);
  const [chatInfo, setChatInfo] = useState<Chats>();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    async function fetchChat() {
      const chatId = id ? id : "";
      const data = await getChatById(chatId);
      console.log("chatInfo", data);
      setChatInfo(data as Chats);
    }

    fetchChat();
  }, [id]);

  useEffect(() => {
    const secondUser = chatInfo?.users?.find(
      (user) => user.userId !== myUser.user.id
    );
    async function fetchUserData() {
      if (secondUser?.userId) {
        const data = await getUserDataById(secondUser.userId);
        setUserData(data as User);
      }
    }
    fetchUserData();
  }, [chatInfo]);

  return (
    <Layout>
      <ChatTopBar user={userData} />
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
