import React, {Component} from 'react';
import {} from './Header.css';
import {Navbar, NavbarBrand, NavbarHeader, NavItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        const {user} = this.props;
        return (
            <Navbar style={{listStyle:'none'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        Store Manager
                    </Navbar.Brand>
                </Navbar.Header>
                { user &&
                <NavItem bsStyle=""><Link to="/mystore">My store</Link></NavItem>}
                { user &&
                <NavItem bsStyle="tabs"><Link to="/login">Logout</Link></NavItem>}
                { !user &&
                <NavItem bsStyle="tabs"><Link to="/register">Register</Link></NavItem>}
                { !user&&
                    <NavItem bsStyle="tabs"><Link to="/login">Login</Link></NavItem>}
            </Navbar>
    )
    }
} 
const mapStateToProps = (state) =>
{
    const {authentication} = state;
    const {user} = authentication;
    return {
        user
    }
} 
export default connect(mapStateToProps)(Header);
