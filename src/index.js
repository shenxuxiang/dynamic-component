import dva from 'dva';
import { HashHistory } from 'dva/router'
import homeStore from './models/home'
import appStore from './models/app'
import RouterConfig from './routes'

const onError = (e) => {
	const { msg } = e;
	console.log(e)
	if (msg === 'request_error') {
		console.log('服务器开小差了~~~请稍后再试！！！');
	} else {
		console.log('网络连接失败，请稍后再试！！！');
	}
};

const app = dva({
	HashHistory,
	onError,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(appStore);
app.model(homeStore);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
