import { useState } from "react";
import {
  MenuButton,
  MenuCheckbox,
  MenuLabel,
  MenuTextBar,
} from "./BurgerMenuIcon.styled";

const BurgerMenuIcon = ({ handleOpenModal, handleButtonChecked, checked }) => {
  //   const [checked, setChecked] = useState(false);

  const buttonCheckbox = (e) => {
    // console.log("e.target.checked", e.target.checked);
    // setChecked(true);
    handleButtonChecked();
  };

  const handleClick = () => {
    handleOpenModal();
  };

  return (
    <MenuButton checked onClick={handleClick}>
      <MenuCheckbox
        type="checkbox"
        id="menu_checkbox"
        onClick={buttonCheckbox}
      />
      <MenuLabel htmlFor="menu_checkbox" id="menu_label" isChecked={checked}>
        <MenuTextBar></MenuTextBar>
      </MenuLabel>
    </MenuButton>
  );
};
export default BurgerMenuIcon;
