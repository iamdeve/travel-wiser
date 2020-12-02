import React from 'react';
import classes from './Main.module.css';
import TopNavBar from '../../components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
function Main() {
	return (
		<div className={classes.MainContainer}>
			<div className={classes.Main}>
				<Container>
					<TopNavBar login margin />
				</Container>
			</div>

			<div className={classes.Vector} style={{ height: '100px', overflow: 'hidden' }}>
				<svg viewBox='0 0 500 150' preserveAspectRatio='none' style={{ height: '100%', width: '100%' }}>
					<path d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z' style={{ stroke: 'none', fill: '#fff' }}></path>
				</svg>
			</div>
		</div>
	);
}

export default Main;
