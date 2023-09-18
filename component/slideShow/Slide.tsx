'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function Slide({ image }: { image: any[] }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          240: {slidesPerView: 1.5, spaceBetween: 5 },
          640: {slidesPerView: 2, spaceBetween: 20,
          },
          768: {slidesPerView: 3.5, spaceBetween: 10,
          },
        }}
      >
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slide;
