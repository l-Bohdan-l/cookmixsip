import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import Overlay from "./Overlay";
export const Modal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleButtonChecked = () => {
    setChecked(true);
  };

  const overlayClick = (e) => {
    setShowModal(false);
    setChecked(false);
  };
  return (
    <>
      <BurgerMenuIcon
        handleOpenModal={handleOpenModal}
        handleButtonChecked={handleButtonChecked}
        checked={checked}
      />
      {showModal &&
        createPortal(
          <Overlay overlayClick={overlayClick}>
            <ModalContent onClose={handleCloseModal} />
          </Overlay>,
          document.body
        )}
    </>
  );
};
