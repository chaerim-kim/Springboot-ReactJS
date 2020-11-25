import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props){
        super(props)

        //  initial empty field
        this.state ={
            firstName: '',
            surName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    
    saveUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, surName: this.state.surName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(user));
    
        UserService.createUser(user).then(res =>{
            this.props.history.push('/users')
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({surName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }


    render() {
        return (
            <div>
                <div className="contianer">
                    <div className = "row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <div className= "form-group">
                                    <label> First name: </label>
                                    <input placeholders="First Name" name="firstName" className = "form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    {/* as soon as we input sth on value, it triggers the handler */}
                                </div>

                                <div className= "form-group">
                                    <label> Last name: </label>
                                    <input placeholders="Last Name" name="surName" className = "form-control"
                                           value={this.state.surName} onChange={this.changeLastNameHandler}/>
                                </div>

                                <div className= "form-group">
                                    <label> Email Id: </label>
                                    <input placeholders="Email Id" name="emailId" className = "form-control"
                                           value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                </div>

                                <button className = "btn btn-success" onClick={this.saveUser}>Save</button>
                                <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel</button>



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateUserComponent;