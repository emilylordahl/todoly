import React from "react";
import { getTime } from "../helpers";

class AddItem extends React.Component{
  createItem(e){
    e.preventDefault();
    // Grab the text from the input
    const item = {
      id: this.id.value,
      name: this.name.value,
      checked: this.checked.value
    };
    this.props.addItem(item);
    this.itemForm.reset();
    // Create and store the item POST /items/:itemId
    // this.context.router.transitionTo(`/items/${item.id}`);
    // Then return to /
    // this.context.router.transitionTo("/");
  }
  render() {
    return (
      <li>
        <form
          className="item"
          ref={(input) => { this.itemForm = input }}
          onSubmit={this.createItem.bind(this)}
        >
            <input type="hidden"
              defaultChecked
              className="item__status checkbox"
              ref={(input) => { this.checked = input }}
            />
            <input type="text" required
              className="item__heading"
              placeholder="New ToDo..."
              ref={(input) => { this.name = input }}
            />
            <input type="hidden"
              defaultValue={getTime()}
              ref={(input) => { this.id = input }}
            />
            <button type="submit"
              className="button item__actions">+ Add Item
            </button>
        </form>
      </li>
    )
  }
}

AddItem.contextTypes = {
  router: React.PropTypes.object
}

export default AddItem;
