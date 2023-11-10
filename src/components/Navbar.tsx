import React from "react";

function Navbar() {
  return (
    <nav>
      <header className="menu">
        <div className="logo">
          <img src="/src/assets/logo (1).svg" alt="logo" />
        </div>
        <div className="menu-design"></div>
        <ul className="menu-nav">
          <li>
            <a href="/">
              <span>01</span> Home
            </a>
          </li>
          <li>
            <a href="/">
              <span>02</span> Destination{" "}
            </a>
          </li>
          <li>
            <a href="/">
              <span>03</span> Crew
            </a>
          </li>
          <li>
            <a href="/">
              <span>04</span> Technology
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default Navbar;
