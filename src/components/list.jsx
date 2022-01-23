import React, {Component} from "react";
import IconButton from "./buttons/iconButton";
import {getIcon} from "../services/themeService";
import {Link} from "react-router-dom";

export default class List extends Component{

    render(){
        const { list } = this.props
         return(
            <div className={"item-in-list"}>
                {console.log(list.icon)}
                <div className={"list-icon"}>
                    <img src={getIcon(list.icon.image ? list.icon.image : "/media/icons/teddy-bear_jlLZHU5.png")}/>
                </div>
                <Link to={"/"}><div className={"item-name"}>{list.title}</div></Link>
                <IconButton list={list} onPress={this.props.deleteList} type={"delete"}/>
            </div>
        );
    }
}