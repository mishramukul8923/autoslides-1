import {  Row, Col, Container } from "react-bootstrap";

const GrowCard = () => {
  return (
    <div className="contentCards">
      <Container >
      <Row>
      <Col xl={6}  lg={6}md={12} className="imageMargin" >
      <div className="cardImg">
      <img  src="/images/blankImg.png" alt="" />
      </div>
      </Col  >
      <Col xl={6}  lg={6}md={12} className="text d-flex flex-column justify-content-center textMargin" >
      <h2>Grow 1000 + TikTok Accounts  Like a Pro</h2>
      
      <p>Don’t stop at just one account when you can scale hundreds. AutoSlides makes it easy to repurpose your content into viral-ready slideshows for TikTok, Instagram, and more. Expand your reach and dominate multiple channels with just one click.</p>
      
      
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default GrowCard;
