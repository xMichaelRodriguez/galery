import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { BsArrow90DegLeft } from "react-icons/bs";

import { loadingPathFiles } from "../actions/filesActions";
import { FileItem } from "./FileItem";
import { NotFiles } from "./NotFiles";
import { ModalScreen } from "./ModalScreen";

export const DirScreen = () => {
  const history = useHistory();
  const files = useSelector((state) => state.dir);
  const dispatch = useDispatch();
  const { dir = "" } = useParams();
  useEffect(() => {
    dispatch(loadingPathFiles(dir));
  }, [dispatch, dir]);

  const handleBack = () => {
    history.goBack();
  };
  return (
    <>
      <div className="container mt-3 w-75">
        <div className="row">
          <div className="col-md-12 mb-3">
            <span
              className="badge badge-secondary btn p-2 d-flex justify-content-center mt-auto text-break text-capitalize hover"
              onDoubleClick={handleBack}
            >
              <h4>
                <BsArrow90DegLeft className="iconStyle" size="2rem" />
                <span>Up a directory</span>
              </h4>
            </span>
          </div>
          {files ? (
            files.map((item, index) => <FileItem file={item} key={index} />)
          ) : (
            <div className="d-flex justify-content-center">
              <NotFiles />
            </div>
          )}
        </div>
      </div>
      <ModalScreen />
    </>
  );
};
