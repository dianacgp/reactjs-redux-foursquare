const asyncActionType = (type) => ({
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
})

export const API = 'API'
export const GET_PLACES = asyncActionType('GET_PLACES')
export const GET_RECOMENDATIONS_COFFEE = asyncActionType('GET_RECOMENDATIONS_COFFEE')
export const GET_RECOMENDATIONS_FOOD = asyncActionType('GET_RECOMENDATIONS_FOOD')
export const GET_RECOMENDATIONS_DRINKS = asyncActionType('GET_RECOMENDATIONS_DRINKS')
export const SET_LOCATION = 'SET_LOCATION'