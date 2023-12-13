import React from "react";
import { ChevronLeftIcon, HandRaisedIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
};

export const TopBar = ({ title }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full p-4 bg-white">
      <button onClick={goBack} className="bg-transparent outline-none">
        <ChevronLeftIcon className="w-6 h-6 text-red-300" />
      </button>
      {title ? (
        <span className="text-xl">{title}</span>
      ) : (
        <span className="text-xl">Tindarek</span>
      )}
      <HandRaisedIcon className="w-6 h-6 text-red-300" />
    </div>
  );
};
