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
          <span> Create Viral<img src='/images/viralSorts.png'  alt='/'/></span> Shorts  in 30 Seconds
          </h1>
        </div>
        <div className='subHeading'>
          <h2>
            AutoSlides lets you effortlessly create scroll-stopping slideshows <br />
            in just <span>30 seconds. </span>
          </h2>
</div></div>

       <Link href={''}  className='startedBtn'><span>
        
        {/* <img src='/images/startedLogo.svg'/> */}
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.8333 25.145H31.3133V26.665H32.8333V25.145Z" fill="#EDFFFF"/>
<path d="M32.8333 14.475V11.425H31.3133V12.955H29.7833V9.90503H28.2633V16.005H26.7333V14.475H25.2133V17.525H28.2633V22.095H20.6433V23.625H32.8333V22.095H29.7833V14.475H32.8333Z" fill="#EDFFFF"/>
<path d="M32.8333 0.765015H29.7833V2.28501H32.8333V0.765015Z" fill="#EDFFFF"/>
<path d="M28.2633 25.145H26.7333V26.665H28.2633V25.145Z" fill="#EDFFFF"/>
<path d="M28.2633 3.815H25.2133V5.335H28.2633V3.815Z" fill="#EDFFFF"/>
<path d="M22.1633 25.145H20.6433V26.665H22.1633V25.145Z" fill="#EDFFFF"/>
<path d="M20.6433 9.90502H16.0733V11.425H20.6433V12.955H22.1633V5.33502H20.6433V9.90502Z" fill="#EDFFFF"/>
<path d="M14.5433 16.005H11.5033V17.525H14.5433V19.045H11.5033V17.525H9.97332V23.625H14.5433V25.145H9.97332V26.665H5.40332V28.2H6.93332V31.24H9.97332V29.72H8.45332V28.2H13.0233V26.67H14.5433V28.2H17.5933V26.67H16.0733V20.58H17.5933V22.1H19.1233V19.05H16.0733V14.48H20.6433V12.96H14.5433V16.005ZM14.5433 22.095H11.5033V20.575H14.5433V22.095Z" fill="#EDFFFF"/>
<path d="M14.5433 0.765015H11.5033V2.28501H14.5433V0.765015Z" fill="#EDFFFF"/>
<path d="M11.5033 6.85504H9.97333V9.90504H11.5033V6.85504Z" fill="#EDFFFF"/>
<path d="M20.6433 3.815H8.45331V5.335H20.6433V3.815Z" fill="#EDFFFF"/>
<path d="M9.97331 23.625H8.45331V25.145H9.97331V23.625Z" fill="#EDFFFF"/>
<path d="M8.45329 5.33502H6.93329V16.005H8.45329V5.33502Z" fill="#EDFFFF"/>
<path d="M6.93332 16.005H5.40332V20.575H6.93332V16.005Z" fill="#EDFFFF"/>
<path d="M5.4033 25.145H3.8833V26.665H5.4033V25.145Z" fill="#EDFFFF"/>
<path d="M5.4033 20.575H3.8833V22.095H5.4033V20.575Z" fill="#EDFFFF"/>
<path d="M3.88333 23.625H2.35333V25.145H3.88333V23.625Z" fill="#EDFFFF"/>
<path d="M3.88331 5.33502H0.833313V6.85502H3.88331V5.33502Z" fill="#EDFFFF"/>
<path d="M2.35331 20.575H3.88331V19.045H2.35331V17.525H0.833313V23.625H2.35331V20.575Z" fill="#EDFFFF"/>
</svg>

       
       
       </span> Get Started</Link>



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
