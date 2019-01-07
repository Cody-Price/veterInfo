import { hasErrored, addFavoriteToStore } from '../actions/index'

const handleLocalStorage = (favorite) => {
  return async (dispatch) => {
    try {
      if (localStorage.getItem('favorites')) {
        let newFavorites = localStorage.getItem('favorites')
        console.log(newFavorites)
      } else {
        dispatch(addFavoriteToStore(favorite))
        localStorage.setItem('favorites', JSON.stringify(favorite))
      }
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export default handleLocalStorage