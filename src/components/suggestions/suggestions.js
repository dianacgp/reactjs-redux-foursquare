import React, {Component} from 'react'
import {connect} from 'react-redux'
import { GetRecomendations } from '../../store/actions/places';
import Categories from '../common/categories'
const General = require('../../js/general.js');


class Suggestions extends Component {

	constructor(props) {
    super(props);

  }
	componentDidMount () {

		this.props.GetRecomendations(this.props.section);

	}
	render() {
		
		const { suggestions, section } = this.props;

		return(
			<div>
				<div className='col-md-12'>
				{suggestions.map((data, i) => 
					<div key={i} className="card mt-5">
						<div className='row'>

							<div className="col-md-2">
							{ 
								data.photo &&

						  	<img className="img-thumbnail" src={data.photo.prefix + '200x200' + data.photo.suffix } alt="Card image cap"/>
						  }
						  </div>
						  <div className="col-md-10">
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
					  </div>
					</div>
				)}
				</div>
			</div>
		)
	}
}

class ClassSuggestions extends Component {

  render() {
    const { suggestions,  refreshing, suggestionsLoaded, GetRecomendations, suggestionsError, ll, section } = this.props;

    if (ll !== null){

      return (
      	<div>
      		{refreshing && <button className="btn btn-sm btn-warning"><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button>}
	        <Suggestions
	        	{...this.props}
	        />
	      </div>
      );
    }else{
      return (<div><p>nulo</p></div>)

    }

  }
}
const mapStateToProps = state => {
  return {
    ll: state.places.ll
  }
}

export default connect(state => ( mapStateToProps), { })(ClassSuggestions);
