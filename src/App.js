import React, {Fragment} from "react"
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/stuctureElements/navbar";
import ListOfMyLists from "./pages/ListOfMyLists";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ListOfOthersLists from "./pages/ListOfOthersLists";
import {ListsProvider} from "./context/listsContext";
import {UserProvider} from "./context/userContext";
import LoginForm from "./components/forms/loginForm";
import MyList from "./pages/MyList";

import './style/styles.css';

export default function App() {
  return (
    <ListsProvider>
        <UserProvider>
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
        </UserProvider>
    </ListsProvider>


  );
}


