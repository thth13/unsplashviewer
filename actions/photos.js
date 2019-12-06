import axios from 'axios';
import config from '../config'

export const loadPhotos = () => dispatch => {
axios.get(config.URL)
    .then(res => {
      dispatch({
        type: 'LOAD_PHOTOS',
        payload: res.data
      });
    })
    .catch(err => console.log(err))
}