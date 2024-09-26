import { useState } from "react";
import Modal from "./Modal";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleModalPopup() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }

  return (
    <div className="container">
      <button style={{ fontSize: "2em" }} onClick={handleModalPopup}>
        Open Modal
      </button>
      {showModal && <Modal onClose={onClose} />}
    </div>
  );
}
