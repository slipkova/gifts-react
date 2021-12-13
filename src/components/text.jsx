import React, {Component} from "react";


export default class AddButton  extends Component{
    state = {}

    render(){
        return (
            <p className={"text"}>{this.props.text}</p>
        );
    }
}