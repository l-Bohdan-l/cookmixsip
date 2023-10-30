import { useState } from "react";
import { createPortal } from "react-dom";

import {
  MenuButton,
  MenuCheckbox,
  MenuLabel,
  MenuTextBar,
  Overlay,
} from "./Modal.styled";
import ModalContent from "./ModalContent";
export const Modal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);

  //     const handleKeyDown = (e) => {
  //     if (e.code === "Escape") {
  //       onClose();
  //     }
  //     return;
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   const handleBackdropClick = (e) => {
  //     if (e.currentTarget === e.target) {
  //       onClose();
  //     }

  //   };
  const handleCloseModal = () => {
    // console.log("handleCloseModal", showModal);
    setShowModal(false);
  };

  const buttonCheckbox = (e) => {
    // console.log("e.target.checked", e.target.checked);
    setChecked(true);
  };

  const overlayClick = (e) => {
    setShowModal(false);
    setChecked(false);
  };
  // console.log("modal", showModal);
  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button> */}
      {/* <Overlay onClick={handleBackdropClick}>
          <div>{children}</div>
        </Overlay> */}

      <MenuButton checked onClick={() => setShowModal(true)}>
        <MenuCheckbox
          type="checkbox"
          id="menu_checkbox"
          onClick={buttonCheckbox}
        />
        <MenuLabel htmlFor="menu_checkbox" id="menu_label" isChecked={checked}>
          <MenuTextBar></MenuTextBar>
        </MenuLabel>
      </MenuButton>
      {showModal &&
        createPortal(
          <Overlay onClick={overlayClick}>
            <ModalContent onClose={handleCloseModal} />
          </Overlay>,
          document.body
        )}
    </>
  );
};
