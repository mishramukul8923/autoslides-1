import {  Row, Col, Container } from "react-bootstrap";
const FromCard2 = () => {
  return (
    <div className="contentCard">
      <Container  >
      <Row>
      <Col xl={6} className="image ">
      <img  src="/images/blankImg.png" alt="" />
      </Col  >
      <Col xl={6} className="text d-flex flex-column justify-content-center" >
      <h2>From Idea to Viral 
       in Seconds</h2>
       <h3>Don’t just take our word for it—let the algorithm prove it.</h3>
                  
      <ul>
      <li>Powered by advanced AI, it analyzes and optimizes your content for maximum engagement, ensuring every slideshow is ready to take off.</li>
      <li>We generate AI-powered captions too—perfect for boosting your posts on TikTok, Instagram, and beyond.</li>
      </ul>                                       
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default FromCard2
