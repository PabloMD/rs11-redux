import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux";

class Users extends React.Component {

    componentDidMount(){
      if(!this.props.users.length && !this.props.reset){
        this.props.fetchUsers();
      }
    }

  render() {
      const { users, isLoading } = this.props;

    return (
      <div>
        { isLoading && <p>Loading in progress ...</p>}
        {users && users.map((u) => (
          <div key={u.login.uuid}>{u.login.username}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  reset: state.users.reset
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
