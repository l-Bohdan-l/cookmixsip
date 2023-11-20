import { OverlayStyled } from "./Overlay.styled";

const Overlay = ({ overlayClick, children }) => {
  return <OverlayStyled onClick={overlayClick}>{children}</OverlayStyled>;
};

export default Overlay;
