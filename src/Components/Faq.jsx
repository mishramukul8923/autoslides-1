"use client"

import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <section className='faq'>
        <Container>
    <div className='headingText'>
        <h1>Frequently Asked  
        Questions</h1>
        <h2>Find out how AutoSlides works, how to scale your content effortlessly, and get started with our easy-to-use platform in no time!</h2>
    </div>

    <div  className='faqAccordian'>

    <Accordion  defaultActiveKey={['0']} alwaysOpen>
      <div className="Itemm">
          <Accordion.Item eventKey="0" className='rounded' >
            <Accordion.Header id="topAccordion">How does AutoSlides work?</Accordion.Header>
            <Accordion.Body>
            AutoSlides uses AI to transform your long videos into viral-worthy slideshows in just a few clicks. Simply upload your content, and our tool automatically creates optimized, scroll-stopping slides ready for social media.
            </Accordion.Body>
          </Accordion.Item>
      </div>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Can I use AutoSlides for TikTok and Instagram?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> How quickly can I see results?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
        Do I need any design skills?
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>  Is AutoSlides free to use?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>

    </div>

        </Container>

    </section>
  )
}

export default Faq
