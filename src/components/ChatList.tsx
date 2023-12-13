import chats from "../data/chats.json";
import { ChatListBox } from "./ChatListBox";

export const ChatList = () => {
  const userId = "42352346356";
  const userChats = chats.filter((chat) =>
    chat.users.find((user) => user.userId === userId)
  );

  return (
    <div className="flex flex-col w-full gap-2 p-4 pb-16">
      {userChats.map((chat) => (
        <ChatListBox key={chat.chatId} chat={chat} />
      ))}
    </div>
  );
};
