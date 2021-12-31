import React, {Component} from "react";


export default class IconButton  extends Component{
    styles = {
        delete: ["far fa-times-circle", "del-item-btn"],
        edit: [""]
    }

    render(){
            return(
                <button className={"btn " + this.styles[this.props.type][1]} onClick={this.props.onPress}>
                    <i className={this.styles[this.props.type][0]} />
                </button>
            );
    }
}