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

export const loadingPathFiles = (dir) => {
  return async (dispatch) => {
    const paramsFetch = {
      endPoint: `path/${dir}`,
    };
    const body = await fetchSync(paramsFetch);
    const resp = await body.json();
    if (!resp.ok) {
      console.log(resp.msg);
    }

    const { files } = resp;
    dispatch(loadedPath(files));
  };
};

const loadedPath = (files) => ({
  type: types.filePathLoading,
  payload: files,
});

const loadedFiles = (files) => ({
  type: types.filesLoading,
  payload: files,
});

export const uiActiveImage = (name) => ({
  type: types.uiImageActive,
  payload: name,
});
export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });
