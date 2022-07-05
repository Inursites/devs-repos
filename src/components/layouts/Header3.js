import React, { useState } from "react";

function Header3({ light, logoSource, bootstrapNav }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      } style={{height: 100}}
    >
      <div className="container" style={{width: "50%"}}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                >
                  Open source
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header3;
