import React, { Component } from "react";
import "./../../style/navbar.css"

export default class NavBar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contacts
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
