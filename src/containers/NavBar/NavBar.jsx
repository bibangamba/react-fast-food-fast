import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { isAuthenticated } from "../../App";

class NavigationBar extends Component {
  state = {
    collapse: false,
    isWideEnough: false
  };

  onClick = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse, isWideEnough } = this.state;

    if (isAuthenticated()) {
      return (
        <header>
          <MDBNavbar
            color="rgba-blue-strong"
            fixed="top"
            dark
            expand="md"
            scrolling
          >
            <MDBNavbarBrand href="/">
              <strong>FastFoodFast</strong>
            </MDBNavbarBrand>
            {!isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/menu">Menu</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/orders">Orders</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={() => {
                      sessionStorage.clear();
                    }}
                    to="/signin"
                  >
                    Signout
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      );
    }
    return (
      <header>
        <MDBNavbar
          color="rgba-blue-strong"
          fixed="top"
          dark
          expand="md"
          scrolling
        >
          <MDBNavbarBrand href="/">
            <strong>FastFoodFast</strong>
          </MDBNavbarBrand>
          {!isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Signup</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/signin">Signin</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default NavigationBar;
