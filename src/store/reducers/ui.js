import {GET_PLACES} from '../action-types'

export const ui = (state = { placesPending: false }, action) => {
	switch (action.type) {
		case GET_PLACES.PENDING:
			return {...state, placesPending: true}
		case GET_PLACES.SUCCESS: 
			return {...state, placesPending: false}
		default:
			return state
	}
}