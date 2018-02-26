import React from "react";

class List extends React.Component{
  render() {
    return (
      <li className="list__name list--active">
        <p className="menu__heading">All ToDos</p>
        <div className="list__count">
          <button className="button button--dark button--small">{this.props.total}</button>
        </div>
      </li>
    )
  }
}

export default List;
