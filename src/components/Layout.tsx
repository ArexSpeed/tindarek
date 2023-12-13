import React from "react";
import { Navigation } from "./Navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="w-full h-full min-h-screen max-w-[640px] flex flex-col justify-start items-center bg-white text-black overflow-auto">
        {children}
        <Navigation />
      </div>
    </div>
  );
};
