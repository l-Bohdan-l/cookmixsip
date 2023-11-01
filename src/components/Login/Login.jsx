import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Button,
  FormStyled,
  InputStyled,
  LabelStyled,
  Span,
  Title,
  Section,
} from "./Login.styled";
import { useDispatch } from "react-redux";
import { authSignIn } from "../../redux/auth/authOperations";

export const Login = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string(),
    email: Yup.string()
      .email("Invalid email")
      .required("This filed is required"),
    password: Yup.string()
      .required("This filed is required")
      .min(6, "Enter at least 6 symbols"),
  });

  const handleSubmit = (values) => {
    dispatch(authSignIn(values));
    console.log("values", values);
  };

  return (
    <Section>
      <Title>Login</Title>
      {/* <form></form> */}
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <FormStyled autoComplete="off">
            {/* <LabelStyled htmlFor="name">
              Name
              <InputStyled
                id="name"
                type="text"
                name="name"
                placeholder="Bohdan"
              />
              <ErrorMessage name="name" component="p" />
            </LabelStyled> */}
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
            <LabelStyled htmlFor="password">
              Password
              <InputStyled
                id="password"
                type="password"
                name="password"
                placeholder="111111"
              />
              <ErrorMessage name="password" component="p" />
            </LabelStyled>
            <Button type="submit">
              <Span></Span>
              <Span></Span>
              <Span></Span>
              <Span></Span>
              Login
            </Button>
          </FormStyled>
        )}
      </Formik>
    </Section>
  );
};
