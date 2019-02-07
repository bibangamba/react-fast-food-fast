import React from "react";
import PropTypes from "prop-types";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Signup = ({
  onChange,
  onSubmit,
  registerButtonText,
  registerButtonDisabled
}) => (
  <MDBContainer className="mt-5">
    <MDBRow className="justify-content-center">
      <MDBCol md="6" className="mt-4">
        <form onSubmit={onSubmit} className="w-100 ">
          <p className=" text-black-50 h4 text-center mb-1">Sign up</p>
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="text-black-50  w-100"
          >
            Full name
            <input
              type="text"
              name="name"
              onChange={onChange}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
          </label>
          <br />
          <label
            htmlFor="defaultFormRegisterEmailEx"
            className="text-black-50 w-100"
          >
            Email address
            <input
              type="email"
              name="email"
              onChange={onChange}
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
          </label>
          <br />
          <label
            htmlFor="defaultFormRegisterPhoneEx"
            className="text-black-50 w-100"
          >
            Phone number
            <input
              name="phone"
              type="tel"
              onChange={onChange}
              id="defaultFormRegisterPhoneEx"
              className="form-control"
            />
          </label>
          <br />
          <label
            htmlFor="defaultFormRegisterPasswordEx"
            className="text-black-50 w-100"
          >
            Password
            <input
              name="password"
              type="password"
              onChange={onChange}
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
          </label>
          <br />
          <label
            htmlFor="defaultFormRegisterRepeatPasswordEx"
            className="text-black-50  w-100"
          >
            Confirm password
            <input
              name="confirm_password"
              type="password"
              onChange={onChange}
              id="defaultFormRegisterRepeatPasswordEx"
              className="form-control"
            />
          </label>

          <div className="text-center mt-4">
            <MDBBtn
              disabled={registerButtonDisabled}
              color="rgba-blue-strong"
              className="rgba-blue-strong"
              type="submit"
            >
              {registerButtonText}
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

Signup.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  registerButtonDisabled: PropTypes.bool,
  registerButtonText: PropTypes.string
};

Signup.defaultProps = {
  registerButtonDisabled: false,
  registerButtonText: "Register"
};

export default Signup;
