import {  Row, Col, Container } from "react-bootstrap";

const StopCard1 = () => {
  return (
    <section className="contentCard">
      <Container >
      <Row>
      <Col xl={6} className="image" >
     
        
 <img  src="/images/blankImg.png" alt="" />      </Col  >
      <Col xl={6} className="text d-flex flex-column justify-content-center" >
      <h2>Stop Wasting Time and Money  on Content Creation Again</h2>
      
      <p>AutoSlides transforms your ideas into viral, scroll-stopping slideshows effortlessly. With our AI-powered tool, you can create engaging, platform-ready slideshows in just a few clicks.</p>
      
      <ul>
      <li>Stunning TikTok and Instagram content
      
      </li>
      <li>Viral slideshows for campaigns</li>
      <li>Endless opportunities to grow your reach</li>
      </ul>
      </Col>
      </Row>
      </Container>
    </section>
  )
}

export default StopCard1
