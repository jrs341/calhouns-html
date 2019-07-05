'use strict';

const e = React.createElement;

class Spinner extends React.Component {
  render () {
    return e(
      'div',
      {className: 'loader'},
      'Loading...'
    )
  }
}

export { Spinner }