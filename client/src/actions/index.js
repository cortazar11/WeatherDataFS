import opencage from '../api/opencage';
import darksky from '../api/darksky';
import unsplash from '../api/unsplash';

// Action Creator List Cities
export const fetchPosts = (formValue) => {
  return async (dispatch) => {
    const response = await opencage.get(
      `/geocode/v1/json/?q=${formValue}&key=d7197478c45e4d17bab313057798f3bb`
    );

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

// Action Creator City Term
export const fetchTerm = (selectedPlace) => {
  return {
    type: 'FETCH_TERM',
    payload: selectedPlace,
  };
};

// Action Creator Weather
export const fetchWeather = (selectedPlace) => {
  const lat = selectedPlace ? selectedPlace.lat : null;
  const lng = selectedPlace ? selectedPlace.lng : null;

  return async (dispatch) => {
    const response = await darksky.get(
      `/forecast/2623794cbf06a05c50f681a0869ab7ab/${lat},${lng}`
    );

    dispatch({
      type: 'FETCH_WEATHER',
      payload: response.data,
    });
  };
};

// Action Creator Photos (unsplash)
export const fetchPhotos = (selectedPlace) => {
  console.log('selectedPlace in Photos', selectedPlace.components.city);
  const city = selectedPlace.components.city;
  return async (dispatch) => {
    const response = await unsplash.get(`/search/photos?query=${city}`);
    console.log('response', response);

    dispatch({
      type: 'FETCH_PHOTOS',
      payload: response.data.results,
    });
  };
};
