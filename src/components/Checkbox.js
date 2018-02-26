import React from "react";

class Checkbox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.details.checked
    };

    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
        <input type="checkbox"
          className="item__status checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
    )
  }
}

export default Checkbox;
