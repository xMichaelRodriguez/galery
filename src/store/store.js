import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { imageReducer } from "../reducers/imageReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  imageReducer,
  composeEnhancers(applyMiddleware(thunk))
);
