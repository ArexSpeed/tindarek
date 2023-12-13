import React from "react";
import { Link } from "react-router-dom";

export interface Chat {
  chatId: string;
  users: User[];
  messages: Message[];
}

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  userImageSrc: string;
}

export interface Message {
  message: string;
  userId: string;
  userImageSrc: string;
  timestamp: string;
}

type Props = {
  chat: Chat;
};

export const ChatListBox = ({ chat }: Props) => {
  const userId = "42352346356";
  const secondUser = chat.users.find((user) => user.userId !== userId);

  console.log(secondUser);
  return (
    <Link
      to={`/chat/${chat.chatId}`}
      className="flex items-center gap-4 p-2 border-b border-pink-100"
    >
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={secondUser?.userImageSrc}
        alt=""
      />
      <div className="font-medium text-black">
        <div>
          {secondUser?.firstName} {secondUser?.lastName}
        </div>
        <div className="text-sm text-gray-500">
          {chat.messages[chat.messages.length - 1].message}
        </div>
      </div>
    </Link>
  );
};
