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

export const Card = ({ user }: Props) => {
  const age = new Date().getFullYear() - +user.dateOfBirth.slice(6, 12);

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-full">
      <img src={user.imageSrc} className="object-fill" />
      <div className="absolute bottom-0 left-0 p-4">
        <p className="text-xl text-white">
          {user.firstName} {user.lastName}, {age}
        </p>
        <p className="text-base text-gray-300">
          {user.profession}, {user.location}
        </p>
        <p className="text-white">{user.shortDescription}</p>
      </div>
    </section>
  );
};
