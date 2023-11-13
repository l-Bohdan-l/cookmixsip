import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

import {
  Button,
  Span,
  FormStyled,
  InputStyled,
  LabelStyled,
  Title,
  Section,
  ShowPassBtn,
  PasswordWrapper,
  RedirectWrapper,
  RedirectLink,
} from "./Register.styled";
import { authSignUp } from "../../redux/auth/authOperations";

export const Register = () => {
  const [passwordInputType, setPasswordInputType] = useState("password");

  const initialState = {
    login: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const schema = Yup.object({
    login: Yup.string(),
    email: Yup.string()
      .email("Invalid email")
      .required("This filed is required"),
    password: Yup.string()
      .required("This filed is required")
      .min(6, "Enter at least 6 symbols"),
  });

  const handleSubmit = (values) => {
    dispatch(authSignUp(values));
    // console.log("values", values);
  };

  const changePasswordInputType = () => {
    passwordInputType === "password"
      ? setPasswordInputType("text")
      : setPasswordInputType("password");
  };

  return (
    <Section>
      <Title>Registration</Title>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <FormStyled autoComplete="off">
            <LabelStyled htmlFor="login">
              Name
              <InputStyled
                id="login"
                type="text"
                name="login"
                placeholder="Bohdan"
              />
              <ErrorMessage name="login" component="p" />
            </LabelStyled>
            <LabelStyled htmlFor="email">
              Email
              <InputStyled
                id="email"
                type="email"
                name="email"
                placeholder="some-email@mail.com"
              />
              <ErrorMessage name="email" component="p" />
            </LabelStyled>
            <PasswordWrapper>
              <LabelStyled htmlFor="password">
                Password
                <InputStyled
                  id="password"
                  type={passwordInputType}
                  name="password"
                  placeholder="111111"
                />
                <ErrorMessage name="password" component="p" />
              </LabelStyled>
              <ShowPassBtn onClick={changePasswordInputType} type="button">
                {passwordInputType === "password" ? (
                  <AiFillEyeInvisible color="#ff723e" size={20} />
                ) : (
                  <AiFillEye color="#ff723e" size={20} />
                )}
              </ShowPassBtn>
            </PasswordWrapper>
            <Button type="submit">
              <Span></Span>
              <Span></Span>
              <Span></Span>
              <Span></Span>
              Sign up
            </Button>
            <RedirectWrapper>
              <p>Already have an account ?</p>
              <RedirectLink to="/login">Log in</RedirectLink>
            </RedirectWrapper>
          </FormStyled>
        )}
      </Formik>
    </Section>
  );
};
