import React, { useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { startingNewFolder, startLoadingFiles } from "../actions/filesActions";
import { FileItem } from "./FileItem";
import { NotFiles } from "./NotFiles";
export const HomeScreen = () => {
  const files = useSelector((state) => state.Files);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingFiles());
  }, [dispatch]);

  const handlerNewDirectory = () => {
    const resp = window.prompt("Name of folder");
    if (resp !== null) {
      dispatch(startingNewFolder(resp.toString()));
    }
  };
  return (
    <>
      <div className="container mt-3 w-75">
        <div className="row">
          {files ? (
            files.map((item, index) => <FileItem file={item} key={index} />)
          ) : (
            <div className="d-flex justify-content-center">
              <NotFiles />
            </div>
          )}
        </div>
        <button
          className="btn   fab font-weight-bold"
          onClick={handlerNewDirectory}
        >
          <BsPlus className="iconStyle" size="4rem" />
        </button>
      </div>
    </>
  );
};
