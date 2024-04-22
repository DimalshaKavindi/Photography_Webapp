import 'animate.css/animate.min.css';
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
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

  return (
    <div>
      <header style={headerStyle}>
        <div style={overlayStyle}></div>
        <Header />
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
            <img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.webp" class="animated bounce infinite" alt="Transparent MDB Logo" id="animated-img1"/>
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
