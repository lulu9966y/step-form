import React, { Component } from "react";
import MulThemeProvider from "material-ui/styles/MuiThemeProvider"; //MulThemeProvider is a component
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MulThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")} //{this.props.handleChange("city")}, set state with user-input
            defaultValue={values.city} //{this.props.values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true} // value of attribute can only be string/object
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false} // value of attribute can only be string/object
            style={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;
