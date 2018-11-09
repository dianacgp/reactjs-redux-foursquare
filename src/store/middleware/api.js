import axios from 'axios'
import {API} from '../action-types'

const BASE_URL = 'https://api.foursquare.com/v2/';


export const apiMiddleware = ({dispatch}) => next => action => {
	if (action.type !== API) {
		return next(action)
	}

	const {payload} = action
	dispatch({ type: payload.PENDING })

	console.log(BASE_URL + payload.url)
	axios.get(BASE_URL + payload.url) 
		.then(response => {
			console.log('response', response)
			console.log(payload.SUCCESS)
			dispatch({ type: payload.SUCCESS, payload: response.data })
		})
		.catch(err => {
			console.log('err', err)
			dispatch({ type: payload.FAILURE })
		})
}