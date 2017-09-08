import React, {Component} from 'react';


import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    render() {
       
        return (
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#/products">E Store</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="#/products" eventKey={1}>Products</NavItem>
            </Nav>
            <Nav bsClass="nav navbar-right">
                <NavItem href="#/cart" eventKey={2}>Cart</NavItem>
            </Nav>
        </Navbar>
    );
    }
}



export default Header;
