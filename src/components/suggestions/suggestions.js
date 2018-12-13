import React, {Component} from 'react'
import {connect} from 'react-redux'
import { GetRecomendations } from '../../store/actions/places';
import Categories from '../common/categories'
const General = require('../../js/general.js');

export default class Suggestions extends Component {

	constructor(props) {
    super(props);

  }
	componentDidMount () {
		console.log('GetRecomendations ', this.props.section)
		this.props.GetRecomendations(this.props.section);

	}
	render() {
		
		const { suggestions, section } = this.props;

		return(
			<div>
				<div className='col-md-6'>
				{suggestions.map((data, i) => 
					<div key={i} className="card mt-5">
						{ 
							// data.photo &&

					  // <img className="card-img-top" src={data.photo.prefix + '200x200' + data.photo.suffix } alt="Card image cap"/>
					  }
					  <div className="card-body">
					    <h5 className="card-title">{data.venue.name}</h5>
					    {data.location &&
						    <p className="card-text">{data.location.address}</p>
						  }
						  <Categories place={data.venue}/>
					    {data.venue.location &&
                <p>{General.getLocation(data.venue.location)}</p>
              }
					  </div>
					</div>
				)}
				</div>
			</div>
		)
	}
}