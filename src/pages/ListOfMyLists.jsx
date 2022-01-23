import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom";
import List from "../components/list";
import {ListsConsumer} from "../context/listsContext";
import ListPopupForm from "../components/forms/AddListPopupForm";
import IconButton from "../components/buttons/iconButton";


export default class ListOfMyLists extends Component{
    state = {
        activeListForm: false,
    };

    addListForm = () =>{
        const value = true
        this.setState({activeListForm: value})
    }

    delListForm = () =>{
        const value = false
        this.setState({activeListForm: value})
    }


    render() {

        return(
            <Fragment>
                <h1>My lists</h1>
                <ListsConsumer>
                    {listsContext => {
                        const { lists, deleteList, editList } = listsContext
                        return lists.map(list =>(
                                <List key={list.id} list={list} editList={() => editList(list)} deleteList={() => deleteList(list)}/>
                            ))

                    }}
                </ListsConsumer>
                <IconButton type={"add"} onPress={this.addListForm}/>

                <ListsConsumer>
                    {listContext => {
                        return <ListPopupForm trigger={this.state.activeListForm} onPress={this.delListForm}/>
                    }}
                </ListsConsumer>
            </Fragment>
        )
    }
}
