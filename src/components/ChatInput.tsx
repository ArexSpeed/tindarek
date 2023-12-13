import React from "react";
import { SendIcon } from "./Icons";

export const ChatInput = () => {
  return (
    <div className="flex flex-row items-center w-full h-16 px-2 bg-white">
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full h-10 pl-4 text-black bg-red-100 border rounded-xl focus:outline-none focus:border-pink-300"
          />
          <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="pr-2 ml-4">
        <button className="flex items-center justify-center bg-transparent outline-none">
          <SendIcon className="w-6 h-6 text-pink-300" />
        </button>
      </div>
    </div>
  );
};
