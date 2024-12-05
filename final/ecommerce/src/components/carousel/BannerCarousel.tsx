import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      image: "/banners/banner1.jpg",
      title: "Summer Sale",
      description: "Up to 50% off",
      link: "/sale"
    },
    {
      id: 2,
      image: "/banners/banner2.jpg",
      title: "New Arrivals",
      description: "Check out our latest collection",
      link: "/new-arrivals"
    },
    {
      id: 3,
      image: "/banners/banner3.jpg",
      title: "Special Offer",
      description: "Free shipping on orders over $50",
      link: "/special-offers"
    }
  ];

  return (
    <div className="w-full h-[400px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full">
              {/* <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl mb-6">{banner.description}</p>
                <a
                  href={banner.link}
                  className="bg-white text-black px-6 py-2 rounded-full 
                  hover:bg-gray-100 transition-colors duration-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
