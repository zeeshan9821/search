import React from 'react';
import './EmployeeData.css';
import EmployeeDetails from '../employeeDetails/EmployeeDetails';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

 function EmployeeData({data,key,history,match}) {
  let arr=[];
    let flag=false;
   const userhandler=(id)=>{
    arr.push(data);
    flag=true;
    console.log(arr);
    console.log(flag);
    
   } 
    return (
      <React.Fragment>
    
  <div class="col-md-4">
  <div id="service">
        <div class="box" onClick={()=>history.push(`${match.url}/${data.id}`)}>
          <img src={data.image} alt="gyt" />
          <h2 class="h-secondary center ">{data.emp_name}</h2>
          <p>
            {data.emp_department}
          </p>
        </div>
        </div>
  </div>
      
  </React.Fragment>
    )
}
export default withRouter(EmployeeData);