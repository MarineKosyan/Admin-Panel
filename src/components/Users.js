import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

export default () => <div>
<button type="button" className="btn btn-default">Create User</button>
    <MDBTable bordered>
      <caption className = "caption">Users</caption>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
        <td>Mark</td>
         <td>aaaa</td>
         <td>PM</td>
         <td><button>Edit</button> <button>Delete</button></td>
       </tr>
       <tr>
         <td>Jone</td>
         <td>bbbb</td>
         <td>Admin</td>
         <td><button>Edit</button> <button>Delete</button></td>
       </tr>
       <tr>
         <td>Jane</td>
         <td>cccc</td>
         <td>Developer</td>
         <td><button>Edit</button> <button>Delete</button></td>
       </tr>
     </MDBTableBody>
   </MDBTable>
</div>
