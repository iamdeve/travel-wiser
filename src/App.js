import React from 'react';
import './App.css';
import Routes from './routes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
const THEME = createMuiTheme({
	typography: {
		fontFamily: `"QuickSand","Roboto", "Helvetica", "Arial", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

function App() {
	return (
		<MuiThemeProvider theme={THEME}>
			<div className='app'>
				<Routes />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
