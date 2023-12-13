import { ChevronLeftIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

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
  chat?: Chat;
};

export const ChatTopBar = ({ chat }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const userId = "42352346356";
  const secondUser = chat?.users.find((user) => user.userId !== userId);
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-start w-full gap-2 p-2 bg-white">
      <button onClick={goBack} className="bg-transparent outline-none">
        <ChevronLeftIcon className="w-6 h-6 text-red-300" />
      </button>
      <div className="flex items-center gap-4 p-2">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={secondUser?.userImageSrc}
          alt=""
        />
        <div className="font-medium text-black">
          <span className="text-lg">
            {secondUser?.firstName} {secondUser?.lastName}
          </span>
        </div>
      </div>
    </div>
  );
};
