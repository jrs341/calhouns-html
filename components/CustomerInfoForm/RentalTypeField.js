import React, { Component } from 'react'

const rentals = ['RV', 'Cabin']

export default class RentalTypeField extends Component {
	constructor() {
		super()

		this.state = {
			type: ''
		}

		this.setType = this.setType.bind(this)
		this.renderSelected = this.renderSelected.bind(this)
		this.renderUnselected = this.renderUnselected.bind(this)
	}

	setType(event) {
		if(this.state.type == event.target.name) {
			this.setState({type: ''})
			this.props.setParentState('type', '')
		} else {
			this.setState({type: event.target.name})
			this.props.setParentState('type', event.target.name)
		}	
	}

	renderSelected () {
		const selected =
			rentals.map(type => {
				if (this.state.type == type) {
					return([
					<label> {type} </label>,
					<input
						key = {type}
						name = {type}
						type = 'checkbox'
						onClick = {this.setType}
						checked
					/>
				])
				} else {
					return ([
					<label> {type} </label>,
					<input
						key = {type}
						name = {type}
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
			rentals.map(type => {
				return(
					[<label> {type} </label>,
					<input
						key = {type}
						name = {type}
						type = 'checkbox'
						onClick = {this.setType}
					/>]
				)
			})
		return unselected	
	}

	render() {
		return(
			<fieldset form='checkin' name='rateSet'>
			<legend> Rental Type </legend>
				{this.state.type == ''
					? this.renderUnselected()
					: this.renderSelected()}
			</fieldset>
		)
	}
}