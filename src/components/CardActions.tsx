import React, { useEffect, useState } from "react";
import { CakeSolidIcon, EyeSolidIcon, HeartIcon } from "./Icons";
import { useAppDispatch, useAppSelector } from "../context/store";
import { selectedCurrentUser } from "../context/slices/cardSlice";
import { Link } from "react-router-dom";
import users from "../data/users.json";
import { addMatch } from "../context/slices/matchSlice";

export const CardActions = () => {
  const [user, setUser] = useState(users[0]);
  const selectedUserId = useAppSelector(selectedCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const findUser = users.find((user) => user.id === selectedUserId);
    if (findUser) setUser(findUser);
  }, [selectedUserId]);

  return (
    <section className="flex flex-row items-center w-full pt-8 justify-evenly">
      <button className="flex items-center justify-center bg-transparent rounded-full w-14 h-14">
        <CakeSolidIcon className="w-10 h-10 text-green-400" />
      </button>
      <button
        className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full"
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
    </section>
  );
};
