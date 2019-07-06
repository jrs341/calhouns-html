'use strict';

const e = React.createElement;

import { Spinner } from '../TivoliRiverLevel/spinner.js'
import { TrendInfo } from './trendInfo.js'

class DataBox extends React.Component {
  constructor (props) {
    super (props)
  }

	render () {
		const { lastReading, sixHourDelta, twelveHourDelta, twentyFourHourDelta, fortyEightHourDelta } = this.props
    if (lastReading != undefined) {
    return [
      e(
        "rect",
        {
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
        }), 
      e(
        "text",
        {
          key: "date",
          x: "7",
          y: "2",
          style: {
            fill: 'black',
            fontSize: '1.5'
          }
        },
        " Last Observation: ",
          lastReading.date.slice(0, 16), " "),
      e(
        "text",
        {
          key: "value",
          x: "7",
          y: "4",
          style: {
            fill: 'black',
            fontSize: '1.5'
          }
        },
        " Last Observed Value: ",
        lastReading.level, "  ft"),
      e(
        TrendInfo,
        {
          sixHourDelta: sixHourDelta,
          twelveHourDelta: twelveHourDelta,
          twentyFourHourDelta: twentyFourHourDelta,
          fortyEightHourDelta: fortyEightHourDelta
        })];
  } else {
    return e(Spinner, null);
  }
  }
}

export { DataBox }