import React, { useState, useEffect } from 'react';
import classes from './Main.module.css';
import TopNavBar from '../../components/Navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CHECK from '../../assets/red-check.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import { Select, FormControl, FormGroup, FormControlLabel, InputLabel, Input, InputAdornment, IconButton, Checkbox, TextField } from '@material-ui/core';
function Main() {
	const [stepData, setStepData] = useState({
		flights: [
			{
				title: 'Return',
				value: false,
				cost: 300,
			},
			{
				title: 'One Way',
				value: false,
				cost: 500,
			},
			{
				title: 'Multi-City',
				value: false,
				cost: 700,
			},
		],

		flightCost: 0,
	});

	const costChangeHandle = async (e, index) => {
		setStepData((prevState) => ({
			...stepData,
			flights: [
				...stepData.flights.map((flight, i) => {
					if (i === index) {
						return {
							...flight,
							value: e.target.checked,
						};
					} else {
						return { ...flight };
					}
				}),
			],
			flightCost: e.target.checked ? prevState.flightCost + stepData.flights.filter((f, i) => i === index)[0].cost : prevState.flightCost - stepData.flights.filter((f, i) => i === index)[0].cost,
		}));
		console.log(stepData);
	};

	return (
		<div className={classes.MainContainer}>
			<div className={classes.Main}>
				<Container style={{ height: '100%' }}>
					<TopNavBar login margin />
					<div className={classes.headerContent}>
						<h1>Plan your trip</h1>
						<p>My adventures in Japan</p>
						<p>12/06/20 - 19/06/20</p>
					</div>
				</Container>
			</div>
			<div className={classes.Vector} style={{ height: '100px', overflow: 'hidden' }}>
				<svg viewBox='0 0 500 150' preserveAspectRatio='none' style={{ height: '100%', width: '100%' }}>
					<path d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z' style={{ stroke: 'none', fill: '#fff' }}></path>
				</svg>
			</div>

			<div className={classes.stepper}>
				<Container>
					<div className={classes.heading}>
						<Row>
							<Col>
								<h2 style={{ borderBottom: '1px solid #F36888', display: 'inline-block' }}>General</h2>
							</Col>
							<Col>
								<h2>Day by day</h2>
							</Col>
							<Col>
								<h2>Overview</h2>
							</Col>
						</Row>
					</div>
					<div className={classes.flights}>
						<h3 style={{ color: '#4F4F4F' }}>Flights</h3>
						<FormControl component='fieldset'>
							<FormGroup aria-label='position' row>
								{stepData.flights.map((flight, index) => (
									<FormControlLabel
										key={index}
										onChange={(e) => costChangeHandle(e, index)}
										value={flight.value}
										checked={flight.value}
										control={<Checkbox className={classes.checkBox} icon={<img src={CHECK} style={{ width: '25px', height: '25px' }} alt='check' />} checkedIcon={<CheckBoxIcon style={{ width: '25px', height: '25px' }} />} name='group' />}
										label={flight.title}
										labelPlacement='end'
									/>
								))}

								<div className={classes.costField}>
									<TextField value={`Cost-${stepData.flightCost}€`} />
								</div>
								<div className={classes.attachIcon}>
									<AttachFileIcon style={{ color: '#4F4F4F' }} />
								</div>
							</FormGroup>
						</FormControl>
					</div>
					<div className={classes.FlightSearch}>
						<div className={classes.from}>
							<TextField label='From' />
						</div>
						<div className={classes.sync}>
							<SyncAltIcon style={{ color: '#656565' }} />
						</div>
						<div className={classes.to}>
							<TextField label='To' />
						</div>
						<div className={classes.depart}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='depart'>Depart</InputLabel>
								<Select native defaultValue='' label='Depart' IconComponent={() => <KeyboardArrowDownIcon style={{ color: '#656565' }} />} id='depart'>
									<option aria-label='None' value='' />
									<option value={1}>Option 1</option>
									<option value={2}>Option 2</option>
								</Select>
							</FormControl>
						</div>
						<div className={classes.return}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='return'>Return</InputLabel>
								<Select native defaultValue='' IconComponent={() => <KeyboardArrowDownIcon style={{ color: '#656565' }} />} id='return'>
									<option aria-label='None' value='' />
									<option value={1}>Option 1</option>
									<option value={2}>Option 2</option>
								</Select>
							</FormControl>
						</div>
						<div className={classes.passenger}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='return'>1 Passenger</InputLabel>
								<Select native defaultValue='' IconComponent={() => <KeyboardArrowDownIcon style={{ color: '#656565' }} />} id='return'>
									<option aria-label='None' value='' />
									<option value={1}>Option 1</option>
									<option value={2}>Option 2</option>
								</Select>
							</FormControl>
						</div>
						<div className={classes.economy}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='return'>Economy</InputLabel>
								<Select native defaultValue='' IconComponent={() => <KeyboardArrowDownIcon style={{ color: '#656565' }} />} id='return'>
									<option aria-label='None' value='' />
									<option value={1}>Option 1</option>
									<option value={2}>Option 2</option>
								</Select>
							</FormControl>
						</div>
						<div className={classes.searchBtn}>
							<button>Search</button>
						</div>
					</div>
					<div className={classes.AccommodationWrapper}>
						<div className={classes.Accommodation}>
							<h3 style={{ color: '#4F4F4F' }}>Accommodation</h3>
							<div className={classes.Cost}>
								<TextField label='Cost' />
							</div>
							<div className={classes.attachIcon}>
								<AttachFileIcon style={{ color: '#4F4F4F' }} />
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default Main;
