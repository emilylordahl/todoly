import React from "react";

import Header from "../components/Header";
import Lists from "../components/Lists";
import AddItem from "../components/AddItem";
import Item from "../components/Item";
import Footer from "../components/Footer";
import sampleItems from "../sample-items";
// import base from "../base";

class App extends React.Component{
  constructor(){
    super();
    this.addItem = this.addItem.bind(this);
    // getInitialState
    this.state = {
      items: sampleItems
    }
  }

  // componentWillMount(){
  //
  // }

  // componentWillMount(){
  //
  // }

  addItem(item) {
    // copy and update state
    const items = {...this.state.items}; // ... is an ES6 spread
    items[`item-${item.id}`] = item;
    // set state
    this.setState({ items });
    // Same as: this.setState({ items: items })
  }

  render() {
    return (
      <div className="app">
        <Header loadSamples={this.loadSamples}/>
        <section className="section">
          <Lists items={this.state.items}/>
          <ul className="items">
            <AddItem addItem={this.addItem}/>
            {
              Object
                .keys(this.state.items)
                .map(key => <Item key={key} index={key} details={this.state.items[key]}/>) // Key is for React. Index is for me.
            }
          </ul>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default App;
