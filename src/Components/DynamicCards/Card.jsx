import {  Row, Col, Container } from "react-bootstrap";

const Card = ({cardText1}) => {
  return (
   <Container className=' contentCard'> 
    <Row>
<Col md={6} className="image">
<img src="/images/background.jpg" alt="" />
</Col  >
<Col md={6} className="text d-flex flex-column justify-content-center" >
<h2>{cardText1.title}</h2>
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
  )
}

export default Card
