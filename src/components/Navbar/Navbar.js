import React from 'react';
import classes from './Navbar.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
function TopNavBar() {
	return (
		<div className={classes.Navbar}>
			<Navbar className={classes.topNavBar} expand='lg'>
				<Navbar.Brand href='/'>
					<img className={classes.logo} src={Logo} alt='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='/search'>Search</Nav.Link>
						<Nav.Link href='/find-destination'>Find Destination</Nav.Link>
						<Nav.Link href='/blog'>Blog</Nav.Link>
						<NavDropdown title='Community' id='community-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className={classes.customLink} href='/login'>Login</Nav.Link>
						<Nav.Link className={classes.customLink} href='/signup'>Sign up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default TopNavBar;
