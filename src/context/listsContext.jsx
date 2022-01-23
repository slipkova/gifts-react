import React, {Component, createContext} from "react";
import {setAuthToken} from "./../services/httpService";

import {deleteList, getLists} from "./../services/listService";
import {getListIcons, getThemeColors} from "../services/themeService";
import {createList} from "../services/listService";


const ListsContext = createContext()

export class ListsProvider extends Component{
    state = {
        lists:  [],
        activeList: { id: "", "items": []},
        icons: [],
        themes: [],
    }

    init = async () => {
        //Gets all available icons
        const iconRes = await getListIcons()
        if (iconRes.ok) this.setState({icons: iconRes.data})
        //Gets all available themes
        const themeRes = await getThemeColors()
        if (themeRes.ok) this.setState({themes: themeRes.data})
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.icons.length && this.state.themes.length && !this.state.lists.length) {
            //Gets lists from database
            const listRes = await getLists()
            console.log(listRes)
            if (listRes.ok){
                this.setState({lists: listRes.data.map(list => this.getFormatedList(list))})
                console.log("jes")
            }

        }
    }

    getFormatedList = (l) => ({
        ...l,
        theme_color: this.state.themes.filter((c) => c.id === l.theme_color)[0] || {
            hex: "dodgerblue",
        },
        icon: this.state.icons.filter((i) => i.id === l.icon)[0] || {
            image: null,
        },
    })

    addList = async newList => {
        const originalLists = this.state.lists
        try {
            await createList(newList)
            const listRes = await getLists()
            if (listRes.ok){
                this.setState({lists: listRes.data.map(list => this.getFormatedList(list))})
            }
        } catch (e) {
            alert("Something failed while creating list")
            this.setState({lists: originalLists})
        }
    }

    deleteList = async currList => {
        const originalLists = this.state.lists
        const lists = this.state.lists.filter(i => i.id !== currList.id)
        this.setState({lists})
        try{
            await deleteList(currList.id)
        }
        catch (e) {
            alert("Something failed while deleting list")
            this.setState({lists: originalLists})
        }
    }

    addItem(newItem){
        let newList = {...this.state.activeList}
        newList.items = this.state.activeList.items += newItem
        this.setState({activeList: newList})
    }

    deleteItem = currItem => {
        let newList = this.state.activeList
        newList.items = this.state.activeList.items.filter(i => i.id !== currItem.id)
        this.setState({activeList: newList})
    }


    render() {
        const context = {
            addItem: this.addItem,
            deleteItem: this.deleteItem,
            addList: this.addList,
            deleteList: this.deleteList,
            init: this.init,
            ...this.state
        }
        return(
            <ListsContext.Provider value={context}>{this.props.children}</ListsContext.Provider>
        )
    }
}

export const ListsConsumer = ListsContext.Consumer