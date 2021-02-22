import React , {Component}from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends Component {

    render(){
        return(
            <div className="header d-flex">
                <h1 className="header-logo">
                    <Link to="/">Star DB</Link>
                </h1>
                <ul className="header-list d-flex">
                    <li className="header-list-item">
                        <Link to="/people/">People</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/planets/">Planets</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/starships/">Starships</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to="/secret">Secret</Link>
                    </li>
                </ul>
            </div>
        );
    }
}