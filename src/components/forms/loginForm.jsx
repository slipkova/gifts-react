import React, {Component, Fragment} from "react";
import Input from "./formInput";


export default class LoginForm extends Component{
    state = {
        account: {username: "", password: ""},
        errors: {},
    }

    validate = () => {
        const errors = {}
        const { account } = this.state

        if(account.username.trim() === "")
            errors.username = "Username is required."

        if(account.password.trim() === "")
            errors.password = "Password is required."

        return Object.keys(errors).length === 0 ? null : errors
    }

    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validate
        this.setState({errors})

        if( errors ) return
    }

    handleChange = ({currentTarget : input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account})
    }

    render() {
        return(
            <Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name={"username"} value={this.state.account.username} label={"Username"} onChange={this.handleChange}/>
                    <Input name={"password"} value={this.state.account.password} label={"Password"} onChange={this.handleChange}/>

                    <button className={"btn btn-primary login-btn"}>Login</button>
                </form>
            </Fragment>
        )
    }

}