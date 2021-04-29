import { fetchSync } from "../helper/fetch";
import { types } from "../types/types";

export const startLoadingFiles = () => {
  return async (dispatch) => {
   
    const body = await fetchSync("/");
    const resp = await body.json();
    const { files } = resp;

    dispatch(loadedFiles(files));
  };
};

const loadedFiles = (files) => ({
  type: types.filesLoading,
  payload: files,
});
