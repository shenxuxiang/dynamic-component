import React, { PureComponent } from 'react';
import { NavLink } from 'dva/router';

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul className="nav-head">
                    <li>
                        <NavLink to="/home" activeClassName='active' activeStyle={{color: 'red'}}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/info">info</NavLink>
                    </li>
                    <li>
                        <NavLink to="/detail">detail</NavLink>
                    </li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

