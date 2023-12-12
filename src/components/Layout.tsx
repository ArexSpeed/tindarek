import React from "react";
import { Navigation } from "./Navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="w-full h-full max-w-[640px] flex flex-col justify-center items-center bg-white text-black">
        {children}
        <Navigation />
      </div>
    </div>
  );
};
