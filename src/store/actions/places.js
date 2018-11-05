import {API, GET_PLACES, GET_RECOMENDATIONS} from '../action-types'

export const getPlaces = () => ({
	type: API,
	payload: { url: 'search/recommendations', ...GET_PLACES }
});

export const getRecomendations = (section) => ({
	type: API,
	payload: { url: 'search/recommendations', ...GET_RECOMENDATIONS }
});