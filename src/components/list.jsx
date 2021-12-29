import React, {Component} from "react";
import DeleteButton from "./buttons/deleteButton";

export default class List extends Component{

    render(){
        return(
            <div className={"item-in-list"}>
                <i className={this.props.list.icon + " list-icon"}/>
                <div className={"item-name"}>{this.props.list.name}</div>
                <DeleteButton onDelete={this.props.onDelete} />
            </div>
        );
    }
}