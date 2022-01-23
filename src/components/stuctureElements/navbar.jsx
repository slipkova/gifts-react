import React, { Component } from "react";
import "./../../style/navbar.css"
import {Link} from "react-router-dom";
import {UserConsumer} from "../../context/userContext";
import {setAuthToken} from "../../services/httpService";
import Input from "../forms/formInput";

export default class NavBar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-gifts"/>
                        </Link>
                    </li>
                </ul>

                <UserConsumer>
                    {userContext => {
                        const {isLoggedIn, account} = userContext;
                        return isLoggedIn() ? (
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/myLists">
                                        My lists
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/othersLists">
                                        Others lists
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        {account.username}
                                        <i className="far fa-user-circle"/>
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )
                    }}
                </UserConsumer>

            </nav>
        )
    }
}
