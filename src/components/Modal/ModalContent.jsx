import { useEffect } from "react";
import { ListItem } from "./ModalContent.styled";

const ModalContent = ({ onClose }) => {
  // useEffect(() => {
  //   return onClose();
  // }, [onClose]);

  return (
    <div>
      <ul>
        <ListItem>Home</ListItem>
        <ListItem>Cocktails</ListItem>
        <ListItem>Recipes</ListItem>
      </ul>
    </div>
  );
};

export default ModalContent;
