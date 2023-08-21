import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  FormStyled,
  IngredientWrapper,
  InputStyled,
  LabelStyled,
  MealTypeWrapper,
  Section,
  Title,
} from "./AddRecipe.styled";

const AddRecipe = () => {
  const initialState = {
    name: "",
    description: "",
    url: "",
    ingredients: [
      {
        name: "",
        amount: "",
      },
    ],
  };
  const schema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    url: Yup.string().url(),
    ingredients: Yup.array().of(
      Yup.object({
        ingredientsName: Yup.string(),
        ingredientsAmount: Yup.number(),
      })
    ),
    mealType: Yup.string(),
    alcoholType: Yup.string(),
  });
  const handleSubmit = (values) => {
    // e.preventDefault();
    console.log("submit");
  };

  return (
    <Section>
      <Title>Add Recipe</Title>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
          <LabelStyled htmlFor="name">
            Name
            <InputStyled id="name" type="text" name="name" placeholder="Cake" />
            <ErrorMessage name="name" component="p" />
          </LabelStyled>
          <LabelStyled htmlFor="description">
            Description
            <InputStyled
              id="description"
              type="text"
              name="description"
              placeholder="Add sugar"
            />
            <ErrorMessage name="name" component="p" />
          </LabelStyled>
          <LabelStyled htmlFor="url">
            Url
            <InputStyled
              id="url"
              type="text"
              name="url"
              placeholder="cookmixsip.com"
            />
            <ErrorMessage name="name" component="p" />
          </LabelStyled>
          <IngredientWrapper>
            <LabelStyled htmlFor="ingredients">
              Ingredients
              <InputStyled
                id="ingredients"
                type="text"
                name="ingredientsName"
                placeholder="Sugar"
              />
              <InputStyled
                id="ingredients"
                type="text"
                name="ingredientsAmount"
                placeholder="1 gram"
              />
              <ErrorMessage name="name" component="p" />
            </LabelStyled>
            <button type="button">Add ingredient</button>
          </IngredientWrapper>
          <div>
            <span>Choose recipe type</span>
            <MealTypeWrapper>
              <LabelStyled>
                Meal
                <Field type="radio" name="mealType" value="Meal" />
                <ErrorMessage name="name" component="p" />
              </LabelStyled>
              <LabelStyled>
                Cocktail
                <Field type="radio" name="mealType" value="Cocktail" />
                <ErrorMessage name="name" component="p" />
              </LabelStyled>
            </MealTypeWrapper>
          </div>
          <LabelStyled htmlFor="alcoholType">
            Choose alcohol type
            <Field id="alcoholType" name="alcoholType" as="select">
              <option value="alcohol">Alcohol</option>
              <option value="non-alcohol">Non alcohol</option>
            </Field>
            <ErrorMessage name="name" component="p" />
          </LabelStyled>

          <button type="submit">Submit</button>
        </FormStyled>
      </Formik>
    </Section>
  );
};

export default AddRecipe;
