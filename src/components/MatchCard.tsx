import { Link } from "react-router-dom";

type User = {
  userId: string;
  userName: string | undefined;
  userImage: string | undefined;
  userBirth: string;
  followId: string | undefined;
  followName: string | undefined;
  followImage: string | undefined;
  followBirth: string;
};
type Props = {
  user: User;
};

export const MatchCard = ({ user }: Props) => {
  const age = new Date().getFullYear() - +user.followBirth.slice(6, 12);
  return (
    <Link to={`/account/${user.followId}`}>
      <section className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-red-300 rounded-lg">
        <img src={user.followImage} className="object-fill" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="font-semibold text-white">
            {user.followName}, {age}
          </p>
        </div>
      </section>
    </Link>
  );
};

export const MatchCardFollow = ({ user }: Props) => {
  const age = new Date().getFullYear() - +user.userBirth.slice(6, 12);
  return (
    <Link to={`/account/${user.userId}`}>
      <section className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-red-300 rounded-lg">
        <img src={user.userImage} className="object-fill" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="font-semibold text-white">
            {user.userName}, {age}
          </p>
        </div>
      </section>
    </Link>
  );
};
