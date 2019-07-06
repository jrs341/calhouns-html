'use strict';

const e = React.createElement;

import { LineChart } from "../LineChart/lineChart.js";

//import TIVOLI_RIVER_INFO from '../../graphql/TivoliRiverInfo.graphql'
import { Spinner } from "./spinner.js"; 
class TivoliRiverLevel extends React.Component{
	constructor(props) {
    super(props);
    this.state = { data: false };
    
    this.getData = this.getData.bind(this)
  }

	getData = () => {
		fetch('https://graphql-server-basic.herokuapp.com/?query={getTivoliRiverInfo{data{date, level}, trendInfo{lastReading{date, level} sixHourDelta, twelveHourDelta, twentyFourHourDelta, fortyEightHourDelta}}}')
			.then((response) => {
				if (response.status !== 200) {
					console.log('There was a problem')
					this.setState({data:false})
					return
					
				}

				response.json().then((data) => {
					this.setState({data:data})
					return	
				})
			})
			.catch((error) => {
				console.log('Fetch Error', error)
				return
			})
		}

	render() {

		if (typeof this.state.data === 'object'){
			return e(LineChart, {data: this.state.data.data.getTivoliRiverInfo}, null)
		}
			this.getData()
			return e(Spinner)
	}
}

const domContainer = document.querySelector('#riverLevel');
ReactDOM.render(e(TivoliRiverLevel), domContainer);
