import { ChevronLeftIcon, HandRaisedIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../context/store";
import { logoutUser } from "../context/slices/userSlice";
import logo from "../assets/heartlogo.jpg";

type Props = {
  title?: string;
};

export const TopBar = ({ title }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBack = () => {
    navigate(-1);
  };
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full p-4 bg-white">
      <button onClick={goBack} className="bg-transparent outline-none">
        <ChevronLeftIcon className="w-6 h-6 text-red-300" />
      </button>
      {title ? (
        <span className="text-xl">{title}</span>
      ) : (
        <div className="flex flex-row items-center justify-center w-full gap-2">
          <img src={logo} alt="logo" className="h-[48px]" />
          <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Tindarek
          </p>
        </div>
      )}
      <button onClick={logout} className="bg-transparent outline-none">
        <HandRaisedIcon className="w-6 h-6 text-red-300" />
      </button>
    </div>
  );
};
