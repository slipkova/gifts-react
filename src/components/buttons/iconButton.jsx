import React, {Component} from "react";

//In props, you need to pass type="delete", "add", or "edit"
export default class IconButton  extends Component{
    styles = {
        delete: ["far fa-times-circle", "del-item-btn"],
        edit: [""],
        add: ["far fa-times-circle fa-rotate-45", "add-item-btn"],
    }

    render(){
            return(
                <button className={"btn " + this.styles[this.props.type][1]} onClick={this.props.onPress}>
                    <i className={this.styles[this.props.type][0]} />
                </button>
            );
    }
}