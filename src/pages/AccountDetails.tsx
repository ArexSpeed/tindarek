import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HeartIcon } from "../components/Icons";
import { TopBar } from "../components/TopBar";
import { getUserDataById } from "../services/users";
import { useAppSelector } from "../context/store";
import { selectedMyUserData } from "../context/slices/userSlice";
import { addMatchToDb, isMatchExist } from "../services/matches";

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

const AccountDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const myUser = useAppSelector(selectedMyUserData);

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
      <TopBar title={user.nickname} />
      <div className="flex flex-col items-start justify-start w-full h-full mb-16">
        <div className="relative">
          <img src={user?.imageSrc} className="w-full" />
          <div className="absolute flex items-center justify-center w-16 h-16 bg-red-500 rounded-full right-2 -bottom-6">
            <button
              onClick={addNewMatch}
              className="w-16 h-16 rounded-full button animate"
            >
              <HeartIcon className="w-10 h-10 text-white" />
            </button>
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
