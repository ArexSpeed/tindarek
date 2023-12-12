import React from "react";
import { Link } from "react-router-dom";

type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  dateOfBirth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
};
type Props = {
  user: User;
};

export const MatchCard = ({ user }: Props) => {
  const age = new Date().getFullYear() - +user.dateOfBirth.slice(6, 12);
  return (
    <Link to={`/account/${user.id}`}>
      <section className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-red-300 rounded-lg">
        <img src={user.imageSrc} className="object-fill" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="font-semibold text-white">
            {user.firstName} {user.lastName}, {age}
          </p>
        </div>
      </section>
    </Link>
  );
};
