'use strict';

const e = React.createElement;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'div',
      {className: 'loader'},
      'Loading...'
    );
  }
}

export { Spinner }