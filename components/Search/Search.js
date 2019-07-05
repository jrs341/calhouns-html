import React from 'react'
import { Query } from 'react-apollo'
import { withApollo } from 'react-apollo'
import { Spinner } from '../Spinner'

import ALL_METERS from '../../graphql/AllMeters.graphql'
import SEARCH_CUSTOMERS from '../../graphql/SearchCustomers.graphql'
import GET_CUSTOMER from '../../graphql/GetCustomer.graphql'

class Search extends React.Component {
	constructor(){
		super()

		this.state = {
			query: '',
			customer: {}
		}

		// this.dropDown = this.dropDown.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSelect = this.onSelect.bind(this)
	}

	// dropDown(event) {
	// 	if(this.state.customer == event.target.id){
	// 		this.setState({customer: ''})
	// 	} else {
	// 		this.setState({customer: event.target.id})	
	// 	}
	// }

	onChange(event) {
		this.setState({query:event.target.value})
	}

	onSelect(event) {
		const {client} = this.props
		client.query({
			query: GET_CUSTOMER,
			variables:{
				id: event.target.attributes.getNamedItem('data-id').value
			}
		}).then(res => {
			this.props.setCustomer(res.data.getCustomer)
		}).catch(err => {
			console.log('query error', err)
		})
		this.setState({query:''})
	}

	render (props) {
		return(
			<div>
			<input
				tabIndex = '1'
				placeholder='Search ...'
				type='text'
				onChange={this.onChange}
				onClick={this.props.resetForm}
				value={this.state.query}
				style={{display:'block'}}
			/>
			{ this.state.query != ''
				? <ul>
					{ this.state.query != ''
						? <Query query={SEARCH_CUSTOMERS}
							ssr={false}
							variables={{query: this.state.query}}>
							{({loading, data}) => {
									if (loading) {
										return (<li> <Spinner /> </li>)
									} else if (data == undefined || data.searchCustomer.length === 0) {
										return (<li> Add Customer </li>)
									} else {
										const options = data.searchCustomer.map((customer, i) => {
											return (<li tabIndex={i + 2}
													key={i + 2}
													data-id={customer._id}
													onClick={this.onSelect}> {customer.given_name}
												{/*<i className='material-icons'
												style={{fontSize:'12px', color:'blue'}}
												id={customer._id}
												onClick={this.dropDown}>{this.state.customer == customer._id ? 'cancel' : 'more_vert'}</i>
												<menu style={this.state.customer == customer._id ? {} : {display:'none'}}>
													<li key='checkin' data-id={customer._id} onClick={this.onSelect}> Checkin </li>
													<li data-id={customer._id} onClick={this.onSelect}> CheckOut </li>
													<li data-id={customer._id} onClick={this.onSelect}> Transfer </li>
												</menu>*/}
												</li>)
										})
										return options
									}
								}
							}
						  </Query>
						: null
						}
				  </ul>
				: null
			}
			</div>
		)
	}
}	

export default withApollo(Search)
		