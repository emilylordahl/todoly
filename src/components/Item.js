import React from "react";
import Checkbox from "../components/Checkbox"

class Item extends React.Component{
  render() {
    const { details } = this.props;
    return (
      <li className="item">
        <Checkbox details={details}/>
        <h3 className="item__heading">{details.name}</h3>
        { /* <button className="button button--small item__actions">Delete</button> */ }
      </li>
    )
  }
}

export default Item;
