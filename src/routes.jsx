import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
// import dynamic from 'dva/dynamic';
import App from './app';
//import Home from './routes/home';
import Info from './routes/info';
import Detail from './routes/detail';

import hoc from './components/hoc';

const  { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
	return (
		<ConnectedRouter history={history}>
			<App >
				<Switch>
					<Route path="/home" component={
						// 动态引入组件
						hoc(() => import('./routes/home'))
					}/>
					<Route path="/info" component={Info}/>
					<Route path="/detail" component={Detail}/>
					<Redirect from="/" to="/home" />
				</Switch>
			</App>
		</ConnectedRouter>
	)
}
export default RouterConfig;