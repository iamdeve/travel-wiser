import React from 'react';
import classes from './Navbar.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import CHEV_DOWN from '../../assets/chevron_down.png';
import BELL from '../../assets/notification.png';
function TopNavBar({ login, margin }) {
	return (
		<div className={classes.Navbar} style={margin ? { marginTop: 0 } : {}}>
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
						<NavDropdown
							title={
								<div>
									Community <img style={{ width: '10px', height: '5px' }} src={CHEV_DOWN} alt='chevrown' />
								</div>
							}
							id='community-dropdown'>
							<NavDropdown.Item style={{ color: '#000' }} href='/'>
								Action
							</NavDropdown.Item>
							<NavDropdown.Item style={{ color: '#000' }} href='/'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item style={{ color: '#000' }} href='/'>
								Something
							</NavDropdown.Item>
						</NavDropdown>
						{login ? (
							<>
								<Nav.Link href='/notification'>
									<img src={BELL} style={{width:'20px', height:'23px'}} alt="notification"  />
								</Nav.Link>
								<NavDropdown
									title={
										<div>
											Yamin Yasin <img style={{ width: '10px', height: '5px' }} src={CHEV_DOWN} alt='chevrown' />
										</div>
									}
									id='community-dropdown'>
									<NavDropdown.Item style={{ color: '#000' }} href='/'>
										Action
									</NavDropdown.Item>
									<NavDropdown.Item style={{ color: '#000' }} href='/'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item style={{ color: '#000' }} href='/'>
										Something
									</NavDropdown.Item>
								</NavDropdown>
							</>
						) : (
							<>
								<Nav.Link className={classes.customLink} href='/login'>
									Login
								</Nav.Link>
								<Nav.Link className={classes.customLink} href='/signup'>
									Sign up
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default TopNavBar;
