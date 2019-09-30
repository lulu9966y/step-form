import React, { Component } from "react";
import MulThemeProvider from "material-ui/styles/MuiThemeProvider"; //MulThemeProvider is a component
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MulThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")} //{this.props.handleChange("lastName")}, set state with user-input
            defaultValue={values.lastName} //{this.props.values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true} // value of attribute can only be string/object
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MulThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: "15px"
  }
};

export default FormUserDetails;
