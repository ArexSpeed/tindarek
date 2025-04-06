import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Card } from "./Card";
// import users from "../data/users.json";
import { useAppDispatch, useAppSelector } from "../context/store";
import { setCurrentUser } from "../context/slices/cardSlice";

import "swiper/css";
import "swiper/css/effect-cards";
import { getUsers, useUser } from "../services/users";
import { selectedMyUserData } from "../context/slices/userSlice";

type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  birth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
};

export const Cards = () => {
  const [users, setUsers] = useState<User[]>([]);
  const myUser = useAppSelector(selectedMyUserData);
  const { user } = useUser();

  const dispatch = useAppDispatch();
  const changeSlide = (index: number) => {
    dispatch(setCurrentUser(users[index]));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      const filterData = data.filter((user) => user.id !== myUser.user.id);
      setUsers(filterData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    dispatch(setCurrentUser(users[0]));
  }, [users]);

  return (
    <div className="">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[300px] h-[400px]"
        onSlideChange={(e) => changeSlide(e.activeIndex)}
      >
        {myUser.user.nickname !== user.name &&
          users
            .filter((user) => user.id !== myUser.user.id)
            .filter((user) => user.sex !== myUser.user.sex)
            .filter((usr) => usr.nickname !== user.name)
            .map((user) => (
              <SwiperSlide
                key={user.id}
                className="flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-400 to-red-600 rounded-2xl"
              >
                <Card user={user} />
              </SwiperSlide>
            ))}

        {myUser.user.nickname === user.name &&
          users.map((user) => (
            <SwiperSlide
              key={user.id}
              className="flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-400 to-red-600 rounded-2xl"
            >
              <Card user={user} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
