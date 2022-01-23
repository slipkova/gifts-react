import React, {Component, createContext} from "react";
import {getUser, login, logout} from "./../services/authService";
import {ListsConsumer} from "./listsContext";
import Input from "../components/forms/formInput";


export const UserContext = createContext();

export class UserProvider extends Component{

    state = {
        token: "",
        account: {
            email: "",
            username: "",
        },
    }

    getUser = async () => {
        const res = await getUser()
        const account = {email: res.data.email, username: res.data.username}
        if(res.ok) this.setState({account})
        return res
    }

    login = async account => {
        const res = await login(account.email, account.password)
        if(res.ok) {
            this.setState({token: res.data.token})
            this.getUser()
        }
        return res
    }

    logout = async () => {
        this.setState({token: ""})
        this.setState({account: {
                email: "",
                username: "",
            }})
        await logout()
    }


    isLoggedIn = () => {
        return !!this.state.token
    }

    render() {
        const context = {
            login: this.login,
            logout: this.logout,
            isLoggedIn: this.isLoggedIn,
            ...this.state
        }
        return(
            <UserContext.Provider value={context}>{this.props.children}</UserContext.Provider>
        )
    }
}

export const UserConsumer = UserContext.Consumer