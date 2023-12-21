import { useState, useEffect, useRef } from "react";
import { ChatBubble } from "../components/ChatBubble";
import { ChatInput } from "../components/ChatInput";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import { ChatTopBar } from "../components/ChatTopBar";
import { getChatById } from "../services/chats";
import { useAppSelector } from "../context/store";
import { selectedMyUserData } from "../context/slices/userSlice";
import { getUserDataById } from "../services/users";
import {
  collection,
  query,
  doc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

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
type Message = {
  userId: string;
  message: string;
  userImage: string;
  timestamp: unknown;
};

const ChatDetails = () => {
  const { id } = useParams();
  const myUser = useAppSelector(selectedMyUserData);
  const [chatInfo, setChatInfo] = useState<Chats>();
  const [userData, setUserData] = useState<User>();
  const chatId = id ? id : "";
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchChat() {
      // const chatId = id ? id : "";
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

  useEffect(() => {
    const roomRef = doc(db, "chats", chatId);
    const messagesRef = collection(roomRef, "messages");
    const orderedMessagesQuery = query(
      messagesRef,
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(orderedMessagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()) as Message[]);
    });

    return () => {
      unsubscribe();
    };
  }, [chatId]);

  const messagesEndRef = useRef<HTMLDivElement>(null!);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <Layout>
      <ChatTopBar user={userData} />
      <div className="flex flex-col w-full h-full p-2">
        <div className="flex flex-col gap-2 pb-32">
          {messages?.map((message, index) => (
            <ChatBubble
              key={index}
              ownMsg={message.userId === myUser.user.id}
              message={message.message}
              imageSrc={message.userImage}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="fixed w-full bottom-16">
          <ChatInput chatId={chatId} />
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetails;
