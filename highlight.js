import Highlighter from 'highlighter'

/* Comment */
class Moonlight extends Highlighter {
  constructor() {
    this.data = {
      string: 'hello',
      boolean: true && false,
      nil: undefined || null,
      regex: /^[12345](hello).+$/,
      number: -123456789,
      jsx: (
        <Component prop="moonlight">
          <div />
        </Component>
      ),
      immutableConstant: ALL_CAPS,
      function: (...numbers) =>
        numbers.map(n => n + 2).filter(n => n <= numbers.length - 2)
    }
  }
}

export default Moonlight
