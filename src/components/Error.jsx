import { LinkStyled, Wrapper } from "./Error.styled";

export const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>Page not found</p>
      <LinkStyled to="/">Go on Main Page</LinkStyled>
    </Wrapper>
  );
};
