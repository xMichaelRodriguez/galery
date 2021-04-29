import { types } from "../types/types";

const initialState = {
  Files: [],
};
export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.filesLoading:
      return {
        ...state,
        Files: [...action.payload],
      };

    default:
      return state;
  }
};
