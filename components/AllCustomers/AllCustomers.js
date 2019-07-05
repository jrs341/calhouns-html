import React from 'react'
import { Query } from 'react-apollo'

import Spinner from '../../components/Spinner'
import ALL_CUSTOMERS from '../../graphql/AllCustomers.graphql'

export default class AllCustomers extends React.Component{
	render() {
		return(
			<Query query={ALL_CUSTOMERS}>
	    	{ ({loading, data}) => {
	    		if (loading) {
	    			return (<h1> <Spinner /> </h1>)
	    		} else {
            return ( 
              <div>
                <h1> All Customers </h1>
                {data.allCustomers.map(customer => {
                  return (<p key={customer.email}> {customer.given_name + ' ' + customer.family_name + ' : ' + customer.email} </p>)
                })}
              </div>
            )
          }
        } 
      }
    	</Query>
		)
	}
}