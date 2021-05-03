import { types } from "../types/types";

const initialState = {
  Files: [],
  dir: [],
  modalOpen: false,
  imageActive: null,
};
export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.filesLoading:
      return {
        ...state,
        Files: [...action.payload],
      };
    case types.filePathLoading:
      return {
        ...state,
        dir: [...action.payload],
      };

    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
        imageActive: null,
      };
    case types.uiImageActive:
      return {
        ...state,
        imageActive: action.payload,
      };

    default:
      return state;
  }
};
