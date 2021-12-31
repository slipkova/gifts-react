import React, {Component} from "react";
import IconButton from "./buttons/iconButton";
import {getIcon} from "../services/themeService";

export default class List extends Component{

    render(){
        const { list } = this.props
         return(
            <div className={"item-in-list"}>
                <img src={{/*getIcon(list.icon.url)*/}}/>
                <div className={"item-name"}>{list.title}</div>
                <IconButton list={list} onPress={this.props.deleteList} type={"delete"}/>
            </div>
        );
    }
}