import * as actions from '../action-types'

import { Record, List } from 'immutable';

const InitialState = Record({
  form_disabled: false,
  form_error: false,

  places: new List(),
  places_refreshing: false,
  places_loaded: false,
  places_error: false,

  food: new List(),
  foodRefreshing: false,
  foodLoaded: false,
  foodError: false,

  languageApp: null,
  

});
const initialState = new InitialState();
let result =  [];

export const places = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
	switch (action.type) {
		case actions.GET_PLACES.SUCCESS: 
			result =  [];
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
			
      return state.merge({
        places: result,
      });
		case actions.GET_PLACES.PENDING: 
			return state
		case actions.GET_PLACES.FAILURE:
			return state

		//--------------------------------

		case actions.GET_RECOMENDATIONS.SUCCESS: 
			result =  []
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
			
      return state.merge({
        food: result,
        foodRefreshing: false,
        foodError: false,
        foodLoaded: true,
      });
		case actions.GET_RECOMENDATIONS.PENDING: 
  		return state.merge({
        foodError: false,
        foodRefreshing: true,
        food: new List(),
        foodLoaded: false,

      });
		case actions.GET_RECOMENDATIONS.FAILURE:
			   return state.merge({
        foodRefreshing: false,
        foodError: true,
        foodLoaded: false,
      });
		default: 
			return state
	}
}