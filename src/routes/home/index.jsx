import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './style.scss';

const fetchDataFunction = (loading, type) => query => ({
	loading,
	type,
	payload: query || {},
})
const mapStateToProps = (state) => ({
	name: state.home.name,
	age: state.home.age,
	sex: state.home.sex,
});

const mapDispatchToProps = {
	updateName: fetchDataFunction(true, 'home/updateName'),
	updateSex: fetchDataFunction(true, 'home/updateSex'),
	updateAge: fetchDataFunction(true, 'home/updateAge'),
}

class Home extends PureComponent {
	constructor() {
		super()
		this.state = {

		}
		console.log('home will render')
	}

	handle() {
		this.props.updateName({
			id: '123456',
			time: 2000,
			name: '沈旭祥',
		})
	}

	componentWillMount() {
		// if (this.props.location.search === '') {
		// 	this.props.history.replace('/home?currentId=112233');
		// }
	}
	render() {
		return (
			<div className={styles.homepages} onClick={() => this.handle()}>
				<h2>这是home页面</h2>
				<p>{this.props.name}</p>
				<p>{this.props.age}</p>
				<p>{this.props.sex}</p>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)