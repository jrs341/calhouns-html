import React from 'react'
import { Query } from 'react-apollo'

import Spinner from '../../components/Spinner'
import CURRENT_CUSTOMERS from '../../graphql/CurrentCustomers.graphql'

export default class CurrentCustomers extends React.Component{
	constructor() {
		super()

		this.state = {
			customer: ''
		}

		this.dropDown = this.dropDown.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	dropDown(event) {
		if(this.state.customer == event.target.id){
			this.setState({customer: ''})
		} else {
			this.setState({customer: event.target.id})	
		}
	}

	onChange(event) {
		// client.query(SEARCH_CUSTOMERS).then(res => {
		// 	console.log('query res', res)})
		// .catch(err => {
		// 	console.log('query err', err)
		// })
		console.log('props', this.props)
		this.setState({query:event.target.value})
	}

	render() {
		return(
			<Query query={CURRENT_CUSTOMERS}>
	    	{ ({loading, data}) => {
	    		if (loading) {
	    			return (<h1> <Spinner /> </h1>)
	    		} else {
	    			return (
	    				<div>
	    					<h1>Current Customers</h1>
	    					<table>
	    					<tbody>
	    						<tr>
	    							<td> Location </td>
	    							<td> First Name </td>
	    							<td> Last Name </td>
	    							<td> Phone Number </td>
	    							<td> Customer Id </td>
	    							<td> Email </td>
	    							<td> Current Invoice </td>
	    							<td></td>
	    						</tr>
	    						{data.currentCustomers.map((obj, i) => {
	    							return (
	    								<tr>
	    									<td>{obj.meter}</td>
	    									<td>{obj.given_name}</td>
	    									<td>{obj.family_name}</td>
	    									<td>{obj.phone_number}</td>
	    									<td>{obj._id}</td>
	    									<td>{obj.email}</td>
	    									<td> 0000023 </td>
	    									<td>
	    										<i className='material-icons'
													style={{fontSize:'12px', color:'blue'}}
													id={obj._id}
													onClick={this.dropDown}>{this.state.customer == obj._id ? 'cancel' : 'more_vert'}</i>
													<menu style={this.state.customer == obj._id ? {} : {display:'none'}}>
														<li data-id={obj._id} onClick={this.onSelect}> CheckOut </li>
														<li data-id={obj._id} onClick={this.onSelect}> Transfer </li>
													</menu>
	    									</td>
	    								</tr>
	    							)
	    						})}
	    					</tbody>
	    					</table>
	    				</div>
	    			)
	    		}
	    	}}
	    </Query> 	
		)
	}
}