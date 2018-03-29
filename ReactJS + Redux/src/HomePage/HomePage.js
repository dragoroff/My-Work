import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import {} from './HomePage.css'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
    <div>
            <div>
                <h1 style={{textAlign: 'center', marginTop: '25px'}}>Welcome to Store Manage System</h1>
                    <div style={{textAlign: 'center', marginTop: '25px'}}>
                            <img src="https://www.siteimage.com.ua/uploads/images/blog/08-2017/internet-magazin-1391231123412331313825.jpg" className="img-thumbnail rounded"/>
                        </div>
                           <p className="lead" style={{textAlign: 'center', marginTop: '25px', marginBottom: '25px'}}>
                               Create your own online shop in a simple way
                             </p>
            </div>
            
            {/* <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
            </div> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };