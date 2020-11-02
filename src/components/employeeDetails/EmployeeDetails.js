import React from "react";
import { withRouter, Link } from "react-router-dom";
import employee from "../data";
import "./EmployeeDetails.css";
import image from "./images/1.jpg";


// ********************map***********************************
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class EmployeeDetails extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onInfoWindowClose = () => {};
  onHover = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    let arr = employee.filter((x) => {
      return x.id == this.props.match.params.topicId;
    });

    return (
      <React.Fragment>
        {arr.map((emp) => (
          <div>
            <div
              className="banner"
              id="home"
              style={{ background: `${image}` }}
            >
              <div className="container">
              <Link to='/logout' style={{     float: "right",
    marginTop: "30px"}}>Logout</Link>
                <div className="w3l-banner-grids">
                  <div className="col-md-8 w3ls-banner-right">
                    <div className="banner-right-img">
                      <img
                        src={emp.image}
                        alt="asda"
                      />
                    </div>
                    <div className="banner-right-info">
                      <Map
                        style={{ width: "60%", height: "250px" }}
                        google={this.props.google}
                        zoom={14}
                        onClick={() => this.onMapClicked(emp)}
                      >
                        <Marker
                          onMouseover={this.onHover}
                          name={emp.emp_name}
                          designaton = {emp.emp_designation}
                        />

                        <InfoWindow
                          marker={this.state.activeMarker}
                          visible={this.state.showingInfoWindow}
                        >
                          <div>
                            <h5 >{this.state.selectedPlace.name}</h5>
                            <h5>{this.state.selectedPlace.designaton}</h5>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="col-md-4 w3ls-banner-left">
                    <div className="w3ls-banner-left-info">
                      <h4>Job Title</h4>
                      <p>{emp.emp_designation}</p>
                    </div>
                    <div className="w3ls-banner-left-info">
                      <h4>Name</h4>
                      <p>{emp.emp_name}</p>
                    </div>
                    <div className="w3ls-banner-left-info">
                      <h4>Department</h4>
                      <p>{emp.emp_department}</p>
                    </div>
                    <div className="w3ls-banner-left-info">
                      <h4>Address</h4>
                      <p>{emp.emp_address}</p>
                    </div>
                    <div className="w3ls-banner-left-info">
                      <h4>Experience</h4>
                      <p>{emp.emp_experience}</p>
                    </div>
                    <div className="w3ls-banner-left-info">
                      <h4>Salary</h4>
                      <p>{emp.emp_salary}</p>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <div className="map-grid">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783" className="map" style={{border:'0' ,allowfullscreen:''}}></iframe> */}
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBH50czI2X0Nqb7TGIvbKiH1w4MxJ1URbk",
})(withRouter(EmployeeDetails));
