'use strict';

const e = React.createElement;

import { Spinner } from '../TivoliRiverLevel/spinner.js'
import { TrendInfo } from './trendInfo.js'

class DataBox extends React.Component {
	static propTypes = {

	}

	render () {
		const { lastReading, sixHourDelta, twelveHourDelta, twentyFourHourDelta, fortyEightHourDelta } = this.props
    if (lastReading != undefined) {
    return [React.createElement("rect", {
      key: "data box",
      x: "6",
      y: "0",
      width: "27",
      height: "10",
      style: {
        strokeWidth: '.2',
        stroke: 'orange',
        fill: 'white'
      }
    }), React.createElement("text", {
      key: "date",
      x: "7",
      y: "2",
      style: {
        fill: 'black',
        fontSize: '1.5'
      }
    }, " Last Observation: ", lastReading.date.slice(0, 16), " "), React.createElement("text", {
      key: "value",
      x: "7",
      y: "4",
      style: {
        fill: 'black',
        fontSize: '1.5'
      }
    }, " Last Observed Value: ", lastReading.level, "  ft"), React.createElement(TrendInfo, {
      sixHourDelta: sixHourDelta,
      twelveHourDelta: twelveHourDelta,
      twentyFourHourDelta: twentyFourHourDelta,
      fortyEightHourDelta: fortyEightHourDelta
    })];
  } else {
    return React.createElement(Spinner, null);
  }
  }
}

export { DataBox }