import React from "react";

class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <div className="header__details">
          <h1>ToDo.ly</h1>
        </div>
        {/* <button className="button button--large">Mark All as Complete</button> */}
      </header>
    )
  }
}



export default Header;
