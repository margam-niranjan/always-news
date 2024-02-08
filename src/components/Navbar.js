import React, { Component } from "react";

export class Navbar extends Component {
  darkMode = () => {
    if(document.body.style.backgroundColor==="black"){
        document.body.style.backgroundColor = "white"
        document.body.style.color="black"
    }
    else{
        document.body.style.backgroundColor = "black"
        document.body.style.color="white"
    }


  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              AlwaysNews
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={this.darkMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
