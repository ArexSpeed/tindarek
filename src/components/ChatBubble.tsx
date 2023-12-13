import React from "react";

type Props = {
  ownMsg: boolean;
  message: string;
  imageSrc: string;
};

export const ChatBubble = ({ ownMsg, message, imageSrc }: Props) => {
  console.log(imageSrc);
  return ownMsg ? (
    <div className="flex flex-row-reverse items-end gap-2">
      <img
        className="object-cover w-8 h-8 rounded-full"
        src={imageSrc}
        alt="i"
      />
      <div className="flex flex-col w-auto max-w-[320px] leading-1.5 p-2 border-gray-200 bg-red-200 rounded-l-xl rounded-tr-xl ">
        <p className="p-1 text-sm font-normal text-red-900">{message}</p>
      </div>
    </div>
  ) : (
    <div className="flex items-start gap-2">
      <img
        className="object-cover w-8 h-8 rounded-full"
        src={imageSrc}
        alt="i"
      />
      <div className="flex flex-col w-auto max-w-[320px] leading-1.5 p-2 border-gray-200 bg-pink-200 rounded-e-xl rounded-es-xl">
        <p className="p-1 text-sm font-normal text-pink-900">{message}</p>
      </div>
    </div>
  );
};
