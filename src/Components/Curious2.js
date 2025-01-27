"use client"

import { Container, Row, Col } from "react-bootstrap";

const Curious2 = () => {
  return (
    <section className="curiousHow">
      <div className="container-fluid">
       
            <Row className="heading" >
              <h1 className="heading-text" >Curious How AutoSlides  Works? It’s as Easy </h1>
            </Row>
            

            
            <div className="CuriousSection">
              
                <div className="CuriousLeft">
                      <div className="inputIdeaParent">
                          <div className="inputNumber">01</div>
                          <div className="inputText">
                              <div className="inputIdeaImage">
                                  <img src="/images/lightning.svg" alt="" />
                              </div>
                              <h2 >Input Your Idea</h2>
                              <p>Enter your prompt or concept, and let AutoSlides’ AI work its magic.</p>
                          </div>
                      </div>

                      <div className="inputIdeaParent">
                          <div className="inputNumber">02</div>
                          <div className="inputText">
                              <div className="inputIdeaImage">
                                  <img src="/images/pacman.svg" alt="" />
                              </div>
                             
                  <h2>Watch the Magic Happen</h2> 
                  <p>Our advanced AI generates stunning, platform-ready reels in seconds—complete with captions, transitions, and layouts.</p>
                          </div>
                      </div>

                      <div className="inputIdeaParent">
                          <div className="inputNumber">03</div>
                          <div className="inputText">
                              <div className="inputIdeaImage">
                              <img src="/images/share.svg" alt="" />
                              </div>
                              
                  <h2>Share and Go Viral</h2> 
                  <p>Download your slideshow and post it directly to TikTok, Instagram, or anywhere you like. Watch your content take off!</p>
                          </div>
                      </div>
                    
                </div>





                
                  <div className="curiousRight">

                      <div className="curiousRightInner">
                        <div className="curiousImg">

                          <img  className="" src="/images/CuriousRectangle.png" alt="" />
                          </div>

                          {/* <div className="backRectangle"></div> */}
                      </div>

                  </div>
                  


            </div>
            {/* <Row className="content">
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
         */}
      </div>
    </section>
  );
};

export default Curious2;
