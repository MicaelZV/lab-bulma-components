import React, { Component } from "react";
import CoolButton from "./CoolButton";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <CoolButton mike="is-rounded my-class is-danger is-small">
                Login
              </CoolButton>
              <CoolButton mike="is-small is-success">Sign-up</CoolButton>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
