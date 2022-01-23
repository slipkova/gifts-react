import React, {Component, Fragment} from "react";
import {Redirect} from "react-router-dom";
import Input from "./formInput";
import {setAuthToken} from "../../services/httpService";
import {UserConsumer} from "../../context/userContext";
import {ListsConsumer} from "../../context/listsContext";
import Joi from "joi-browser";
import List from "../list";



export default class LoginForm extends Component {
    state = {
        account: {email: "", password: ""},
        errors: {},
    }

    schema = {
        email: Joi.string().required(),
        password: Joi.string().required(),
    }


    validate = () => {
        Joi.validate(this.state.account, this.schema)
        const errors = {}
        const {account} = this.state

        if (account.email.trim() === "")
            errors.email = "Email is required."

        if (account.password.trim() === "")
            errors.password = "Password is required."

        return Object.keys(errors).length === 0 ? null : errors
    }

    validateProperty = input => {
        if (input.name === "email") {
        }
        if (input.name === "password") {
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const errors = this.validate()
        this.setState({errors: errors || {}})
        return !!errors


    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]

        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account, errors})
    }

    render() {
        const {account, errors} = this.state
        return (
            <UserConsumer>
                {userContext => {
                    const {login, isLoggedIn} = userContext;
                    return (
                        <Fragment>
                            <h1>Login</h1>
                            <ListsConsumer>
                                {listContext => {
                                    return(
                                        <form onSubmit={async (e) => {
                                            const isValid = !this.handleSubmit(e)
                                            if (!isValid) return
                                            const {ok, data} = await login(this.state.account)
                                            if (ok) {
                                                listContext.init()
                                            } else {
                                                if(typeof data == "string")this.setState({errors: {password: data}})
                                                // console.log(data)
                                            }
                                        }}>
                                            {isLoggedIn() && <Redirect to={"/"}/>}
                                            <Input name={"email"} value={account.email} label={"Email"} onChange={this.handleChange}
                                                   error={errors.email}/>
                                            <Input name={"password"} value={this.state.account.password} type={"password"} label={"Password"}
                                                   onChange={this.handleChange} error={errors.password}/>

                                            <button className={"btn btn-primary login-btn"}>Login</button>
                                        </form>
                                    )
                                }}
                            </ListsConsumer>
                        </Fragment>
                    )
                }}
            </UserConsumer>

        )
    }

}