import React from 'react';
import '../Footer/Footer.css' 

function Footer() {
  return (
    <>
<div className="footer">
<div className="footer_customize">
  <div className="col1">
    
    <h2>Quick</h2>

    <div className="decription-content">
      <p>
        here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes here my baby goes here
        my baby goes here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes
        my baby goes here my baby goeshere my baby goeshere my baby goes
      </p>
      <i className="fa-brands fa-facebook social-media-icons f-icon"></i>
      <i className="fa-brands fa-google-plus social-media-icons g-icon"></i>
      <i className="fa-brands fa-twitter social-media-icons t-icon"></i>
      <i className="fa-brands fa-instagram social-media-icons i-icon"></i>
    </div>
  </div>

  <div className="col2">
    <h2>Quick</h2>
    <ul className="link-set">
      <li><a href="https://www.google.com/">Home</a></li>
      <li><a href="https://www.google.com/">News</a></li>
      <li><a href="https://www.google.com/">About Us</a></li>
      <li><a href="https://www.google.com/">Contact Us</a></li>
    </ul>
  </div>

  <div className="col3">
    <h2>Recent</h2>

    <ul>
    <li><a href="https://www.google.com/">
        <div className="footr-crd">
          <img src={require('../../images/moa.jpg')} alt='' />
          <div className="footer-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <p>13 Mar , 2022</p>
          </div>
        </div>
      </a>
    </li>
   
    
  

    <li>
      <a href="https://www.google.com/">
        <div className="footr-crd">
          <img src={require('../../images/50823123_101.jpg')} alt='' />
          <div className="footer-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <p>13 Mar , 2022</p>
          </div>
        </div>
      </a>
    </li>
    
    </ul>

  </div>


  <div className="col4">
    <h2>Newsletter</h2>
    <p>
      here my baby goes here my baby goes here my baby goeshere my baby goes here
    </p>
    <button className="sub-btn">Subscribe to our News Letter</button>
    <div className="newsL-sub">
      <input type="email" placeholder="Enter E-mail" id="email-input" /><span id="sub-btn">&#10168;</span>
    </div>
  </div>
  </div>
  <div className="authority">
    <h6>Designed & built by three of unity</h6>
    <p>Copyright <span>&#169;</span> 2022 three of unity part of Code Evolution Group.All rights reserved</p>
  </div>


  
</div>
    </>
  )
}

export default Footer