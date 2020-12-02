import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Main from './views/Main/Main';

const Routes = () => {
	return (
		<Switch>
			<Route exact to='/main' component={Main} />
			<Route exact to='/' component={Home} />
		</Switch>
	);
};
export default Routes;
