import React, { Component } from 'react'

export default class VehicleInfoField extends Component {
	constructor() {
		super()

		this.state = {
			customer: {}
		}
	}

	render() {
		return(
			<fieldset form='checkin' name='vehicleInfo'>
			<legend> Vehicle Info </legend>
				<label>Vehicle Type</label>
				<input
				tabIndex = '24'
				name='vehicle_1_type'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.vehicle_1_type}
				/>
				<label>Vehicle License Num</label>
				<input
				tabIndex = '25'
				name='vehicle_1_license'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.vehicle_1_license}
				/>
				<label>Vehicle License State</label>
				<input
				tabIndex = '25'
				name='vehicle_1_state'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.vehicle_1_state}
				/>
			</fieldset>
		)
	}
}