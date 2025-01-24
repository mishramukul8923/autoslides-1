"use client"

import { Container, Row, Col } from "react-bootstrap";

const Curious = () => {
  return (
    <section className="curiousHow">
      <Container fluid className="customContainer">
       
            <Row className="heading" >
              <h1 className="heading-text" >Curious How AutoSlides <br /> Works? It’s as Easy </h1>
            </Row>
            <Row className="content">
              <Col xl={5} xs={12} className="steps">
                <Row className="step">
                    <Col xs={2} className="itemIndex">
                       <span>01</span>
                    </Col>
                  <Col xs={10} className="itemText">
                 <div><img src="/images/lightning.svg" alt="" /></div>
                  <h2 >Input Your Idea</h2>
                  <p>Enter your prompt or concept, and let AutoSlides’ AI work its magic.</p>
                  </Col>
                </Row>
                <Row className="step">
                <Col xs={2} className="itemIndex">
                       <span >02</span>
                    </Col>
                  <Col  xs={10} className="itemText">
                  <div><img src="/images/pacman.svg" alt="" /></div>
                  <h2>Watch the Magic Happen</h2> 
                  <p>Our advanced AI generates stunning, platform-ready reels in seconds—complete with captions, transitions, and layouts.</p>
                  </Col>
           
                </Row>
                <Row className="step">
                <Col xs={2} className="itemIndex">
                       <span>03</span>
                    </Col>
                  <Col xs={10} className="itemText">
                  <div><img src="/images/share.svg" alt="" /></div>
                  <h2>Share and Go Viral</h2> 
                  <p>Download your slideshow and post it directly to TikTok, Instagram, or anywhere you like. Watch your content take off!</p>
                  </Col>
                
                </Row>
              </Col>

              <Col xl={7} xs={12} className="imageSection"  >
              
                <div className="backRectangleBottom">
              
                <img className="image" src="/images/CuriousRectangle.png" alt="" />
             
                <div className="backRectangle"></div>
                </div>
               
            
             
              </Col>
            </Row>
        
      </Container>
    </section>
  );
};

export default Curious;
