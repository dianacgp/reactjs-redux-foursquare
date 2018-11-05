import {GET_PLACES, GET_RECOMENDATIONS} from '../action-types'

import { Record, List } from 'immutable';

const InitialState = Record({
  form_disabled: false,
  form_error: false,

  places: new List(),
  places_refreshing: false,
  places_loaded: false,
  places_error: false,

  food: new List(),
  food_refreshing: false,
  food_loaded: false,
  food_error: false,

  languageApp: null,
  

});
const initialState = new InitialState();
let result =  [];

export const places = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
	switch (action.type) {
		case GET_PLACES.SUCCESS: 
			result =  [];
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
			
      return state.merge({
        places: result,
      });
		case GET_PLACES.PENDING: 
			return state
		case GET_PLACES.FAILURE:
			return state

		//--------------------------------

		case GET_RECOMENDATIONS.SUCCESS: 
			result =  []
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
			
      return state.merge({
        places: result,
      });
		case GET_RECOMENDATIONS.PENDING: 
			return state
		case GET_RECOMENDATIONS.FAILURE:
			return state
		default: 
			return state
	}
}