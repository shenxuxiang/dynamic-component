/**
 * @author 沈旭祥
 * 动态加载组件是依赖import可以移步 （支持promise）webpack@2.0以后
 * 因为react组件必须返回一个值 null/undefined/number/string等等
 * 所以在初始化的时候给返回一个null 当import引入完成的时候 通过setState
 * 方法去更新我们的页面
 */
import React, { PureComponent } from 'react';
export default WrappedComponent => class extends PureComponent {
	
	state = {
		Component: null,
	}

	componentWillMount() {
		const { Component } = this.state;
		if (Component) {
			return;
		}
		// import在webpack@2.0以后支持promise 通过.then的方法获取
		WrappedComponent()
		.then(module => {
			this.setState({
				Component: module.default,
			});
		})
		.catch(err => {
			console.log('模块加载失败了')
		})
	}

	render() {
		const { Component } = this.state;
		const result = Component ? (
			<Component {...this.props} />
		) : null;
		return result;
	}
}