import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Card } from "./Card";
import { useCallback } from "react";
//import { useState } from "react";
import users from "../data/users.json";

export const Cards = () => {
  //const [current, setCurrent] = useState("1");
  //const swiperSlide = useSwiperSlide();
  const changeSlide = useCallback(() => console.log("callback"), []);

  return (
    <div className="">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[300px] h-[400px]"
        onSlideChange={(e) => console.log(e.activeIndex)}
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
