import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ImgProps } from '../../types/main';
import { mainImgs } from '../../api/requests/mainApi';
// Swiper 모듈 등록
// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Navigation, Pagination, Autoplay]);
const MainSlide: React.FC = () => {
  const [swiperImgs, setSwiperImgs] = useState<ImgProps[]>([]);
  // 이미지 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      const data = await mainImgs(); // 이미지 데이터 가져오기
      setSwiperImgs(data); // 상태 업데이트
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <p className="text-center text-2xl mb-8 font-bold">more connection, more creative</p> */}
      <div className="flex justify-center w-full p-0 mx-auto relative h-[400px]">
        <Swiper
          className="w-full h-[400px]"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // 3초마다 슬라이드
            disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 autoplay 유지
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop
        >
          {swiperImgs.map((item) => (
            <SwiperSlide key={item.idx} className="w-full ">
              <img
                className="w-full h-full object-cover "
                src={item.images}
                alt="poto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainSlide;
