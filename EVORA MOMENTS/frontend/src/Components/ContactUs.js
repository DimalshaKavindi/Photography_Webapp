import React from "react";

function ContactUs(){

    const navLinkStyle = {
        color: 'white',
        marginLeft: '25px', 
        marginRight: '20px', 
        textDecoration: 'none',
        fontWeight:'bold',
      };
    
      const headerStyle = {
          background: `url('./Images/back4.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '600px', 
        };
    
      const overlayStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
      };
    
      const navContainerStyle = {
        position: 'absolute',
        top: '30px', 
        right: '20px', 
        zIndex: '1', 
        display: 'flex',
        alignItems: 'center',
        
      };
    
      const logoStyle = {
        width: '120px',
        marginLeft: '40px',
        marginTop: '15px'
      };
      const contentStyle = {
        backgroundColor: "#A38469", 
        padding: '20px', 
      };
      
      const putterStyle = {
        backgroundColor: "#5E503F", 
        height :'150px',
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center" ,
        padding:"80px"
      };
      const handleHover = (e) => {
        e.target.style.textDecoration = 'none';
        e.target.style.color = "#A38469";
    
        if (e.target.classList.contains('login-box')) {
          e.target.style.backgroundColor = "#FFFFFF"; // Change to the desired hover color
        }
      };
    
      const handleHoverExit = (e) => {
        e.target.style.textDecoration = 'none';
        e.target.style.color = "white";
    
        if (e.target.classList.contains('login-box')) {
          e.target.style.backgroundColor = "#A38469"; // Change to the desired hover color
        }
      };

      
    return(
        <div>
       
       <header style={headerStyle}>
                <div style={overlayStyle}></div>
                <div className="left">
                    <img
                        src="./Images/logo1.png"
                        style={logoStyle}
                        className="nav-image"
                        alt="Logo"
                    />

            <nav style={navContainerStyle}>
            <a href="/" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
              Home
            </a>
            <a href="/about" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
              About Us
            </a>
            <a href="/gallery" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
              Galleries
            </a>

            <a href="/contact" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
              Contact Us
            </a>

            <a href="/connect" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            <div className="login-box" style={{ height: "30px", width: "95px", color: "white", backgroundColor: "#A38469", justifyContent: "center", borderRadius: "5px", paddingLeft: "12px", paddingTop: '2px', fontWeight:"revert-layer" }}>
                Connect
              </div>
            </a>
                        <a href="/signup" style={navLinkStyle}></a>
                    </nav>
                </div>
                
            </header>
        <div style={contentStyle} >
        <div style={{ marginBottom:"60px"}}>
          <p></p>
          <p class="font-weight-bold" style={{fontFamily: 'Khand, sans-serif',color: '#DEB887',fontSize: "25px",justifyContent: 'center',alignItems: 'center',position: 'absolute',left:'40%',marginBottom :'250px',}}>
           TO REACH US
          </p>
          </div>
          <div >
            <form style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop:"75px"}}>
            <div style={{color:"white",fontSize:"18px", marginLeft:"18%", marginRight:"12%"}}>
          <h5>EMAIL</h5>
          <p style={{ textDecoration: "underline", color: "black" , marginBottom:'40px' }}>evoramoments@gmail.com</p>
          <h5>HOT LINE</h5>
          <p style={{ textDecoration: "underline", color: "black" , marginBottom:'40px'}}>+94768009711</p>
          <h5>LOCATION</h5>
          <p style={{ color: "black" }}>EVORA MOMENTS PHOTOGRAPHY</p>
          <p style={{  color: "black" }}>GALLE ROAD</p>
          <p style={{ color: "black" , marginBottom:'40px' }}>RATHMALANA</p>
          <h5>FOLLOW US</h5>
          <p style={{ textDecoration: "underline", color: "black"}}>www.facebook.com/evoramoments</p>
          <p style={{ textDecoration: "underline", color: "black", marginBottom:'40px' }}>www.instagram.com/evoramoments</p>
        </div>
        <p style={{ color: "white" ,fontSize:"18px"}}>You have to login to find out more about our services! Please call us with any questions, or send us a message.</p>
            </form>
        </div>
      </div>

      <div style={putterStyle}>
        <hr/>
        <p style={{color:'white', fontSize:'15px'}}>COPYRIGHT 2023 © EVORA MOMENTS PHOTOGRAPHY</p>
      </div>
    </div>
  );
}
        

export default ContactUs;
