import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
    // bind the function
    this.addUser = this.addUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }


  // updating the data into the table - using getUsers
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }


  addUser() {
    // react router in App.js made a history obj, router passes history obj to each router as a props
    this.props.history.push('/add_user');
  }


  // redirect to user
  updateUser(id) {
    this.props.history.push(`/update_user/${id}`);
  }

  deleteUser(id){
    UserService.deleteUser(id).then( res => {
      this.setState({users: this.state.users.filter(user => user.id !== id )});
    });
  }



  render() {
    return (
      <div>
        <h2 className="text-center"> User List</h2>

        <div className="row">
          <div class="column">
            <button className="btn btn-primary" onClick={this.addUser}> Add User </button>
          </div>
        </div>

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
                      <td>
                        <button className="btn btn-info" onClick={ ()=> this.updateUser(user.id)}> Update </button>
                        <button style = {{marginLeft : "10px"}} className="btn btn-danger" onClick={ ()=> this.deleteUser(user.id)}> Delete </button>
                      </td>
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
