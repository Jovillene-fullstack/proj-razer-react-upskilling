import React from "react";

const Subnav = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
    console.log("hello");
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    // console.log("hello");
  };

  const openNav2 = () => {
    document.getElementById("myNav2").style.width = "100%";
  };

  const closeNav2 = () => {
    document.getElementById("myNav2").style.width = "0%";
  };

  const openNav3 = () => {
    document.getElementById("myNav3").style.width = "100%";
  };

  const closeNav3 = () => {
    document.getElementById("myNav3").style.width = "0%";
  };

  return (
    <div>
      <div id="myNav" className="overlay">
        <div className="first-nav">
          <div className="nav-label">
            <h2>MENU</h2>
          </div>
          <button
            href={void 0}
            className="btn-mobile closebtn"
            onClick={closeNav}
          >
            &times;
          </button>
        </div>
        <div className="overlay-content">
          <a
            onClick={openNav2}
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            products
          </a>
          <a className="nav-link" href="#">
            about
          </a>

          <a className="nav-link" href="#">
            community
          </a>

          <a className="nav-link" href="#">
            contact us
          </a>

          <button className="btn rounded-pill" type="submit">
            buy now
          </button>
        </div>
      </div>
      <span className="open" onClick={openNav}>
        &#9776;
      </span>

      <div id="myNav2" className="overlay">
        <div className="first-nav">
          <div className="nav-label">
            <h2>products</h2>
          </div>
          <a href={void 0} className="btn-mobile closebtn" onClick={closeNav}>
            &times;
          </a>
        </div>
        <div className="overlay-content">
          <a href="#">laptops </a>
          <a href="#">mobiles</a>
          <a href="#">mouses & mats</a>
          <a href="#">keyboards</a>
          <a href="#" className="nav-link dropdown-toggle" onClick={openNav3}>
            headset & audio
          </a>
          <a href="#">console</a>
        </div>
      </div>

      <div id="myNav3" className="overlay">
        <div className="first-nav">
          <div className="nav-label">
            <h2>headset & audio</h2>
          </div>
          <a href={void 0} className="btn-mobile closebtn" onClick={closeNav3}>
            &times;
          </a>
        </div>
        <div className="overlay-content">
          <a href="#">wired </a>
          <a href="#">wireless</a>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
