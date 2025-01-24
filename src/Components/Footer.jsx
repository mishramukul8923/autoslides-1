
"use client"
import {Container} from 'react-bootstrap'

const Footer = () => {
  return (
    <section className='footer'>
        {/* max width 1600px */}
        <Container>
        <div className='footerContent'>
            <div className='companyName'>
                <div className='mail'>
                    <h2>Contactninjaslide.ai@gmail.com</h2>
                </div>
                <div className='companyHeading'>
                    <img id="mobileVisibleIcon" src="/images/ninjaIcon.svg" /><h1 className='text-center'>Ninjaslide.ai</h1>
                </div>
                <div className="separator" id="aboveIcon"></div>
                <div className='icons'>
                <div className="imgBg"><img src="/images/youtube.svg" alt="youtube icon" /></div>
                <div className="imgBg"><img src="/images/tiktok.svg" alt="tiktok icon" /></div>
                <div className="imgBg"><img src="/images/instagram.svg" alt="instagram" /></div>
                <div className="imgBg"><img src="/images/facebook.svg" alt="facebook" /></div>
                </div>
            </div>
            <div className="separator" id="belowCompanyName"></div>
            <div className='copyright'>
            {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3333 19.5865C27.3333 24.4398 24.44 27.3332 19.5866 27.3332H18C17.2666 27.3332 16.6666 26.7332 16.6666 25.9998V18.3065C16.6666 17.9465 16.9599 17.6399 17.3199 17.6399L19.6666 17.5999C19.8533 17.5865 20.0133 17.4532 20.0533 17.2665L20.52 14.7198C20.56 14.4798 20.3733 14.2532 20.12 14.2532L17.2799 14.2932C16.9066 14.2932 16.6133 13.9999 16.6 13.6399L16.5466 10.3732C16.5466 10.1598 16.7199 9.97319 16.9466 9.97319L20.1466 9.91984C20.3733 9.91984 20.5466 9.74652 20.5466 9.51986L20.4933 6.31982C20.4933 6.09316 20.32 5.91984 20.0933 5.91984L16.4933 5.97319C14.28 6.01319 12.52 7.8265 12.56 10.0398L12.6266 13.7065C12.64 14.0798 12.3466 14.3732 11.9733 14.3865L10.3733 14.4132C10.1466 14.4132 9.97331 14.5865 9.97331 14.8132L10.0133 17.3465C10.0133 17.5732 10.1866 17.7465 10.4133 17.7465L12.0133 17.7198C12.3866 17.7198 12.6799 18.0132 12.6933 18.3732L12.8133 25.9732C12.8266 26.7199 12.2266 27.3332 11.4799 27.3332H8.41329C3.55996 27.3332 0.666626 24.4398 0.666626 19.5732V8.41317C0.666626 3.55983 3.55996 0.666504 8.41329 0.666504H19.5866C24.44 0.666504 27.3333 3.55983 27.3333 8.41317V19.5865V19.5865Z" fill="#FFF7F7"/>
</svg> */}
            © Copyright 2022, All Rights Reserved by  Autoslide.ai
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Footer
