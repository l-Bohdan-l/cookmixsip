import { Field, ErrorMessage, useField } from "formik";
import { LabelStyled, TextAreaStyled } from "./TextArea.styled";

export const TextArea = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <LabelStyled>
        {label}
        <TextAreaStyled {...field} {...props} />
      </LabelStyled>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
