//Parent Component
import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Comfirm from "./Comfirm"
import Success from "./Success"

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  }; //state is an object of a component

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  //Proceed to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle field change
  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  }; // ES6 <input type="text" name="name" value="" /> [name]: value

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />; //props: string/this.state.name/this.method
      case 2:
        return <FormPersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />; //props: string/this.state.name/this.method
      case 3:
        return <Comfirm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />; //props: string/this.state.name/this.method
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
