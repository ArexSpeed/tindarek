import React from "react";
import { HeartIcon, UserCircleIcon } from "./Icons";

export const CardActions = () => {
  return (
    <section className="flex flex-row items-center w-full pt-8 justify-evenly">
      <button className="flex items-center justify-center bg-red-500 rounded-full w-14 h-14">
        <HeartIcon className="w-10 h-10 text-white" />
      </button>
      <button className="flex items-center justify-center bg-red-500 rounded-full w-14 h-14">
        <HeartIcon className="w-10 h-10 text-white" />
      </button>
      <button className="flex items-center justify-center bg-red-500 rounded-full w-14 h-14">
        <UserCircleIcon className="w-10 h-10 text-white" />
      </button>
    </section>
  );
};
