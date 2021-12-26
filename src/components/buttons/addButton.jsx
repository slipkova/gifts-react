import React, {Component} from "react";


export default class AddButton  extends Component{
    state = {}

    render(){
        return (
            <button className={"add-item-btn"} onClick={this.props.onClick}>
                <i className={"fab fa-jedi-order"} />
            </button>
        );
    }
}