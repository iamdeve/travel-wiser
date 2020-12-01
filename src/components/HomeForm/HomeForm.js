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
import { Card, CardContent, FormControl, Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';

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
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: '0 !important',
		marginBottom: theme.spacing(1),
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
		<>
			<div className={classes.step}>{activeStep + 1}</div>
			<h4>First thing first</h4>
			<p>Start planning your dream trip</p>

			<Card style={{ width: '50%', margin: 'auto' }}>
				<CardContent>
					<FormControl style={{ width: '100%' }}>
						<InputLabel htmlFor='standard-adornment-password'>Trip name</InputLabel>
						<Input />
					</FormControl>
					<FormControl>
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
					<FormControl style={{ width: '100%' }}>
						<InputLabel htmlFor='standard-adornment-password'>Total Budget</InputLabel>
						<Input />
					</FormControl>
				</CardContent>
			</Card>
		</>,
	];
	return (
		<div className={classes.root}>
			<Stepper style={{ padding: 0, position: 'relative', background: 'transparent' }} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel style={{ marginTop: 0 }} StepIconComponent={ColorlibStepIcon}>
							{label}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
						<Button onClick={handleReset} className={classes.button}>
							Reset
						</Button>
					</div>
				) : (
					<div style={{ textAlign: 'center' }}>
						<Typography className={classes.instructions}>{stepContent[activeStep]}</Typography>
						<div>
							<Button disabled={activeStep === 0} onClick={handleBack} className={clsx(classes.button, 'btn-transparent')}>
								Back
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
