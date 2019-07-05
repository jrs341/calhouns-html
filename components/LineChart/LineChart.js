'use strict';

const e = React.createElement;

//import DataBox from './DataBox.js'
import { MajorAxis } from './majorAxis.js';
import { MinorAxis } from './minorAxis.js'

class LineChart extends React.Component{
	static propTypes = {

	}

	static defaultProps = {
		color: '#2196F3',
		svgHeight: 40,
		svgWidth: 80
	}

	render () {
		const { data:{data}, data:{trendInfo}, svgWidth, svgHeight } = this.props
		return[
			e(
			"svg",
			{ viewBox: `-1 -1 ${svgWidth} ${svgHeight}`},
			e("g",
			{ key: "main group"},
			data.map((point, i) => {
    			return e(
    				"circle",
    				{ key: i,
      					style: {
        				stroke: '#2196F3',
        				fill: '#2196F3'
      				},
      				cx: i / 9.6 + 5.5,
      				cy: (10 - point.level) * 3,
      				r: ".05"
    				});
  				})
			),
			e(MajorAxis, null),
			e(MinorAxis, null)
		)]
	}
}

export { LineChart };

/*<svg viewBox={`-1 -1 ${svgWidth} ${svgHeight}`}>
				<g key='main group'>
				{data.map((point, i) => {
          return <circle key={i} style={{stroke:'#2196F3', fill:'#2196F3'}} cx={i/9.6 + 5.5} cy={(10 - point.level) * 3} r='.05'/> 
        })}
				<MajorAxis />
				<MinorAxis />
				<DataBox
	lastReading = {trendInfo.lastReading}
	sixHourDelta = {trendInfo.sixHourDelta}
	twelveHourDelta = {trendInfo.twelveHourDelta}
	twentyFourHourDelta = {trendInfo.twentyFourHourDelta}
	fortyEightHourDelta = {trendInfo.fortyEightHourDelta}/>
				</g>
      </svg>*/
