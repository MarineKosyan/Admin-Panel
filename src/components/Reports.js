import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Reports = () => {

  const role = JSON.parse(localStorage.getItem('login')).role;
console.log(role);
  return (
    <div>
    <button type="button" className="btn btn-default">Create Report</button>
    <MDBTable bordered>
      <caption className = "caption">Users Reports</caption>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Estimation</th>
          <th>Spent</th>
          {(role ==='admin' || role ==='developer')? <th>Status</th>: <th>Action</th>}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Task 1</td>
          <td>aaaa</td>
          <td>50</td>
          <td>55</td>
          {(role ==='admin' || role ==='developer')? <td>Approved</td>: <td><button>Approv</button>  <button>Change</button></td>}
        </tr>
        <tr>
          <td>Task 2</td>
          <td>bbbb</td>
          <td>60</td>
          <td>61</td>
          {(role ==='admin' || role ==='developer')? <td>Requests Changes</td>: <td><button>Approv</button>  <button>Change</button></td>}
          </tr>
          <tr>
            <td>Task 3</td>
            <td>cccc</td>
            <td>32</td>
            <td>31</td>
            {(role ==='admin' || role ==='developer')? <td>Approved</td>: <td><button>Approv</button>  <button>Change</button></td>}
          </tr>
        </MDBTableBody>
      </MDBTable>
      </div>
            );
          }
export default Reports;
