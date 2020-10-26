import React from "react";

function UserTable(props) {
  return (
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
            {/* Table header goes here */}
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
          {/* Mapping the table body */}
        {props &&
          props.data &&
          props.data.map((user, key) => {
            return (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.Address}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default UserTable;
