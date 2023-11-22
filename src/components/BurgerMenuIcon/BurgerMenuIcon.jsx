import {
  MenuButton,
  MenuCheckbox,
  MenuLabel,
  MenuTextBar,
} from "./BurgerMenuIcon.styled";

const BurgerMenuIcon = ({ handleOpenModal, handleButtonChecked, checked }) => {
  const buttonCheckbox = (e) => {
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
