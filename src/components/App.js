import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
	render() {
		console.log(this.props.places)
		return(
			<div>
				<p>hola</p>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		places: state.places.places
	}
}
export default connect(mapStateToProps, {})(App)
