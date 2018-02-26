import React from "react";
import List from "../components/List";

class Lists extends React.Component{
  render() {
    const total = Object.keys(this.props.items).length;
    return (
      <aside className="lists-menu">
        <ul className="lists">
          <List total={total}/>
          {/* <li className="list__name">Do Today</li> */}
          {/* <li className="list__name">Do Tomorrow</li> */}
          {/* <li className="list__name">OverDo</li> */}
        </ul>
      </aside>
    )
  }
}

export default Lists;
