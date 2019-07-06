'use strict';

const e = React.createElement;

class MajorAxis extends React.Component {
	constructor (props) {
		super (props)
	}

	render() {
		const { svgHeight, svgWidth} = this.props
		return [
			e(
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
			e("line", {
    key: "majorX",
    x1: "3",
    y1: svgHeight - 10,
    x2: svgWidth - 5,
    y2: svgHeight - 10,
    style: {
      stroke: 'black',
      strokeWidth: '.3'
    }
  }), e("line", {
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

MajorAxis.defaultProps = {
    svgHeight: 40,
    svgWidth: 80
  }

export { MajorAxis };