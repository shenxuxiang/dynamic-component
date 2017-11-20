import React, { PureComponent } from 'react';
import './style.scss';

export default class Detail extends PureComponent {
	constructor() {
		super()
		this.state = {

		}
		console.log('detail will render')
	}
	render() {
		return (
			<div className="home-pages">
				这是detail页面
			</div>
		)
	}
}