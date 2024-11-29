import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageView = ({ data }) => {
  return (
    <div className="container mx-auto p-8">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper select-none w-[900px] bg-gradient-to-r from-white via-gray-100 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-lg shadow-lg overflow-hidden"
      >
        {data?.images?.map((url, inx) => (
          <SwiperSlide key={inx}>
            <div className="flex h-[500px]">
              <div className="w-[70%] bg-gray-100 dark:bg-slate-900 flex justify-center items-center">
                <img
                  src={url}
                  alt={`Slide ${inx}`}
                  className="max-w-full max-h-full rounded-lg shadow-md"
                />
              </div>

              <div className="w-[30%] bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 p-6 flex flex-col justify-center items-center space-y-4 gap-3">
                <h1 className="font-oswald text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
                  {data?.title}
                </h1>
                <h2 className="text-xl font-semibold text-center text-gray-600 dark:text-gray-400">
                  {data?.category}
                </h2>
                <p className="text-md text-center leading-relaxed">
                  {data?.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageView;
