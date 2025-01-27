
"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/css"; // Default Splide CSS
import styles from "./audiance.module.css"; // CSS module for styling
import Link from "next/link";
// import Splide from "@splidejs/splide";


const SplideCarousel = () => {
  const images = [
    { id: 1, imageUrl: "/images/growImg(3).png", alt: "Image 1" },
    { id: 2, imageUrl: "/images/growImg(5).png", alt: "Image 2" },
    { id: 3, imageUrl: "/images/growImg(6).png", alt: "Image 3" },
    { id: 4, imageUrl: "/images/growImg(7).png", alt: "Image 4" },
    { id: 5, imageUrl: "/images/growImg(8).png", alt: "Image 5" },
    { id: 6, imageUrl: "/images/growImg(3).png", alt: "Image 6" },
    { id: 7, imageUrl: "/images/growImg(4).png", alt: "Image 7" },
    { id: 8, imageUrl: "/images/growImg(5).png", alt: "Image 8" },
  ];

  return (
    <>     <section className='growAudience'>
    <div>
        <h1 >Grow Your Audience <br /> with Zero Extra Effort</h1>
        <p>Save time and boost your content. AutoSlides effortlessly turns your long videos into viral-ready slideshows for all your social media channels. Keep creating, keep posting, and watch your followers grow.</p>
    </div> 
    </section>
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        focus: "center",
        autoplay: true,
        interval: 2000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        arrows: false, // Disable arrow buttons
        padding: "10%",
        throttle: 300,
        // gap: "20px",  
        breakpoints: {
          1440: {
            perPage: 1,
            padding: "30%",
          },
        },
      }}
      aria-label="Splide Carousel"
      className={styles.splide}
    >
      {images.map((image) => (
        <SplideSlide key={image.id} className={styles.splideSlide}>
          <img
            src={image.imageUrl}
            alt={image.alt}
            className={styles.slideImage}
          />
        </SplideSlide>
      ))}
    </Splide>



    <div className='growAudience'>

    <Link className="startYourLink"  href={''} >
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
                Start Your Free Trial </Link>

           


                <div className="marqueeContainer">
                    <div className="bgStripe">

                    </div>
                    <marquee><span> <img src="/images/Ghost.svg" alt="" />Create Your First TikTok Now! </span>
                    
                    <span>
                    <img src="/images/Ghost.svg" alt="" />
                        Create Your First Slideshow Now!
                    </span>
                    <span>
                    <img src="/images/Ghost.svg" alt="" />
                      Create Your First Reel Now!
                    </span>
                    </marquee>
                </div>

    </div>
    </>
  );
};

export default SplideCarousel;
