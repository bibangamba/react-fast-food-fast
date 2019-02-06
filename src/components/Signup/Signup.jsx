import React from "react";
import PropTypes from "prop-types";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Signup = ({ onChange, onSubmit, error }) => (
  <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <p className="h6 text-center mb-4">{`problems: ${error}`}</p>
        <form onSubmit={onSubmit}>
          <p className="h4 text-center mb-4">Sign up</p>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
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
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
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
          <label htmlFor="defaultFormRegisterPhoneEx" className="grey-text">
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
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
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
            className="grey-text"
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
            <MDBBtn color="unique" type="submit">
              Register
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
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
};

Signup.defaultProps = {
  error: {}
};

export default Signup;
