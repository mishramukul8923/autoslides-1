import {  Row, Col, Container } from "react-bootstrap";

const StopCard2 = () => {
  return (
    <section className="contentCards">
      <div className="container" >
      <div className="row">
      <Col xl={6}  lg={6} md={12}   className="imageMargin">
     
     <div className="cardImg">
        
 <img  src="/images/blankImg.png" alt="" />   
 </div> 
 
 
   </Col  >

      <Col xl={6}  lg={6} md={12} className="text d-flex flex-column justify-content-center  textMargin" >
      <h2>Stop Wasting Time and Money  on Content Creation Again</h2>
      
      <p>AutoSlides transforms your ideas into viral, scroll-stopping slideshows effortlessly. With our AI-powered tool, you can create engaging, platform-ready slideshows in just a few clicks.</p>
      
      <ul>
      <li>Stunning TikTok and Instagram content
      
      </li>
      <li>Viral slideshows for campaigns</li>
      <li>Endless opportunities to grow your reach</li>
      </ul>
      </Col>
      </div>
      </div>
    </section>
  )
}

export default StopCard2
