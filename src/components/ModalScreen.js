import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { startRenameFile, uiCloseModal } from "../actions/filesActions";
import { BsPencilSquare } from "react-icons/bs";
import { useForm } from "../hooks/useForm";
import { useLocation } from "react-router";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export const ModalScreen = () => {
  const location = useLocation();

  const activeImage = useSelector((state) => state.activeImage);
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modalOpen);
  const imageActive = useSelector((state) => state.imageActive);
  const [Error, setError] = useState(false);
  const [formValue, handleInputChange, reset] = useForm({
    newName: "",
  });
  const { newName } = formValue;

  const closeModal = () => {
    dispatch(uiCloseModal());
    setError(false);

    reset();
  };

  const handleRenameFile = () => {
    if (newName.length >= 4) {
      setError(false);
      dispatch(
        startRenameFile(newName, imageActive, location.pathname.split("/")[1])
      );
      closeModal();
      return reset();
    }
    setError(true);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <div className="container">
        <h1 className="text-light">
          {activeImage ? "Rename Image" : "Rename Folder"}
        </h1>
        <hr />
        <form>
          <div className="row mt-2">
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control "
                value={imageActive}
                disabled
                placeholder="old Name File"
              />
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control text-light placeHolder"
                name="newName"
                value={newName}
                onChange={handleInputChange}
                placeholder={`New Name  ${
                  imageActive && imageActive.includes(".") ? "File" : "Folder"
                }`}
              />
            </div>
            <div className="col-md-12 mb-3">
              <button
                className="btn btn-primary btn-block"
                type="button"
                onClick={handleRenameFile}
              >
                <BsPencilSquare /> Renombrar
              </button>
            </div>
            {Error && (
              <div className="alert alert-danger" role="alert">
                assign a name with more than 4 characters
              </div>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};
