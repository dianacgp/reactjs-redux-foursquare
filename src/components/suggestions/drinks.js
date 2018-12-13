import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRecomendations } from '../../store/actions/places';
import Suggestions from './suggestions'

class Drinks extends Component {


  render() {
    const { suggestions,  suggestionsRefreshing, suggestionsLoaded, GetRecomendations, suggestionsError, ll} = this.props;
    console.log('drinks', suggestions)
    if (ll !== null){
      return (
        <div>
          <p>drinks</p>
        <Suggestions
          section='drinks'
          GetRecomendations={GetRecomendations}
          refreshing={suggestionsRefreshing}
          suggestions = {suggestions}
          suggestionsLoaded={suggestionsLoaded}
          suggestionsError={suggestionsError}
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
    suggestionsRefreshing: state.places.drinksRefreshing,
    suggestions: state.places.drinks,
    suggestionsError: state.places.drinksError,
    suggestionsLoaded: state.places.drinksLoaded,
    ll: state.places.ll
  }
}

export default connect(state => ( mapStateToProps), { GetRecomendations })(Drinks);