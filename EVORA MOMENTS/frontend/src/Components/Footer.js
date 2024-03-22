import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#5E503F",
    padding: "20px",
    color: "white",
    textAlign: "center",
  };

  const logoStyle = {
    display: "inline-block",
    marginRight: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <div style={logoStyle}>
          <img src="logo.png" alt="Company Logo" height="30" />
        </div>
        <div style={{ display: "inline-block" }}>
          <a href="/about" style={linkStyle}>About Us</a>
          <a href="/contact" style={linkStyle}>Contact Us</a>
          <a href="/gallery" style={linkStyle}>Gallery</a>
          <a href="/connect" style={linkStyle}>Connect</a>
          
        </div>
        <div style={{ float: "left"}}>
          <p></p>
        </div>
        <div style={{ float: "right" }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
      <hr />
      <p style={{ fontSize: '10px', marginBottom: '10px' }}>COPYRIGHT 2023 © EVORA MOMENTS PHOTOGRAPHY</p>
    </footer>
  );
}

export default Footer;
