import React, {Component, Fragment} from "react";
import List from "../components/list";
import {ListsConsumer} from "../context/listsContext";


export default class ListOfMyLists extends Component{

    render() {

        return(
            <ListsConsumer>
                {listsContext => {
                    const { lists, deleteList } = listsContext
                    return lists.map(list =>(
                            <List key={list.id} list={list} deleteList={() => deleteList(list)}/>
                        ))
                }}
            </ListsConsumer>
        )
    }
}
