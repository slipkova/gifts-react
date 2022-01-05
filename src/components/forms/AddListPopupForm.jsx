import React, {Component, Fragment} from "react";
import "./../../style/popup.css"

export default class ListPopupForm extends Component{
    render() {
        return (this.props.trigger) ? (<div className={"popup"}>
            <div className={"popup-inner"}>
                <div>Popup!</div>
                <button className={"popup-btn"} onClick={this.props.onPress}>Ok</button>
            </div>
        </div>) : "";
    }
}