"use client"
import { NavbarOffcanvas } from "react-bootstrap"
import Link from "next/link"
import OffCanvasExample from "./OffCanvasExample"


const NavSite = () => {
  return (
    <section className= "siteNavbar">
       <div className="container">
       <div className="logo">
       <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_74_380)">
<path d="M68.3821 28.1325C68.2726 27.8873 65.6352 22.11 60.5583 20.6764C59.5307 20.3863 58.4963 20.3029 57.4971 20.3515C58.0604 19.5228 58.5274 18.5934 58.8169 17.5638V17.5633C60.2472 12.4765 56.7054 7.20666 56.5543 6.9846L55.8873 6.00881L54.8108 6.49249C54.566 6.60272 48.7995 9.24476 47.3692 14.3321C46.0315 19.0908 49.0437 24.0083 49.5623 24.8053C49.9697 25.664 52.584 30.8062 57.3334 32.147C58.1831 32.3865 59.038 32.4867 59.8734 32.4867C64.0296 32.4867 67.7067 30.0055 67.8909 29.8795L68.8654 29.2117L68.3821 28.1325Z" fill="#0C2EB2"/>
<path d="M53.5215 36.1731C53.5215 51.0189 41.51 63.054 26.6931 63.054C11.8768 63.054 -0.134766 51.0189 -0.134766 36.1731C-0.134766 21.3278 11.8768 9.29276 26.6931 9.29276C41.51 9.29276 53.5215 21.3278 53.5215 36.1731Z" fill="black"/>
<path d="M53.5215 36.1731C53.5215 51.0189 41.51 63.054 26.6931 63.054C26.6931 49.3896 26.6931 17.8814 26.6931 9.29276C41.51 9.29276 53.5215 21.3278 53.5215 36.1731Z" fill="#0C2EB2"/>
<path d="M8.29811 35.959C8.29811 31.4481 11.9478 27.7913 16.4499 27.7913H36.5084C41.0104 27.7913 44.6602 31.4481 44.6602 35.959C44.6602 40.4698 41.0104 44.1261 36.5084 44.1261H16.4499C11.9478 44.1261 8.29811 40.4698 8.29811 35.959Z" fill="#FFE4C2"/>
<path d="M26.6931 27.7913H36.5084C41.0104 27.7913 44.6601 31.4481 44.6601 35.959C44.6601 40.4698 41.0104 44.1261 36.5084 44.1261H26.6931V27.7913Z" fill="#F2D1A5"/>
<path d="M15.1806 35.7306L17.2021 32.2224L24.0573 36.1879L22.0358 39.696L15.1806 35.7306Z" fill="#383838"/>
<path d="M29.3274 36.1868L36.1825 32.2214L38.204 35.7295L31.3489 39.6949L29.3274 36.1868Z" fill="#2C2C2C"/>
</g>
<defs>
<clipPath id="clip0_74_380">
<rect width="69" height="69" fill="white"/>
</clipPath>
</defs>
</svg>
<span>Ninjaslide.ai</span>
       </div>
       <div className="menu">
        <ul>
          <li className="unstyle"><Link href="/">Home</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/resources">Resources</Link></li>
        </ul>
       </div>

       <div className="loginBtns">
        <Link className="freeTrial" href="/trial">Start Free Trial</Link>
        <Link className="login" href="https://ninjaz-slide.vercel.app/">Log In</Link>
       </div>
       <div className="toggle">
        
<OffCanvasExample/>
    
        </div>
       </div>


       {/* 0ff canvas sidebar */}
       {/* <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <h1 className="offcanvas-title"><div className="col-12 Logo">
        <object data="./images/Vector.svg"
            type></object>
    </div></h1>
      <button type="button" id="SidebarCloseButton" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div className="offcanvas-body">
        <div className="Sidebar py-4 my-auto ">
            <div className="row ">
                
                <div className="col-12 Mid">
                    <ul
                        className="d-flex flex-column justify-content-around">
                        <li><Link  href className="text-white">Home</Link></li>
                        <li><Link href className="text-white" >Services</Link></li>
                        <li><Link href className="text-white">Sectors we serve</Link></li>
                        <li><Link href className="text-white">Case Studies</Link></li>
                        <li><Link href className="text-white">Our Process </Link></li>
                        <li><Link href className="text-white">Contact</Link></li>

                    </ul>
                </div>
                
            </div>
        </div>

        <div className="col-12 button ">
          <Link className="BlueButton" to="#">
              Get a Free Consultation
          </Link>
      </div>
      <p className="mb-auto">      © 2024 AD Technology Partners. All rights reserved.</p>
    
    </div>
  </div> */}
    </section>
  )
}

export default NavSite
