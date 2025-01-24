"use client"

import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function OffCanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className="offcanvasBtn" onClick={handleShow}>
      <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 2.07143C0 1.20355 0.608893 0.5 1.36 0.5H32.64C33.3911 0.5 34 1.20355 34 2.07143C34 2.9393 33.3911 3.64286 32.64 3.64286H1.36C0.608893 3.64286 0 2.9393 0 2.07143Z" fill="#0C2EB2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 11.5C0 10.6321 0.608893 9.92857 1.36 9.92857H32.64C33.3911 9.92857 34 10.6321 34 11.5C34 12.3679 33.3911 13.0714 32.64 13.0714H1.36C0.608893 13.0714 0 12.3679 0 11.5Z" fill="#0C2EB2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0 20.9286C0 20.0607 0.608893 19.3571 1.36 19.3571H32.64C33.3911 19.3571 34 20.0607 34 20.9286C34 21.7965 33.3911 22.5 32.64 22.5H1.36C0.608893 22.5 0 21.7965 0 20.9286Z" fill="#0C2EB2"/>
</svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton placement="start" >
          {/* <Offcanvas.Title>Offcanvas Title</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body><div className="offcanvasContent">
            
            <div className="menu-offcanvas">
            <ul >
              <li className="unstyle" ><a href="" className="logo" >Home</a></li>
              <li  ><a href="">Solutions</a></li>
              <li  ><a href="">About Us</a></li>
              <li  ><a href="">Resources</a></li>
            </ul>
                   </div>
            
                   <div className="loginBtnsOffcanvas" >
                   
            <a className="freeTrial" href="">Start Free Trial</a>
            <a className="login" href="">Log In</a>
            
                   </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
