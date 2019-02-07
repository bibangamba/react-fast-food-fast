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
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/menu">Menu</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/orders">Orders</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default NavigationBar;
