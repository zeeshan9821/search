import React, { Component } from "react";
import "./dashboard.css";
import employee from "./data";
import EmployeeData from "./employeeData/EmployeeData";
import { Link } from "react-router-dom";

export default class Dashboard extends React.Component {
  constructor(props) {
    let mail = localStorage.getItem("login");
    super(props);

    this.state = {
      employees: employee,
      filteredData: employee,
      value: "",
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      let filteredValue = this.state.employees.filter((data, i) => {
        return this.state.value == data.emp_department;
      });
      console.log("filteredValue", filteredValue);
      this.setState({
        filteredData: filteredValue,
      });
    } else {
      this.setState({
        filteredData: this.state.employees,
      });
    }
  };

  render() {
    let names = this.state.employees.map((o, i) => {
      return o.emp_department;
    });

    let uniqueNames = names.filter(function (i, index) {
      return names.indexOf(i) == index;
    });

    return (
      <div className="container">
        <div className="row">
          <Link to="/logout" style={{ float: "right", marginTop: "30px" }}>
            Logout
          </Link>
          <section className="service-box">
            <section id="form-section">
              <div className="form">
                <div className="form-item">
                  <form onSubmit={this.handleSubmit}>
                    <select
                      name="slt-1"
                      id="slt-1"
                      value={this.state.value}
                      onChange={this.onChange}
                    >
                      <option value="">Select the Department</option>
                      {uniqueNames.map((uniqueName) => (
                        <React.Fragment>
                          <option
                            value={uniqueName}
                            onClick={() => this.dropdownHandle(uniqueName)}
                          >
                            {uniqueName}
                          </option>
                        </React.Fragment>
                      ))}
                    </select>
                    <button type="submit">Submit</button>

                    <a href="#"> </a>
                  </form>
                </div>
              </div>
            </section>
            {this.state.filteredData.map((data, index, history) => (
              <EmployeeData data={data} key={data.id} history={history} />
            ))}
          </section>
        </div>
      </div>
    );
  }
}
