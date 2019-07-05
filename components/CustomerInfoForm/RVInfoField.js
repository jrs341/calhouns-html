import React, { Component } from 'react'

export default class RVInfoField extends Component {
	constructor() {
		super()

		this.state = {
			customer: {}
		}
	}

	render() {
		return(
			<fieldset form='checkin' name='RVInfo'>
				<legend> RV Info </legend>
				<label>RV Type</label>
				<input
				tabIndex = '19'
				name='unit_type'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_type}
				/>
				<label>RV Length</label>
				<input
				tabIndex = '20'
				name='unit_length'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_length}
				/>
				<label>RV Year</label>
				<input
				tabIndex = '21'
				name='unit_year'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_type}
				/>
				<label>RV License Plate Num</label>
				<input
				tabIndex = '22'
				name='unit_license'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_license}
				/>
				<label>RV License Plate State</label>
				<input
				tabIndex = '23'
				name='unit_state'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.unit_state}
				/>
			</fieldset>
		)
	}
}