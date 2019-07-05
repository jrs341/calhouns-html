import React, { Component } from 'react'

export default class CustomerInfoField extends Component {
	constructor() {
		super()

		this.state = {
			customer: {}
		}
	this.updateCustomer = this.updateCustomer.bind(this)
	}
	
	updateCustomer(event) {
		if(Object.keys(this.state.customer).length === 0){
			const customer = {}
			const input = document.getElementById(event.target.name)
			this.setState({customer: customer})
			}
		this.setState({customer: { ...this.state.customer, [event.target.name] : event.target.value}})
	}

	render() {
		return(
			<fieldset form='checkin' name='customerInfo'>
				<legend> Customer Info </legend>
				<label>First Name</label>
				<input
				tabIndex = '2'
				name = 'given_name'
				type = 'text'
				onChange = {this.updateCustomer}
				value = {this.state.customer.given_name}
				/>
				<label>Last Name</label>
				<input
				id = 'family_name'
				tabIndex = '3'
				name='family_name'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.family_name}
				/>
				<label>Email</label>
				<input
				id = 'email'
				tabIndex = '4'
				name='email'
				type='email'
				onChange = {this.updateCustomer}
				value={this.state.customer.email}
				/>
				<label>Phone</label>
				<input
				tabIndex = '5'
				name='phone_number'
				type='tel'
				value={this.state.customer.phone_number}
				/>
				<label>Alt Phone</label>
				<input
				tabIndex = '6'
				name='phone_number_alt'
				type='tel'
				onChange = {this.updateCustomer}
				value={this.state.customer.phone_number_alt}
				/>
				<label>Address</label>
				<input
				tabIndex = '7'
				name='address_line_1'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.address_line_1}
				/>
				<label>City</label>
				<input
				tabIndex = '8'
				name='locality'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.locality}
				/>
				<label>State</label>
				<input
				tabIndex = '9'
				name='administrative_district_level_1'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.administrative_district_level_1}
				/>
				<label>Postal Code</label>
				<input
				tabIndex = '10'
				name='postal_code'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.postal_code}
				/>
				<label>Country</label>
				<input
				tabIndex = '11'
				name='country'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.country}
				/>
				<label>Drivers License Num</label>
				<input
				tabIndex = '12'
				name='drivers_license_num'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.drivers_license_num}
				/>
				<label>Drivers License State</label>
				<input
				tabIndex = '13'
				name='drivers_license_state'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.drivers_license_state}
				/>
			</fieldset>
		)
	}
}