import React from "react";
import { useAppDispatch, useAppSelector } from "../context/store";
import {
  selectedMatchOption,
  toggleOption,
} from "../context/slices/matchSlice";

export const MatchTop = () => {
  const dispatch = useAppDispatch();
  const currentOption = useAppSelector(selectedMatchOption);
  return (
    <div className="flex flex-row items-center justify-center w-full text-gray-700 bg-pink-100 rounded-lg">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-center gap-1 m-1 p-1 font-medium rounded-md ${
          currentOption === "your" && "bg-pink-300 "
        }`}
        onClick={() => dispatch(toggleOption("your"))}
      >
        Your
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-center gap-1 m-1 p-1 font-medium rounded-md  ${
          currentOption === "new" && "bg-pink-300"
        }`}
        onClick={() => dispatch(toggleOption("new"))}
      >
        New
      </button>
    </div>
  );
};
