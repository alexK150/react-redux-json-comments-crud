import {GET_COMMENTS, SET_LOADING} from "./types";

export const getComments = () => {
  return async (dispatch) => {
    setLoading()

    const result = await fetch(`http://localhost:5000/comments`)
    const data = await result.json()

    dispatch({
      type: GET_COMMENTS,
      payload: data
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}