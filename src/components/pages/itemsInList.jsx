import React, {Component, Fragment} from "react";
import "../../style/styles.css"
import Item from "./../items";
import HelpText from "./../helpText";
import AddButton from "./../buttons/addButton";



//This component renders the content of "list" page
export default class itemsInList extends Component{
    state = {
        items: [
            { id: 1, name: "Dog"},
            { id: 2, name: "Cat"},
            { id: 3, name: "Pen"},
        ],
        //isMine is true if user is an owner of this list
        isMine: true,
        theme: "blue",
    }

    addItem(newItem){
        let items = this.state.items
        items += newItem
        this.setState({items})
    }

    deleteItem = (currItem) => {
        const items = this.state.items.filter(i => i.id !== currItem.id)
        this.setState({items})
    }

    addItemForm(){
        console.log("Yay")
    }


    renderGettingStarted(){
        return <div className={"text-center"}>To add items to your wishlist, click the plus button.</div>
    }

    renderItems() {
        //Renders page with lists
        if (this.state.items !== 0) {
            return (
                <Fragment>
                    <h1 className={"list-name"}>ljGHdjkfhvc</h1>
                    {this.state.items.map(item =>(
                        <Item key={item.id} item={item} onDelete={() => this.deleteItem(item)} isMine={this.state.isMine}/>
                    ))}
                </Fragment>
            );
        }else{
            return this.renderGettingStarted()
        }

    }

    render() {
        if(this.state.isMine) {
            return (
                <div className={"container"}>
                    {this.renderItems()}
                    {<AddButton onClick={() => this.addItemForm()}/>}
                    {<HelpText/>}
                </div>
            );
        }
    }
}
