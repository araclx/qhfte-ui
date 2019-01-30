import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input
} from 'reactstrap';


class Header extends Component {
    state = {
        isOpen: false
    }

    toggleHeader = () => {
        this.setState((state, props) => {
            return { isOpen: !state.isOpen }
        });

    }
    render() {
        return (
            <Navbar color="white" light expand="md" className="sticky-top border-bottom">
                <NavbarBrand href="/">REKTRA</NavbarBrand>
                <NavbarToggler onClick={this.toggleHeader} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="col-sm-3 col-md-8"  navbar>
                        <Input placeholder='search' />
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="row ml-0 mt-2">
                            <NavLink href="/components/" 
                            className="numberCircle bg-primary text-white d-inline">J</NavLink>
                        
                        <UncontrolledDropdown nav inNavbar className="d-inline ml-1">
                            <DropdownToggle nav caret>Jakub Olan</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;