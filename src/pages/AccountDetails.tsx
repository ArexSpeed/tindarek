import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import users from "../data/users.json";
import { HeartIcon } from "../components/Icons";
import { TopBar } from "../components/TopBar";

const AccountDetails = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id === id);
  if (!user) {
    return <Layout>There is no user with this account</Layout>;
  }
  const age = new Date().getFullYear() - +user.dateOfBirth.slice(6, 12);
  return (
    <Layout>
      <TopBar title={user.nickname} />
      <div className="flex flex-col items-start justify-start w-full h-full mb-16">
        <div className="relative">
          <img src={user?.imageSrc} className="w-full" />
          <button className="absolute flex items-center justify-center bg-red-500 rounded-full right-2 -bottom-4 w-14 h-14">
            <HeartIcon className="w-10 h-10 text-white" />
          </button>
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
