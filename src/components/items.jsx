import React, {Component} from "react";
import DeleteButton from "./buttons/iconButton";



export default class Item extends Component{


    render(){
        return(
            <div className={"item-in-list"}>
                <div className={"item-name"}>{this.props.item.name}</div>
            </div>
        );
    }
}