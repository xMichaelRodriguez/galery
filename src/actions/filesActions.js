import { fetchSync } from "../helper/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
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
      endPoint: dir,
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

export const startRenameFile = (newName, oldName, folder) => {
  return async (dispatch) => {
    const routeRename = `${folder}/${oldName}`;

    const params = {
      endPoint: "uploads/rename",
      data: { oldName: folder ? routeRename : oldName, newName },
      method: "PUT",
    };
    const body = await fetchSync(params);
    const resp = await body.json();
    if (body.ok) {
      dispatch(loadingPathFiles(folder));
      dispatch(startLoadingFiles());
    }
  };
};

export const startingNewFolder = (directory) => {
  return async (dispatch) => {
    const params = {
      endPoint: "new",
      data: { directory },
      method: "POST",
    };
    const result = await fetchSync(params);
    const body = await result.json();

    if (body.ok) {
      Swal.fire("Create Directory", body.msg, "success");
      dispatch(startLoadingFiles());
    } else {
      Swal.fire("Create Directory", body.msg, "danger");
    }
  };
};
