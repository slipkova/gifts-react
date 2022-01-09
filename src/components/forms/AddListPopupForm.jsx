import React, {Component, Fragment} from "react";
import "./../../style/popup.css"
import Input from "./formInput";

export default class ListPopupForm extends Component{
    render() {
        return (this.props.trigger) ? (<div className={"popup"}>
            <div className={"popup-inner"}>
                <Input name={"list-name"} label={"List name"} onChange={""} value={""}/>
                <button className={"popup-btn"} onClick={this.props.onPress}>Ok</button>
            </div>
        </div>) : "";
    }
}