import React, { Component } from 'react'

export default class AdditionalOccupantsField extends Component {
	constructor() {
		super()

		this.state = {
			customer: {}
		}
	}

	render() {
		return(
			<fieldset form='checkin' name='additionalOccupantInfo'>
			<legend> Additional Occupants </legend>
				<label>Additional Occupant</label>
				<input
				tabIndex = '14'
				name='additional_occupant_1'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.additional_occupant_1}
				/>
				<label>Additional Occupant Age</label>
				<input
				tabIndex = '15'
				name='additional_occupant_1_age'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.additional_occupant_1_age}
				/>
			</fieldset>
		)
	}
}