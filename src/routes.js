import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Main from './views/Main/Main';

const Routes = () => {
	return (
		// <HashRouter>
		<Switch>
			<Route exact to='/' component={Home} />
			<Route exact to='/main' component={Main} />
		</Switch>
		// </HashRouter>
	);
};
export default Routes;
