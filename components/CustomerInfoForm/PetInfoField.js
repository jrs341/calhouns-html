import React, { Component } from 'react'

export default class PetInfoField extends Component {
	constructor() {
		super()

		this.state = {
			customer: {}
		}
	}

	render() {
		return(
			<fieldset form='checkin' name='petInfo'>
			<legend> Pet Info </legend>
				<label>Number of Pets</label>
				<input
				tabIndex = '16'
				name='pets_number_of'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.pets_number_of}
				/>
				<label>Type of Pets</label>
				<input
				tabIndex = '17'
				name='pets_type'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.pets_type}
				/>
				<label>Breed of Dog</label>
				<input
				tabIndex = '18'
				name='pets_breed'
				type='text'
				onChange = {this.updateCustomer}
				value={this.state.customer.pets_breed}
				/>
			</fieldset>
		)
	}
}