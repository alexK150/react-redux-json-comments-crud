import {ADD_COMMENT, GET_COMMENTS, SET_LOADING} from "../actions/types";

const initialState = {
  comments: null,
  isLoading: false,
  current: null
}

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isLoading: false
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}