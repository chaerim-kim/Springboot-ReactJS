import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []

    }
  }

  // updating the data into the table - using getUsers
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });

  }
  render() {
    return (
      <div>
        <h2 className="text-center"> User List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> User First Name </th>
                <th> User Last Name </th>
                <th> User Email </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.users.map(
                  user =>
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.surName}</td>
                      <td>{user.emailId}</td>
                    </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default ListUserComponent;
