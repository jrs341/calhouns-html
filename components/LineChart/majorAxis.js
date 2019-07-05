'use strict';

const e = React.createElement;

class MajorAxis extends React.Component {
	static propTypes = {

	}

	static defaultProps = {
		svgHeight: 40,
		svgWidth: 80
	}

	constructor (props) {
		super (props)

		this.state = {

		}
	}

	render() {
		const { svgHeight, svgWidth} = this.props
		return [
			React.createElement(
				"text",
				{
    				key: "yLabel",
    				x: "-15.3",
    				y: "0",
    				style: {
      					fill: 'black',
      					fontSize: '1.5',
      					transform: 'rotate(-90deg)'
    				}
				},
				" Level (ft) "),
			React.createElement("line", {
    key: "majorX",
    x1: "3",
    y1: svgHeight - 10,
    x2: svgWidth - 5,
    y2: svgHeight - 10,
    style: {
      stroke: 'black',
      strokeWidth: '.3'
    }
  }), React.createElement("line", {
    key: "majorY",
    x1: "5",
    y1: svgHeight - 8,
    x2: "5",
    y2: "0",
    style: {
      stroke: 'black',
      strokeWidth: '.3'
    }
  })];
	}
}

export { MajorAxis };