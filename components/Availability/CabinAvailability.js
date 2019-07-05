import React, { Component } from 'react'
import { Query } from 'react-apollo'

import { Spinner } from '../../Components/Spinner'
import AVAILABILITY from '../../graphql/Availability.graphql'

export default class CabinAvailability extends Component {
	render() {
			return(<Query query={AVAILABILITY}>
				{ ({loading, data}) => {
					if(loading) {
						return (<h1> <Spinner /> </h1>)
					} else {
						return (
							<div>
							<h3> Available Cabins </h3>
							{data.cabinAvailability.map(meter => {
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