import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ChatIcon, HeartIcon } from "../components/Icons";
import { TopBar } from "../components/TopBar";
import { getUserDataById } from "../services/users";
import { useAppSelector } from "../context/store";
import { selectedMyUserData } from "../context/slices/userSlice";
import { addMatchToDb, isMatchExist } from "../services/matches";
import { createNewChatToDb, getUserChats } from "../services/chats";

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

type ChatUsers = {
  userId: string;
};

type Chats = {
  id: string;
  users: ChatUsers[];
};

const AccountDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const myUser = useAppSelector(selectedMyUserData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userID = id ? id : "";
      const data = await getUserDataById(userID);
      console.log("iddata", data);
      setUser(data as User);
    };

    fetchUserData();
  }, []);

  const addNewMatch = async () => {
    const followUserID = id ? id : "";
    if (followUserID === myUser.user.id) return;
    const checkMatch = await isMatchExist(followUserID, myUser.user.id);
    if (checkMatch) return;
    const payload = {
      userId: myUser.user.id,
      userName: `${myUser.user.firstName} ${myUser.user.lastName}`,
      userImage: myUser.user.imageSrc,
      userBirth: myUser.user.birth,
      followId: followUserID,
      followName: `${user?.firstName} ${user?.lastName}`,
      followImage: user?.imageSrc,
      followBirth: user?.birth,
    };
    addMatchToDb(payload);
  };

  const isChatExist = (chats: Chats[]) => {
    const findChat = chats.find((chat) =>
      chat.users.find((user) => user.userId === id)
    );
    return findChat;
  };

  const onChat = async () => {
    const followUserID = id ? id : "";
    if (followUserID === myUser.user.id) return;
    const chats = await getUserChats(myUser.user.id);
    const chatExist = isChatExist(chats);
    if (chatExist) {
      navigate(`/chat/${chatExist.id}`);
    } else {
      const payload = [
        {
          userId: myUser.user.id,
        },
        {
          userId: followUserID,
        },
      ];
      const newChatLink = await createNewChatToDb(payload);
      navigate(`/chat/${newChatLink}`);
    }
  };

  if (!user) {
    return (
      <Layout>
        <TopBar />
        There is no user with this account
      </Layout>
    );
  }
  const age = new Date().getFullYear() - +user.birth.slice(6, 12);
  return (
    <Layout>
      <TopBar />
      <div className="flex flex-col items-start justify-start w-full h-full mb-16">
        <div className="relative">
          <img src={user?.imageSrc} className="w-full" />
          <div className="absolute flex flex-row items-center justify-center gap-2 rounded-full right-2 -bottom-6">
            <div className="flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full">
              <button
                onClick={onChat}
                className="flex items-center justify-center w-16 h-16 rounded-full"
              >
                <ChatIcon className="w-10 h-10 text-white" />
              </button>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full">
              <button
                onClick={addNewMatch}
                className="w-16 h-16 rounded-full button animate"
              >
                <HeartIcon className="w-10 h-10 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-xl text-black">
            {user.firstName} {user.lastName}, {age}
          </p>
          <p className="text-base text-gray-700">
            {user.profession}, {user.location}
          </p>
          <span className="font-semibold">Info</span>
          <p className="text-gray-700">{user.shortDescription}</p>
          <span className="font-semibold">About</span>
          <p className="text-black">{user.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default AccountDetails;
