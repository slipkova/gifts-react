import React, {Component, Fragment} from "react";
import {Link, Redirect} from "react-router-dom";
import {UserConsumer} from "../context/userContext";
import addButton from "../components/buttons/addButton";

export default class Profile extends Component{
    render() {
        return(
            <Fragment>
                <h1>My profile</h1>
                <UserConsumer>
                    {userContext => {
                        const { account, logout, isLoggedIn } = userContext;
                        return(
                            <div>
                                <p>Username: {account.username}</p>
                                <p>Email: {account.email}</p>
                                <button className={"btn"} onClick={logout}>Logout</button>
                                {!isLoggedIn() && <Redirect to={"/"}/>}
                            </div>

                        )
                    }}
                </UserConsumer>
            </Fragment>
        )
    }
}