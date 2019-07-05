import React, {Component} from 'react'

class Logo extends Component {
	render () {
		return (
			<svg viewBox='0 0 40 40' >
				<g key='logo group'>
					{/*<circle cx='20' cy='20' r='5' stroke='blue' strokeWidth='.8' fill='none' />*/}
					<text key='logoC' x='16.3' y='23.5' style={{fill: 'blue', fontSize:'10', fontFamily:'Akronim'}}> C </text>
					<text key='logoRV' x='18' y='21.5' style={{fill: 'red', fontSize:'3', fontFamily:'Amita'}}> RV </text>
					<text key='logoC' x='10.3' y='23.5' style={{fill: 'blue', fontSize:'10', fontFamily:'Averia Gruesa Libre'}}> C </text>
					<text key='logoV' x='10.3' y='23.5' style={{fill: 'red', fontSize:'3', fontFamily:'Averia Gruesa Libre'}}> RV </text>
				</g>
			</svg>
		)
	}
} 

export { Logo }