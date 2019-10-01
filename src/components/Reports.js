import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Reports = () => {
  return (
    <MDBTable bordered>
      <caption className = "caption">Users Reports</caption>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Estimation</th>
          <th>Spent</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Task 1</td>
          <td>aaaa</td>
          <td>50</td>
          <td>55</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Task 2</td>
          <td>bbbb</td>
          <td>60</td>
          <td>61</td>
          <td>Requests Changes</td>
                  </tr>
                  <tr>
                    <td>Task 3</td>
                    <td>cccc</td>
                    <td>32</td>
                    <td>31</td>
                    <td>Approved</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            );
          }
export default Reports;
