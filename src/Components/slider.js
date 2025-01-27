"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import '@/app/globals.css'
import Link from 'next/link';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function page() {
  return (
    <>
    <div className='parentCreator'>


 <div className='creatorsImg'>
  <div>
    <img
      src="/images/creators.png" 
      alt="creators" 
    />
  </div>
          <div className='creatorsText'>
            Trusted By <span>100k+ Creators</span>
          </div>
        </div>
      </div>
      <div className='hero'>
        <div className='trustedBy'>

        </div>
        <div className='heading'>
          <h1>
            Create Viral <img src='/images/viralSorts.png' /> Shorts  in 30 Seconds
          </h1>
        </div>
        <div className='subHeading'>
          <h2>
            AutoSlides lets you effortlessly create scroll-stopping slideshows <br />
            in just <span>30 seconds. </span>
          </h2>
</div></div>

       <Link href={''}  className='startedBtn'><span><img src='/images/startedLogo.svg'/></span> Get Started</Link>



    <div style={{ 
        maxWidth: "1920px",  // Adjust this value based on your needs
        margin: "0 auto",    // Center the slider
        padding: "20px",     // Add some padding
         }}  // Prevent any overflow
        >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: -10,
          depth: -120,
          modifier: 1,
          scale:1,
          slideShadows: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            
          }
        }}
        initialSlide={4}
        autoplay={{
          delay: 100,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
        spaceBetween={1}
        onSlideChange={(swiper) => {
          // Reset z-index for all slides
          const slides = document.querySelectorAll('.swiper-slide');
          slides.forEach(slide => {
            slide.style.zIndex = '1';
          });
          // Set lower z-index for active slide
          if (swiper.slides[swiper.activeIndex]) {
            swiper.slides[swiper.activeIndex].style.zIndex = '0';
          }
        }}
      >
        <SwiperSlide>
          
          <img src="/images/slide1.png"   
          className='carouselImg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.png"  className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.png" className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide4.png" className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide5.png" className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide1.png" className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.png"className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.png" className='carouselImg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide4.png" className='carouselImg'/>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
