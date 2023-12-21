import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserDataById } from "../services/users";
import { useAppSelector } from "../context/store";
import { selectedMyUserData } from "../context/slices/userSlice";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

type ChatUsers = {
  userId: string;
};

type Chats = {
  id: string;
  users: ChatUsers[];
};

type Props = {
  chat: Chats;
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

export const ChatListBox = ({ chat }: Props) => {
  const myUser = useAppSelector(selectedMyUserData);
  const [userData, setUserData] = useState<User>();
  const secondUser = chat.users.find((user) => user.userId !== myUser.user.id);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchUserData() {
      //console.log("secondUser", secondUser);
      if (secondUser?.userId) {
        const data = await getUserDataById(secondUser.userId);
        //console.log("fetchUserData", data);
        setUserData(data as User);
      }
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    const roomRef = doc(db, "chats", chat.id);
    const messagesRef = collection(roomRef, "messages");
    const orderedMessagesQuery = query(
      messagesRef,
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(orderedMessagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()) as Message[]);
    });

    return () => {
      unsubscribe();
    };
  }, [chat]);

  return (
    <Link
      to={`/chat/${chat.id}`}
      className="flex items-center gap-4 p-2 border-b border-pink-100"
    >
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={userData?.imageSrc}
        alt=""
      />
      <div className="font-medium text-black">
        <div>
          {userData?.firstName} {userData?.lastName}
        </div>
        <div className="text-sm text-gray-500">{messages[0]?.message}</div>
      </div>
    </Link>
  );
};
