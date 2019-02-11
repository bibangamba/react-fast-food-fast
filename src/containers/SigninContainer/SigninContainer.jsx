import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { signinAction } from "../../actions/signinAction";
import SigninForm from "../../components/Signin/Signin";

export class SigninContainer extends Component {
  state = {
    email: "",
    password: "",
    signinFailed: undefined,
    signinSuccess: undefined,
    signinButtonText: "Signin",
    signinButtonDisabled: false
  };

  componentWillReceiveProps(nextProps) {
    const { signinFailed, signinSuccess, diffState } = nextProps;
    if (signinFailed) {
      toast.error(signinFailed);
      this.setState({
        signinFailed,
        diffState,
        signinButtonDisabled: false,
        signinButtonText: "Signin"
      });
    } else if (signinSuccess) {
      const { history, changeLoginState } = this.props;
      changeLoginState(true);
      // window.location.href = "/menu";
      history.push("/menu");
      toast.success(signinSuccess);
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      signinButtonDisabled: true,
      signinButtonText: "Signing in..."
    });
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    const { signinAction: SignupAction } = this.props;

    SignupAction(data);
  };

  render() {
    const {
      signinSuccess,
      signinFailed,
      diffState,
      signinButtonText,
      signinButtonDisabled
    } = this.state;
    return (
      <SigninForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        signinFailed={signinFailed}
        diffState={diffState}
        signinSuccess={signinSuccess}
        signinButtonText={signinButtonText}
        signinButtonDisabled={signinButtonDisabled}
      />
    );
  }
}

SigninContainer.propTypes = {
  signinAction: PropTypes.func.isRequired,
  signinSuccess: PropTypes.string,
  signinFailed: PropTypes.string,
  diffState: PropTypes.string,
  history: PropTypes.shape({}),
  changeLoginState: PropTypes.func.isRequired
};

SigninContainer.defaultProps = {
  history: {},
  signinFailed: undefined,
  signinSuccess: undefined,
  diffState: undefined
};

export const mapStateToProps = state => ({
  signinSuccess: state.signinReducer.success,
  signinFailed: state.signinReducer.error,
  diffState: state.signinReducer.diff_in_state
});

export default connect(
  mapStateToProps,
  { signinAction }
)(SigninContainer);
