import Component from "component";

/* Comment */
class Highlight extends Component {
  constructor() {
    this.data = {
      string: "hello!",
      boolean: true && false,
      nil: undefined || null,
      number: 123456789,
      function: (...rest) => {
        return Math.min(...rest);
      }
    };
  }
}

export default Highlight;
