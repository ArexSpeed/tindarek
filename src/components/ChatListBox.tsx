import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserDataById } from "../services/users";
import { useAppSelector } from "../context/store";
import { selectedMyUserData } from "../context/slices/userSlice";

// export interface Chat {
//   chatId: string;
//   users: User[];
//   messages: Message[];
// }

// export interface User {
//   userId: string;
//   firstName: string;
//   lastName: string;
//   userImageSrc: string;
// }

// export interface Message {
//   message: string;
//   userId: string;
//   userImageSrc: string;
//   timestamp: string;
// }

// type Props = {
//   chat: Chat;
// };

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

export const ChatListBox = ({ chat }: Props) => {
  const myUser = useAppSelector(selectedMyUserData);
  const [userData, setUserData] = useState<User>();
  const secondUser = chat.users.find((user) => user.userId !== myUser.user.id);

  useEffect(() => {
    async function fetchUserData() {
      console.log("secondUser", secondUser);
      if (secondUser?.userId) {
        const data = await getUserDataById(secondUser.userId);
        console.log("fetchUserData", data);
        setUserData(data as User);
      }
    }
    fetchUserData();
  }, []);

  console.log(secondUser);
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
        <div className="text-sm text-gray-500">
          {/* {chat.messages[chat.messages.length - 1].message} */}
        </div>
      </div>
    </Link>
  );
};
