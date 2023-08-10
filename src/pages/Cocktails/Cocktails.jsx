import { TextField } from "@mui/material";
import { SearchFieldStyled } from "./Cocktails.styled";

const Cocktails = () => {
  return (
    <section>
      <h1>Cocktails</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </form>
    </section>
  );
};

export default Cocktails;
