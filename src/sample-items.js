import { getFunItem } from "./helpers";
import { getTime } from "./helpers";

const items = {
  item1: {
    id: getTime(),
    name: getFunItem(),
    checked: true
  },
  item2: {
    id: getTime(),
    name: getFunItem(),
    checked: true
  },
  item3: {
    id: getTime(),
    name: getFunItem(),
    checked: false
  }

};

export default items;
