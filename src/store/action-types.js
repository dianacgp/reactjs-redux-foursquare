const asyncActionType = (type) => ({
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
})

export const API = 'API'
export const GET_PLACES = asyncActionType('GET_PLACES')
export const GET_RECOMENDATIONS = asyncActionType('GET_RECOMENDATIONS')