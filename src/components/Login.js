import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

 const [username,setUserName] = useState("");
 const [password,setPassword] = useState("");
 localStorage.setItem('login', JSON.stringify({username: 'Marine',
                                role: 'PM'}));

 const onHandleClick = () => {
   props.history.push('/users');

 };

 const usernameHandleChange = (e) => {
   setUserName(e.target.value);console.log(username);
 };
 const passwordHandleChange = (e) => {
   setPassword(e.target.value);console.log(password);
 };
return (
    <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <form>
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            UserName
          </label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control"
            value={username}
            onChange={usernameHandleChange}
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Password
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control"
            value={password}
            onChange={passwordHandleChange}
          />
          <div className="text-center mt-4">
            <MDBBtn type="button" onClick = {onHandleClick}>Login</MDBBtn>
          </div>
        </form>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default withRouter(Login);
