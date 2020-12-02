import React from 'react';
import classes from './Home.module.css';
import { Container } from 'react-bootstrap';
import TopNavBar from '../../components/Navbar/Navbar';
import HomeForm from '../../components/HomeForm/HomeForm';
function Home() {
	return (
		<div className={classes.homeContainer}>
			<Container>
				<TopNavBar />
				<HomeForm />
			</Container>
		</div>
	);
}

export default Home;
