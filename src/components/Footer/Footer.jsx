import {
  CopyRight,
  FooterStyled,
  Logo,
  LogoText,
  Wrapper,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <Logo>
          <LogoText>
            Cook<span>Mix</span>Sip
          </LogoText>
        </Logo>
        <CopyRight>Copyright @ 2023 Cookmixsip. All Right Reserved</CopyRight>
      </Wrapper>
    </FooterStyled>
  );
};

export default Footer;
