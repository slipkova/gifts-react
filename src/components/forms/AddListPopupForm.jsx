import React, {Component, Fragment} from "react";
import "./../../style/popup.css"
import Input from "./formInput";
import List from "../list";
import {ListsConsumer} from "../../context/listsContext";

export default class ListPopupForm extends Component{
    state = {
        value: ""
    }

    render() {
        return (this.props.trigger) ? (
            <ListsConsumer>
                {listsContext => {
                    const { addList } = listsContext

                    return (
                        <div className={"popup"}>
                            <div className={"popup-inner"}>
                                <form onSubmit={() => {
                                    addList({title: this.state.value});
                                    this.props.onPress()
                                }}>
                                    <Input name={"list-name"} label={"List name"} onChange={({currentTarget}) => {this.setState({value : currentTarget.value})}} value={this.state.value}/>
                                    <input type="submit" className={"popup-btn btn"} value={"Ok"}/>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </ListsConsumer>
            ) : "";
    }
}