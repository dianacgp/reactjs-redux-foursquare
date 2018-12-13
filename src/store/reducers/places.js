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

  coffee: new List(),
  coffeeRefreshing: false,
  coffeeLoaded: false,
  coffeeError: false,

  drinks: new List(),
  drinksRefreshing: false,
  drinksLoaded: false,
  drinksError: false,

  ll: null,

  

});
const initialState = new InitialState();
let result =  [];

export const places = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
	switch (action.type) {

    case actions.SET_LOCATION: 
      result =  [];
    
      return state.merge({
        ll: `${action.payload.latitude},${action.payload.longitude}`,
      });

    //------------------------------
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

		case actions.GET_RECOMENDATIONS_FOOD.SUCCESS: 
			result =  []
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
      console.log('en food', result)
			
      return state.merge({
        food: result,
        foodRefreshing: false,
        foodError: false,
        foodLoaded: true,
      });
		case actions.GET_RECOMENDATIONS_FOOD.PENDING: 
  		return state.merge({
        foodError: false,
        foodRefreshing: true,
        food: new List(),
        foodLoaded: false,

      });
		case actions.GET_RECOMENDATIONS_FOOD.FAILURE:
			   return state.merge({
        foodRefreshing: false,
        foodError: true,
        foodLoaded: false,
      });

    //--------------------------------

    case actions.GET_RECOMENDATIONS_COFFEE.SUCCESS: 
      result =  []
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
      console.log('en cofffee', result)
      
      return state.merge({
        coffee: result,
        coffeeRefreshing: false,
        coffeeError: false,
        coffeeLoaded: true,
      });
    case actions.GET_RECOMENDATIONS_COFFEE.PENDING: 
      return state.merge({
        coffeeError: false,
        coffeeRefreshing: true,
        coffee: new List(),
        coffeeLoaded: false,

      });
    case actions.GET_RECOMENDATIONS_COFFEE.FAILURE:
         return state.merge({
        coffeeRefreshing: false,
        coffeeError: true,
        coffeeLoaded: false,
      });
    //--------------------------------

    case actions.GET_RECOMENDATIONS_DRINKS.SUCCESS: 
      result =  []
      if (action.payload.response.group.totalResults > 0){
       result = action.payload.response.group.results;
      }
      console.log('en drinks', result)
      
      return state.merge({
        drinks: result,
        drinksRefreshing: false,
        drinksError: false,
        drinksLoaded: true,
      });
    case actions.GET_RECOMENDATIONS_DRINKS.PENDING: 
      return state.merge({
        drinksError: false,
        drinksRefreshing: true,
        drinks: new List(),
        drinksLoaded: false,

      });
    case actions.GET_RECOMENDATIONS_DRINKS.FAILURE:
         return state.merge({
        drinksRefreshing: false,
        drinksError: true,
        drinksLoaded: false,
      });
		default: 
			return state
	}
}