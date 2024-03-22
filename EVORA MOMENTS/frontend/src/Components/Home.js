import React from "react";
import Footer from "./Footer";

function Home() {
  const navLinkStyle = {
    color: 'white',
    marginLeft: '25px',
    marginRight: '20px',
    textDecoration: 'none',
    fontWeight:'bold',
  };

  const headerStyle = {
    background: `url('./Images/back1.png')`,
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

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
  };

  const logoStyle = {
    width: '120px',
    marginLeft: '40px',
    marginTop: '15px'
  };

  const contentStyle = {
    backgroundColor: "#EDE0D4",
    padding: '20px',
  };

  
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "20px",
  };

  const boxStyle = {
    backgroundColor: "#e6ccb2",
    padding: "20px",
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

  return (
    <div>
      <header style={headerStyle}>
        <div style={overlayStyle}></div>
        <div className="left" >
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
              <div className="login-box" style={{ height: "30px", width: "95px", color: "white", backgroundColor: "#A38469", justifyContent: "center", borderRadius: "5px", paddingLeft: "12px", paddingTop: '2px', fontWeight:"bolder" }}>
                Connect
              </div>
            </a>
            <a href="/signup" style={navLinkStyle}></a>
          </nav>
        </div>
        <div style={contentContainerStyle}>
          <form style={{ width: "300px", fontSize: "40px", fontWeight: "bold", color: "white" }}>
            <p>Capture pure romantic moments of love story now and forever</p>
          </form>
        </div>
      </header>
      <div style={contentStyle} >
        <div style={{ marginBottom: "60px" }}>
          <p></p>
          <p className="font-weight-bold" style={{ fontFamily: 'Khand, sans-serif', color: '#DEB887', fontSize: "20px", justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '8%', marginBottom: '100px', }}>
            OVERVIEW
          </p>
        </div>

        <div style={{ marginLeft: '12%', marginRight: "12%" }}>
          <div style={gridContainerStyle}>

            <div style={boxStyle}>
              <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px" }}>WEDDING SHOOTS</h1>
              <p>Many of us have a story to tell and with our wedding photography, we can tell your story for years to come. We’ll help you preserve the details, moments, and emotions.</p>
            </div>


            <div style={boxStyle}>
              <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px" }}>ENGAGEMENTS</h1>
              <p>Engagements are a unique way to capture the love between two people. Capturing the emotions of the moment and freezing them in time is what engagement photography is all about.</p>
            </div>


            <div style={boxStyle}>
              <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px" }}>CASUAL SHOOTS</h1>
              <p>Casual shoots are a great way to get comfortable in front of the camera and to get some practice in. We do offer casual shoots and they are a great way to get started.</p>
            </div>


            <div style={boxStyle}>
              <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px" }}>EVENTS</h1>
              <p>Whether it s a corporate gathering or a milestone celebration, our event photography preserves the atmosphere and energy of the occasion.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
