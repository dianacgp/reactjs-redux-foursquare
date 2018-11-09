import * as actions from '../action-types';

const clientID = '5WCPOCQ4245Q0KBQRVNXVPSOMTX5S2ZRCAHVNNRHVYFKEPCE';
const clientSecret = 'HRT4MKUUXALGGCVXZBMPDALG52DGR1NUFBRAOOGDJXGEMME1';
const authorization = 'client_id=' + clientID + '&client_secret=' + clientSecret

export const getPlaces = () => ({
	type: actions.API,
	payload: { url: 'search/recommendations', ...actions.GET_PLACES }
});

export const GetRecomendations = (section) => ({
	type: actions.API,
	payload: { url: 'search/recommendations?' + authorization + '&v=20180323&near=San%20F%C3%A9lix&nearGeoId=72057594041556347&q=' + section , ...actions.GET_RECOMENDATIONS }
});