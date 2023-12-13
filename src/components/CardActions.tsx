import { useEffect, useState } from "react";
import { CakeIcon, EyeSolidIcon, HeartIcon } from "./Icons";
import { useAppDispatch, useAppSelector } from "../context/store";
import { selectedCurrentUser } from "../context/slices/cardSlice";
import { Link } from "react-router-dom";
import users from "../data/users.json";
import { addMatch } from "../context/slices/matchSlice";

export const CardActions = () => {
  const [user, setUser] = useState(users[0]);
  const [animateCookie, setAnimateCookie] = useState(false);
  const selectedUserId = useAppSelector(selectedCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const findUser = users.find((user) => user.id === selectedUserId);
    if (findUser) setUser(findUser);
  }, [selectedUserId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCookie(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [animateCookie]);

  return (
    <section className="flex flex-row items-center w-full pt-8 justify-evenly">
      <button
        className="flex items-center justify-center transition-transform transform bg-transparent rounded-full outline-none w-14 h-14 active:scale-75"
        onClick={() => setAnimateCookie(true)}
      >
        <CakeIcon className="w-10 h-10 text-amber-700" />
      </button>
      <button
        className="button animate"
        onClick={() => dispatch(addMatch(user))}
      >
        <HeartIcon className="w-12 h-12 text-white" />
      </button>
      <Link
        to={`/account/${selectedUserId}`}
        className="flex items-center justify-center bg-transparent rounded-full w-14 h-14"
      >
        <EyeSolidIcon className="w-10 h-10 text-blue-400" />
      </Link>
      {animateCookie && (
        <div className="absolute left-0 z-30 top-20">
          <div className="text-[72px] font-bold text-red-500 -rotate-[30deg] animate-ping animation-delay-150">
            MNIAM!!
          </div>
          <div className="text-[72px] font-bold text-red-400 -rotate-[30deg] animate-ping">
            MNIAM!!
          </div>
        </div>
      )}
    </section>
  );
};
