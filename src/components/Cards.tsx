import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Card } from "./Card";
import users from "../data/users.json";
import { useAppDispatch } from "../context/store";
import { setCurrentUser } from "../context/slices/cardSlice";

import "swiper/css";
import "swiper/css/effect-cards";

export const Cards = () => {
  //const [current, setCurrent] = useState("1");
  //const swiperSlide = useSwiperSlide();
  const dispatch = useAppDispatch();
  const changeSlide = (index: number) => {
    dispatch(setCurrentUser(users[index].id));
  };

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

        {/* <SwiperSlide className="flex items-center justify-center bg-red-300 rounded-2xl">
          Swiper 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-red-300 rounded-2xl">
          Swiper 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-red-300 rounded-2xl">
          Swiper 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-red-300 rounded-2xl">
          Swiper 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-red-300 rounded-2xl">
          Swiper 1
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
