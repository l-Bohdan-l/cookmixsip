import { TextField } from "@mui/material";
import { SearchFieldStyled, SectionStyled } from "./Cocktails.styled";

const Cocktails = () => {
  return (
    <SectionStyled>
      <h1>Cocktails</h1>
      <form>
        <label>
          Name:
          <SearchFieldStyled type="text" name="name" />
        </label>
      </form>
    </SectionStyled>
  );
};

export default Cocktails;
