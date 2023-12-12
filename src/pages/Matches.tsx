import React from "react";
import { Layout } from "../components/Layout";
import { useAppSelector } from "../context/store";
import { selectedMatchUsers } from "../context/slices/matchSlice";
import { MatchCard } from "../components/MatchCard";
import { MatchTop } from "../components/MatchTop";

const Matches = () => {
  const matches = useAppSelector(selectedMatchUsers);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-2">
        <MatchTop />
        <div className="grid items-start justify-start w-full h-auto grid-cols-2 gap-2">
          {matches.map((user) => (
            <MatchCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Matches;
