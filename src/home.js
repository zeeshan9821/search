import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import { Protected } from "./Protected";
import { Logout } from "./Logout";
import EmployeeDetails from "./components/employeeDetails/EmployeeDetails";

export default class Home extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
        
      <Switch>

          <Route exact path="/" component={App} />
          <Protected exact path="/dashboard" component={Dashboard} />
          <Protected  path="/dashboard/:topicId" component={EmployeeDetails} />
          
          <Route  path="/logout" component={Logout} />


      </Switch>
 
              );
  }
}
