import React, {Fragment} from "react"
import NavBar from "./components/stuctureElements/navbar";
import ItemInList from "./components/pages/itemsInList";
import './style/styles.css';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <div className={"main container"}>
        <ItemInList />
      </div>
    </Fragment>
  );
}


