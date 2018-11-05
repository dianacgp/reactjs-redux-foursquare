import axios from 'axios'
import {API} from '../action-types'

const BASE_URL = 'https://api.foursquare.com/v2/';
const CLIENT_ID = '5WCPOCQ4245Q0KBQRVNXVPSOMTX5S2ZRCAHVNNRHVYFKEPCE';
const CLIENT_SECRET = 'HRT4MKUUXALGGCVXZBMPDALG52DGR1NUFBRAOOGDJXGEMME1';

export const apiMiddleware = ({dispatch}) => next => action => {
	if (action.type !== API) {
		return next(action)
	}

	const {payload} = action
	console.log('en api', BASE_URL + payload.url + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=20180323&near=San%20F%C3%A9lix&nearGeoId=72057594041556347&q=pizza')
	dispatch({ type: payload.PENDING })

	axios.get(BASE_URL + payload.url + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=20180323&near=San%20F%C3%A9lix&nearGeoId=72057594041556347&q=pizza') 
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