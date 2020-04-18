import React from 'react';
import './Footer.css';
class Footer extends React.Component{
    render(){
        return(
          <div className="copyright">
            <p>
          © 2020 <a href="https://punitbatra.github.io/Portfolio/">PUNIT BATRA.</a> All
          Rights Reserved.
          </p>
          <div className="icons">
          <a
          href="https://www.facebook.com/punit.batra.77"
          id="icon1"
          className="fa fa-facebook"
          ></a>
          <a
          href="https://www.instagram.com/punit_batra_/"
          id="icon2"
          className="fa fa-instagram"
          ></a>
          <a href="https://twitter.com/Punitbatra6" id="icon4" className="fa fa-twitter"></a>
          
          <a
          href="mailto:batrapunit1999@gmail.com"
          id="icon3"
          className="fa fa-envelope"
          ></a>
          </div>
          
          </div>
          
        
        )
    }
}
export default Footer;