import React, { Component } from 'react'
import { withApollo } from 'react-apollo'

import AdditionalOccupantsField from './AdditionalOccupantsField'
import CustomerInfoField from './CustomerInfoField'
import DateRangeField from './DateRangeField'
import RateField from './RateField'
import RentalTypeField from './RentalTypeField'
import RVInfoField from './RVInfoField'
import PetInfoField from './PetInfoField'
import Search from '../Search/Search'
import VehicleInfoField from './VehicleInfoField'

class CustomerInfoForm extends Component{
	constructor() {
		super()

		this.state = {
			cabin: false,
			customer: {},
			updatedInfo: {
				_id:''
			}
		}

		this.resetForm = this.resetForm.bind(this)
		this.setCustomer = this.setCustomer.bind(this)
	}

	resetForm(event) {
		this.setState({customer:{}})
		this.setState({updatedInfo:{_id:''}})
	}

	setCustomer(customer) {
		this.setState({customer:customer})
		this.setState({updatedInfo:{_id:customer._id}})
	}

	render(props) {
		return (
			<div>
			<Search
				setCustomer={this.setCustomer}
				resetForm={this.resetForm}/>
			<form name = 'checkin'>
				<RentalTypeField />
				<RateField />
				<DateRangeField />
				<CustomerInfoField />
				<AdditionalOccupantsField />
				<PetInfoField />
				<RVInfoField />
				<VehicleInfoField />
				
				<input
				type='submit'
				/>
				<input
				type='reset'
				onClick={this.resetForm}
				/>
				<input
				type='submit'
				value='Call List'
				/>
			</form>
			</div>
		)
	}
}

export default withApollo(CustomerInfoForm)