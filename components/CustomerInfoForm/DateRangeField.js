import React, { Component } from 'react'

export default class DateRangeField extends Component {
	constructor() {
		super()

		this.state = {
			checkin: '',
			checkout: ''
		}

		this.getDaysInMonth = this.getDaysInMonth.bind(this)
		this.isLeapYear = this.isLeapYear.bind(this)
		this.setCheckoutDate = this.setCheckoutDate.bind(this)
		this.setDate = this.setDate.bind(this)
	}

	getDaysInMonth (year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
	}

	isLeapYear (year) {
		console.log('year', year)
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
	}

	setCheckoutDate (date, rate) {
		const checkoutDate = date.getUTCDate()
		if (rate == 'Monthly') {
			date.setDate(1)
			date.setMonth(date.getMonth() + 1)
			date.setDate(Math.min(checkoutDate, this.getDaysInMonth(date.getFullYear(), date.getMonth())))
			console.log('checkoutDate monthly', date)
			return date
		} else if (rate == 'Weekly') {
			date.setDate(checkoutDate + 7)
			console.log('wwekly', date)
		} else {
			date.setDate(checkoutDate + 1)
			console.log('daily', date)
		}
		return date
	}
// currently no need to change the date format if neeeded move to resolver
	setDate (event) {
		if (event.target.name == 'checkout' && event.target.value == '') {
			this.props.setParentState('checkout', 'unknown')
		} else {
			if (event.target.name == 'checkin' && this.props.rate != 'Daily' || this.props.rate != '') {
				// const checkinDate = new Date(event.target.value).toUTCString()
				const checkinDate = new Date(event.target.value)
				console.log('checkinDate', checkinDate)
				this.setCheckoutDate(checkinDate, this.props.rate)
				// if (this.props.rate == 'Monthly'){
		
				// } else {
				// 	this.setState({checkout: checkoutDate})
				// }
			}
			this.props.setParentState(event.target.name, event.target.value)
		}
		
		// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		// console.log('set date', event.target.value)
		// const date = new Date(event.target.value)
		// console.log('date', date)
		// console.log('day', date.getUTCDate())
		// console.log('month', date.getUTCMonth())
		// console.log('year', date.getUTCFullYear())
		// const month = months[date.getUTCMonth()]
		// const day = date.getUTCDate().toString()
		// const year = date.getUTCFullYear()
		// this.setState({[event.target.name]: month + '/' + day + '/' + year})
	}

	render() {
		return(
			<fieldset form='checkin' name='dateRange'>
			<legend> Date Range </legend>
				<label>Checkin</label>
				<input
				name='checkin'
				tabIndex = '4'
				type='date'
				onChange={this.setDate}
				required
				/>
				<label>Checkout</label>
				{ this.props.rate == 'Daily' || this.props.rate == ''
					? <input
						name='checkout'
						tabIndex = '4'
						type='date'
						onChange={this.setDate}
						required
					/>
					: <input
						name='checkout'
						tabIndex = '4'
						type = 'date'
						onChange={this.setDate}
						value = {this.state.checkout}
						required
					/>
				}
			</fieldset>
		)
	}
}