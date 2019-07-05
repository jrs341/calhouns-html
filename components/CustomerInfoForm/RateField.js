import React, { Component } from 'react'

const rates = ['Daily', 'Weekly', 'Monthly'] 

export default class RateField extends Component {
	constructor() {
		super()

		this.state = {
			rate: ''
		}

		this.renderSelected = this.renderSelected.bind(this)
		this.renderUnselected = this.renderUnselected.bind(this)
		this.setRate = this.setRate.bind(this)
	}

	renderSelected () {
		const selected =
			rates.map(rate => {
				if (this.state.rate == rate) {
					return([
					<label> {rate} </label>,
					<input
						key = {rate}
						name = {rate}
						type = 'checkbox'
						onClick = {this.setRate}
						checked
					/>
				])
				} else {
					return ([
					<label> {rate} </label>,
					<input
						key = {rate}
						name = {rate}
						type = 'checkbox'
						disabled
					/>
				])
				}
				})
		return selected
	}

	renderUnselected () {
		const unselected =
			rates.map(rate => {
				return(
					[<label> {rate} </label>,
					<input
						key = {rate}
						name = {rate}
						type = 'checkbox'
						onClick = {this.setRate}
					/>]
				)
			})
		return unselected	
	}

	setRate (event) {
		if (this.state.rate == event.target.name) {
			this.setState({rate: ''})
			this.props.setParentState('rate', '')
		} else {
			this.setState({rate: event.target.name})
			this.props.setParentState('rate', event.target.name)
		}
	}

	render() {
		return(
			<fieldset key='rateSet' form='checkin' name='rateSet'>
			<legend> Rental Rate </legend>
				{this.state.rate == ''
					? this.renderUnselected()
					: this.renderSelected()
				}
			</fieldset>
		)
	}
}