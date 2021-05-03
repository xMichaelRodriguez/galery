import React from "react";
import { useHistory } from "react-router";
import { BsFillImageFill, BsFolderFill } from "react-icons/bs";
import { uiActiveImage, uiOpenModal } from "../actions/filesActions";
import { useDispatch } from "react-redux";
import { ModalScreen } from "./ModalScreen";

export const FileItem = ({ file }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    if (!file.includes(".")) {
      history.push(`/${file}`);
    }
  };

  const handleModal = () => {
    dispatch(uiActiveImage(file));
    dispatch(uiOpenModal());
  };

  return (
    <>
      <div className="col-md-6  mb-3 text-break">
        <span
          className="badge badge-secondary p-2 d-flex justify-content-center mt-auto   hover"
          onClick={handleClick}
          onDoubleClick={handleModal}
        >
          <h5 className="mt-auto font-weight-normal text-break">
            {file.indexOf(".") > 0 ? (
              <BsFillImageFill size="2rem" className="iconStyle" />
            ) : (
              <BsFolderFill size="2rem" className="iconStyle" />
            )}
            &nbsp;&nbsp;&nbsp;
            <span>{file}</span>
          </h5>
        </span>
      </div>
      <ModalScreen file={file} />
    </>
  );
};
