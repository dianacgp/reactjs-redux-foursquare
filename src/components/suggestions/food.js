import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRecomendations } from '../../store/actions/places';
import Suggestions from './suggestions'

class Food extends Component {


  render() {
    const { suggestions,  suggestionsRefreshing, suggestionsLoaded, GetRecomendations, suggestionsError} = this.props;

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

  }
}

const mapStateToProps = state => {
  return {
    suggestionsRefreshing: state.places.food_refreshing,
    suggestions: state.places.food,
    suggestionsError: state.places.foodError,
    suggestionsLoaded: state.places.food_loaded,
  }
}

export default connect(state => ( mapStateToProps), { GetRecomendations })(Food);