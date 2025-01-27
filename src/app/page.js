import Image from "next/image";
import styles from "./page.module.css";
import Slider from "../Components/slider";
// import Hero from "@/Components/AudianceCarousel";
import NavSite from "@/Components/NavSite";
import Curious from "@/Components/Curious";
import Curious2 from "@/Components/Curious2";
import CardGroup from "@/Components/CardGroup";
// import GrowAudience from "@/Components/GrowAudience";
import Faq from "@/Components/Faq";
import SplideCarousel from "@/Components/AudianceCarousel";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavSite/>
        <Slider/>
        {/* <Curious/>  */}
        <Curious2/>

    
    
      {/* <GrowAudience/>  */}
        <CardGroup/>
       <SplideCarousel/>
     <Faq/>
     <Footer/>

     </main>
    </div>
  );
}