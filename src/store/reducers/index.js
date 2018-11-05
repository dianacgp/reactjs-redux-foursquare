import {combineReducers} from 'redux'

import {places} from './places'
import {ui} from './ui'

export default combineReducers({
	places,
	ui
})