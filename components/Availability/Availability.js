import React, { Component } from 'react'
import { Query } from 'react-apollo'

import { Spinner } from '../../Components/Spinner'
import AVAILABILITY from '../../graphql/Availability.graphql'

export default class Availability extends Component {
	render() {
		console.log('options', this.props.options)
		const { type, rate, checkin } = this.props
		
			return(<Query query={AVAILABILITY}>
				{ ({loading, data}) => {
					if(loading) {
						return (<h1> <Spinner /> </h1>)
					} else {
						return (
							<div>
							<h1> Availability </h1>
							<h3> Cabins </h3>
							{data.cabinAvailability.map(meter => {
								return (
									[<label> {meter.meter} </label>,
									<input type='checkbox'
									/>]
								)
								})
							}
							<h3> RV Spaces </h3>
							{data.rvAvailability.map(meter => {
								return (
									[<label> {meter.meter} </label>,
									<input type='checkbox'
									/>]
								)
								})
							}
							</div>
						)
					}
				}
			}
			</Query>
		)
	}
}