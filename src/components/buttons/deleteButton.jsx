import React, {Component} from "react";


export default class DeleteButton  extends Component{
    state = {}

    render(){
            return(
                <button className={"btn del-item-btn"} onClick={this.props.onDelete}>
                    <i className={"far fa-times-circle"}></i>
                </button>
            );
    }
}