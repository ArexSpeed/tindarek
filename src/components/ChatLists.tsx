import { useState, useEffect } from "react";
import { selectedMyUserData } from "../context/slices/userSlice";
import { useAppSelector } from "../context/store";
import { ChatListBox } from "./ChatListBox";
import { getChats } from "../services/chats";
import { useUser } from "../services/users";

type ChatUsers = {
  userId: string;
};

type Chats = {
  id: string;
  users: ChatUsers[];
};

export const ChatLists = () => {
  const [chats, setChats] = useState<Chats[]>([]);
  const myUser = useAppSelector(selectedMyUserData);
  const { user } = useUser();

  useEffect(() => {
    async function fetchChats() {
      if (myUser.user.nickname === user.name) {
        const data = await getChats();
        setChats(data);
      }
    }
    fetchChats();
  }, [myUser.user.nickname, user.name]);

  return (
    <div className="flex flex-col w-full gap-2 p-4 pb-16">
      {chats.map((chat) => (
        <ChatListBox key={chat.id} chat={chat} />
      ))}
    </div>
  );
};
