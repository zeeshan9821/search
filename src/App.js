import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Dashboard from "./dashboard";
import Home from "./home";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uname: "",
      unameValid: false,
      formValid: false,
      formErrors: { uname: "", upwd: "" },

      upwd: "",
      upwdValid: false,
      status: false,
    };
  }

  handleUserData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateForm(name, value);
      }
    );
  };

  validateForm = (name, value) => {
    //validations
    let l_uname = this.state.unameValid;
    let l_formErrors = this.state.formErrors;

    let l_upwd = this.state.upwdValid;

    switch (name) {
      case "uname":
      
        value == "test"
          ? (l_uname = true)
          : (l_uname = false);
        l_formErrors.uname = l_uname ? "" : "username is not valid";
        break;

      case "upwd":

        value == "test"
          ? (l_upwd = true)
          : (l_upwd = false);
        l_formErrors.upwd = l_upwd ? "" : "Password not matched";
        break;
    }
    this.setState(
      {
        unameValid: l_uname,
        upwdValid: l_upwd,
        formErrors: l_formErrors,
      },
      this.finalFun
    );
  };

  finalFun = () => {
    this.setState({
      formValid: this.state.unameValid && this.state.upwdValid,
    });
  };

  register = (event) => {
    event.preventDefault();
    this.setState({
      status: this.state.formErrors,
    });
    localStorage.setItem("login", this.state.uname);
  };

  render() {
    if (this.state.status) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <br></br>
            <br></br>
            <form className="form-horizontal" onSubmit={this.register}>
              <div className="form-group">
                <label
                  className="control-label 
                                        col-xs-2"
                >
                  Admin*
                </label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    placeholder="user name"
                    value={this.state.uname}
                    name="uname"
                    className="form-control"
                    onChange={this.handleUserData}
                    required
                  />
                  <span className="help-block">
                    {this.state.formErrors.uname}
                  </span>
                </div>
                <div className="col-xs-1">
                  <span
                    className="form-control 
                                        glyphicon glyphicon-info-sign"
                    data-toggle="tooltip"
                    style={{ border: "none" }}
                    title="minimum 6 characters are required"
                  ></span>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-xs-2">Password*</label>

                <div className="col-xs-8">
                  <input
                    type="password"
                    name="upwd"
                    placeholder="Password"
                    value={this.state.upwd}
                    className="form-control"
                    required
                    onChange={this.handleUserData}
                  />
                  <span className="help-block">
                    {this.state.formErrors.upwd}
                  </span>
                </div>
                <div className="col-xs-1">
                  <span
                    className="form-control glyphicon glyphicon-info-sign"
                    data-toggle="tooltip"
                    title="Must contain at least one number and one uppercase and 
                      lowercase letter, and at least 8 or more characters
                      "
                  ></span>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-6">
                  <button
                    className="btn btn-success btn-sm"
                    disabled={!this.state.formValid}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
