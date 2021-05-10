import React from "react";
import { connect } from "react-redux";
import { resetUsers, fetchUsers, addUser } from "../Users/redux";
import { addMessage } from "../Message/redux";
import { TYPE_NOTICE, TYPE_WARNING } from "../Message/Message";

class Home extends React.Component{

    render(){
    const handleLoadUsers = () => {
        this.props.addMessage(TYPE_NOTICE, "Load hit");
        this.props.resetUsers();
        this.props.fetchUsers();
    };
    const handleAddUser = () => {
      this.props.addMessage(TYPE_NOTICE, "Add hit");
        this.props.addUser();
    };
        const handleResetClick = () => {
          this.props.addMessage(TYPE_WARNING, "Reset hit");
                this.props.resetUsers();
        };
        return (
          <div>
            <h1>Hello HomE</h1>
            <button onClick={handleLoadUsers}>Load</button>
            <button onClick={handleResetClick}>Reset</button>
            <button onClick={handleAddUser}>Add</button>
          </div>
        );
    }
}


export default connect(null, { resetUsers, fetchUsers, addUser, addMessage })(
  Home
);