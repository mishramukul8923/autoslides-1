"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "../Components/slider";
import NavSite from "@/Components/NavSite";

import Curious2 from "@/Components/Curious2";
import CardGroup from "@/Components/CardGroup";
import Faq from "@/Components/Faq";
import SplideCarousel from "@/Components/AudianceCarousel";
import Footer from "@/Components/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavSite/>
        <Slider/>
       
        <Curious2/>

    
    
    
        <CardGroup/>
       <SplideCarousel/>
     <Faq/>
     <Footer/>

     </main>
    </div>
  );
}