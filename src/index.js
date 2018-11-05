import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import {apiMiddleware} from './store/middleware/api'
import {getPlaces, getRecomendations} from './store/actions/places'
import rootReducer from './store/reducers'

import App from './components/App'

const store = createStore(rootReducer, applyMiddleware(apiMiddleware))

store.dispatch(getPlaces())
store.dispatch(getRecomendations())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))