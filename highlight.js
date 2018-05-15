import Component from "component"

/* Comment */
class Highlight extends Component {
  constructor() {
    this.data = {
      string: "hello",
      boolean: true && false,
      nil: undefined || null,
      regex: /^[12345](hello).+$/,
      number: -123456789,
      function: (...numbers) => {
        return Math.min(...numbers)
      }
    }
  }
}

export default Highlight
