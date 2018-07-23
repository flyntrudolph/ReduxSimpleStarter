const API_KEY = '9f87fd2d6437303a66945a75d2917f3a'


export const FETCH_WEATHER = 'FETCH_WEATHER'


export function fetchWeather () {
  return {
    type: FETCH_WEATHER
  };
}
