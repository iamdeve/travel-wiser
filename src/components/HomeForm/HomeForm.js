import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Card, CardContent, FormControl, Input, InputLabel, InputAdornment, IconButton, TextField } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NY from '../../assets/ny.png';
import MIAMI from '../../assets/miami.png';
import TH from '../../assets/thailand.png';

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	line: {
		height: 0,
		border: 0,
		backgroundColor: '#fff',
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: '',
		2: '',
		3: '',
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}>
			{icons[String(props.icon)]}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	active: PropTypes.bool,

	completed: PropTypes.bool,

	icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '50%',
		margin: '3rem auto',
		'@media screen and (max-width:787px)': {
			width: '100%',
		},
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: '0 !important',
		marginBottom: theme.spacing(1),
	},
	stepContainer: {
		margin: '3rem 0',
	},
	step1: {
		color: '#fff',
	},
	step: {
		color: '#fff',
		background: '#F36888',
		width: '30px',
		height: '30px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '1rem auto',
		borderRadius: '50%',
		fontWeight: 'bold',
	},
	mainCard: {
		width: '60%',
		margin: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'@media screen and (max-width:787px)': {
			width: '100%',
		},
	},
	PR0: {
		marginBottom: '1rem',
		width: '50%',
		float: 'left',
		'@media screen and (max-width:787px)': {
			paddingRight: '15px',
		},
	},
	city: {
		position: 'relative',
		display: 'flex',
		width: '120px',
		height: '32px',
		margin: '.5rem 0',
	},
	cityImg: {
		display: 'block',
		width: '100%',
		height: '100%',
		borderRadius: '.3rem',
	},
	cityname: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'rgba(0,0,0,0.3)',
		fontSize: '14px',
		color: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '.3rem',
	},
	cross: {
		position: 'absolute',
		top: '-10px',
		right: '-8px',
		height: '15px',
		width: '15px',
		borderRadius: '50%',
		background: '#C4C4C4',
		display: 'flex',
		fontSize: '10px',
		cursor: 'pointer',
		justifyContent: 'center',
		textTransform: 'capitalize',
	},
	arrowRight: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dates: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		'& span':{
			margin:'0 1rem'
		}
	},
}));

function getSteps(activeStep) {
	return [
		<div className={activeStep === 0 ? 'labeInstructionBordered' : 'labeInstruction'}>
			<div>Step 1</div>
			<div>First thing first</div>
		</div>,
		<div className={activeStep === 1 ? 'labeInstructionBordered' : 'labeInstruction'}>
			<div>Step 2</div>
			<div>The Dates</div>
		</div>,
		<div className={activeStep === 2 ? 'labeInstructionBordered' : 'labeInstruction'}>
			<div>Step 3</div>
			<div>With Whom?</div>
		</div>,
		<div className={activeStep === 3 ? 'labeInstructionBordered' : 'labeInstruction'}>
			<div>Step 4</div>
			<div>Transport</div>
		</div>,
	];
}

const cities = [
	{ name: 'New York', img: NY },
	{ name: 'Miami', img: MIAMI },
	{ name: 'Thailand', img: TH },
	{ name: 'New York', img: NY },
];
function HomeForm() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [steps, setSteps] = React.useState(getSteps(activeStep));
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSteps(getSteps(activeStep + 1));
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
		setSteps(getSteps(activeStep - 1));
	};

	const handleReset = () => {
		setActiveStep(0);
		setSteps(getSteps(0));
	};

	const stepContent = [
		<div className={classes.step1}>
			<div className={classes.step}>{activeStep + 1}</div>
			<h4>First thing first</h4>
			<p>Start planning your dream trip</p>

			<Card className={classes.mainCard}>
				<CardContent>
					<FormControl style={{ width: '100%' }}>
						<InputLabel htmlFor='standard-adornment-password'>Trip name</InputLabel>
						<Input />
					</FormControl>
					<FormControl style={{ width: '100%' }}>
						<InputLabel htmlFor='standard-adornment-password'>Destination(s)</InputLabel>
						<Input
							endAdornment={
								<InputAdornment position='end'>
									<IconButton aria-label='search'>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					<div style={{ margin: '.5rem 0' }} className={classes.cities}>
						{cities.map((city, index) => (
							<div className={classes.PR0} key={index}>
								<div className={classes.city}>
									<div className={classes.cityname}>{city.name}</div>
									<div className={classes.cross}>x</div>
									<img className={classes.cityImg} src={city.img} alt={city.name} />
									<div className={classes.arrowRight}>
										<ArrowRightAltIcon />
									</div>
								</div>
							</div>
						))}
					</div>
					<FormControl style={{ width: '100%' }}>
						<InputLabel htmlFor='standard-adornment-password'>Total Budget</InputLabel>
						<Input />
					</FormControl>
				</CardContent>
			</Card>
		</div>,
		<div className={classes.step1}>
			<div className={classes.step}>{activeStep + 1}</div>
			<h4>The Dates</h4>
			<p>Choose when you want to go</p>

			<Card style={{ height: '250px' }} className={classes.mainCard}>
				<CardContent>
					<div className={classes.dates}>
						<TextField type='text' label='Start Date' />
						<span>to</span>
						<TextField type='text' label='End Date' />
					</div>
				</CardContent>
			</Card>
		</div>,
	];
	return (
		<div className={classes.root}>
			<Stepper style={{ padding: 0, position: 'relative', background: 'transparent' }} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
				{steps.map((label, index) => (
					<Step key={index}>
						<StepLabel style={{ marginTop: 0 }} StepIconComponent={ColorlibStepIcon}>
							{label}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			<div className={classes.stepContainer}>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
						<Button onClick={handleReset} className={classes.button}>
							Reset
						</Button>
					</div>
				) : (
					<div style={{ textAlign: 'center' }}>
						<div className={classes.instructions}>{stepContent[activeStep]}</div>
						<div>
							<Button disabled={activeStep === 0} onClick={handleBack} className={clsx(classes.button, 'btn-transparent')}>
								{activeStep > 0 ? (
									<>
										<ChevronLeftIcon /> Back
									</>
								) : (
									<>Cancel</>
								)}
							</Button>
							<Button variant='contained' color='primary' onClick={handleNext} className={clsx(classes.button, 'btn-filled')}>
								{activeStep === steps.length - 1 ? (
									<>Finish</>
								) : (
									<>
										Next <ChevronRightIcon />{' '}
									</>
								)}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default HomeForm;
