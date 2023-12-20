import { ChevronLeftIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

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

type Props = {
  user: User | undefined;
};

export const ChatTopBar = ({ user }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-start w-full gap-2 p-2 bg-white">
      <button onClick={goBack} className="bg-transparent outline-none">
        <ChevronLeftIcon className="w-6 h-6 text-red-300" />
      </button>
      <div className="flex items-center gap-4 p-2">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={user?.imageSrc}
          alt=""
        />
        <div className="font-medium text-black">
          <span className="text-lg">
            {user?.firstName} {user?.lastName}
          </span>
        </div>
      </div>
    </div>
  );
};
