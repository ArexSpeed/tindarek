import React from "react";
import { Navigation } from "./Navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen bg-gray-100 justify-center items-center flex">
      <div className="w-full h-full max-w-[640px] flex flex-col justify-center items-center bg-white text-black p-4">
        {children}
        <Navigation />
      </div>
    </div>
  );
};
