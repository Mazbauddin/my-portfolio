// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bannerImg1 from "../assets/images/carousel1.jpg";
import bannerImg2 from "../assets/images/carousel2.jpg";
// import bannerImg3 from "../assets/images/carousel3.jpg";
import Slide from "../components/Slide";

export default function Carousel() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bannerImg1}
            text={
              "Taste the extraordinary! Indulge in culinary excellence at Luxury Restaurant. Reserve your table now for an unforgettable dining experience."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bannerImg2}
            text={
              "Taste the extraordinary! Indulge in culinary excellence at Luxury Restaurant. Reserve your table now for an unforgettable dining experience."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bannerImg1}
            text={
              "Taste the extraordinary! Indulge in culinary excellence at Luxury Restaurant. Reserve your table now for an unforgettable dining experience."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
