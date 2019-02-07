import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUpAction } from "../../actions/signupAction";
import SignupForm from "../../components/Signup/Signup";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      error: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps.data;
    if (error) {
      this.setState({ error });
    }

    if (nextProps.data.toString().includes("verification")) {
      const { history } = this.props;
      history.push("/login");
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { email, password, name, phone } = this.state;
    const data = {
      email,
      password,
      name,
      phone
    };
    const { signUpAction: SignupAction } = this.props;

    SignupAction(data);
  };

  render() {
    const { error } = this.state;
    return (
      <SignupForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        errors={error}
      />
    );
  }
}

Signup.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  signUpAction: PropTypes.func.isRequired,
  history: PropTypes.shape({})
};

Signup.defaultProps = {
  data: {},
  history: {}
};

export const mapStateToProps = state => ({
  signupOK: state.signupReducer.success,
  signupFailed: state.signupReducer.error
});

export default connect(
  mapStateToProps,
  { signUpAction }
)(Signup);
