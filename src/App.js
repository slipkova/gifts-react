import React, {Fragment} from "react"
import NavBar from "./components/stuctureElements/navbar";
import ListOfMyLists from "./pages/ListOfMyLists";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ListOfOthersLists from "./pages/ListOfOthersLists";
import {ListsProvider} from "./context/listsContext";
import LoginForm from "./components/forms/loginForm";

import './style/styles.css';

export default function App() {
  return (
    <ListsProvider>
        <NavBar />
        <div className={"main container"}>
            <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/myLists" component={ListOfMyLists}/>
                <Route path="/othersLists" component={ListOfOthersLists}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    </ListsProvider>


  );
}


