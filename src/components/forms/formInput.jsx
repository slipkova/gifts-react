import React, {Component, Fragment} from "react";

export default class Input extends Component{
    render() {
        return(
            <div className={"form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className={"form-control"}
                    id={this.props.name}
                    type={"text"}
                />
            </div>
        )
    }
}