import React, { Component } from 'react'

import CabinAvailability from '../Availability/CabinAvailability'
import DateRangeField from '../CustomerInfoForm/DateRangeField'
import RateField from '../CustomerInfoForm/RateField'
import RentalType from '../CustomerInfoForm/RentalTypeField'
import RVAvailability from '../Availability/RVAvailability'
import { Spinner } from '../Spinner'

export default class CheckAvailability extends Component {
	constructor(props) {
		super(props)

		this.state = {
			type: '',
			rate: '',
			checkin: '',
			checkout: '',
			timeout: true
		}

		this.noResponse = this.noResponse.bind(this)
		this.setParentState = this.setParentState.bind(this)
	}

	componentWillUnmount () {
		clearTimeout(this.timeout)
	}

	noResponse (type) {
		let component 
		this.state.timeout 
			? component = <Spinner />
			: component = <h2> Sorry there are no {type}s available </h2>
		
		this.state.timeout
			? this.timeout = setTimeout(() => {
					this.setState({timeout: false})
					}, 1000)
			: clearTimeout(this.timeout)
		return component
	}

	setParentState (name, data) {
		this.setState({[name]: data})
	}

	render() {
		const {type, rate, checkin, checkout} = this.state
		const date = new Date(checkin)
		const dateUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
		const today = new Date()
		const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
		const tenDays = 24*60*60*1000*9
		const sevenDays = 24*60*60*1000*6
		const cabinDiff = (dateUTC - todayUTC)/tenDays
		const RVdiff = (dateUTC - todayUTC)/sevenDays
		
		return (
			<fieldset form='checkin' name='checkAvailable'>
			<legend> Check Availability </legend>
				<RentalType setParentState = {this.setParentState} />
				<RateField setParentState = {this.setParentState}/>
				<DateRangeField setParentState = {this.setParentState} rate = {this.state.rate}/>
				{ type == 'Cabin' && checkin != '' && checkout != '' && rate != ''
					? type == 'Cabin' && rate == 'Monthly' && cabinDiff >= -1.5 && cabinDiff <= 1
						? <CabinAvailability />
						: this.noResponse(type)
					: null
				}
				{ type == 'RV' && checkin != '' && checkout != '' && rate != ''
					? RVdiff >= -1.5 && RVdiff <= 1
						? <RVAvailability />
						: this.noResponse(type)
					: null
				}	
			</fieldset>
		)
	}
} 