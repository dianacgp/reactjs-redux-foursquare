import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRecomendations, GetLocation } from '../../store/actions/places';
import Suggestions from './suggestions'

class Coffee extends Component {

  render() {
    const { suggestions,  suggestionsRefreshing, suggestionsLoaded, GetRecomendations, suggestionsError, ll } = this.props;

    console.log('coffe primero', suggestionsRefreshing)
    return (
      <Suggestions
        section='coffee'
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
    suggestionsRefreshing: state.places.coffeeRefreshing,
    suggestions: state.places.coffee,
    suggestionsError: state.places.coffeeError,
    suggestionsLoaded: state.places.coffeeLoaded,
    ll: state.places.ll
  }
}

export default connect(state => ( mapStateToProps), { GetRecomendations })(Coffee);