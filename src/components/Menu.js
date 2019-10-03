import React, {useState} from "react";
import Users from './Users';
import Reports from './Reports';
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink,  MDBBtn,MDBTabContent} from "mdbreact";
import { BrowserRouter as Router, Route  } from 'react-router-dom';

const login = JSON.parse(localStorage.getItem('login'));

const Menu = () => {

  const [activeItem,setectiveItem] = useState(1);

  const toggle = tab => () => {
    if (activeItem !== tab) {
    setectiveItem(tab);
    }
  }
  return (
    <Router>
     <MDBNavbar tabs color="default-color" dark expand="md">
       <MDBNavbarNav left>
         <MDBNavItem active>
           <MDBNavLink active={activeItem === 1}
              onClick={toggle(1)} role="tab" to="/users">Users</MDBNavLink>
         </MDBNavItem>
         <MDBNavItem>
           <MDBNavLink active={activeItem === 2}
              onClick={toggle(2)} role="tab" to="/reports">Reports</MDBNavLink>
         </MDBNavItem>
         <MDBNavItem>
           <MDBNavLink active={activeItem === 3}
              onClick={toggle(3)} role="tab" to="notifications">Notifications </MDBNavLink>
         </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
              <div className = "userName">
               Hello {login.username} ({login.role})
              </div>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
    <MDBTabContent activeItem={activeItem} >
    <Route exact path={'/users'} component={Users} />
    <Route exact path={'/reports'} component={Reports} />
    </MDBTabContent>
  </Router>
);
}
export default Menu;
