import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../actions/filesActions";

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
export const ModalScreen = ({ file }) => {
  const modalOpen = useSelector((state) => state.modalOpen);
  const imageActive = useSelector((state) => state.imageActive);
  const dispatch = useDispatch();
  console.log(imageActive);
  const closeModal = () => {
    dispatch(uiCloseModal());
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
        <img src={`http://localhost:4000/uploads/frontEnd${imageActive}`} />
      </div>
    </Modal>
  );
};
