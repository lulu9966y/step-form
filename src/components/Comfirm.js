import React, { Component } from "react";
import MulThemeProvider from "material-ui/styles/MuiThemeProvider"; //MulThemeProvider is a component
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Comfirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    
  render() {
    const { values } = this.props;
    return (
      <MulThemeProvider>
        <React.Fragment>
          <AppBar title="Comfirm User Data" />
          <List>
              <ListItem primaryText="First Name" secondaryText={values.firstName} />
              <ListItem primaryText="Last Name" secondaryText={values.lastName} />
              <ListItem primaryText="Email" secondaryText={values.email} />
              <ListItem primaryText="Occupation" secondaryText={values.occupation} />
              <ListItem primaryText="City" secondaryText={values.city} />
              <ListItem primaryText="Bio" secondaryText={values.bio} />
          </List>
          <RaisedButton
            label="Confirm & Continue"
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

export default Comfirm;
