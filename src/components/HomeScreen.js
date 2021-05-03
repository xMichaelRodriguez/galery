import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startLoadingFiles } from "../actions/filesActions";
import { FileItem } from "./FileItem";
import { NotFiles } from "./NotFiles";
export const HomeScreen = () => {
  const files = useSelector((state) => state.Files);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingFiles());
  }, [dispatch]);
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
      </div>
     
    </>
  );
};
