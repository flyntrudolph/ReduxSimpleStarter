import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
	payload: WeatherReducer
});

export default rootReducer;
