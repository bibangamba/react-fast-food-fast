import React from "react";
import PropTypes from "prop-types";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Signin = ({
  onChange,
  onSubmit,
  signinButtonText,
  signinButtonDisabled
}) => (
  <MDBContainer className="mt-5">
    <MDBRow className="justify-content-center">
      <MDBCol md="6" className="mt-4">
        <form onSubmit={onSubmit} className="w-100 ">
          <p className=" text-black-50 h4 text-center mb-1">Sign in</p>
          <label
            htmlFor="defaultFormSigninEmailEx"
            className="text-black-50 w-100"
          >
            Email address
            <input
              type="email"
              name="email"
              onChange={onChange}
              id="defaultFormSigninEmailEx"
              className="form-control"
            />
          </label>
          <br />
          <label
            htmlFor="defaultFormSigninPasswordEx"
            className="text-black-50 w-100"
          >
            Password
            <input
              name="password"
              type="password"
              onChange={onChange}
              id="defaultFormSigninPasswordEx"
              className="form-control"
            />
          </label>

          <div className="text-center mt-4">
            <MDBBtn
              disabled={signinButtonDisabled}
              color="rgba-blue-strong"
              className="rgba-blue-strong"
              type="submit"
            >
              {signinButtonText}
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

Signin.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  signinButtonDisabled: PropTypes.bool,
  signinButtonText: PropTypes.string
};

Signin.defaultProps = {
  signinButtonDisabled: false,
  signinButtonText: "Login"
};

export default Signin;
