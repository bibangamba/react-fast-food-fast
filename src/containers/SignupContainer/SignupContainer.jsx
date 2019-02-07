import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { signUpAction } from "../../actions/signupAction";
import SignupForm from "../../components/Signup/Signup";

export class SignupContainer extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    phone: "",
    confirm_password: "",
    signupFailed: undefined,
    signupSuccess: undefined,
    registerButtonText: "Register",
    registerButtonDisabled: false
  };

  componentWillReceiveProps(nextProps) {
    const { signupFailed, signupSuccess, diffState } = nextProps;
    if (signupFailed) {
      toast.error(signupFailed);
      this.setState({
        signupFailed,
        diffState,
        registerButtonDisabled: false,
        registerButtonText: "Register"
      });
    } else if (signupSuccess) {
      const { history } = this.props;
      history.push("/login");
      toast.success(signupSuccess);
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      registerButtonDisabled: true,
      registerButtonText: "Saving..."
    });
    const {
      email,
      password,
      name,
      phone,
      confirm_password: confirmPassword
    } = this.state;
    const data = {
      email,
      password,
      confirm_password: confirmPassword,
      name,
      phone
    };
    const { signUpAction: SignupAction } = this.props;

    SignupAction(data);
  };

  render() {
    const {
      signupSuccess,
      signupFailed,
      diffState,
      registerButtonText,
      registerButtonDisabled
    } = this.state;
    return (
      <SignupForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        signupFailed={signupFailed}
        diffState={diffState}
        signupSuccess={signupSuccess}
        registerButtonText={registerButtonText}
        registerButtonDisabled={registerButtonDisabled}
      />
    );
  }
}

SignupContainer.propTypes = {
  signUpAction: PropTypes.func.isRequired,
  signupSuccess: PropTypes.string,
  signupFailed: PropTypes.string,
  diffState: PropTypes.string,
  history: PropTypes.shape({})
};

SignupContainer.defaultProps = {
  history: {},
  signupFailed: undefined,
  signupSuccess: undefined,
  diffState: undefined
};

export const mapStateToProps = state => ({
  signupSuccess: state.signupReducer.success,
  signupFailed: state.signupReducer.error,
  diffState: state.signupReducer.diff_in_state
});

export default connect(
  mapStateToProps,
  { signUpAction }
)(SignupContainer);
