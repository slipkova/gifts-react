import React, {Component, Fragment} from "react";
import List from "../components/list";

export default class ListOfMyLists extends Component{
    state = {
        lists: [
            {id: 1, name: "List1", theme: "blue", icon: "fas fa-gift"},
            {id: 2, name: "alsjfhn", theme: "blue", icon: "fas fa-dragon"},
            {id: 3, name: "kjahgsf", theme: "blue", icon: "fas fa-kiwi-bird"}
        ]
        }

    deleteList = currList => {
        const lists = this.state.lists.filter(i => i.id !== currList.id)
        this.setState({lists})
    }

    render() {
        return(
            <Fragment>
                {this.state.lists.map(list =>(
                    <List key={list.id} list={list} onDelete={() => this.deleteList(list)}/>
                ))}
            </Fragment>
        )
    }
}
