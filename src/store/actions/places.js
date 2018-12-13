import * as actions from '../action-types';

const clientID = '5WCPOCQ4245Q0KBQRVNXVPSOMTX5S2ZRCAHVNNRHVYFKEPCE';
const clientSecret = 'HRT4MKUUXALGGCVXZBMPDALG52DGR1NUFBRAOOGDJXGEMME1';
const authorization = 'client_id=' + clientID + '&client_secret=' + clientSecret

export const getPlaces = () => ({
	type: actions.API,
	payload: { url: 'search/recommendations', ...actions.GET_PLACES }
});

// export function GetRecomendations(section) {
// 	let action  =  section === 'food' ? actions.GET_RECOMENDATIONS_FOOD : section === 'coffee' ? actions.GET_RECOMENDATIONS_COFFEE : actions.GET_RECOMENDATIONS_DRINKS ;

// 	return{
// 		type: actions.API,
// 		payload: { url: 'search/recommendations?' + authorization + '&v=20180323&near=San%20F%C3%A9lix&nearGeoId=72057594041556347&q=' + section , ...action }
// 	}
// }

export function GetRecomendations(section) {
  //return ({ dispatch, getState, apiUrl, logError }) => {

    //const myState = getState();
    //console.log(apiUrl() + '/users/' + myState.auth.user_id);
    let action  =  section === 'food' ? actions.GET_RECOMENDATIONS_FOOD : section === 'coffee' ? actions.GET_RECOMENDATIONS_COFFEE : actions.GET_RECOMENDATIONS_DRINKS ;

    return{
      type: actions.API,
      payload: { url: `search/recommendations?${authorization}&v=20180323&section=${section}&sortByDistance=1` , ...action }
    }
  //};
}

export const SetLocation = (location) => {

  return {
      type: actions.SET_LOCATION,
      payload: location,
  }
};