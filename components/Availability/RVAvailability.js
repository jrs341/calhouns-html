import React, { Component } from 'react'
import { Query } from 'react-apollo'

import { Spinner } from '../../Components/Spinner'
import AVAILABILITY from '../../graphql/Availability.graphql'

export default class RVAvailability extends Component {
	render() {
			return(<Query query={AVAILABILITY}>
				{ ({loading, data}) => {
					if(loading) {
						return (<h1> <Spinner /> </h1>)
					} else {
						return (
							<div>
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