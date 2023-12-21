import { useState, useEffect } from "react";
import { selectedMyUserData } from "../context/slices/userSlice";
import { useAppSelector } from "../context/store";
import { ChatListBox } from "./ChatListBox";
import { getUserChats } from "../services/chats";

type ChatUsers = {
  userId: string;
};

type Chats = {
  id: string;
  users: ChatUsers[];
};

export const ChatList = () => {
  const [chats, setChats] = useState<Chats[]>([]);
  const myUser = useAppSelector(selectedMyUserData);

  useEffect(() => {
    async function fetchChats() {
      const data = await getUserChats(myUser.user.id);
      setChats(data);
    }
    fetchChats();
  }, []);

  return (
    <div className="flex flex-col w-full gap-2 p-4 pb-16">
      {chats.map((chat) => (
        <ChatListBox key={chat.id} chat={chat} />
      ))}
    </div>
  );
};
