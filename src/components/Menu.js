import React from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline, MDBBtn} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
export default () =>
    <Router>
     <MDBNavbar color="default-color" dark expand="md">
       <MDBNavbarNav left>
         <MDBNavItem active>
           <MDBNavLink to="#!">Users</MDBNavLink>
            </MDBNavItem>
         <MDBNavItem>
          <MDBNavLink to="#!">Reports</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Notifications </MDBNavLink>
              </MDBNavItem>
          </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
               <MDBBtn rounded>Create</MDBBtn>
              </div>
            </MDBFormInline>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  </Router>
