import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRecomendations } from '../../store/actions/places';
import Suggestions from './suggestions'

class Food extends Component {


  render() {
    const { suggestions,  suggestionsRefreshing, suggestionsLoaded, GetRecomendations, suggestionsError, ll} = this.props;

    console.log('food', suggestions)
    if (ll !== null){
      return (
        <Suggestions
          section='food'
          GetRecomendations={GetRecomendations}
          refreshing={suggestionsRefreshing}
          suggestions = {suggestions}
          suggestionsLoaded={suggestionsLoaded}
          suggestionsError={suggestionsError}
        />
      );
    }else{
      return (<div><p>nulo</p></div>)
    }
  }
}

const mapStateToProps = state => {
  return {
    suggestionsRefreshing: state.places.foodRefreshing,
    suggestions: state.places.food,
    suggestionsError: state.places.foodError,
    suggestionsLoaded: state.places.foodLoaded,
    ll: state.places.ll
  }
}

export default connect(state => ( mapStateToProps), { GetRecomendations })(Food);