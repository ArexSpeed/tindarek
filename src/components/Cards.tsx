import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Card } from "./Card";
// import users from "../data/users.json";
import { useAppDispatch } from "../context/store";
import { setCurrentUser } from "../context/slices/cardSlice";

import "swiper/css";
import "swiper/css/effect-cards";
import { getUsers } from "../services/users";

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
  const dispatch = useAppDispatch();
  const changeSlide = (index: number) => {
    dispatch(setCurrentUser(users[index]));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data as User[]);
    };
    fetchUsers();
  }, []);

  return (
    <div className="">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[300px] h-[400px]"
        onSlideChange={(e) => changeSlide(e.activeIndex)}
      >
        {users.map((user) => (
          <SwiperSlide
            key={user.id}
            className="flex items-center justify-center w-full h-full bg-red-300 rounded-2xl"
          >
            <Card user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
