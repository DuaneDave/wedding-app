'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import shimmer, { toBase64 } from '@/utils/helper/toBase64';

function Slide({ image, reverse }: { image: any[]; reverse?: boolean }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          240: { slidesPerView: 1.5, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3.5, spaceBetween: 10 },
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          reverseDirection: reverse,
          stopOnLastSlide: false,
        }}
        rewind={true}
        loop={true}
        speed={2000}
      >
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              src={item}
              alt="slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slide;
