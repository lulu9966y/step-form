import React, { Component } from "react";
import MulThemeProvider from "material-ui/styles/MuiThemeProvider"; //MulThemeProvider is a component
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MulThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
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

export default Success;
