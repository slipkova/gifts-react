import React, { Component } from "react";
import "./../../style/navbar.css"

export default class NavBar extends Component{
    render() {
        return (
            <div className="nav">
                <div className="nav-item"><a href="#" className="nav"><i className="fas fa-gifts"/></a></div>
                <div className="nav-item"><a href="#">Moje seznamy</a></div>
                <div className="nav-item"><a href="#">Cizí seznamy</a></div>
                <div className="nav-item right"><a href="#" className="nav"><i className="fas fa-user-circle"/></a></div>
            </div>
        )
    }
}
