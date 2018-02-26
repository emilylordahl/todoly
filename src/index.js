console.log("ToDo.ly is loaded.");

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";

import "./css/styles.css";
import App from "./components/App";
import Item from "./components/Item";
import AddItem from "./components/AddItem";
import NotFound from "./components/NotFound";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App}/>
        {/* <Match exactly pattern="/items/:itemId" component={Item}/> */}
        {/* <Miss component={NotFound}/> */}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector(".container"));
