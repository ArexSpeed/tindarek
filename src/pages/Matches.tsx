import { Layout } from "../components/Layout";
import { useAppSelector } from "../context/store";
import { selectedMatchOption } from "../context/slices/matchSlice";
import { MatchCard, MatchCardFollow } from "../components/MatchCard";
import { MatchTop } from "../components/MatchTop";
import { TopBar } from "../components/TopBar";
import { selectedMyUserData } from "../context/slices/userSlice";
import { useEffect, useState } from "react";
import { getUserMatches, getUserMatchesFollowers } from "../services/matches";
import { useNavigate } from "react-router-dom";

type UserMatch = {
  userId: string;
  userName: string | undefined;
  userImage: string | undefined;
  userBirth: string;
  followId: string | undefined;
  followName: string | undefined;
  followImage: string | undefined;
  followBirth: string;
};

const Matches = () => {
  //const matches = useAppSelector(selectedMatchUsers);
  const [matches, setMatches] = useState<UserMatch[]>([]);
  const [matchesFollowers, setMatchesFollowers] = useState<UserMatch[]>([]);
  const myUser = useAppSelector(selectedMyUserData);
  const currentOption = useAppSelector(selectedMatchOption);
  const navigate = useNavigate();

  useEffect(() => {
    if (!myUser.user.id) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    async function fetchMatches() {
      const data = await getUserMatches(myUser.user.id);

      setMatches(data as UserMatch[]);
    }

    fetchMatches();
  }, []);

  useEffect(() => {
    async function fetchMatches() {
      const data = await getUserMatchesFollowers(myUser.user.id);
      setMatchesFollowers(data as UserMatch[]);
    }

    fetchMatches();
  }, []);

  return (
    <Layout>
      <TopBar />
      <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-2 pb-4 overflow-auto">
        <MatchTop />
        <div className="grid items-start justify-start w-full h-auto grid-cols-2 gap-2">
          {currentOption === "my" &&
            matches?.map((user, index) => (
              <MatchCard key={index} user={user} />
            ))}

          {currentOption === "followers" &&
            matchesFollowers?.map((user, index) => (
              <MatchCardFollow key={index} user={user} />
            ))}
        </div>
      </div>
      <div className="w-full h-16 bg-transparent" />
    </Layout>
  );
};

export default Matches;
