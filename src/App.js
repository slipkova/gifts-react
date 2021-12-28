import React, {Fragment} from "react"
import NavBar from "./components/stuctureElements/navbar";
import MyList from "./pages/MyList";
import './style/styles.css';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import OthersList from "./pages/OthersList";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <div className={"main container"}>
          <Route path="/myList" component={MyList}/>
          <Route path="/othersList" component={OthersList}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>

      </div>
    </Fragment>
  );
}


