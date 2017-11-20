import apis from '../utils/apis';
// import { routerRedux } from 'dva/router';

const EMPTYOBJ = {};
const EMPTYLIST = [];

export default {
	namespace: 'home',
	state: {
		name: 'shenxuiang',
		age: 26,
		sex: 'man',
	},
	reducers: {
		updateNameSuccess(state, action) {
			const { payload: { resultData = EMPTYOBJ } } = action;
			const { name } = resultData;
			return { ...state, name };
		},
		updateAgeSuccess(state, action) {
			const { payload: { resultData = EMPTYOBJ } } = action;
			const { age } = resultData;
			return { ...state, age };
		},
		updateSexSuccess(state, action) {
			const { payload: { resultData = EMPTYOBJ } } = action;
			const { sex } = resultData;
			return { ...state, sex };
		}
	},
	effects: {
		* updateName({ payload }, { call, put }) {
			const response = yield call(apis.updateName, payload);
			yield put({
				type: 'updateNameSuccess',
				payload: response,
			});
		},
		* updateSex({ payload }, { call, put }) {
			const response = yield call(apis.updateSex, payload);
			yield put({
				type: 'updateSexSuccess',
				payload: response,
			});
		},
		* updateAge({ payload }, { call, put }) {
			const response = yield call(apis.updateSex, payload);
			yield put({
				type: 'updateAgeSuccess',
				payload: response,
			});
		},
	},
	subscriptions: {
		setup({ dispatch, history }) {
			history.listen(({pathname, search}) => {
				console.log(history)
			})
		}
	}
}